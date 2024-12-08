import { SharedDataService } from './../../../shared-data.service';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { currency, unit, user, wallet } from '../../../user-data.model';
import { CommonModule } from '@angular/common';
import * as bootstrap from 'bootstrap';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environment/environment';

interface BillItem {
  name_en: string;
  name_zh: string;
  amount: number | null;
  unit: unit | null;
  description: string;
  price: number | null;
  tax: number | null;
  on_sale: boolean;
}
@Component({
  selector: 'app-new-bill',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './new-bill.component.html',
  styleUrl: './new-bill.component.css'
})
export class NewBillComponent {
  @ViewChild('previewModal') previewModal!: ElementRef;
  private apiUrl = environment.apiUrl;

  responseMessage: string = '';

  users!: user[];
  currencies!: currency[];
  wallets!: wallet[];
  units!: unit[];
  billTitles: string[] = [];
  billItemsTitleEn: string[] = [];
  billItemsTitleZh: string[] = [];

  filteredPaidWallets: wallet[] = [];
  isCurrencyMatched: boolean = false;

  //Bill details:
  billUser!: user;
  billTitle: string | null = null;
  billDateTime: string | null = null; // User's local date-time as string
  timeZone: string = Intl.DateTimeFormat().resolvedOptions().timeZone;
  billCurrency!: currency;
  billSubtotal: number = 0;
  billTax: number = 0;
  billTips: number = 0;
  billPayer: user | null = null;
  paidWallet: wallet | null = null;
  billPaidAmount: number | null = null;

  billItems: BillItem[] = [];

  constructor(private router: Router, private http: HttpClient, private sharedDataService: SharedDataService) { }

  ngOnInit() {

    this.billUser = JSON.parse(localStorage.getItem('user') || '{}');

    this.sharedDataService.tyNewBillInitDataSource$.subscribe({
      next: (data) => {
        if (data) {
          this.users = data.users;
          this.currencies = data.currencies;
          this.billCurrency = this.currencies[0];
          this.wallets = data.wallets;
          this.units = data.units;
          this.billTitles = data.billTitles;
          this.billItemsTitleEn = data.billItemsTitleEn;
          this.billItemsTitleZh = data.billItemsTitleZh;

          this.billPayer = this.billUser;
          this.updateBillPayerAndClearWallet(this.billUser.id);

          this.addNewItem();

          //console.log(JSON.stringify(this.currencies));
        } else {
          console.log('No data available in sharedDataService');
        }
      },
      error: (error) => {
        console.error('Error fetching log data:', error);
      },
    });
  }
  selectCurrency(currency: currency): void {
    this.billCurrency = currency;
    this.isCurrencyMatched = this.checkCurrencyMatched();
    this.checkCurrencyWalletPaidAmount();
  }

  goBack(): void {
    this.router.navigate(['tywebapp/menu']);
  }

  onBillPayerSelect(event: Event): void {
    const selectElement = event.target as HTMLSelectElement; // 类型断言
    const userId = selectElement.value;

    this.updateBillPayerAndClearWallet(userId);
  }

  updateBillPayerAndClearWallet(userId: string): void {
    this.billPayer = this.users.find(user => user.id === userId) || null;

    this.filteredPaidWallets = this.wallets.filter(wallet => wallet.user_id === userId);
    this.paidWallet = null;

    this.testBillPayerWallet('updateBillPayerAndClearWallet');
  }

  onWalletSelect(event: Event): void {
    const selectElement = event.target as HTMLSelectElement; // 类型断言
    const walletId = selectElement.value;

    this.paidWallet = this.wallets.find(wallet => wallet.tb_tyapp_wlt_id === walletId) || null;
    this.testBillPayerWallet('onWalletSelect');
    this.isCurrencyMatched = this.checkCurrencyMatched();

    this.checkCurrencyWalletPaidAmount();
  }

