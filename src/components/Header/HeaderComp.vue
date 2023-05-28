<script setup>
import './Header.css'

</script>
<template>
    <header class="header">
        <div class="container">
            <div class="header__wrapper">
                <div class="logo__wrapper">
                    <img src="/img/logo.svg" alt="logo">
                    <p class="header__text">Продай, найди, купи все что пожелаешь…</p>
                </div>
                <nav class="nav">
                    <ul class="nav__list">
                        <li class="nav__item"><router-link class="nav__link" to="/">Объявления</router-link></li>
                        <li class="nav__item"><router-link class="nav__link" to="/add">Магазины</router-link></li>
                        <li class="nav__item"><router-link class="nav__link" to="/">Для бизнеса</router-link></li>
                        <li class="nav__item"><router-link class="nav__link" to="/">Помощь</router-link></li>
                    </ul>
                    <form class="nav__language">
                        <input class="radio" type="radio" name="lang" id="uz" value="uz">
                        <label class="label label-1" for="uz">O'z</label>
                        <span>|</span>
                        <input class="radio" type="radio" name="lang" id="ru" value="ru">
                        <label class="label label-2" for="ru">Рус</label>
                    </form>
                    <div class="nav__reg"> <p>Вход    |    Регистрация</p></div>
                </nav>
            </div>
        </div>
    </header>
</template>