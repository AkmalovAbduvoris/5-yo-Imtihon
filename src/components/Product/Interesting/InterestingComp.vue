<script setup>
import './Interesting.css'
import { useI18n } from 'vue-i18n'
const { t } = useI18n({useScope: 'global'})
</script>
<template>
    <section class="interesting">
        <div class="container">
            <div class="interesting__wrapper">
                <img src="/public/img/interesting__bg.svg" alt="bg">
                <h3 class="interseting__title">{{t('interesting.title')}}</h3>
            </div>
        </div>
    </section>
</template>