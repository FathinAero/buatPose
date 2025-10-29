<script setup lang="ts">
import { ref } from 'vue'

/**
 * state accordion terbuka mana
 * 0 = Spesifikasi Hardware
 * 1 = Printer Photobooth
 * 2 = Rekomendasi Kamera
 */
const openIdx = ref<number | null>(0)

function toggle(idx: number) {
  openIdx.value = openIdx.value === idx ? null : idx
}
</script>

<template>
  <section class="max-w-[1200px] mx-auto px-[16px] md:px-[24px] py-[24px] md:py-[32px]">
    <div class="flex flex-col gap-[12px]">

      <!-- ITEM 1: Spesifikasi Hardware -->
      <div
        class="rounded-[6px] border border-[#D9DDE8] bg-white/90 backdrop-blur-[2px] shadow-[0_8px_24px_rgba(15,23,42,0.04)]">
        <!-- header -->
        <button @click="toggle(0)"
          class="w-full flex items-center justify-between text-left px-[16px] py-[14px] md:px-[20px] md:py-[16px]">
          <span class="text-[14px] md:text-[15px] font-medium text-[#0F172A]">
            Spesifikasi Hardware
          </span>

          <span
            class="rounded-[4px] border border-[#D9DDE8] bg-white w-[24px] h-[24px] flex items-center justify-center text-[#0F172A]">
            <span class="transition-transform" :class="openIdx === 0 ? 'rotate-45' : ''">+</span>
          </span>
        </button>

        <!-- panel -->
        <div v-if="openIdx === 0"
          class="border-t border-[#D9DDE8] px-[16px] py-[16px] md:px-[20px] md:py-[20px] text-[13px] leading-[20px] text-[#0F172A]">
          <!-- ===== Processor ===== -->
          <div class="pb-[16px] md:pb-[20px]">
            <p class="text-[13px] font-semibold text-[#0F172A] mb-[6px]">
              Processor:
            </p>
            <ul class="list-disc pl-[18px] space-y-[4px]">
              <li>Quad Core Intel Core i5 generasi ke-9 2.0 GHz dengan atau lebih tinggi sangat disarankan.</li>
              <li>Prosesor 64-bit. Dibutuhkan lebih dari 2 core performa untuk memproses video..</li>
              <li>AMD Ryzen 5 Quad-core atau lebih tinggi (AMD Ryzen™ Generasi ke-2 atau lebih tinggi)</li>
            </ul>
          </div>

          <div class="border-t border-[#E5E7EB] my-[4px]"></div>

          <!-- ===== Memori ===== -->
          <div class="py-[16px] md:py-[20px]">
            <p class="text-[13px] font-semibold text-[#0F172A] mb-[6px]">
              Memori (RAM):
            </p>
            <p>
              8 GB (dslrBooth will be able to run with 4 GB RAM. However, it is recommended to have 8 GB RAM because the
              software is optimized to take full advantage of multiple cores. These optimizations will run better with
              8GB RAM)
            </p>
          </div>

          <div class="border-t border-[#E5E7EB] my-[4px]"></div>

          <!-- ===== Sistem Operasi ===== -->
          <div class="py-[16px] md:py-[20px]">
            <p class="text-[13px] font-semibold text-[#0F172A] mb-[6px]">
              Sistem Operasi:
            </p>

            <ul class="list-disc pl-[18px] space-y-[4px]">
              <li>Windows 10 versi 1903 (19H1 – Mei 2019) atau lebih tinggi atau Windows 11 dengan update terkini.</li>
              <li>Auto mode hanya ke Performa Terbaik.</li>
              <li>Resolusi Tampilan 1920x1080 disarankan.</li>
              <li>Layar sentuh disarankan untuk berbagi fitur tetapi tidak wajib.</li>
            </ul>

            <p class="mt-[10px] text-[12px] leading-[18px] text-[#475569]">
              Catatan: Intel i5 Surface Pro 7 dan 7+ tidak memiliki kipas internal. Oleh karena itu,
              pelambatan CPU dapat terjadi dan menyebabkan kelambatan khususnya selama tayangan langsung.
            </p>
          </div>

          <div class="border-t border-[#E5E7EB] my-[4px]"></div>

          <!-- ===== Graphics Card ===== -->
          <div class="py-[16px] md:py-[20px]">
            <p class="text-[13px] font-semibold text-[#0F172A] mb-[6px]">
              Graphics Card:
            </p>

            <ul class="list-disc pl-[18px] space-y-[4px]">
              <li>NVIDIA® GPU 2016 atau lebih baru dengan kapasitas 4 GB atau lebih sangat direkomendasikan.</li>
              <li>NVIDIA GeForce 1650 atau lebih tinggi dengan VRAM khusus minimal 4 GB.</li>
              <li>AMD Radeon RX 560 atau lebih tinggi dengan VRAM khusus minimal 4 GB.</li>
            </ul>
          </div>

          <div class="border-t border-[#E5E7EB] my-[4px]"></div>

          <!-- ===== Tidak Support ===== -->
          <div class="py-[16px] md:py-[20px]">
            <p class="text-[13px] font-semibold text-[#0F172A] mb-[6px]">
              Tidak Support:
            </p>

            <ul class="list-disc pl-[18px] space-y-[4px]">
              <li>Prosesor AMD APU bermasalah dalam bekerja dengan aplikasi multi-threaded berkinerja tinggi seperti
                disoftbooth.</li>
              <li>Prosesor ARM dan ARM64 seperti yang terdapat pada Microsoft Surface X (prosesor Microsoft SQ1/SQ2).
              </li>
              <li>Prosesor Intel Atom, Intel Celeron, Intel Pentium, dan Intel Gold.</li>
            </ul>

            <p class="mt-[10px] text-[12px] leading-[18px] text-[#475569]">
              Jika Anda memiliki PC yang lebih lambat, dslrBooth mungkin cocok untuk Anda tetapi akan lebih lambat.
              Untuk membuatnya berjalan sedikit lebih cepat, turunkan pengaturan kamera Anda ke ukuran gambar paling
              lambat dan atur template Anda ke 300x300 dpi. Ini akan mempercepat pemrosesan.
            </p>
          </div>

          <div class="border-t border-[#E5E7EB] my-[4px]"></div>

          <!-- ===== Rekomendasi PC ===== -->
          <div class="pt-[16px] md:pt-[20px]">
            <p class="text-[13px] font-semibold text-[#0F172A] mb-[10px]">
              Rekomendasi PC:
            </p>

            <div class="space-y-[16px] md:space-y-[20px]">

              <!-- item PC -->
              <div class="flex items-start gap-[12px]">
                <img src="/img/pc.svg" class="w-[70px] h-auto flex-shrink-0 select-none" alt="">
                <div>
                  <p class="text-[13px] font-semibold text-[#0F172A]">
                    HP Pavilion All–in–One PC
                  </p>
                  <p class="text-[13px] leading-[20px] text-[#0F172A]">
                    Memiliki prosesor yang handal untuk mengoperasikan aplikasi photobooth tanpa kendala. Layar
                    sentuhnya cepat merespons, meningkatkan kenyamanan pengguna. Bentuknya stylish dan praktis, sehingga
                    fleksibel digunakan di berbagai acara.
                  </p>
                </div>
              </div>

              <div class="flex items-start gap-[12px]">
                <img src="/img/pc.svg" class="w-[70px] h-auto flex-shrink-0 select-none" alt="">
                <div>
                  <p class="text-[13px] font-semibold text-[#0F172A]">
                    Dell Inspiron All–in–One PC
                  </p>
                  <p class="text-[13px] leading-[20px] text-[#0F172A]">
                    Kinerja andal didukung prosesor cepat dan memori besar. Layar berkualitas premium menampilkan gambar
                    dengan detail yang tajam. Fitur pelengkap seperti webcam bagus dan audio berkualitas tinggi turut
                    menyempurnakan pengalaman.
                  </p>
                </div>
              </div>

              <div class="flex items-start gap-[12px]">
                <img src="/img/pc.svg" class="w-[70px] h-auto flex-shrink-0 select-none" alt="">
                <div>
                  <p class="text-[13px] font-semibold text-[#0F172A]">
                    ASUS Zen AiO Pro All–in–One PC
                  </p>
                  <p class="text-[13px] leading-[20px] text-[#0F172A]">
                    Gaya minimalis dengan panel layar besar berkualitas tajam. Didukung performa tangguh dari prosesor
                    flagship dan grafis unggulan. Spesial fitur fotografi termasuk color management profesional dan
                    reproduksi warna presisi.
                  </p>
                </div>
              </div>

              <div class="flex items-start gap-[12px]">
                <img src="/img/pc.svg" class="w-[70px] h-auto flex-shrink-0 select-none" alt="">
                <div>
                  <p class="text-[13px] font-semibold text-[#0F172A]">
                    Lenovo IdeaCentre All–in–One PC
                  </p>
                  <p class="text-[13px] leading-[20px] text-[#0F172A]">
                    Perpaduan sempurna antara kinerja tangguh dan harga kompetitif. Layar beresolusi ultra dengan
                    reproduksi warna presisi untuk hasil foto menakjubkan. Dirancang ergonomis dengan pengoperasian yang
                    intuitif.
                  </p>
                </div>
              </div>

              <div class="flex items-start gap-[12px]">
                <img src="/img/pc.svg" class="w-[70px] h-auto flex-shrink-0 select-none" alt="">
                <div>
                  <p class="text-[13px] font-semibold text-[#0F172A]">
                    Acer Aspire All–in–One PC
                  </p>
                  <p class="text-[13px] leading-[20px] text-[#0F172A]">
                    Harga bersaing dengan kemampuan unggul. Bentuk minimalis yang ringan dan portable. Kualitas visual
                    prima dengan palet warna yang hidup.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>

      <!-- ITEM 2: Printer Photobooth -->
      <div
        class="rounded-[6px] border border-[#D9DDE8] bg-white/90 backdrop-blur-[2px] shadow-[0_8px_24px_rgba(15,23,42,0.04)]">
        <button @click="toggle(1)"
          class="w-full flex items-center justify-between text-left px-[16px] py-[14px] md:px-[20px] md:py-[16px]">
          <span class="text-[14px] md:text-[15px] font-medium text-[#0F172A]">
            Printer Photobooth
          </span>
          <span
            class="rounded-[4px] border border-[#D9DDE8] bg-white w-[24px] h-[24px] flex items-center justify-center text-[#0F172A]">
            <span class="transition-transform" :class="openIdx === 1 ? 'rotate-45' : ''">+</span>
          </span>
        </button>

        <div v-if="openIdx === 1"
          class="border-t border-[#D9DDE8] px-[16px] py-[16px] md:px-[20px] md:py-[20px] text-[13px] leading-[20px] text-[#0F172A]">
          <HardwarePrinterSpecs />
        </div>
      </div>

      <!-- ITEM 3: Rekomendasi Kamera -->
      <div
        class="rounded-[6px] border border-[#D9DDE8] bg-white/90 backdrop-blur-[2px] shadow-[0_8px_24px_rgba(15,23,42,0.04)]">
        <button @click="toggle(2)"
          class="w-full flex items-center justify-between text-left px-[16px] py-[14px] md:px-[20px] md:py-[16px]">
          <span class="text-[14px] md:text-[15px] font-medium text-[#0F172A]">
            Rekomendasi Kamera
          </span>
          <span
            class="rounded-[4px] border border-[#D9DDE8] bg-white w-[24px] h-[24px] flex items-center justify-center text-[#0F172A]">
            <span class="transition-transform" :class="openIdx === 2 ? 'rotate-45' : ''">+</span>
          </span>
        </button>

        <div v-if="openIdx === 2"
          class="border-t border-[#D9DDE8] px-[16px] py-[16px] md:px-[20px] md:py-[20px] text-[13px] leading-[20px] text-[#0F172A]">
          <HardwareCameraSpecs />
        </div>
      </div>

    </div>
  </section>
</template>
