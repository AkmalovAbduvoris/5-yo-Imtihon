<script setup>
import './Hero.css'
import { useI18n } from 'vue-i18n'
const { t } = useI18n({useScope: 'global'})
</script>
<template>
    <section class="hero">
        <div class="container">
            <div class="hero__wrapper">
                <ul class="hero__list">
                    <li class="hero__item">
                        <div class="hero__item-wrapper">
                            <img class="hero__item-img" src="/img/hero__itemone.svg" alt="Автомобили">
                            <p class="hero__item-text">{{t('hero.text1')}}</p>
                        </div>
                    </li>
                    <li class="hero__item">
                        <div class="hero__item-wrapper">
                            <img class="hero__item-img" src="/img/hero__itemtwo.svg" alt=" Недвижимость">
                            <p class="hero__item-text">{{t('hero.text2')}}</p>
                        </div>
                    </li>
                    <li class="hero__item">
                        <div class="hero__item-wrapper">
                            <img class="hero__item-img" src="/img/hero__itemthree.svg" alt=" Электроника">
                            <p class="hero__item-text">{{t('hero.text3')}}</p>
                        </div>
                    </li>
                    <li class="hero__item">
                        <div class="hero__item-wrapper">
                            <img class="hero__item-img" src="/img/hero__itemfour.svg" alt=" Работа">
                            <p class="hero__item-text">{{t('hero.text4')}}</p>
                        </div>
                    </li>
                    <li class="hero__item">
                        <div class="hero__item-wrapper">
                            <img class="hero__item-img" src="/img/hero__itemfive.svg" alt="Личные вещи">
                            <p class="hero__item-text">{{t('hero.text5')}}</p>
                        </div>
                    </li>
                    <li class="hero__item">
                        <div class="hero__item-wrapper">
                            <img class="hero__item-img" src="/img/hero__itemsix.svg" alt=" Дом и Сад">
                            <p class="hero__item-text">{{t('hero.text6')}}</p>
                        </div>
                    </li>
                    <li class="hero__item">
                        <div class="hero__item-wrapper">
                            <img class="hero__item-img" src="/img/hero__itemseven.svg" alt="Стройка и ремонт">
                            <p class="hero__item-text">{{t('hero.text7')}}</p>
                        </div>
                    </li>
                    <li class="hero__item">
                        <div class="hero__item-wrapper">
                            <img class="hero__item-img" src="/img/hero__itemnine.svg" alt=" Хобби и Спорт">
                            <p class="hero__item-text">{{t('hero.text8')}}</p>
                        </div>
                    </li>
                    <li class="hero__item">
                        <div class="hero__item-wrapper">
                            <img class="hero__item-img" src="/img/hero__itemeight.svg" alt=" Бизнес и услуги">
                            <p class="hero__item-text">{{t('hero.text9')}}</p>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </section>
</template>