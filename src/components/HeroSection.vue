<template>
  <section
    id="hero"
    class="pt-8 pb-10 md:pt-10 md:pb-12"
  >
    <div
      ref="sliderRef"
      class="rounded-xl border border-slate-200 bg-white p-4 shadow-sm flex flex-col gap-4"
    >
      <div class="flex items-center justify-between">
        <h2 class="text-sm font-semibold text-slate-900">
          Một vài sản phẩm tiêu biểu
        </h2>
        <span class="text-[11px] text-slate-500">Slider tự động</span>
      </div>

      <div class="relative overflow-hidden rounded-lg border border-slate-200">
        <img
          :src="currentSlide.image"
          :alt="currentSlide.title"
          class="w-full h-56 md:h-72 object-contain bg-slate-100"
        />
        <div
          class="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent text-white px-3 py-2"
        >
          <div class="text-xs uppercase tracking-wide text-white/80">
            {{ currentSlide.category }}
          </div>
          <div class="text-sm md:text-base font-semibold leading-tight">
            {{ currentSlide.title }}
          </div>
        </div>
      </div>

      <div class="flex items-center justify-between">
        <div class="flex gap-2">
          <button
            v-for="(s, index) in slides"
            :key="s.id"
            @click="goTo(index)"
            class="h-2.5 rounded-full transition-all"
            :class="
              index === currentIndex
                ? 'w-6 bg-slate-900'
                : 'w-2.5 bg-slate-300 hover:bg-slate-400'
            "
          ></button>
        </div>

        <div class="flex gap-2">
          <button
            @click="prev"
            class="h-7 w-7 rounded-full border border-slate-300 text-slate-700 text-xs flex items-center justify-center hover:bg-slate-50"
          >
            ‹
          </button>
          <button
            @click="next"
            class="h-7 w-7 rounded-full border border-slate-300 text-slate-700 text-xs flex items-center justify-center hover:bg-slate-50"
          >
            ›
          </button>
        </div>
      </div>

      
    </div>
  </section>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue';

defineProps({
  featuredProducts: {
    type: Array,
    required: true,
  },
});

// thay đường dẫn ảnh theo ảnh thật của bạn trong /public/images
const slides = ref([
  {
    id: 1,
    title: 'Folder A4 doanh nghiệp cao cấp',
    category: 'Folder hồ sơ',
    image: '/images/folder.webp',
  },
  {
    id: 2,
    title: 'Tờ rơi khuyến mãi khổ A5',
    category: 'Tờ rơi quảng cáo',
    image: '/images/toroi.jpg',
  },
  {
    id: 3,
    title: 'Túi giấy thời trang trung',
    category: 'Túi giấy',
    image: '/images/tui-giay.jpg',
  },
]);

const currentIndex = ref(0);
const timer = ref(null);
const sliderRef = ref(null);

const currentSlide = computed(() => slides.value[currentIndex.value]);

const next = () => {
  currentIndex.value = (currentIndex.value + 1) % slides.value.length;
};

const prev = () => {
  currentIndex.value =
    (currentIndex.value - 1 + slides.value.length) % slides.value.length;
};

const goTo = (index) => {
  currentIndex.value = index;
};

const startAuto = () => {
  stopAuto();
  timer.value = setInterval(next, 3000);
};

const stopAuto = () => {
  if (timer.value) {
    clearInterval(timer.value);
    timer.value = null;
  }
};

onMounted(() => {
  startAuto();
  const el = sliderRef.value;
  if (el) {
    el.addEventListener('mouseenter', stopAuto);
    el.addEventListener('mouseleave', startAuto);
  }
});

onUnmounted(() => {
  stopAuto();
  const el = sliderRef.value;
  if (el) {
    el.removeEventListener('mouseenter', stopAuto);
    el.removeEventListener('mouseleave', startAuto);
  }
});
</script>
