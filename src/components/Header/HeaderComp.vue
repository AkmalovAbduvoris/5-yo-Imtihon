<script setup>
import './Header.css'
import { ref } from 'vue'
import { useRouter } from 'vue-router';
import { useI18n } from 'vue-i18n'
const { t, locale } = useI18n({useScope: 'global'})
const router = useRouter()
let user = ref(false)
let login = ref(false)
let settings = ref(false)
let token = window.localStorage.getItem('token')

if(token){
    user.value = true
}else{
    login.value = true
}
if(!localStorage.getItem('token')){
    router.push('/login')
}
function swichLang(e){
    locale.value = e.target.value
    window.localStorage.setItem('lang' , locale.value)
}
</script>
<template>
    <header class="header">
        <div class="container">
            <div class="header__wrapper">
                <router-link to="/" class="logo__wrapper">
                    <img src="/img/logo.svg" alt="logo">
                    <p class="header__text">{{$t('header.text')}}</p>
                </router-link>
                <nav class="nav">
                    <ul class="nav__list">
                        <li class="nav__item"><router-link class="nav__link" to="/add">{{$t('header.lione')}}</router-link></li>
                        <li class="nav__item"><router-link class="nav__link" to="/product">{{$t('header.litwo')}}</router-link></li>
                        <li class="nav__item"><router-link class="nav__link" to="/">{{$t('header.lithree')}}</router-link></li>
                        <li class="nav__item"><router-link class="nav__link" to="/">{{$t('header.lifour')}}</router-link></li>
                    </ul>
                    <form class="nav__language">
                        <input class="radio" type="radio"  @click="swichLang" name="lang" id="uz" value="uz">
                        <label class="label label-1" id="uz" for="uz">O'z</label>
                        <span>|</span>
                        <input class="radio" type="radio" @click="swichLang" name="lang" id="ru" value="ru">
                        <label class="label label-2"  id="ru" for="ru">Рус</label>
                    </form>
                    <div class="nav__reg">
                        <router-Link to="/login" v-if="login">{{t('header.login')}}</router-Link>
                        <div class="user__wrapper">
                            <router-link to="/user" v-if="user">
                                <p>Abduvoris</p>
                            </router-link>
                            <div @mouseenter="settings ='true'" @mouseleave="settings = false">
                                <img v-if="user" src="/img/user.jpg" width="40" height="40" alt="user">
                                <Transition>
                                    <router-link v-if="settings" class="header__settings1" to="/user">{{t('user.text1')}}</router-link>
                                </Transition>
                                <Transition>
                                    <router-link v-if="settings" class="header__settings2" to="/messages">{{t('user.text2')}}</router-link>
                                </Transition>
                                <Transition>
                                    <router-link v-if="settings" class="header__settings3" to="/payments">{{t('user.text3')}}</router-link>
                                </Transition>
                                <Transition>
                                    <router-link v-if="settings" class="header__settings4" to="/settings">{{t('user.text4')}}</router-link>
                                </Transition>
                                <Transition>
                                    <router-link v-if="settings" class="header__settings5" to="/my">{{t('user.text5')}}</router-link>
                                </Transition>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    </header>
</template>