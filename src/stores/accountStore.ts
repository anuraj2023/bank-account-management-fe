
import { defineStore } from 'pinia';
import type { Account } from '../types';
import { fetchAccounts, addAccount } from '../api';

export const useAccountStore = defineStore('accountStore', {
  state: () => ({
    accounts: [] as Account[],
  }),
  actions: {
    async fetchAccounts() {
      try {
        const data = await fetchAccounts();
        this.accounts = data;
        return data
      } catch (error) {
        console.log("error occured in fetching accounts : ", error)
      }
    },
  async  addAccount(account: Account) {
      await addAccount(account);
        await this.fetchAccounts();
    },
  },
});