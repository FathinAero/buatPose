<script setup lang="ts">

</script>

<template>
  <div>
    <!-- Isi -->
    <div class="p-[12px] md:p-[16px] text-[13px] leading-[20px] text-[#0F172A] space-y-[16px]">
      <!-- ===== HITI ===== -->
      <section class="space-y-[10px]">
        <h3 class="font-semibold">Hiti:</h3>

        <div class="space-y-[8px]">
          <div>
            <p>Kelebihan:</p>
            <ul class="list-disc pl-[18px] space-y-[4px]">
              <li>
                <span>Harga Ekonomis:</span>
                Printer Hiti tersedia dalam berbagai pilihan model dengan harga yang ekonomis,
                ideal untuk usaha photobooth yang mengutamakan efisiensi biaya.
              </li>
              <li>
                <span>Portabilitas:</span>
                Beberapa model Hiti hadir dengan ukuran lebih kecil dan bobot ringan,
                memudahkan transportasi ke berbagai lokasi acara.
              </li>
              <li>
                <span>Printing Tanpa Ribet:</span>
                Dukungan teknologi wireless memfasilitasi pencetakan instan via perangkat mobile.
              </li>
            </ul>
          </div>

          <div>
            <p>Kekurangan:</p>
            <ul class="list-disc pl-[18px] space-y-[4px]">
              <li>
                <span>Kecepatan Cetak:</span>
                Hiti mungkin tidak secepat beberapa model printer DNP,
                yang perlu dipertimbangkan jika memerlukan cetakan dalam jumlah besar dengan waktu singkat.
              </li>
              <li>
                <span>Ketersediaan Consumable:</span>
                Consumable seperti kertas cetak dan ribbon Hiti mungkin tidak
                umum untuk merek printer lain, sehingga memerlukan usaha ekstra dalam mencarinya.
              </li>
            </ul>
          </div>

          <!-- Gambar HITI -->
          <div class="grid grid-cols-2 gap-[16px] md:gap-[24px] text-center">
            <div class="flex flex-col items-center">
              <img
                src="/img/hiti.svg"
                alt="Hiti P510"
                class="block w-[120px] h-auto select-none"
                loading="lazy"
                decoding="async"
              />
              <p class="mt-[8px] text-[13px] leading-[18px] font-medium text-[#0F172A]">
                Hiti P510
              </p>
            </div>

            <div class="flex flex-col items-center">
              <img
                src="/img/hiti.svg"
                alt="Hiti P525"
                class="block w-[120px] h-auto select-none"
                loading="lazy"
                decoding="async"
              />
              <p class="mt-[8px] text-[13px] leading-[18px] font-medium text-[#0F172A]">
                Hiti P525
              </p>
            </div>
          </div>
        </div>
      </section>

      <!-- Divider -->
      <div class="h-[1px] bg-[#D6DBE8]" />

      <!-- ===== DNP ===== -->
      <section class="space-y-[10px]">
        <h3 class="font-semibold">DNP:</h3>

        <div class="space-y-[8px]">
          <div>
            <p>Kelebihan:</p>
            <ul class="list-disc pl-[18px] space-y-[4px]">
              <li>
                <span>Kelebihan Kecepatan Cetak:</span>
                Printer DNP umumnya dikenal memiliki kecepatan cetak yang sangat tinggi,
                memungkinkan Anda mencetak foto secara cepat dalam jumlah besar dalam waktu singkat.
              </li>
              <li>
                <span>Kualitas Cetak:</span>
                Printer DNP menghasilkan cetakan berkualitas tinggi dengan detail yang tajam
                dan warna yang hidup. Gambar-gambar yang dihasilkan cenderung memiliki
                ketahanan lama dan tahan luntur.
              </li>
              <li>
                <span>Ketersediaan Consumable:</span>
                Consumable seperti kertas cetak dan ribbon printer DNP relatif mudah
                ditemukan dan tersedia di pasaran.
              </li>
            </ul>
          </div>

          <div>
            <p>Kekurangan:</p>
            <ul class="list-disc pl-[18px] space-y-[4px]">
              <li>
                <span>Harga:</span>
                Printer DNP sering kali memiliki harga yang lebih tinggi dibandingkan
                beberapa merek lain di pasaran, sehingga dapat menjadi investasi awal yang signifikan.
              </li>
              <li>
                <span>Berat dan Ukuran:</span>
                Beberapa model printer DNP cenderung lebih berat dan besar,
                sehingga kurang portabel dan tidak cocok untuk photobooth
                yang membutuhkan mobilitas tinggi.
              </li>
            </ul>
          </div>

          <!-- Gambar DNP -->
          <div class="flex flex-col items-center">
            <img
              src="/img/dnp.svg"
              alt="DNP RX1HS"
              class="block w-[130px] h-auto select-none"
              loading="lazy"
              decoding="async"
            />
            <p class="mt-[8px] text-[13px] leading-[18px] font-medium text-[#0F172A]">
              DNP RX1HS
            </p>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>
