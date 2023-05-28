<script setup>
import './Hero.css'
</script>
<template>
    <section class="hero">
        <div class="container">
            <div class="heroo__wrapper">
                <div class="hero__right-wrapper">
                <p class="hero__right-text">Любая категория</p>
                <p class="hero__center-text">Что будем искать ?</p>
                <p class="hero__left-text">По всей Узбекистану</p>
                <button class="hero__right-btn">Найти</button>
                </div>
                <div class="hero__left__wrapper">
                    <router-Link to="/add">
                        <button class="hero__left-btn">Добавить обьявления</button>
                    </router-Link>
                </div>
            </div>
        </div>
    </section>
</template>