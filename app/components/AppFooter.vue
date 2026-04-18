<template>
  <footer class="border-t border-slate-900 bg-slate-950/50 backdrop-blur-sm py-12 mt-12">
    <div class="container mx-auto px-4">
      <div class="flex flex-col md:flex-row justify-between items-center gap-8">
        <div class="text-center md:text-left">
          <p class="text-xl font-bold text-white mb-2">Chris Ewbank</p>
          <p class="text-slate-400 text-sm">Building software with precision and passion.</p>
        </div>
        
        <div class="flex space-x-6">
          <a href="https://github.com/djpc123" target="_blank" rel="noopener noreferrer" title="GitHub" class="text-slate-400 hover:text-primary-500 transition-colors duration-200">
            <Icon name="simple-icons:github" size="24" />
            <span class="sr-only">GitHub</span>
          </a>
          <a href="https://www.linkedin.com/in/chrisewbank/" target="_blank" rel="noopener noreferrer" title="LinkedIn" class="text-slate-400 hover:text-primary-500 transition-colors duration-200">
            <Icon name="simple-icons:linkedin" size="24" />
            <span class="sr-only">LinkedIn</span>
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer" title="X" class="text-slate-400 hover:text-primary-500 transition-colors duration-200">
            <Icon name="simple-icons:x" size="24" />
            <span class="sr-only">X</span>
          </a>
        </div>
      </div>
      
      <div class="mt-8 pt-8 border-t border-slate-900 text-center text-slate-500 text-xs">
        <p>&copy; {{ new Date().getFullYear() }} Chris Ewbank. Built with Nuxt 3 & Tailwind CSS.</p>
      </div>
    </div>
  </footer>
</template>

<script setup>
// No script needed for this simple footer yet
</script> 