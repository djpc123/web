<template>
  <footer class="bg-gray-800 text-gray-400 py-6 mt-12">
    <div class="container mx-auto px-4 text-center">
      <div class="flex justify-center space-x-6 mb-4">
        <a href="https://github.com/djpc123" target="_blank" rel="noopener noreferrer" title="GitHub" class="hover:text-orange-500 transition-colors duration-200">
          <Icon name="simple-icons:github" size="24" />
          <span class="sr-only">GitHub</span>
        </a>
        <a href="https://www.linkedin.com/in/chrisewbank/" target="_blank" rel="noopener noreferrer" title="LinkedIn" class="hover:text-orange-500 transition-colors duration-200">
          <Icon name="simple-icons:linkedin" size="24" />
           <span class="sr-only">LinkedIn</span>
        </a>
        <a href="#" target="_blank" rel="noopener noreferrer" title="X" class="hover:text-orange-500 transition-colors duration-200">
           <Icon name="simple-icons:x" size="24" />
           <span class="sr-only">X</span>
        </a>
      </div>
      <p class="text-sm">
        &copy; {{ new Date().getFullYear() }} Chris Ewbank. All rights reserved.
      </p>
    </div>
  </footer>
</template>

<script setup>
// No script needed for this simple footer yet
</script> 