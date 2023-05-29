<script setup>
import { RouterView } from 'vue-router'
import HeroComp from '../components/About/Hero/HeroComp.vue';
import FooterComp from '../components/Footer/FooterComp.vue';
import HeaderComp from '../components/Header/HeaderComp.vue';
import UserComp from '../components/User/User/UserComp.vue';

</script>
<template>
    <HeaderComp />
    <main>
        <HeroComp />
        <UserComp />
        <RouterView />
    </main>
    <FooterComp />
</template>