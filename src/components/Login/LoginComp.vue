<script setup>
import './Login.css'
// import { useRouter } from 'vue-router';
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
const { t } = useI18n({useScope: 'global'})
// const router = useRouter()
let email = 'eve.holt@reqres.in';
let pass = 'cityslicka';
let a = ref(false)
let s = ref(false)
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
    a.value = true
    setTimeout(() => {
        window.location.href = '/'
    }, 3000);
}else{
    s.value = true
}

</script>
<template>
    <section class="login">
        <div class="container">
            <div class="login__wrapper">
                <div class="login__left-wrapper">
                    <h2 v-if="a" class="login__title"> {{t('login.title1')}}</h2>
                    <h2 v-if="s" class="login__title"> {{t('login.title2')}}</h2>
                    <p v-if="a" class="login__text">{{t('login.link1')}}</p>
                    <p v-if="s" class="login__text">{{t('login.link2')}}</p>
                    <div class="login__input-wrapper">
                        <p class="login__input-text">{{t('login.text1')}}</p>
                        <input class="login__inp" type="email" v-model="email">
                    </div>
                    <div class="login__input-wrapper">
                        <p class="login__input-text">{{t('login.text2')}}</p>
                        <input class="login__inp" type="password" v-model="pass">
                    </div>
                    <button class="login__left-btn" @click="POST">{{t('buttons.login')}}</button>
                    <p class="login__left-text">{{t('login.text3')}}</p>
                    <p class="login__left-recover">{{t('login.text4')}}</p>
                </div>
                <div class="login__right-wrapper">
                    <div class="login__card">
                        <img src="/img/login__kiwi.svg" width="50" height="26" alt="kiwi">
                        <p class="card__text">{{t('login.text5')}}</p>
                        <button class="card__right-btn">{{t('buttons.how')}}</button>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>