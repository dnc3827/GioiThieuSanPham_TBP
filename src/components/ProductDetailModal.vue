<template>
  <div
    v-if="product"
    class="fixed inset-0 z-30 flex items-center justify-center bg-black/30"
  >
    <div
      class="max-w-md w-full mx-4 rounded-xl border border-slate-200 bg-white shadow-lg"
    >
     <img
      v-if="product.image"
      :src="product.image"
      :alt="product.name"
      class="w-full h-48 object-cover"
    />
      <div class="p-4">
        <div class="flex items-start justify-between gap-3 mb-2">
          <div>
            <div class="text-xs text-slate-500 mb-1 flex items-center gap-1">
              <span
                class="inline-flex items-center justify-center w-5 h-5 rounded-full bg-slate-100 text-[11px]"
                >{{ categoryMeta.icon }}</span
              >
              <span>{{ categoryMeta.label }}</span>
            </div>
            <h3 class="text-base font-semibold text-slate-900">
              {{ product.name }}
            </h3>
          </div>
          <button
            @click="$emit('close')"
            class="text-slate-400 hover:text-slate-700 text-lg leading-none"
          >
            ✕
          </button>
        </div>

        <p class="text-sm text-slate-700 mb-3">
          {{ product.description || product.shortDescription }}
        </p>

        <div class="grid grid-cols-2 gap-3 text-xs mb-4">
          <div class="rounded-lg border border-slate-200 bg-slate-50 px-3 py-2">
            <div class="text-slate-500 mb-1">Chất liệu</div>
            <div class="text-slate-900 font-medium">
              {{ product.paper || 'Tuỳ chỉnh theo yêu cầu' }}
            </div>
          </div>
          <div class="rounded-lg border border-slate-200 bg-slate-50 px-3 py-2">
            <div class="text-slate-500 mb-1">Bề mặt hoàn thiện</div>
            <div class="text-slate-900 font-medium">
              {{ product.finish || 'Cán mờ / cán bóng / ép kim' }}
            </div>
          </div>
          <div class="rounded-lg border border-slate-200 bg-slate-50 px-3 py-2">
            <div class="text-slate-500 mb-1">Kích thước gợi ý</div>
            <div class="text-slate-900 font-medium">
              {{ product.size || 'Theo bộ nhận diện thương hiệu' }}
            </div>
          </div>
          <div class="rounded-lg border border-slate-200 bg-slate-50 px-3 py-2">
            <div class="text-slate-500 mb-1">Giá tham khảo</div>
            <div class="text-slate-900 font-semibold">
              {{ product.minPrice }}+
            </div>
          </div>
        </div>

        <div class="flex justify-between items-center text-xs">
          <div class="text-slate-500">
            Liên hệ để nhận báo giá chi tiết theo số lượng &amp; yêu cầu riêng.
          </div>
          <button
            @click="$emit('close')"
            class="ml-3 inline-flex items-center justify-center px-3 py-1.5 rounded-full bg-slate-900 text-white text-[11px] font-semibold hover:bg-slate-800"
          >
            Đã hiểu
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { categories } from '../data/products';

const props = defineProps({
  product: {
    type: Object,
    default: null,
  },
});

defineEmits(['close']);

const categoryMeta = computed(() => {
  if (!props.product) {
    return { label: '', icon: '' };
  }
  const found = categories.find((c) => c.key === props.product.category);
  return (
    found || {
      key: 'other',
      label: 'Khác',
      icon: '📦',
    }
  );
});
</script>
