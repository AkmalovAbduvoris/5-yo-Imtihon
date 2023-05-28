<script setup>
import './Card.css'
let props = defineProps({
    product : Object
})
</script>
<template>
    <router-link :to="{
        name : 'about',
        params :{
            id: props.product.id
        }
    }"> 
    <div class="card__body" :v-if="props.product.id">
            <img :src="props.product.image" width="254" height="300" :alt="props.product.title">
            <p class="card__title">{{ props.product?.title }}</p>
            <p class="card__category">{{ props.product?.category }}</p>
            <p class="card__price">Narxi: {{ props.product?.price }}  $</p>
    </div>    
</router-link>
</template>