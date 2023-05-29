<script setup>
import './Header.css'
import { ref } from 'vue'
import { useRouter } from 'vue-router';
const router = useRouter()
let user = ref(false)
let login = ref(false)
let settings = ref(false)
let token = window.localStorage.getItem('token')
console.log(token);
if(token){
    user.value = true
}else{
    login.value = true
}
if(!localStorage.getItem('token')){
    router.push('/login')
}
</script>
<template>
    <header class="header">
        <div class="container">
            <div class="header__wrapper">
                <router-link to="/" class="logo__wrapper">
                    <img src="/img/logo.svg" alt="logo">
                    <p class="header__text">Продай, найди, купи все что пожелаешь…</p>
                </router-link>
                <nav class="nav">
                    <ul class="nav__list">
                        <li class="nav__item"><router-link class="nav__link" to="/">Объявления</router-link></li>
                        <li class="nav__item"><router-link class="nav__link" to="/add">Магазины</router-link></li>
                        <li class="nav__item"><router-link class="nav__link" to="/login">Для бизнеса</router-link></li>
                        <li class="nav__item"><router-link class="nav__link" to="/">Помощь</router-link></li>
                    </ul>
                    <form class="nav__language">
                        <input class="radio" type="radio" name="lang" id="uz" value="uz">
                        <label class="label label-1" for="uz">O'z</label>
                        <span>|</span>
                        <input class="radio" type="radio" name="lang" id="ru" value="ru">
                        <label class="label label-2" for="ru">Рус</label>
                    </form>
                    <div class="nav__reg">
                        <router-Link to="/login" v-if="login"> Вход    |    Регистрация</router-Link>
                        <div class="user__wrapper">
                            <router-Link to="/user" v-if="user">
                                <p>Abduvoris</p>
                            </router-Link>
                            <div @mouseenter="settings ='true'" @mouseleave="settings = false">
                                <img src="/public/img/user.jpg" width="40" height="40" alt="user">
                                <Transition>
                                    <router-link v-if="settings" class="header__settings1" to="/user">Объявления</router-link>
                                </Transition>
                                <Transition>
                                    <router-link v-if="settings" class="header__settings2" to="/messages">Сообщения</router-link>
                                </Transition>
                                <Transition>
                                    <router-link v-if="settings" class="header__settings3" to="/payments">Платежи  и счёт</router-link>
                                </Transition>
                                <Transition>
                                    <router-link v-if="settings" class="header__settings4" to="/settings">Настройки</router-link>
                                </Transition>
                                <Transition>
                                    <router-link v-if="settings" class="header__settings5" to="/my">Мой бизнес</router-link>
                                </Transition>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    </header>
</template>