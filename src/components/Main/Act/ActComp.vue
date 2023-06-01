<script setup>
import { useI18n } from 'vue-i18n'
const { t } = useI18n({useScope: 'global'})
</script>

<template>
    <section class="act">
        <div class="container">
            <div class="act__wrapper">
                <div class="card__header-wrapper">
                    <routerLink to="/" class="card__header-title">{{t('act.title1')}}</routerLink>
                    <routerLink to="/best" class="card__header-title">{{t('act.title2')}}</routerLink>
                </div>
            </div>
        </div>
    </section>
</template>