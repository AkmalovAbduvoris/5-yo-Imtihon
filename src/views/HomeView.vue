<script setup>
import axios from 'axios'
import { ref } from 'vue'
import FooterComp from '../components/Footer/FooterComp.vue';
import HeaderComp from '../components/Header/HeaderComp.vue';
import HeroComp from '../components/Main/Hero/HeroComp.vue';
import CardshowComp from '../components/Main/CardShow/CardshowComp.vue';
import CarouselComp from '../components/Main/Carousel/CarouselComp.vue';
import ActComp from '../components/Main/Act/ActComp.vue';
import { RouterView } from 'vue-router'


let data = ref([])
let obj = ref([])
async function fetch(){
  let res = await axios.get('https://fakestoreapi.com/products/')
  obj.value = res.data.splice(16, 20)
  data.value = res.data
}
fetch()
</script>

<template>
  <HeaderComp /> 
  <main>
    <HeroComp />
    <ActComp />
    <RouterView />
    <CarouselComp />
    <section class="cardshow">
      <div class="container">
        <div class="cardshow__wrapper">
          <div class="cardshow__wrapper">
            <div  v-for="(item, index) in obj" :key="index">
              <CardshowComp :showmore="item"/>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
  <FooterComp />
</template>
