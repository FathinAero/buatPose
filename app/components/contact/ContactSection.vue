<script setup lang="ts">
type P = {
  title?: string
  desc?: string

  patternWidth?: number
  gradWidth?: number
  offsetTop?: number
  patternOpacity?: number
}
const props = withDefaults(defineProps<P>(), {
  title: 'Contact Us',
  desc:
    'Ada pertanyaan, butuh presentasi produk, atau ingin demo langsung? ' +
    'Tim kami siap membantu kamu menemukan solusi terbaik untuk bisnismu kapan saja.',
  patternWidth: 180,
  gradWidth: 190,
  offsetTop: -120,
  patternOpacity: 0.9,
})


const onSubmit = (e: Event) => {
  e.preventDefault()
  const fd = new FormData(e.target as HTMLFormElement)
  console.log(Object.fromEntries(fd.entries()))
}
</script>

<template>
  <section class="relative bg-[#F5F7FD]">
    <div class="pointer-events-none absolute inset-0 z-0 overflow-hidden" aria-hidden="true">
      <div
        class="absolute left-1/2 -translate-x-1/2 h-full"
        :style="{ top: props.offsetTop + 'px', width: props.patternWidth + 'vw' }"
      >
        <img
          src="/img/pattern-square.svg"
          alt=""
          class="w-full h-full object-cover max-w-none"
          :style="{ opacity: props.patternOpacity }"
        />
      </div>

      <div
        class="absolute left-1/2 -translate-x-1/2 h-full"
        :style="{ top: props.offsetTop + 'px', width: props.gradWidth + 'vw' }"
      >
        <img
          src="/img/gradation-contact.svg"
          alt=""
          class="w-full h-full object-cover max-w-none"
        />
      </div>
    </div>

    <!-- Header -->
    <div class="relative z-10 max-w-[1200px] mx-auto px-[16px] md:px-[24px] pt-[84px] pb-[40px] md:pt-[110px] md:pb-[56px]">
      <h1 class="text-center text-[32px] md:text-[44px] font-bold tracking-tight">{{ props.title }}</h1>
      <p class="mt-[10px] text-center text-[14px] md:text-[15px] opacity-80">
        {{ props.desc }}
      </p>
    </div>

    <!-- Card: info kiri + form kanan -->
    <div class=" relative z-10 max-w-[1200px] mx-auto px-[16px] md:px-[24px] pb-[56px]">
      <div
        class="rounded-[22px] md:rounded-[26px] bg-white/85 backdrop-blur border border-[#ECEFF7]
               shadow-[0_10px_40px_rgba(25,35,80,0.06)] p-[16px] md:p-[24px] lg:p-[28px]"
      >
        <div class="mb-[12px] md:mb-[18px]">
          <h2 class="text-[22px] md:text-[26px] font-bold">Let’s Work Together</h2>
          <p class="mt-[6px] text-[14px] opacity-80 max-w-[720px]">
            Find out how our Self–Service Photo Booth system can help your business. Start your consultation now.
          </p>
        </div>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-[16px] md:gap-[20px]">
        <!-- Info -->
        <div class="self-start">
          <div class="rounded-[14px] bg-[#F4F7FF] p-[14px] md:p-[16px] lg:p-[18px]">
            <ul class="space-y-[14px] md:space-y-[16px]">
              <li class="flex items-start gap-[12px]">
                <span class="grid place-items-center h-[36px] w-[36px] rounded-[10px]">
                  <img src="/img/symbol-mail.svg" class="w-[40px] h-[40px]" alt="">
                </span>
                <div>
                  <p class="text-[13px] font-semibold opacity-70">Email</p>
                  <p class="text-[14px]">posephotobooth@gmail.com</p>
                </div>
              </li>

              <li class="flex items-start gap-[12px]">
                <span class="grid place-items-center h-[36px] w-[36px] rounded-[10px]">
                  <img src="/img/symbol-location.svg" class="w-[40px] h-[40px]" alt="">
                </span>
                <div>
                  <p class="text-[13px] font-semibold opacity-70">Location</p>
                  <p class="text-[14px]">
                    Jalan Cipete VII No.83A, Cilandak, South Jakarta, Indonesia, 12410
                  </p>
                </div>
              </li>

              <li class="flex items-start gap-[12px]">
                <span class="grid place-items-center h-[36px] w-[36px] rounded-[10px]">
                  <img src="/img/symbol-phone.svg" class="w-[40px] h-[40px]" alt="">
                </span>
                <div>
                  <p class="text-[13px] font-semibold opacity-70">Phone</p>
                  <p class="text-[14px]">087878787887</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

          <!-- Form -->
          <form @submit="onSubmit" class="grid grid-cols-1 sm:grid-cols-2 gap-[10px] md:gap-[12px]">
            <input name="firstName" placeholder="First Name*" required
                   class="w-full h-[44px] rounded-[10px] px-[12px] text-[14px] bg-[#F5F5F5] ring-1 ring-[#E7EAF3] focus:ring-2 focus:ring-[#3D7BFF] outline-none" />
            <input name="lastName"  placeholder="Last Name*"  required
                   class="w-full h-[44px] rounded-[10px] px-[12px] text-[14px] bg-[#F5F5F5] ring-1 ring-[#E7EAF3] focus:ring-2 focus:ring-[#3D7BFF] outline-none" />
            <input name="email" type="email" placeholder="Email*" required
                   class="w-full h-[44px] rounded-[10px] px-[12px] text-[14px] bg-[#F5F5F5] ring-1 ring-[#E7EAF3] focus:ring-2 focus:ring-[#3D7BFF] outline-none" />
            <input name="phone" placeholder="Phone Number*"
                   class="w-full h-[44px] rounded-[10px] px-[12px] text-[14px] bg-[#F5F5F5] ring-1 ring-[#E7EAF3] focus:ring-2 focus:ring-[#3D7BFF] outline-none" />
            <input name="subject" placeholder="Subject*" class="sm:col-span-2 w-full h-[44px] rounded-[10px] px-[12px] text-[14px] bg-[#F5F5F5] ring-1 ring-[#E7EAF3] focus:ring-2 focus:ring-[#3D7BFF] outline-none" />
            <textarea name="message" rows="6" placeholder="Message*" class="sm:col-span-2 w-full rounded-[12px] p-[12px] text-[14px] bg-[#F5F5F5] ring-1 ring-[#E7EAF3] focus:ring-2 focus:ring-[#3D7BFF] outline-none"></textarea>

            <div class="sm:col-span-2">
              <button type="submit"
                class="inline-flex items-center gap-[8px] rounded-[999px] px-[16px] py-[10px] bg-[#3D4CF9] text-white text-[14px] font-semibold hover:brightness-105">
                Send Message
                <svg class="h-[16px] w-[16px]" viewBox="0 0 24 24" fill="none">
                  <path d="M7 17l7-7M14 17h-7V10" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>
