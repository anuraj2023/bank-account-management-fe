<template>
  <div v-if="show" class="fixed z-10 inset-0 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
    <div class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0" @click.self="closeModal">
      <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true"></div>
      <span class="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
      <div class="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
        <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
          <div class="flex justify-between items-center">
            <h3 class="text-lg leading-6 font-medium text-gray-900" id="modal-title">Add New Account</h3>
            <button @click="closeModal" class="text-gray-400 hover:text-gray-600 focus:outline-none">
              <span class="sr-only">Close</span>
              <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <form @submit.prevent="handleSubmit" class="mt-4">
            <div class="mb-4">
              <label for="acc_name" class="block text-sm font-medium text-gray-700">Account Name</label>
              <input v-model="form.acc_name" id="acc_name" type="text" required class="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500">
            </div>
            <div class="mb-4">
              <label for="acc_number" class="block text-sm font-medium text-gray-700">Account Number</label>
              <input v-model="form.acc_number" id="acc_number" type="text" required class="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500">
            </div>
            <div class="mb-4">
              <label for="iban" class="block text-sm font-medium text-gray-700">IBAN</label>
              <input v-model="form.iban" id="iban" type="text" required class="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500">
            </div>
            <div class="mb-4">
              <label for="address" class="block text-sm font-medium text-gray-700">Address</label>
              <input v-model="form.address" id="address" type="text" required class="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500">
            </div>
            <div class="mb-4">
              <label for="amount" class="block text-sm font-medium text-gray-700">Amount</label>
              <input v-model.number="form.amount" id="amount" type="number" step="0.01" required class="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500">
            </div>
            <div class="mb-4">
              <label for="type" class="block text-sm font-medium text-gray-700">Type</label>
              <select v-model="form.type" id="type" required class="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500">
                <option value="sending">Sending</option>
                <option value="receiving">Receiving</option>
              </select>
            </div>
            <div class="mt-5 sm:mt-6">
              <button type="submit" class="inline-flex justify-center w-full rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:text-sm">
                Add Account
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue';
import { useAccountStore } from '../stores/accountStore';
import { useToast } from '../composables/useToast';
import { Account } from '../types';

// Define props with the 'show' property
const props = defineProps<{
  show: boolean;
}>();

const emit = defineEmits(['close', 'account-added']);

const accountStore = useAccountStore();
const { showToast } = useToast();

const form: Account = reactive({
  acc_name: '',
  acc_number: '',
  iban: '',
  address: '',
  amount: 0,
  type: 'sending',
});

const handleSubmit = async () => {
  try {
    await accountStore.addAccount(form);
    emit('account-added');
    closeModal();
    showToast('Account added successfully!', 'success');
  } catch (error) {
    showToast('Failed to add account.', 'error');
  }
};

const closeModal = () => {
  emit('close');
};
</script>
