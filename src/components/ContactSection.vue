<template>
  <footer
    id="contact"
    class="mt-10 md:mt-12 bg-slate-900 text-slate-100"
  >
    <div class="max-w-6xl mx-auto px-4 py-8">
      <div
        class="grid gap-8 md:grid-cols-3 lg:grid-cols-4"
      >
        <!-- Cột 1: Thông tin hỗ trợ -->
        <div>
          <h4
            class="text-sm font-semibold tracking-wide mb-3 border-b border-slate-700 pb-1"
          >
            THÔNG TIN HỖ TRỢ
          </h4>
          <ul class="space-y-1 text-sm text-slate-300">
            <li>▸ Giới thiệu</li>
            <li>▸ Bảng giá in ấn</li>
            <li>▸ Quy trình đặt hàng</li>
            <li>▸ Hướng dẫn thiết kế file in</li>
            <li>▸ Câu hỏi thường gặp</li>
          </ul>
        </div>

        <!-- Cột 2: Thông tin liên hệ -->
        <div>
          <h4
            class="text-sm font-semibold tracking-wide mb-3 border-b border-slate-700 pb-1"
          >
            THÔNG TIN LIÊN HỆ
          </h4>
          <div class="space-y-2 text-sm text-slate-300">
            <p>
              Mọi chi tiết xin vui lòng liên hệ:
            </p>
            <p>📍 Quận 1, TP. Hồ Chí Minh</p>
            <p>📞 0909 000 000</p>
            <p>✉️ hello@giayinpro.vn</p>
          </div>
        </div>

        <!-- Cột 3: Giới thiệu -->
        <div class="md:col-span-1 lg:col-span-1">
          <h4
            class="text-sm font-semibold tracking-wide mb-3 border-b border-slate-700 pb-1"
          >
            GIỚI THIỆU
          </h4>
          <p class="text-sm text-slate-300 leading-relaxed">
            Giấy In Ấn Pro cung cấp giải pháp in folder, tờ rơi, túi giấy,
            brochure, voucher, name card và bao thư cho doanh nghiệp với chất
            lượng ổn định, thời gian giao hàng nhanh.
          </p>
        </div>

        <!-- Cột 4: Mạng xã hội -->
        <div>
          <h4
            class="text-sm font-semibold tracking-wide mb-3 border-b border-slate-700 pb-1"
          >
            MẠNG XÃ HỘI
          </h4>
          <div class="flex items-center gap-3 mt-2">
            <div
              class="h-8 w-8 rounded-full border border-slate-500 flex items-center justify-center text-xs"
            >
              Fb
            </div>
            <div
              class="h-8 w-8 rounded-full border border-slate-500 flex items-center justify-center text-xs"
            >
              Ins
            </div>
            <div
              class="h-8 w-8 rounded-full border border-slate-500 flex items-center justify-center text-xs"
            >
              Yt
            </div>
          </div>
        </div>
      </div>

      <!-- dòng bản quyền dưới cùng -->
      <div
        class="mt-6 pt-4 border-t border-slate-800 text-xs text-slate-400 flex flex-col md:flex-row items-center justify-between gap-2"
      >
        <span>© {{ year }} Giấy In Ấn Pro. All rights reserved.</span>
        <span>Thiết kế &amp; phát triển bởi bạn 😉</span>
      </div>
    </div>
  </footer>
</template>

<script setup>
const year = new Date().getFullYear();
</script>
