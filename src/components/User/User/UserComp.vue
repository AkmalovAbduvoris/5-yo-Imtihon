<script setup>
import './User.css'
</script>
<template>
    <section class="user">
        <div class="container">
            <div class="userr__wrapper">
                <div class="user__top-wrapper">
                    <h2 class="user__title">Здравствуйте Зухриддин Темиров</h2>
                    <div class="user__right-wrapper">
                        <p class="user__price">Ваш счет: 2 3000 сум</p>
                        <p class="user__pay">Пополнить</p>
                    </div>
                </div>
                <div class="user__bottom-wrapper">
                    <router-link class="user__link" to="/user">Объявления</router-link>
                    <router-link class="user__link" to="/messages">Сообщения</router-link>
                    <router-link class="user__link" to="/payments">Платежи  и счёт</router-link>
                    <router-link class="user__link" to="/settings">Настройки</router-link>
                    <router-link class="user__link" to="/my">Мой бизнес</router-link>
                </div>
            </div>
        </div>
    </section>
</template>