<template>
  <div class="min-h-screen text-gray-100 flex flex-col bg-gradient-to-b from-gray-900 to-gray-800">
    <main class="py-8 flex-grow">
      <slot />
    </main>
    <AppFooter />
  </div>
</template>

<script setup>
import AppFooter from '~/components/AppFooter.vue'
</script> 