<script setup>
import axios from 'axios'
import { ref } from 'vue'
import FooterComp from '../components/Footer/FooterComp.vue';
import HeaderComp from '../components/Header/HeaderComp.vue';
import CardComp from '../components/Main/Card/CardComp.vue';
import HeroComp from '../components/Main/Hero/HeroComp.vue';
import CardshowComp from '../components/Main/CardShow/CardshowComp.vue';
import CarouselComp from '../components/Main/Carousel/CarouselComp.vue';
let data = ref([])
let obj = ref([])
let btnShow = ref(true)
let isOpen = ref(false)
async function fetch(){
  let res = await axios.get('https://fakestoreapi.com/products/')
  obj.value = res.data.splice(16, 20)
  data.value = res.data
}
function putId() {
  isOpen.value = !isOpen.value
  btnShow.value = false  
}
fetch()
</script>

<template>
  <HeaderComp /> 
  <main>
    <HeroComp />
    <section class="card">
      <div class="container">
        <div class="card__header-wrapper">
          <routerLink to="/" class="card__header-title">Новые объявления</routerLink>
          <routerLink to="best-product" class="card__header-title">Лучщие предложение</routerLink>
        </div>
        <div class="card__wrapper">
          <div v-for="(products, index) in data" :key="index">
            <CardComp :product="products"/>
          </div>
          <div class="show__more">
            <button @click="putId" v-if="btnShow" class="card__btn">Покозать еще</button>
          </div>
          <div v-if="isOpen" class="cardshow__wrapper">
            <div  v-for="(item, index) in obj" :key="index">
              <CardshowComp :showmore="item"/>
            </div>
          </div>
        </div>
      </div>
    </section>
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
