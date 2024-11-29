import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-bill',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-bill.component.html',
  styleUrl: './new-bill.component.css'
})
export class NewBillComponent {
  bill = {
    user_id: '',
    bill_currency_id: '',
    bill_subtotal: 0,
    bill_tax: 0,
    bill_tip: 0,
    paid_wallet_id: '',
    paid_amount: 0,
    title: '',
  };

  billItem = {
    bill_id: '',
    name_en: '',
    name_zh: '',
    amount: 0,
    unit: '',
    description: '',
    tax: 0,
  };

  constructor(private router: Router) { }

  async submitBill() {
    // try {
    //   const newBill = await this.supabaseService.addBill(this.bill);
    //   alert('Bill added successfully: ' + JSON.stringify(newBill));
    // } catch (error) {
    //   alert('Error adding bill: ' + error.message);
    // }
  }

  async submitBillItem() {
    // try {
    //   const newBillItem = await this.supabaseService.addBillItem(this.billItem);
    //   alert('Bill Item added successfully: ' + JSON.stringify(newBillItem));
    // } catch (error) {
    //   alert('Error adding bill item: ' + error.message);
    // }
  }


  goBack(): void {
    this.router.navigate(['tywebapp/menu']);
  }
}
