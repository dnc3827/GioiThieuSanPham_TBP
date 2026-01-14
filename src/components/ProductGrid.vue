<template>
  <div
    v-if="products.length"
    class="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5"
  >
    <ProductCard
      v-for="p in products"
      :key="p.id"
      :product="p"
      @openDetail="$emit('openDetail', $event)"
    />
  </div>

  <div
    v-else
    class="text-center text-sm text-slate-600 bg-white border border-dashed border-slate-300 rounded-xl py-8 mt-4"
  >
    Không tìm thấy sản phẩm phù hợp. Thử đổi bộ lọc hoặc từ khóa tìm kiếm.
  </div>
</template>

<script setup>
import ProductCard from './ProductCard.vue';

defineProps({
  products: {
    type: Array,
    required: true,
  },
});

defineEmits(['openDetail']);
</script>
