<template>
  <div class="min-h-screen bg-gray-100">
    <header class="bg-white shadow">
      <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 flex items-center">
        <img src="./assets/bank-logo.svg" alt="Bank Logo" class="h-8 w-auto mr-4">
        <h1 class="text-3xl font-bold text-gray-900">Bank Account Application</h1>
      </div>
    </header>

    <main>
      <RouterView />
    </main>
  </div>
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router';
</script>