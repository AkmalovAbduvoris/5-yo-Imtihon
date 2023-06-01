<script setup>
import FooterComp from '../components/Footer/FooterComp.vue';
import HeaderComp from '../components/Header/HeaderComp.vue';
import Show from '../components/Main/shopComponen.vue';
import ShowComponen from '../components/Main/showComponen.vue';
import ListCompVue from '../components/Product/List/ListComp.vue'
import InterestingComp from '../components/Product/Interesting/InterestingComp.vue'

</script>
<template>
    <HeaderComp />
    <main>
        <ListCompVue />
        <Show />
        <InterestingComp />
        <ShowComponen />
    </main>
    <FooterComp />
</template>