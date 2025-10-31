<script setup lang="ts">
type Feat = {
  title: string
  desc: string
  icon?: string
  bg: string
  ring: string
}

const items: Feat[] = [
  { title: 'Remote Friendly', desc: 'Monitor all booths & branches remotely. Manage it from anywhere.', icon: '/img/symbol-remote-friendly.svg', bg: '#3D4CF9', ring: '#2E39B4' },
  { title: 'Faster Process', desc: 'Stay focused, automate repetitive tasks, and move faster.', icon: '/img/symbol-faster.svg', bg: '#39BE9A', ring: '#129B77' },
  { title: 'Easy Customer Management', desc: 'All customer data & order history are neatly stored.', icon: '/img/symbol-management.svg', bg: '#FEC33B', ring: '#E19D00' },
  { title: 'Revenue & Order Summary', desc: 'Filter revenue per branch for a clearer view.', icon: '/img/symbol-summary.svg', bg: '#F944B0', ring: '#F1008F' },
  { title: 'Multi Printing', desc: 'Let customers print their favorite photos more than once.', icon: '/img/symbol-multi.svg', bg: '#FE4548', ring: '#E41500' },
  { title: 'Timer Setting', desc: 'Organize session duration for smooth queuing.', icon: '/img/symbol-timer.svg', bg: '#D93BCC', ring: '#B301BE' },
]

const year = new Date().getFullYear()
</script>

