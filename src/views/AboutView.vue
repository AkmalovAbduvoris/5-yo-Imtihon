<script setup>
import HeaderComp from '../components/Header/HeaderComp.vue';
import FooterComp from '../components/Footer/FooterComp.vue';
import ProductComp from '../components/About/Product/ProductComp.vue';
import CardshowComp from '../components/Main/CardShow/CardshowComp.vue';
import HeroComp from '../components/About/Hero/HeroComp.vue';
import axios from 'axios'
import { ref } from 'vue'
let obj = ref([])
async function fetch(){
    let res = await axios.get('https://fakestoreapi.com/products/')
    obj.value = res.data.splice(16, 20)
}
console.log();
fetch()
</script>
<template>
    <HeaderComp />
    <main>
        <HeroComp />
        <ProductComp />
        <section class="cardshow">
            <div class="container">
                <div class="cardshow__header">
                    <routerLink :to="{name: 'about',params:{id: obj.id} }" class="cardshow__link">Похожие объявления</routerLink>
                    <routerLink :to="{name: 'about',params:{id: obj.id} }"  class="cardshow__link">Обьявление автора</routerLink>
                </div>
                <div class="cardshow__wrapper">
                    <div  v-for="(item, index) in obj" :key="index">
                        <CardshowComp :showmore="item"/>
                    </div>
                </div>
            </div>
        </section>
    </main>
    <FooterComp/>
</template>