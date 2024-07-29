import type { Account } from './types';
import axios from 'axios';

const API_URL = (import.meta as any).env.VITE_API_BASE_URL;

const api = axios.create({
  baseURL: API_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
    "Access-Control-Allow-Origin":"*"
  }
});


export async function fetchAccounts(): Promise<Account[]> {
  try {
    const response = await api.get('/accounts');
    console.log("Response is : ", response)
    if (response.status !== 200) {
      throw new Error('Failed to fetch accounts');
    }
    return response.data.map((account: Account) => ({
      ...account,
      id: account.acc_number
    }));
  } catch (error) {
    console.error('Error fetching accounts:', error);
    throw error;
  }
}

export async function addAccount(account: Omit<Account, 'id'>): Promise<void> {
  console.log("account is : ", account)
  try {
    await api.post('/accounts', account);
  } catch (error) {
    console.error('Error adding account:', error);
    throw error;
  }
}