<template>
  <!-- WRAPPER gabungan: SmartFeatures + Footer -->
  <section class="relative bg-[#F5F7FD]">
    <div
      class="pointer-events-none absolute inset-0 z-0"
      style="
        background:
          radial-gradient(
            1300px 800px at 106% 70%,
            rgba(255,173,223,.44) 0%,
            rgba(255,229,168,.16) 34%,
            rgba(255,229,168,0) 58%
          );
      "
    />

    <!-- SmartFeatures content -->
    <div class="relative z-10 mx-auto w-full max-w-[1200px] px-[16px] md:px-[24px]">
      <div class="rounded-[24px] border border-[#F0F2F8] bg-white/70 backdrop-blur p-[16px] md:p-[24px] lg:p-[28px]">
        <h2 class="mt-[10px] text-center text-[26px] leading-[34px] md:text-[34px] md:leading-[42px] font-bold">
          <span class="text-[#FF66C4]">Smart Features</span> to Simplify<br class="hidden md:block" />
          Your Photo Booth Business
        </h2>

        <div class="mt-[18px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[14px] md:gap-[18px] mb-[20px]">
          <div
            v-for="(f, i) in items"
            :key="i"
            class="rounded-[16px] p-[14px] md:p-[16px] text-white shadow-sm"
            :style="{ background: f.bg, boxShadow: `4px 6px 0 0 ${f.ring}` }"
          >
            <div class="flex flex-col items-start gap-[10px]">
              <div class="h-[40px] w-[40px] rounded-[8px] grid place-items-center shrink-0">
                <img v-if="f.icon" :src="f.icon" alt="" class="h-[32px] w-[32px]" />
              </div>

              <h3 class="text-[15px] md:text-[16px] my-[6px] font-semibold leading-[20px]">
                {{ f.title }}
              </h3>

              <p class="text-[13px] leading-[19px] mb-[6px] opacity-90">
                {{ f.desc }}
              </p>
            </div>
          </div>
        </div>

        <div class="mt-[18px] flex items-center justify-center">
          <a
            href="#pricing"
            class="inline-flex items-center gap-[6px] rounded-full border border-gray-300 bg-white px-[14px] py-[8px] text-[13px] font-medium hover:bg-gray-50"
          >
            Try it Now
            <svg class="h-[14px] w-[14px]" viewBox="0 0 24 24" fill="none">
              <path d="M7 17l7-7M14 17h-7V10" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </a>
        </div>
      </div>

      <!-- Footer di dalam wrapper yang sama -->
      <footer class="pt-[32px] md:pt-[40px] pb-[max(28px,env(safe-area-inset-bottom))] mt-[50px]">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-[24px] md:gap-[40px]">
          <div class="md:col-span-2">
            <img src="/img/logo-pose.svg" alt="Pose" class="w-[120px] h-auto" />
            <p class="mt-[14px] text-[14px] leading-[22px] text-[#1F2937] max-w-[580px]">
              POSE is the ultimate photobooth management system, helping
              businesses automate operations, boost revenue, and deliver
              unforgettable customer experiences. With smart features like
              centralized control, WhatsApp automation, and real–time
              analytics, we empower photobooth owners to grow effortlessly
            </p>

            <p class="mt-[18px] text-[14px] font-semibold">Get in Touch!</p>
            <div class="mt-[8px] flex items-center gap-[10px]">
              <a href="#" class="w-[32px] h-[32px] rounded-[8px] grid place-items-center border border-[#E5E7EB] hover:bg-gray-50">
                <svg class="w-[16px] h-[16px]" viewBox="0 0 24 24" fill="currentColor"><path d="M7 2C4.2 2 2 4.2 2 7v10c0 2.8 2.2 5 5 5h10c2.8 0 5-2.2 5-5V7c0-2.8-2.2-5-5-5H7zm10 2c1.7 0 3 1.3 3 3v10c0 1.7-1.3 3-3 3H7c-1.7 0-3-1.3-3-3V7c0-1.7 1.3-3 3-3h10zm-5 3a5 5 0 100 10 5 5 0 000-10zm0 2.2a2.8 2.8 0 110 5.6 2.8 2.8 0 010-5.6zM17.8 6.2a1 1 0 110 2 1 1 0 010-2z"/></svg>
              </a>
              <a href="#" class="w-[32px] h-[32px] rounded-[8px] grid place-items-center border border-[#E5E7EB] hover:bg-gray-50">
                <svg class="w-[18px] h-[18px]" viewBox="0 0 24 24" fill="currentColor"><path d="M23.5 6.2s-.2-1.7-.8-2.4c-.8-.9-1.7-.9-2.1-1C17.9 2.5 12 2.5 12 2.5h0s-5.9 0-8.6.3c-.4.1-1.3.1-2.1 1-.6.7-.8 2.4-.8 2.4S0 8.2 0 10.3v1.3c0 2 .2 4.1.2 4.1s.2 1.7.8 2.4c.8.9 1.8.9 2.3 1 1.7.2 7.2.3 8.7.3s8.6-.1 10.3-.3c.4-.1 1.3-.1 2.1-1 .6-.7.8-2.4.8-2.4s.2-2.1.2-4.1v-1.3c0-2.1-.2-4.1-.2-4.1zM9.5 14.8v-6l6 3-6 3z"/></svg>
              </a>
              <a href="mailto:hello@pose.com" class="w-[32px] h-[32px] rounded-[8px] grid place-items-center border border-[#E5E7EB] hover:bg-gray-50">
                <svg class="w/[18px] h/[18px]" viewBox="0 0 24 24" fill="currentColor"><path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 2v.01L12 11 4 6.01V6h16zM4 18V8.24l8 4.99 8-4.99V18H4z"/></svg>
              </a>
            </div>
          </div>

          <div>
            <p class="text-[14px] font-semibold">Company</p>
            <ul class="mt-[10px] space-y-[8px] text-[14px]">
              <li><NuxtLink href="#home" class="hover:underline">Home</NuxtLink></li>
              <li><NuxtLink href="#pricing" class="hover:underline">Pricing</NuxtLink></li>
              <li><NuxtLink href="#services" class="hover:underline">Features</NuxtLink></li>
              <li><NuxtLink href="#contact" class="hover:underline">Contact Us</NuxtLink></li>
              <li><NuxtLink href="#hardware" class="hover:underline">Hardware &amp; Booth</NuxtLink></li>
            </ul>
          </div>
        </div>

        <div class="mt-[24px] border-t border-[#EAEAEA] pt-[12px]">
          <p class="text-center text-[12px] text-gray-500">
            Copyright © {{ year }}. All rights reserved
          </p>
        </div>
      </footer>
    </div>
  </section>
</template>
