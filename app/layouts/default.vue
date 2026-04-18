<template>
  <div class="min-h-screen bg-slate-950 text-slate-200 selection:bg-primary-500/30 selection:text-primary-200">
    <!-- Subtle background pattern or gradient -->
    <div class="fixed inset-0 -z-10 h-full w-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-5"></div>
    
    <main class="relative z-10 flex-grow py-12">
      <slot />
    </main>
    <AppFooter />
  </div>
</template>

<script setup>
import AppFooter from '~/components/AppFooter.vue'
</script> 