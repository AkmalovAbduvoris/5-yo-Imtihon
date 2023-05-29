<script setup>
import './Hero.css'
</script>
<template>
    <section class="heroo">
        <div class="container">
            <div class="heroo__wrapper">
                <div class="heroo__right-wrapper">
                <p class="heroo__right-text">Любая категория</p>
                <p class="heroo__center-text">Что будем искать ?</p>
                <p class="heroo__left-text">По всей Узбекистану</p>
                <button class="heroo__right-btn">Найти</button>
                </div>
                <div class="heroo__left__wrapper">
                    <router-Link to="/add">
                        <button class="heroo__left-btn">Добавить обьявления</button>
                    </router-Link>
                </div>
            </div>
        </div>
    </section>
</template>