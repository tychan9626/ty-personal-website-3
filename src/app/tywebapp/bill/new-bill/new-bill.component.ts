import { SharedDataService } from './../../../shared-data.service';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { bill_info, bill_item, currency, new_bill_init_data, submit_bill, unit, user, wallet } from '../../../user-data.model';
import { CommonModule } from '@angular/common';
import * as bootstrap from 'bootstrap';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environment/environment';

@Component({
  selector: 'app-new-bill',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './new-bill.component.html',
  styleUrl: './new-bill.component.css'
})
export class NewBillComponent {
  @ViewChild('previewModal') previewModal!: ElementRef;

  //Bill init data - START
  all_users: user[] = [];
  all_currencies: currency[] = [];
  all_wallets: wallet[] = [];
  all_units: unit[] = [];
  all_bill_address_en: string[] = [];
  all_bill_address_zh: string[] = [];
  all_bill_organization_en: string[] = [];
  all_bill_organization_zh: string[] = [];
  all_bill_action: string[] = [];
  all_bill_item_name_en: string[] = [];
  all_bill_item_name_zh: string[] = [];
  //Bill init data - END


  //Private variables - START
  private apiUrl = environment.apiUrl;
  private loginUser: user = JSON.parse(localStorage.getItem('user') || '{}');
  //Private variables - END


  //Public variables - START
  filtered_bill_users: user[] = [];
  filtered_paid_wallets: wallet[] = [];
  response_message: string = '';
  is_currency_matched: boolean = false;

  is_input_organization_zh: boolean = false;
  organization_zh_visible_button_text: string = 'Add Organization (Chinese)';
  is_input_address: boolean = true;
  address_visible_button_text: string = 'Add Address';
  is_input_remarks: boolean = false;
  remarks_visible_button_text: string = 'Add Remarks';

  add_bill_items_qty: number = 0;
  //Public variables - END


  //Bill info - START
  bill: bill_info = {
    bill_user: null,
    address_en: '',
    address_zh: '',
    organization_en: '',
    organization_zh: '',
    action: '',
    date_time: '',
    bill_currency: null,
    bill_subtotal: 0,
    bill_tax: 0,
    bill_tips: 0,
    bill_payer: null,
    paid_wallet: null,
    paid_amount: 0,
    remarks: '',
  };

  // Bill items - START
  bill_items: bill_item[] = [];
  // Bill items - END

  constructor(
    private router: Router,
    private http: HttpClient,
    private sharedDataService: SharedDataService
  ) { }

  ngOnInit() {
    this.sharedDataService.tyNewBillInitDataSource$.subscribe({
      next: (data: new_bill_init_data) => {
        if (data) {
          this.bUpdateNewBillInitData(data);
          if (this.loginUser.role === 999) {
            this.filtered_bill_users = this.all_users;
          } else {
            this.filtered_bill_users = [this.loginUser];
          }

          this.bill.bill_user = this.loginUser;
          this.bill.bill_payer = this.bill.bill_user;
          this.bill.bill_currency = this.all_currencies[0];
          this.updateBillPayerAndClearWallet(this.bill.bill_payer!.id);


          //console.log("all_bill_action:", JSON.stringify(this.all_bill_action))
        } else {
          console.log('No data available in sharedDataService');
        }
      },
      error: (error) => {
        console.error('Error fetching log data:', error);
      },
    });
  }

  goBack(): void {
    this.router.navigate(['tywebapp/menu']);
  }
  bUpdateNewBillInitData(data: new_bill_init_data | null): boolean {
    const defaultValues = {
      all_users: [],
      all_currencies: [],
      all_wallets: [],
      all_units: [],
      all_bill_address_en: [],
      all_bill_address_zh: [],
      all_bill_organization_en: [],
      all_bill_organization_zh: [],
      all_bill_action: [],
      all_bill_item_name_en: [],
      all_bill_item_name_zh: [],
    };

    const effectiveData = data ?? defaultValues;

    Object.assign(this, effectiveData);

    return true;
  }


  updateBillPayerAndClearWallet(userId: string): void {
    this.bill.bill_payer = this.all_users.find(user => user.id === userId) || null;
    this.filtered_paid_wallets = this.all_wallets.filter(wallet => wallet.user_id === userId);
    this.bill.paid_wallet = null;
  }

  addNewBillItem() {
    const new_item: bill_item = {
      name_en: '',
      name_zh: null,
      amount: null,
      unit: null,
      qty: null,
      description: null,
      price: null,
      tax: null,
      on_sale: false,
      private: false
    };
    this.bill_items.push(new_item);
  }

  removeBillItem(index: number) {
    this.bill_items.splice(index, 1);
  }

  selectCurrency(currency: currency): void {
    this.bill.bill_currency = currency;
    this.checkBillWalletCurrencyAndUpdatePaidAmount();
  }

  checkBillWalletCurrencyAndUpdatePaidAmount(): void {
    this.is_currency_matched = this.checkCurrencyMatched();
    if (this.is_currency_matched) {
      this.calculatePaidAmount();
    } else {
      this.bill.paid_amount = null;
    }
  }

  calculatePaidAmount(): void {
    const amount: number = (this.bill.bill_subtotal ?? 0) +
      (this.bill.bill_tax ?? 0) +
      (this.bill.bill_tips ?? 0);
    this.bill.paid_amount = parseFloat(amount.toFixed(2));
  }

  checkCurrencyMatched(): boolean {
    if (!this.bill.bill_currency || !this.bill.paid_wallet) {
      return false;
    } else {
      return this.bill.bill_currency.id === this.bill.paid_wallet.currency_id;
    }
  }

