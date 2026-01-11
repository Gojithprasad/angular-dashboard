import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from '../sidebar/sidebar';
import { Router } from '@angular/router';

interface StatCard {
  title: string;
  value: string;
  percent: string;
  color: 'blue' | 'green';
}

interface UserRow {
  name: string;
  userId: string;
  phone: string;
  category: string;
  subCategory: string;
  amount: string;
  accountType: string;
  balance: string;
}

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, SidebarComponent],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css'
})
export class DashboardComponent {

  constructor(private router: Router) {}

  /* ===== STATS ===== */
  stats: StatCard[] = [
    { title: 'Total Users', value: '1,567', percent: '2.36%', color: 'blue' },
    { title: 'Savings Account', value: '1,500', percent: '2.36%', color: 'green' },
    { title: 'Current Account', value: '320', percent: '1.15%', color: 'blue' },
    { title: 'Loan Account', value: '210', percent: '0.86%', color: 'green' }
  ];

  /* ===== TABLE ===== */
  initialCount = 5;
  isExpanded = false;

  users: UserRow[] = [
    {
      name: 'John Doe',
      userId: 'USR001',
      phone: '+91 9876543210',
      category: 'Transfer',
      subCategory: 'UPI',
      amount: '$1,200',
      accountType: 'Savings',
      balance: '$24,500'
    },
    {
      name: 'Jane Smith',
      userId: 'USR002',
      phone: '+91 9123456780',
      category: 'Deposit',
      subCategory: 'Cash',
      amount: '$5,000',
      accountType: 'Savings',
      balance: '$40,200'
    },
    {
      name: 'Rahul Kumar',
      userId: 'USR003',
      phone: '+91 9988776655',
      category: 'Withdrawal',
      subCategory: 'ATM',
      amount: '$2,000',
      accountType: 'Current',
      balance: '$18,300'
    },
    {
      name: 'Anjali Menon',
      userId: 'USR004',
      phone: '+91 9090909090',
      category: 'Transfer',
      subCategory: 'NEFT',
      amount: '$7,500',
      accountType: 'Savings',
      balance: '$62,100'
    },
    {
      name: 'Amit Sharma',
      userId: 'USR005',
      phone: '+91 8887766554',
      category: 'Deposit',
      subCategory: 'Cheque',
      amount: '$10,000',
      accountType: 'Savings',
      balance: '$91,800'
    },
    {
      name: 'Priya Nair',
      userId: 'USR006',
      phone: '+91 7776655443',
      category: 'Transfer',
      subCategory: 'IMPS',
      amount: '$3,400',
      accountType: 'Current',
      balance: '$9,600'
    },
    {
      name: 'Suresh Rao',
      userId: 'USR007',
      phone: '+91 6665544332',
      category: 'Withdrawal',
      subCategory: 'Branch',
      amount: '$6,000',
      accountType: 'Savings',
      balance: '$15,900'
    }
  ];

  get displayedUsers(): UserRow[] {
    return this.isExpanded
      ? this.users
      : this.users.slice(0, this.initialCount);
  }

  toggleView(): void {
    this.isExpanded = !this.isExpanded;
  }

  // ✅ LOGOUT → LOGIN REDIRECT
  logout(): void {
    this.router.navigate(['/login'], { replaceUrl: true });
  }
}
