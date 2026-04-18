<template>
  <div class="container mx-auto px-4 max-w-5xl">
    <!-- Hero Section -->
    <section class="flex flex-col md:flex-row items-center justify-between py-16 gap-12">
      <div class="flex-1 text-center md:text-left">
        <h1 class="text-5xl md:text-7xl font-extrabold tracking-tight mb-4">
          Hi, I'm <span class="text-primary-500">Chris Ewbank</span>
        </h1>
        <p class="text-xl md:text-2xl text-slate-400 mb-8 font-mono">
          Engineering Leader & Software Architect
        </p>
        <div class="flex flex-wrap justify-center md:justify-start gap-4">
          <a href="https://github.com/djpc123" target="_blank" class="px-6 py-3 bg-primary-600 hover:bg-primary-500 text-white rounded-full font-semibold transition-all shadow-lg shadow-primary-600/20">
            View GitHub
          </a>
          <a href="https://www.linkedin.com/in/chrisewbank/" target="_blank" class="px-6 py-3 border border-slate-700 hover:border-primary-500/50 hover:bg-primary-500/5 rounded-full font-semibold transition-all">
            LinkedIn Profile
          </a>
        </div>
      </div>
      <div class="relative group">
        <div class="absolute -inset-1 bg-gradient-to-r from-primary-600 to-orange-400 rounded-full blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
        <img 
          src="/images/chris-ewbank-headshot.jpg" 
          alt="Chris Ewbank headshot" 
          class="relative w-48 h-48 md:w-64 md:h-64 rounded-full object-cover border-4 border-slate-800 shadow-2xl"
        />
      </div>
    </section>

    <!-- About Section -->
    <section class="py-16 border-t border-slate-900">
      <div class="grid md:grid-cols-3 gap-12">
        <div class="md:col-span-2">
          <h2 class="text-3xl font-bold mb-6 flex items-center gap-2">
            <span class="w-8 h-1 bg-primary-500 rounded-full"></span>
            Professional Profile
          </h2>
          <div class="space-y-4 text-slate-300 text-lg leading-relaxed">
            <p>
              I am an experienced Engineering Leader and Software Engineer currently at <span class="text-white font-medium">FactSet</span>, where I lead initiatives in financial analytics and reporting. I specialize in building scalable web systems and driving technical strategy for high-performance software.
            </p>
            <p>
              My background includes architecting complex <span class="text-white font-medium">Business Process Management</span> systems and exploring the cutting edge of autonomous technology, such as my research into <span class="text-white font-medium">autonomous drone formations</span>.
            </p>
            <p>
              Beyond the terminal, I hold a <span class="text-primary-400">Private Pilot's License</span>, which reflects the same discipline and precision I bring to software engineering.
            </p>
          </div>
        </div>
        <div class="bg-slate-900/50 p-8 rounded-2xl border border-slate-800">
          <h3 class="text-xl font-bold mb-4 text-primary-400">Core Expertise</h3>
          <ul class="space-y-3 font-mono text-sm">
            <li class="flex items-center gap-2">
              <span class="text-primary-500">▹</span> Engineering Leadership
            </li>
            <li class="flex items-center gap-2">
              <span class="text-primary-500">▹</span> System Architecture
            </li>
            <li class="flex items-center gap-2">
              <span class="text-primary-500">▹</span> Financial Analytics
            </li>
            <li class="flex items-center gap-2">
              <span class="text-primary-500">▹</span> Cloud Infrastructure
            </li>
            <li class="flex items-center gap-2">
              <span class="text-primary-500">▹</span> Process Automation
            </li>
          </ul>
        </div>
      </div>
    </section>

    <!-- Experience / Featured Work -->
    <section class="py-16 border-t border-slate-900">
      <h2 class="text-3xl font-bold mb-10 flex items-center gap-2">
        <span class="w-8 h-1 bg-primary-500 rounded-full"></span>
        Experience & Projects
      </h2>
      <div class="space-y-8">
        <!-- FactSet -->
        <div class="group relative p-8 bg-slate-900/20 rounded-2xl border border-slate-800/50 hover:border-primary-500/30 transition-all">
          <div class="flex flex-col md:flex-row justify-between mb-4">
            <div>
              <h3 class="text-2xl font-bold text-white">FactSet</h3>
              <p class="text-primary-400 font-mono">Software Engineer & Engineering Leader</p>
            </div>
            <p class="text-slate-500 font-mono text-sm">Present</p>
          </div>
          <p class="text-slate-400 leading-relaxed mb-4">
            Leading engineering initiatives within the financial analytics space. Driving technical strategy, mentoring engineers, and overseeing the development of high-performance software solutions.
          </p>
          <div class="flex flex-wrap gap-2">
            <span class="px-3 py-1 bg-slate-950 text-slate-400 text-xs rounded-full border border-slate-800">C#</span>
            <span class="px-3 py-1 bg-slate-950 text-slate-400 text-xs rounded-full border border-slate-800">Financial Data</span>
            <span class="px-3 py-1 bg-slate-950 text-slate-400 text-xs rounded-full border border-slate-800">Web Infrastructure</span>
          </div>
        </div>

        <!-- BPM Project -->
        <div class="group relative p-8 bg-slate-900/20 rounded-2xl border border-slate-800/50 hover:border-primary-500/30 transition-all">
          <div class="flex flex-col md:flex-row justify-between mb-4">
            <div>
              <h3 class="text-2xl font-bold text-white">Business Process Management System</h3>
              <p class="text-primary-400 font-mono">Project Lead</p>
            </div>
          </div>
          <p class="text-slate-400 leading-relaxed mb-4">
            Architected and developed a Java-based web system to replace fragmented, Excel-based legacy processes. Successfully migrated complex business workflows, significantly improving operational efficiency.
          </p>
          <div class="flex flex-wrap gap-2">
            <span class="px-3 py-1 bg-slate-950 text-slate-400 text-xs rounded-full border border-slate-800">Java</span>
            <span class="px-3 py-1 bg-slate-950 text-slate-400 text-xs rounded-full border border-slate-800">Vaadin</span>
            <span class="px-3 py-1 bg-slate-950 text-slate-400 text-xs rounded-full border border-slate-800">Legacy Migration</span>
          </div>
        </div>

        <!-- Drone Project -->
        <div class="group relative p-8 bg-slate-900/20 rounded-2xl border border-slate-800/50 hover:border-primary-500/30 transition-all">
          <div class="flex flex-col md:flex-row justify-between mb-4">
            <div>
              <h3 class="text-2xl font-bold text-white">Autonomous Drone Formations</h3>
              <p class="text-primary-400 font-mono">Research Project</p>
            </div>
          </div>
          <p class="text-slate-400 leading-relaxed mb-4">
            Developed a system for autonomous drone formations using real-time tag detection. Implemented Line and V-shape algorithms for three quadcopters, demonstrating expertise in complex hardware-software integration.
          </p>
          <div class="flex flex-wrap gap-2">
            <span class="px-3 py-1 bg-slate-950 text-slate-400 text-xs rounded-full border border-slate-800">Autonomous Systems</span>
            <span class="px-3 py-1 bg-slate-950 text-slate-400 text-xs rounded-full border border-slate-800">Tag Detection</span>
            <span class="px-3 py-1 bg-slate-950 text-slate-400 text-xs rounded-full border border-slate-800">Real-time Algorithms</span>
          </div>
        </div>
      </div>
    </section>

    <!-- Tech Stack Grid -->
    <section class="py-16 border-t border-slate-900">
      <h2 class="text-3xl font-bold mb-10 text-center">Tech Stack</h2>
      <div class="flex flex-wrap justify-center gap-4">
        <span v-for="tech in ['Java', 'C#', 'Python', 'Vue.js', 'Nuxt', 'TypeScript', 'Vaadin', 'AWS', 'Azure', 'Docker', 'Kubernetes', 'PostgreSQL', 'Linux']" 
              :key="tech"
              class="px-4 py-2 bg-slate-900 border border-slate-800 rounded-lg text-slate-300 hover:border-primary-500/50 hover:text-primary-400 transition-all cursor-default"
        >
          {{ tech }}
        </span>
      </div>
    </section>

    <!-- Interests -->
    <section class="py-16 border-t border-slate-900">
      <h2 class="text-3xl font-bold mb-12 flex items-center gap-2">
        <span class="w-8 h-1 bg-primary-500 rounded-full"></span>
        Beyond the Code
      </h2>
      <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div class="p-6 bg-slate-900/30 rounded-xl border border-slate-800/50">
          <Icon name="lucide:plane" class="w-10 h-10 text-primary-500 mb-4" />
          <h3 class="text-xl font-semibold mb-2">Private Pilot</h3>
          <p class="text-slate-400 text-sm">CAA Licensed pilot since 2010, blending technical discipline with a passion for aviation.</p>
        </div>
        <div class="p-6 bg-slate-900/30 rounded-xl border border-slate-800/50">
          <Icon name="lucide:cpu" class="w-10 h-10 text-primary-500 mb-4" />
          <h3 class="text-xl font-semibold mb-2">PC Enthusiast</h3>
          <p class="text-slate-400 text-sm">Deeply interested in hardware and gaming, always keeping up with the latest tech.</p>
        </div>
        <div class="p-6 bg-slate-900/30 rounded-xl border border-slate-800/50">
          <Icon name="lucide:flag" class="w-10 h-10 text-primary-500 mb-4" />
          <h3 class="text-xl font-semibold mb-2">Motorsport</h3>
          <p class="text-slate-400 text-sm">Passionate about F1 and the intersection of data and high-performance racing.</p>
        </div>
        <div class="p-6 bg-slate-900/30 rounded-xl border border-slate-800/50">
          <Icon name="lucide:hammer" class="w-10 h-10 text-primary-500 mb-4" />
          <h3 class="text-xl font-semibold mb-2">DIY</h3>
          <p class="text-slate-400 text-sm">Managing a smallholding and undertaking various home improvement projects.</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
// Script logic can be added here as the site grows
</script>
