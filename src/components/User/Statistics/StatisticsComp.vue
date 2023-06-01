<script setup>
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
const { t } = useI18n({useScope: 'global'})
let modal = ref(false)


function no(){
    modal.value = true
}
import './Statistics.css'
</script>
<template>
    <section class="statistics">
        <div class="container">
            <div class="statistics__wrapper">
                <ul class="statistics__list">
                    <li class="statistics__item">
                        <div class="statistics__top-wrapper">
                            <div class="statistics__left-wrapper">
                                <img src="/public/img/statistics__img.jpg" width="49" height="49" alt="jpeg">
                                <h4 class="statistics__left-title">{{t('user.title1')}}</h4>
                                <div class="statistics__text">
                                    <p class="statistics__left-text">2 000 000</p>
                                    <p class="statistics__left-text">{{t('user.pay1')}}</p>
                                </div>
                            </div>
                            <div class="statistics__right-wrapper">
                                <div class="statistics__text">
                                    <p class="statistics__right-text"># 345 002</p>
                                    <p class="statistics__right-text">{{t('user.data1')}}</p>
                                    <p class="statistics__right-text">{{t('user.data2')}}</p>
                                </div>
                                <p class="statistics__right-green">{{t('user.green')}}</p>
                                <p class="statistics__right-blue">{{t('user.blue')}}</p>
                                <button class="statistics__right-btn" @click="no">
                                    <img src="public/img/statistics__btn.svg" width="18" height="5" alt="button">
                                </button>
                            </div>
                        </div>
                        <div class="statistics__bottom-wrapper">
                            <p class="statistics__bottom-link">{{t('user.bottom1')}}</p>
                            <p class="statistics__bottom-text">{{t('user.bottom2')}}</p>
                            <p class="statistics__bottom-text">{{t('user.bottom3')}}</p>
                            <p class="statistics__bottom-text">{{t('user.bottom4')}}</p>
                        </div>
                    </li>
                    <li class="statistics__item">
                        <div class="statistics__top-wrapper">
                            <div class="statistics__left-wrapper">
                                <img src="/public/img/statistics__img.jpg" width="49" height="49" alt="jpeg">
                                <h4 class="statistics__left-title">{{t('user.title1')}}</h4>
                                <div class="statistics__text">
                                    <p class="statistics__left-text">2 000 000</p>
                                    <p class="statistics__left-text">{{t('user.pay1')}}</p>
                                </div>
                            </div>
                            <div class="statistics__right-wrapper">
                                <div class="statistics__text">
                                    <p class="statistics__right-text"># 345 002</p>
                                    <p class="statistics__right-text">{{t('user.data1')}}</p>
                                    <p class="statistics__right-text">{{t('user.data2')}}</p>
                                </div>
                                <p class="statistics__right-green">{{t('user.green')}}</p>
                                <p class="statistics__right-blue">{{t('user.blue')}}</p>
                                <button class="statistics__right-btn" @click="no">
                                    <img src="public/img/statistics__btn.svg" width="18" height="5" alt="button">
                                </button>
                            </div>
                        </div>
                        <div class="statistics__bottom-wrapper">
                            <p class="statistics__bottom-link">{{t('user.bottom1')}}</p>
                            <p class="statistics__bottom-text">{{t('user.bottom2')}}</p>
                            <p class="statistics__bottom-text">{{t('user.bottom3')}}</p>
                            <p class="statistics__bottom-text">{{t('user.bottom4')}}</p>
                        </div>
                    </li>
                    <li class="statistics__item">
                        <div class="statistics__top-wrapper">
                            <div class="statistics__left-wrapper">
                                <img src="/public/img/statistics__img.jpg" width="49" height="49" alt="jpeg">
                                <h4 class="statistics__left-title">{{t('user.title1')}}</h4>
                                <div class="statistics__text">
                                    <p class="statistics__left-text">2 000 000</p>
                                    <p class="statistics__left-text">{{t('user.pay1')}}</p>
                                </div>
                            </div>
                            <div class="statistics__right-wrapper">
                                <div class="statistics__text">
                                    <p class="statistics__right-text"># 345 002</p>
                                    <p class="statistics__right-text">{{t('user.data1')}}</p>
                                    <p class="statistics__right-text">{{t('user.data2')}}</p>
                                </div>
                                <p class="statistics__right-green">{{t('user.green')}}</p>
                                <p class="statistics__right-blue">{{t('user.blue')}}</p>
                                <button class="statistics__right-btn" @click="no">
                                    <img src="public/img/statistics__btn.svg" width="18" height="5" alt="button">
                                </button>
                            </div>
                        </div>
                        <div class="statistics__bottom-wrapper">
                            <p class="statistics__bottom-link">{{t('user.bottom1')}}</p>
                            <p class="statistics__bottom-text">{{t('user.bottom2')}}</p>
                            <p class="statistics__bottom-text">{{t('user.bottom3')}}</p>
                            <p class="statistics__bottom-text">{{t('user.bottom4')}}</p>
                        </div>
                    </li>
                    <li class="statistics__item">
                        <div class="statistics__top-wrapper">
                            <div class="statistics__left-wrapper">
                                <img src="/public/img/statistics__img.jpg" width="49" height="49" alt="jpeg">
                                <h4 class="statistics__left-title">{{t('user.title1')}}</h4>
                                <div class="statistics__text">
                                    <p class="statistics__left-text">2 000 000</p>
                                    <p class="statistics__left-text">{{t('user.pay1')}}</p>
                                </div>
                            </div>
                            <div class="statistics__right-wrapper">
                                <div class="statistics__text">
                                    <p class="statistics__right-text"># 345 002</p>
                                    <p class="statistics__right-text">{{t('user.data1')}}</p>
                                    <p class="statistics__right-text">{{t('user.data2')}}</p>
                                </div>
                                <p class="statistics__right-green">{{t('user.green')}}</p>
                                <p class="statistics__right-blue">{{t('user.blue')}}</p>
                                <button class="statistics__right-btn" @click="no">
                                    <img src="public/img/statistics__btn.svg" width="18" height="5" alt="button">
                                </button>
                            </div>
                        </div>
                        <div class="statistics__bottom-wrapper">
                            <p class="statistics__bottom-link">{{t('user.bottom1')}}</p>
                            <p class="statistics__bottom-text">{{t('user.bottom2')}}</p>
                            <p class="statistics__bottom-text">{{t('user.bottom3')}}</p>
                            <p class="statistics__bottom-text">{{t('user.bottom4')}}</p>
                        </div>
                    </li>
                    <li class="statistics__item">
                        <div class="statistics__top-wrapper">
                            <div class="statistics__left-wrapper">
                                <img src="/public/img/statistics__img.jpg" width="49" height="49" alt="jpeg">
                                <h4 class="statistics__left-title">{{t('user.title1')}}</h4>
                                <div class="statistics__text">
                                    <p class="statistics__left-text">2 000 000</p>
                                    <p class="statistics__left-text">{{t('user.pay1')}}</p>
                                </div>
                            </div>
                            <div class="statistics__right-wrapper">
                                <div class="statistics__text">
                                    <p class="statistics__right-text"># 345 002</p>
                                    <p class="statistics__right-text">{{t('user.data1')}}</p>
                                    <p class="statistics__right-text">{{t('user.data2')}}</p>
                                </div>
                                <p class="statistics__right-green">{{t('user.green')}}</p>
                                <p class="statistics__right-blue">{{t('user.blue')}}</p>
                                <button class="statistics__right-btn" @click="no">
                                    <img src="public/img/statistics__btn.svg" width="18" height="5" alt="button">
                                </button>
                            </div>
                        </div>
                        <div class="statistics__bottom-wrapper">
                            <p class="statistics__bottom-link">{{t('user.bottom1')}}</p>
                            <p class="statistics__bottom-text">{{t('user.bottom2')}}</p>
                            <p class="statistics__bottom-text">{{t('user.bottom3')}}</p>
                            <p class="statistics__bottom-text">{{t('user.bottom4')}}</p>
                        </div>
                    </li>
                </ul>
                <!-- MODAL -->
                <div v-if="modal" class="modal__wrapper">
                    <dir class="moadal">
                        <h1 class="modal__title">HICH NIMA YO'Q</h1>
                        <p class="modal__text">Agar shu yerga yozishga biror bir taklifingiz bo'lsa shu yerda o'z takliflaringizni bildiring</p>
                        <a class="modal__link" href="/">Telegramm</a>
                        <button class="modal__btn" @click="modal = false">back</button>
                    </dir>
                </div>
            </div>
        </div>
    </section>
</template>