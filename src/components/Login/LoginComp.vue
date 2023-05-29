<script setup>
import { useRouter } from 'vue-router';

const router = useRouter()
import './Login.css'
let email = 'eve.holt@reqres.in';
let pass = 'cityslicka';
function POST() {
    fetch('https://reqres.in/api/login',{
        headers: {'Content-Type' : 'application/json'},
        method: 'POST',
        body: JSON.stringify({
            "email": email,
            "password": pass
        })
    }).then(res => res.json())
    .then(data => {
        if(data.token){
            window.localStorage.setItem('token', data.token)
            location.reload()
        }
    })
}
if(localStorage.getItem('token')){
    router.push('/')
}

</script>
<template>
    <section class="login">
        <div class="container">
            <div class="login__wrapper">
                <div class="login__left-wrapper">
                    <h2 class="login__title">Ваша регистрация завершена!</h2>
                    <p class="login__text">Вы успешно зарегистрированы на сайте киви и ваше пароль отправлен в виде смс на ваше телефонный номер</p>
                    <div class="login__input-wrapper">
                        <p class="login__input-text">Введите email или номер телефона</p>
                        <input class="login__inp" type="email" v-model="email">
                    </div>
                    <div class="login__input-wrapper">
                        <p class="login__input-text">Пароль</p>
                        <input class="login__inp" type="password" v-model="pass">
                    </div>
                    <button class="login__left-btn" @click="POST">Войти</button>
                    <p class="login__left-text">или</p>
                    <p class="login__left-recover">Восстоновить ваше пароль</p>
                </div>
                <div class="login__right-wrapper">
                    <div class="login__card">
                        <img src="img/login__kiwi.svg" width="50" height="26" alt="kiwi">
                        <p class="card__text">Откройте для себя целую плошадку для продаже</p>
                        <button class="card__right-btn">Как это делать?</button>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>