  onBillPayerSelect(event: Event): void {
    const selectElement = event.target as HTMLSelectElement;
    const userId = selectElement.value;
    this.updateBillPayerAndClearWallet(userId);
  }

  onWalletSelect(event: Event): void {
    const selectElement = event.target as HTMLSelectElement;
    const walletId = selectElement.value;
    this.bill.paid_wallet = this.all_wallets.find(wallet => wallet.id === walletId) || null;
    this.checkBillWalletCurrencyAndUpdatePaidAmount();
  }

  onUnitSelect(event: Event, index: number): void {
    const selectedUnitId = (event.target as HTMLSelectElement).value;
    const selectedUnit = this.all_units.find(unit => unit.id === selectedUnitId) || null;
    if (selectedUnit) {
      this.bill_items[index].unit = selectedUnit;
    }
  }

  calculateBillItemTax(index: number, taxRate: number): void {
    if (this.bill_items[index].price) {
      this.bill_items[index].tax = this.calculatePercentage(this.bill_items[index].price, taxRate);
    }
  }

  calculateBillTax(taxRate: number): void {
    this.bill.bill_tax = this.calculatePercentage(this.bill.bill_subtotal ?? 0, taxRate);
  }

  calculateBillTips(taxRate: number): void {
    this.bill.bill_tips = this.calculatePercentage((this.bill.bill_subtotal ?? 0) + (this.bill.bill_tax ?? 0), taxRate);
  }

  calculatePercentage(price: number, percentage: number): number {
    const amount = price * percentage / 100;
    return parseFloat(amount.toFixed(2));
  }

  showPreview(): void {
    const previewModal = document.getElementById('previewModal');
    if (previewModal) {
      const modalInstance = new bootstrap.Modal(previewModal);
      modalInstance.show();
    }
  }

  initializeForm() {
    this.bUpdateNewBillInitData(null);
  }

  submitData(): void {
    const localDateTime = new Date(this.bill.date_time ?? ''); // Local time as Date object
    const utcDateTime = new Date(localDateTime.toISOString()); // Convert to UTC

    const payload: submit_bill = {
      bill_user_id: this.bill.bill_user?.id || '',
      address_en: this.bill.address_en,
      address_zh: this.bill.address_zh,
      organization_en: this.bill.organization_en,
      organization_zh: this.bill.organization_zh,
      action: this.bill.action,
      date_time: utcDateTime.toISOString(),
      bill_currency_id: this.bill.bill_currency?.id || '',
      bill_subtotal: this.bill.bill_subtotal,
      bill_tax: this.bill.bill_tax,
      bill_tips: this.bill.bill_tips,
      bill_payer_id: this.bill.bill_payer?.id || '',
      paid_wallet_id: this.bill.paid_wallet?.id || '',
      paid_amount: this.bill.paid_amount,
      remarks: this.bill.remarks,
      bill_items: this.bill_items.map((item) => ({
        name_en: item.name_en.toUpperCase(),
        name_zh: item.name_zh,
        amount: item.amount,
        unit_id: item.unit?.id || '',
        qty: item.qty,
        description: item.description,
        price: item.price,
        tax: item.tax,
        on_sale: item.on_sale,
        private: item.private
      })
      ),
    };

    this.http.post(`${this.apiUrl}/tywebapp/bill/submitNewBill`, payload).subscribe({
      next: (response) => {
        this.response_message = 'Bill created successfully!';
        this.initializeForm();
        const modalInstance = bootstrap.Modal.getInstance(this.previewModal.nativeElement);
        modalInstance!.hide();
      },
      error: (error) => {
        this.response_message = `Error: ${error.status} - ${error.message}`;
      },
    });
    //console.log(JSON.stringify(payload));
  }

  onBillUserSelect(event: Event): void {
    const selectElement = event.target as HTMLSelectElement;
    const userId = selectElement.value;
    this.bill.bill_user = this.all_users.find(user => user.id === userId) || null;
  }

  onBillCurrencySelect(event: Event): void {
    const selectElement = event.target as HTMLSelectElement;
    const currencyId = selectElement.value;
    this.bill.bill_currency = this.all_currencies.find(currency => currency.id === currencyId) || null;
  }

  changeOrganizationZhVisible() {
    if (this.is_input_organization_zh) {
      this.is_input_organization_zh = false;
      this.bill.organization_zh = '';
      this.organization_zh_visible_button_text = 'Add Organization (Chinese)';
    } else {
      this.is_input_organization_zh = true;
      this.organization_zh_visible_button_text = 'Remove Organization (Chinese)';
    }
  }

  changeAddressVisible() {
    if (this.is_input_address) {
      this.is_input_address = false;
      this.bill.address_en = '';
      this.bill.address_zh = '';
      this.address_visible_button_text = 'Add Address';
    } else {
      this.is_input_address = true;
      this.address_visible_button_text = 'Remove Address';
    }
  }

  changeRemarksVisible() {
    if (this.is_input_remarks) {
      this.is_input_remarks = false;
      this.bill.remarks = '';
      this.remarks_visible_button_text = 'Add Remarks';
    } else {
      this.is_input_remarks = true;
      this.remarks_visible_button_text = 'Remove Remarks';
    }
  }

  addBillItemsColumnByNumber() {
    for (let i = 0; i < this.add_bill_items_qty; i++) {
      this.addNewBillItem();
    }
    this.add_bill_items_qty = 0;
  }

  addBillItemsOnSale() {
    for (let i = 0; i < this.bill_items.length; i++) {
      this.bill_items[i].on_sale = true;
    }
  }
}
