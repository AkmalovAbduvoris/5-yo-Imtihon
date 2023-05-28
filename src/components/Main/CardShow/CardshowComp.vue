<script setup>
import './Cardshow.css'
let props = defineProps({
    showmore : Object
})
</script>
<template>
    <router-link :to="{
        name : 'about',
        params : {
            id: props.showmore.id
        }
    }">
        <div class="cardshow__body">
                <img :src="props.showmore.image" width="254" height="300" :alt="props.showmore.title">
                <p class="card__title">{{ props.showmore.title }}</p>
                <p class="card__category">{{ props.showmore.category }}</p>
                <p class="card__price">Narxi: {{ props.showmore.price }}$</p>
        </div>
    </router-link>
</template>