<script setup>
import './User.css'
import { useI18n } from 'vue-i18n'
const { t } = useI18n({useScope: 'global'})
</script>
<template>
    <section class="user">
        <div class="container">
            <div class="userr__wrapper">
                <div class="user__top-wrapper">
                    <h2 class="user__title">{{t('user.title')}}</h2>
                    <div class="user__right-wrapper">
                        <p class="user__price">{{t('user.price')}}</p>
                        <p class="user__pay">{{t('user.pay')}}</p>
                    </div>
                </div>
                <div class="user__bottom-wrapper">
                    <router-link class="user__link" to="/user">{{t('user.text1')}}</router-link>
                    <router-link class="user__link" to="/messages">{{t('user.text2')}}</router-link>
                    <router-link class="user__link" to="/payments">{{t('user.text3')}}</router-link>
                    <router-link class="user__link" to="/settings">{{t('user.text4')}}</router-link>
                    <router-link class="user__link" to="/my">{{t('user.text5')}}</router-link>
                </div>
            </div>
        </div>
    </section>
</template>