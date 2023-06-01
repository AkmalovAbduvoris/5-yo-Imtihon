<script setup>
import './Hero.css'
import { useI18n } from 'vue-i18n'
const { t } = useI18n({useScope: 'global'})
</script>
<template>
    <section class="heroo">
        <div class="container">
            <div class="heroo__wrapper">
                <div class="heroo__right-wrapper">
                <p class="heroo__right-text">{{t('heroo.text1')}}</p>
                <p class="heroo__center-text">{{t('heroo.text2')}}</p>
                <p class="heroo__left-text">{{t('heroo.text3')}}</p>
                <button class="heroo__right-btn">{{t('buttons.find')}}</button>
                </div>
                <div class="heroo__left__wrapper">
                    <router-Link to="/add">
                        <button class="heroo__left-btn">{{t('buttons.add')}}</button>
                    </router-Link>
                </div>
            </div>
        </div>
    </section>
</template>