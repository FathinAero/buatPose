<script setup lang="ts">
const heroImg = '/img/hero-mock.svg'

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
  <!-- base warna -->
  <section class="relative bg-[#F5F7FD] overflow-hidden">
    <!-- LAYER GRADIENT (SVG) untuk area hero saja -->
    <img
      src="/img/gradation-home-1.svg"
      alt=""
      aria-hidden="true"
      class="pointer-events-none absolute inset-x-0 top-0 h-[1000px] w-full z-0 object-cover"
    />

    <!-- HERO -->
    <section id="home" class="w-full">
      <div
        class="relative z-10 max-w-[1200px] mx-auto px-[16px] md:px-[24px] py-[40px] md:py-[70px]
               grid grid-cols-1 md:grid-cols-2 items-center gap-[24px] md:gap-[40px]"
      >
        <!-- Kiri: TEKS (muncul dulu di mobile) -->
        <div class="order-1 md:order-1 text-center md:text-left">
          <h1 class="text-[28px] sm:text-[32px] md:text-[50px] font-semibold leading-[1.2] tracking-[-0.5px]">
            Bangun Bisnis Photo Booth Profesional Dalam Sekejap Bersama
            <span class="inline-flex align-baseline">
              <span class="text-[#3D4CDF]">P</span>
              <span class="-ml-[2px] text-[#FD78CB]">o</span>
              <span class="-ml-[2px] text-[#3D4CDF]">s</span>
              <span class="-ml-[2px] text-[#3D4CDF]">e</span>
            </span>
          </h1>

          <p class="mt-[16px] sm:mt-[18px] text-[15px] sm:text-[16px] leading-[26px] text-justify">
            <span class="font-bold">Self Service Photo Booth Software</span> dengan sistem lengkap untuk membantu kamu
            mengelola photo booth mulai dari pemetaan transaksi, manajemen harga, hingga
            desain template, semuanya dilakukan secara otomatis.
          </p>

          <div class="mt-[20px] flex justify-center md:justify-start">
            <a
              href="#get-started"
              class="px-[20px] py-[12px] rounded-[30px] bg-[#3D4CDF] text-white shadow-sm hover:shadow"
            >
              Get Started Today
            </a>
          </div>
        </div>

        <!-- Kanan: GAMBAR (turun ke bawah di mobile) -->
        <div class="order-2 md:order-2 flex justify-center md:justify-end mt-[24px] md:mt-0">
          <div class="w-[280px] h-[200px] sm:w-[340px] sm:h-[240px] md:w-[520px] md:h-[400px]">
            <img
              :src="heroImg"
              alt="Tampilan PoSe"
              class="w-full h-full object-cover"
              loading="eager"
              fetchpriority="high"
              decoding="async"
            />
          </div>
        </div>
      </div>
    </section>

    <!-- SERVICES (tetap di atas layer, tidak ketiban) -->
    <section
      id="services"
      class="
        relative z-10
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

    <ShowcaseSection />
    <OpportunitiesSection />
    <PricingSection />
    <FaqSection />
    <CtaBanner />
    <SiteFooter />
  </section>
</template>


