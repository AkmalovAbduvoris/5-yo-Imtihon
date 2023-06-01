<script setup>
import axios from 'axios'
import { ref } from 'vue'
import CardshowComp from './CardShow/CardshowComp.vue';
let obj = ref([])
async function fetch(){
  let res = await axios.get('https://fakestoreapi.com/products/')
  obj.value = res.data.splice(16, 20)
}
fetch()
</script>


<template>
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
</template>