<script setup>
import axios from 'axios';
import { ref } from 'vue';
import CardComp from './Card/CardComp.vue';
import CardshowComp from './CardShow/CardshowComp.vue';
import { useI18n } from 'vue-i18n'
const { t } = useI18n({useScope: 'global'})
  
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
    <section class="card">
    <div class="container">
      <div class="card__wrapper">
        <div v-for="(products, index) in data" :key="index">
          <CardComp :product="products"/>
        </div>
        <div class="show__more">
          <button @click="putId" v-if="btnShow" class="card__btn">{{t('card.show')}}</button>
        </div>
        <div v-if="isOpen" class="cardshow__wrapper">
          <div  v-for="(item, index) in obj" :key="index">
            <CardshowComp :showmore="item"/>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>