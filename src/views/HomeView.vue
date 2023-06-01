<script setup>
import FooterComp from '../components/Footer/FooterComp.vue';
import HeaderComp from '../components/Header/HeaderComp.vue';
import HeroComp from '../components/Main/Hero/HeroComp.vue';
import CarouselComp from '../components/Main/Carousel/CarouselComp.vue';
import ActComp from '../components/Main/Act/ActComp.vue';
import { RouterView } from 'vue-router'
import ShowComponen from '../components/Main/showComponen.vue';
</script>

<template>
  <HeaderComp /> 
  <main>
    <HeroComp />
    <ActComp />
    <RouterView />
    <CarouselComp />
    <ShowComponen />
  </main>
  <FooterComp />
</template>
