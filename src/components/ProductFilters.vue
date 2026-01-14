<template>
  <div class="flex flex-wrap items-end gap-4 mb-4">
    <div>
      <h2 class="text-xl md:text-2xl font-semibold mb-1">
        Danh mục sản phẩm giấy
      </h2>
      <p class="text-xs md:text-sm text-slate-600">
        Lọc theo hạng mục hoặc tìm kiếm theo tên để xem các mẫu phù hợp.
      </p>
    </div>
  </div>

  <div
    class="flex flex-col md:flex-row gap-3 md:items-center md:justify-between mb-6"
  >
    <div class="flex flex-wrap gap-2">
      <button
        v-for="cat in categories"
        :key="cat.key"
        @click="$emit('update:activeCategory', cat.key)"
        class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border text-xs md:text-[13px] transition-colors"
        :class="
          activeCategory === cat.key
            ? 'bg-slate-900 text-white border-slate-900'
            : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50'
        "
      >
        <span>{{ cat.icon }}</span>
        <span>{{ cat.label }}</span>
      </button>
    </div>

    <div class="w-full md:w-72">
      <div
        class="relative flex items-center border border-slate-200 rounded-full bg-white px-3 py-1.5"
      >
        <span class="text-slate-400 text-sm mr-2">🔍</span>
        <input
          :value="search"
          @input="$emit('update:search', $event.target.value)"
          type="text"
          placeholder="Tìm kiếm sản phẩm..."
          class="w-full bg-transparent text-sm outline-none placeholder:text-slate-400"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  categories: {
    type: Array,
    required: true,
  },
  activeCategory: {
    type: String,
    required: true,
  },
  search: {
    type: String,
    required: true,
  },
});

defineEmits(['update:activeCategory', 'update:search']);
</script>
