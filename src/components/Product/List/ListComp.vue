<script setup>
import './List.css'
import { useI18n } from 'vue-i18n'
const { t } = useI18n({useScope: 'global'})

</script>
<template>
    <section class="list">
        <div class="container">
            <div class="list__wrapper">
                <input class="list__input" type="text" placeholder="Введите название обявления или">
                <img class="list__img" src="img/list__search.svg" alt="search">
                <div class="list__text-wrapper">
                    <p class="list__text-blue">{{t('list.text1')}}</p>
                    <p class="list__text-aqua">{{t('list.text2')}}</p>
                    <p class="list__text-green">{{t('list.text3')}}</p>
                    <p class="list__text-red">{{t('list.text4')}}</p>
                    <p class="list__text-location">{{t('list.text5')}}</p>
                    <p class="list__text-location">{{t('list.text6')}}</p>
                    <p class="list__text-location">{{t('list.text7')}}</p>
                </div>
                <div class="list__rubric-wrapper">
                    <p class="rubric__text">{{t('list.text8')}}</p>
                    <div class="list__rubric-btns">
                        <div class="list__btn-wrapper">
                            <p class="list__btn-text">{{t('list.text9')}}</p>
                            <button class="list__btn">
                                <img src="/img/product__x.svg" width="13" height="13" alt="x">
                            </button>
                        </div>
                        <div class="list__btn-wrapper">
                            <p class="list__btn-text">{{t('list.text10')}}</p>
                            <button class="list__btn">
                                <img src="/img/product__x.svg" width="13" height="13" alt="x">
                            </button>
                        </div>
                    </div>
                </div>
                <div class="list__range-wrapper">
                    <p class="rubric__text">{{t('list.text11')}}</p>
                    <input class="list__inp-range" type="range">
                </div>
                <div class="list__detalies-wrapper">
                    <div class="list__detalies-text-wrapper">
                        <p class="list__detalies-text">{{t('list.text12')}}</p>
                        <p class="list__detalies-text">{{t('list.text13')}}</p>
                        <p class="list__detalies-text">{{t('list.text14')}}</p>
                    </div>
                    <button class="list__detalies-btn">{{t('buttons.apply')}}</button>
                </div>
            </div>
        </div>
    </section>
</template>