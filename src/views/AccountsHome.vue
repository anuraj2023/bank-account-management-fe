<template>
  <div class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
    <div class="px-4 py-6 sm:px-0">
      <div class="mb-4 flex justify-between items-center">
        <h1 class="text-2xl font-semibold text-gray-900">Bank Accounts</h1>
        <button @click="openModal" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Add New Account
        </button>
      </div>
      <AccountList :accounts="accountStore.accounts" />
    </div>
  </div>
  <AddAccountModal :show="showModal" @close="closeModal" @account-added="refreshAccounts" />
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import AddAccountModal from '../components/AddAccountModal.vue';
import AccountList from '../components/AccountList.vue';
import { useAccountStore } from '../stores/accountStore';
import { useToast } from '../composables/useToast';

const accountStore = useAccountStore();
const { showToast } = useToast();

const showModal = ref(false);

const openModal = () => {
  showModal.value = true;
};

const closeModal = () => {
  showModal.value = false;
};

const refreshAccounts = async () => {
  try {
    await accountStore.fetchAccounts();
    showToast('Account added successfully!', 'success');
  } catch (error) {
    showToast('Failed to fetch accounts.', 'error');
  }
};

onMounted(async () => {
  await refreshAccounts();
});
</script>
