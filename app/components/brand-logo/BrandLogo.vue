<script setup lang="ts">
import { type BrandLogoProps, brandLogoVariants } from '.';

withDefaults(defineProps<BrandLogoProps>(), {
  size: 'default',
});
</script>

<template>
  <img
    src="~assets/img/brand-logo.png"
    alt="Brand logo"
    :class="brandLogoVariants({ size })"
  />
</template>
