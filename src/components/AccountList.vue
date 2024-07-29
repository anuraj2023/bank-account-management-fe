<template>
  <div class="overflow-x-auto">
    <table class="min-w-full divide-y divide-gray-200">
      <thead class="bg-gray-50">
        <tr>
          <th v-for="header in headers" :key="header" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            {{ header }}
          </th>
        </tr>
      </thead>
      <tbody class="bg-white divide-y divide-gray-200">
        <tr v-for="account in accounts" :key="account.acc_number">
          <td class="px-6 py-4 whitespace-nowrap">{{ account.acc_name }}</td>
          <td class="px-6 py-4 whitespace-nowrap">{{ account.acc_number }}</td>
          <td class="px-6 py-4 whitespace-nowrap">{{ account.iban }}</td>
          <td class="px-6 py-4 whitespace-nowrap">{{ account.address }}</td>
          <td class="px-6 py-4 whitespace-nowrap">{{ account.amount.toFixed(2) }}</td>
          <td class="px-6 py-4 whitespace-nowrap">
            <span :class="[
              'px-2 inline-flex text-xs leading-5 font-semibold rounded-full',
              account.type === 'sending' ? 'bg-green-100 text-green-800' : 'bg-blue-100 text-blue-800'
            ]">
              {{ account.type }}
            </span>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';
import type { Account } from '../types';

defineProps<{
  accounts: Account[]
}>();

const headers = ['Account Name', 'Account Number', 'IBAN', 'Address', 'Amount', 'Type'];
</script>
