<script setup>
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'


const photos = [
    "corusel__one.png",
    "corusel__two.png",
    "corusel__three.png",
    "corusel__four.jpg",
];
</script>
<template>
    <carousel :autoplay="3000"  :wrap-around="true" :items-to-show="3">
      <slide v-for="photo in photos" :key="photo">
        <img :src="`public/img/${photo}`" width="359" height="238"  alt="Corusel">
      </slide>
  
      <template #addons>
        <navigation />
        <pagination />
      </template>
    </carousel>
  </template>