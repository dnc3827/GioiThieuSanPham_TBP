<template>
  <article
    class="rounded-xl border border-slate-200 bg-white hover:border-slate-300 hover:shadow-md transition-all overflow-hidden"
  >
    <!-- Ảnh sản phẩm -->
    <img
      v-if="product.image"
      :src="product.image"
      :alt="product.name"
      class="w-full h-40 object-cover"
    />

    <div class="p-4 flex flex-col gap-3">
      <div class="flex items-start justify-between gap-2">
        <div>
          <div
            class="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-slate-100 text-[11px] text-slate-600 mb-1"
          >
            <span>{{ categoryMeta.icon }}</span>
            <span>{{ categoryMeta.label }}</span>
          </div>
          <h3 class="text-sm font-semibold text-slate-900">
            {{ product.name }}
          </h3>
        </div>
        <div class="text-right text-xs text-slate-600">
          Từ
          <div class="text-sm font-semibold text-slate-900">
            {{ product.minPrice }}
          </div>
        </div>
      </div>

      <p class="text-xs text-slate-600">
        {{ product.shortDescription }}
      </p>

      <div class="flex flex-wrap gap-1.5 text-[10px] text-slate-600">
        <span
          v-if="product.paper"
          class="px-2 py-1 rounded-full bg-slate-100"
        >
          {{ product.paper }}
        </span>
        <span
          v-if="product.finish"
          class="px-2 py-1 rounded-full bg-slate-100"
        >
          {{ product.finish }}
        </span>
        <span
          v-if="product.size"
          class="px-2 py-1 rounded-full bg-slate-100"
        >
          {{ product.size }}
        </span>
      </div>

      <!-- Nút xanh lá, chữ trắng -->
      <button
        @click="$emit('openDetail', product)"
        class="mt-1 inline-flex items-center justify-center gap-1.5 text-[11px] font-medium px-3 py-1.5 rounded-full bg-emerald-500 text-white hover:bg-emerald-600"
      >
        Xem chi tiết
        <span class="text-[13px]">→</span>
      </button>
    </div>
  </article>
</template>

<script setup>
import { computed } from 'vue';
import { categories } from '../data/products';

const props = defineProps({
  product: {
    type: Object,
    required: true,
  },
});

defineEmits(['openDetail']);

const categoryMeta = computed(() => {
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
