
<script setup lang="ts">
const year = new Date().getFullYear()
</script>

<template>
  <footer class="pt-[32px] md:pt-[40px] pb-[max(28px,env(safe-area-inset-bottom))]">
    <div class="max-w-[1200px] mx-auto px-[16px] md:px-[24px]">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-[24px] md:gap-[40px]">
        <!-- kiri: logo + deskripsi + sosmed -->
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
            <!-- IG -->
            <a href="#" class="w-[32px] h-[32px] rounded-[8px] grid place-items-center
                               border border-[#E5E7EB] hover:bg-gray-50">
              <svg class="w-[16px] h-[16px]" viewBox="0 0 24 24" fill="currentColor">
                <path d="M7 2C4.2 2 2 4.2 2 7v10c0 2.8 2.2 5 5 5h10c2.8 0 5-2.2 5-5V7c0-2.8-2.2-5-5-5H7zm10 2c1.7 0 3 1.3 3 3v10c0 1.7-1.3 3-3 3H7c-1.7 0-3-1.3-3-3V7c0-1.7 1.3-3 3-3h10zm-5 3a5 5 0 100 10 5 5 0 000-10zm0 2.2a2.8 2.8 0 110 5.6 2.8 2.8 0 010-5.6zM17.8 6.2a1 1 0 110 2 1 1 0 010-2z"/>
              </svg>
            </a>
            <!-- YouTube -->
            <a href="#" class="w-[32px] h-[32px] rounded-[8px] grid place-items-center
                               border border-[#E5E7EB] hover:bg-gray-50">
              <svg class="w-[18px] h-[18px]" viewBox="0 0 24 24" fill="currentColor">
                <path d="M23.5 6.2s-.2-1.7-.8-2.4c-.8-.9-1.7-.9-2.1-1C17.9 2.5 12 2.5 12 2.5h0s-5.9 0-8.6.3c-.4.1-1.3.1-2.1 1-.6.7-.8 2.4-.8 2.4S0 8.2 0 10.3v1.3c0 2 .2 4.1.2 4.1s.2 1.7.8 2.4c.8.9 1.8.9 2.3 1 1.7.2 7.2.3 8.7.3s8.6-.1 10.3-.3c.4-.1 1.3-.1 2.1-1 .6-.7.8-2.4.8-2.4s.2-2.1.2-4.1v-1.3c0-2.1-.2-4.1-.2-4.1zM9.5 14.8v-6l6 3-6 3z"/>
              </svg>
            </a>
            <!-- Email -->
            <a href="mailto:hello@pose.com" class="w-[32px] h-[32px] rounded-[8px] grid place-items-center
                                                  border border-[#E5E7EB] hover:bg-gray-50">
              <svg class="w-[18px] h-[18px]" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 2v.01L12 11 4 6.01V6h16zM4 18V8.24l8 4.99 8-4.99V18H4z"/>
              </svg>
            </a>
          </div>
        </div>

        <!-- kanan: links -->
        <div>
          <p class="text-[14px] font-semibold">Company</p>
          <ul class="mt-[10px] space-y-[8px] text-[14px]">
            <li><NuxtLink href="#home"        class="hover:underline">Home</NuxtLink></li>
            <li><NuxtLink href="#pricing"     class="hover:underline">Pricing</NuxtLink></li>
            <li><NuxtLink href="#services"    class="hover:underline">Features</NuxtLink></li>
            <li><NuxtLink href="#contact"     class="hover:underline">Contact Us</NuxtLink></li>
            <li><NuxtLink href="#hardware"    class="hover:underline">Hardware &amp; Booth</NuxtLink></li>
          </ul>
        </div>
      </div>

      <!-- bottom line + copyright -->
      <div class="mt-[24px] border-t border-[#EAEAEA] pt-[12px]">
        <p class="text-center text-[12px] text-gray-500">
          Copyright © {{ year }}. All rights reserved
        </p>
      </div>
    </div>
  </footer>
</template>
