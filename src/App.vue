<template>
  <div class="min-h-screen bg-slate-100 text-slate-900">
    <AppHeader />

    <main class="max-w-6xl mx-auto px-4 pb-12 pt-6">
      <HeroSection
        :featured-products="featuredProducts"
        @scrollToProducts="scrollToProducts"
      />

      <section id="products" class="pt-4">
        <ProductFilters
          :categories="categories"
          v-model:activeCategory="activeCategory"
          v-model:search="search"
        />

        <ProductGrid
          :products="filteredProducts"
          @openDetail="openDetail"
        />
      </section>

    </main>
    <ContactSection />

    <ProductDetailModal
      :product="selectedProduct"
      @close="closeDetail"
    />
  </div>
</template>

<script setup>
import { ref, computed, onUnmounted } from 'vue';
import AppHeader from './components/AppHeader.vue';
import HeroSection from './components/HeroSection.vue';
import ProductFilters from './components/ProductFilters.vue';
import ProductGrid from './components/ProductGrid.vue';
import ProductDetailModal from './components/ProductDetailModal.vue';
import ContactSection from './components/ContactSection.vue';

import { categories, products } from './data/products';

const search = ref('');
const activeCategory = ref('all');
const selectedProduct = ref(null);

const filteredProducts = computed(() => {
  const term = search.value.trim().toLowerCase();

  return products.filter((p) => {
    const matchCategory =
      activeCategory.value === 'all' || p.category === activeCategory.value;
    if (!matchCategory) return false;
    if (!term) return true;

    const text = (
      p.name +
      ' ' +
      (p.shortDescription || '') +
      ' ' +
      (p.description || '') +
      ' ' +
      (p.paper || '') +
      ' ' +
      (p.finish || '') +
      ' ' +
      (p.size || '')
    ).toLowerCase();

    return text.includes(term);
  });
});

const featuredProducts = computed(() =>
  products.slice(0, 3).map((p) => {
    const cat = categories.find((c) => c.key === p.category);
    return {
      ...p,
      icon: cat?.icon || '📦',
    };
  })
);

const scrollToProducts = () => {
  const el = document.getElementById('products');
  if (el) el.scrollIntoView({ behavior: 'smooth' });
};

const openDetail = (product) => {
  selectedProduct.value = product;
  document.body.style.overflow = 'hidden';
};

const closeDetail = () => {
  selectedProduct.value = null;
  document.body.style.overflow = '';
};

onUnmounted(() => {
  document.body.style.overflow = '';
});
</script>
