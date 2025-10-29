<script setup lang="ts">
const faqs = [
  {
    q: 'What is Pose?',
    a: `POSE is the ultimate photo booth management system, helping businesses automate operations,
boost revenue, and deliver unforgettable customer experiences. With smart features like centralized
control, WhatsApp automation, and real–time analytics, we empower photobooth owners to grow effortlessly.`
  },
  {
    q: 'How quickly can I set up Pose after purchase?',
    a: `Setup is simple and guided. Most users can get up and running in the same day depending on device readiness.`
  },
  {
    q: 'What’s the difference between Collaborate and Ultimate plans?',
    a: `Ultimate removes revenue share and provides higher limits, while Collaborate includes 10% revenue share.`
  },
  {
    q: 'Do I need a specific printer?',
    a: `Pose works with popular photo printers; we’ll provide a compatibility list and recommended profiles.`
  }
]

// satu yang terbuka
const openIndex = ref<number>(0)
const toggle = (i: number) => {
  openIndex.value = openIndex.value === i ? -1 : i
}
</script>

<template>
  <section id="faq" class="py-[56px]">
    <div class="max-w-[980px] mx-auto px-[16px] md:px-[24px]">
      <!-- Pill 'Any Question?' -->
      <div class="flex justify-center">
        <span
          class="inline-flex items-center gap-[8px] px-[14px] py-[8px]
                 rounded-[999px] text-[12px] font-semibold
                 bg-[#42BD9C] text-white"
        >
          Any Question?
        </span>
      </div>

      <!-- Heading -->
      <h2 class="text-center mt-[10px] text-[28px] md:text-[32px] font-bold">
        Frequently Ask Question
      </h2>
      <p class="text-center mt-[8px] text-[14px] md:text-[15px] text-gray-600">
        Need help with something? Here are our most frequently asked questions.
      </p>

      <!-- Accordion -->
      <div class="mt-[20px] space-y-[12px]">
        <div
          v-for="(f, i) in faqs"
          :key="i"
          class="rounded-[12px] border-[1.5px] overflow-hidden transition-colors"
          :class="openIndex === i ? 'bg-[#CFF9E8] border-[#95E1C9]' : 'bg-[#EFFFF7] border-[#CFEFE3]'"
        >
          <!-- header row -->
          <button
            class="w-full text-left px-[18px] py-[16px] flex items-center justify-between"
            @click="toggle(i)"
          >
            <span class="text-[16px] font-semibold">{{ f.q }}</span>

            <!-- plus / minus circle -->
            <span
              class="inline-flex items-center justify-center w-[28px] h-[28px]
                     rounded-full border border-[#8FD8C2] text-[#1EAE74] bg-white"
            >
              <svg v-if="openIndex !== i" class="w-[14px] h-[14px]" viewBox="0 0 24 24" fill="currentColor">
                <path d="M5 11h14v2H5z" transform="rotate(90 12 12)"/>
                <path d="M5 11h14v2H5z"/>
              </svg>
              <svg v-else class="w-[14px] h-[14px]" viewBox="0 0 24 24" fill="currentColor">
                <path d="M5 11h14v2H5z"/>
              </svg>
            </span>
          </button>

          <!-- content -->
          <div
            v-show="openIndex === i"
            class="px-[18px] pb-[16px] pt-0 text-[14px] leading-[22px] text-[#1F2937]"
          >
            {{ f.a }}
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