  testBillPayerWallet(funcName: string): void {
    console.log("Executing function: " + funcName + "() \n"
      + "billPayer: " + JSON.stringify(this.billPayer) + '\n'
      + "paidWallet: " + JSON.stringify(this.paidWallet)
    );
  }

  addNewItem() {
    const newItem: BillItem = {
      name_en: '',
      name_zh: '',
      amount: null,
      unit: null,
      description: '',
      price: null,
      tax: null,
      on_sale: false
    };
    this.billItems.push(newItem);
  }

  removeItem(index: number) {
    this.billItems.splice(index, 1);
  }

  onUnitSelect(event: Event, index: number): void {
    const selectedUnitId = (event.target as HTMLSelectElement).value;
    const selectedUnit = this.units.find(unit => unit.tb_tyapp_unt_id === selectedUnitId) || null;

    if (selectedUnit) {
      this.billItems[index].unit = selectedUnit;
    }

    console.log('Updated Bill Item:', this.billItems[index]);
  }

  calculateBillItemTax(index: number, taxRate: number): void {
    if (this.billItems[index].price) {
      this.billItems[index].tax = this.calculateTax(this.billItems[index].price, taxRate);
    }
  }

  calculateBillTax(taxRate: number): void {
    this.billTax = this.calculateTax(this.billSubtotal, taxRate);
  }

  calculateTax(price: number, taxRate: number): number {
    const taxAmount = price * taxRate / 100;
    return parseFloat(taxAmount.toFixed(2));
  }

  showPreview(): void {
    const previewModal = document.getElementById('previewModal');
    if (previewModal) {
      const modalInstance = new bootstrap.Modal(previewModal);
      modalInstance.show();
    }
  }

  initializeForm() {
    this.billTitle = null;
    this.billCurrency = this.currencies[0];
    this.billSubtotal = 0;
    this.billTax = 0;
    this.billTips = 0;
    this.paidWallet = null;
    this.billPaidAmount = null;
    this.billItems = [];
  }

  submitData(): void {
    const localDateTime = new Date(this.billDateTime!); // Local time as Date object
    const utcDateTime = new Date(localDateTime.toISOString()); // Convert to UTC

    const payload = {
      user_id: this.billUser.id,
      bill_currency_id: this.billCurrency.tb_tyapp_crny_id,
      bill_subtotal: this.billSubtotal,
      bill_tax: this.billTax,
      bill_tip: this.billTips,
      paid_wallet_id: this.paidWallet?.tb_tyapp_wlt_id,
      paid_amount: this.billPaidAmount,
      title: this.billTitle,
      bill_datetime: utcDateTime,
      billItems: this.billItems.map((item) => ({
        name_en: item.name_en,
        name_zh: item.name_zh,
        amount: item.amount,
        unit_id: item.unit?.tb_tyapp_unt_id,
        description: item.description,
        price: item.price,
        tax: item.tax,
      })),
    };

    this.http.post(`${this.apiUrl}/tywebapp/bill/submitNewBill`, payload).subscribe({
      next: (response) => {
        this.responseMessage = 'Bill created successfully!';
        this.initializeForm();
        const modalInstance = bootstrap.Modal.getInstance(this.previewModal.nativeElement);
        modalInstance!.hide();
      },
      error: (error) => {
        this.responseMessage = 'Failed to create bill.';
      },
    });
  }

  calculatePaidAmount(): void {
    this.billPaidAmount = this.billSubtotal + this.billTax + this.billTips;
  }

  checkCurrencyMatched(): boolean {
    if (!this.billCurrency || !this.paidWallet) {
      return false;
    } else {
      return this.billCurrency.tb_tyapp_crny_id === this.paidWallet.currency_id;
    }
  }

  checkCurrencyWalletPaidAmount(): void {
    if (this.checkCurrencyMatched()) {
      this.billPaidAmount = this.billSubtotal + this.billTax + this.billTips;
    } else {
      this.billPaidAmount = null;
    }
  }
}
