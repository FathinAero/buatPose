<script setup lang="ts">
const services = [
  { icon: '/img/symbol-camera.svg', title: 'Self Service Booth',          desc: 'Save on employee labor, let the PoSe system handle all your booth work systems.' },
  { icon: '/img/symbol-kuas.svg',   title: 'Customizable Appearance',     desc: "You can have an exclusive customizable interface. Display your branding right from the booth's main screen." },
  { icon: '/img/symbol-qr.svg',     title: 'Cashless Payment',            desc: 'QRIS, e-wallets, and cards supported with instant validation. No cashier needed, no missed transactions.' },
  { icon: '/img/symbol-center.svg', title: 'Center Monitoring',           desc: 'Manage all booths and branches via dashboard. Monitor sales, frame usage, and device status from anywhere.' },
  { icon: '/img/symbol-chat.svg',   title: 'Promising Marketing',         desc: 'From the customer number that has been recorded, you can increase customer engagement with Whatsapp Automation.' },
  { icon: '/img/symbol-frame.svg',  title: 'Frames Management',           desc: 'Create, manage and monitor unique frame usage for each branch. Usage & revenue data for each frame can also be tracked.' }
]
</script>

<template>
  <section
    id="services"
    class="
      bg-white
      rounded-[24px] md:rounded-[40px] xl:rounded-[50px]
      py-[48px] md:py-[56px]
      mx-[16px] md:mx-[40px] lg:mx-[60px] xl:mx-[100px]
    "
  >
    <div class="max-w-[1200px] mx-auto px-[16px] md:px-[24px]">

      <div class="flex justify-center">
        <div class="pill bg-white text-[#4383FF] ring-1 ring-[#4383FF] w-fit">
          About Pose
        </div>
      </div>

      <!-- Heading (tetap tengah) -->
      <div class="text-center mt-[12px]">
        <h2 class="text-[24px] sm:text-[28px] md:text-[32px] font-bold leading-[1.25]">
          Where
          <span class="bg-[#FF66C4] bg-clip-text text-transparent">Smart Tech</span>
          Meets<br/>Heartfelt Experiences
        </h2>
        <p class="mt-[8px] text-[15px] md:text-[16px] leading-[24px] md:leading-[26px]">
          Effortless for you, unforgettable for your customers.
        </p>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-[16px] md:gap-[20px] mt-[24px]">
        <ServiceCard
          v-for="(s, i) in services"
          :key="i"
          :icon="s.icon"
          :title="s.title"
          :desc="s.desc"
        />
      </div>

      <div class="text-center mt-[24px]">
        <a
          href="#pricing"
          class="inline-flex items-center gap-[8px] px-[18px] md:px-[20px] py-[12px]
                 rounded-[999px] text-white bg-[#FF66C4] text-[14px] md:text-[15px] font-semibold"
        >
          Choose Plan
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
               class="w-[16px] h-[16px]" fill="none" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M5 12h14M13 5l7 7-7 7"/>
          </svg>
        </a>
      </div>
    </div>
  </section>
</template>
