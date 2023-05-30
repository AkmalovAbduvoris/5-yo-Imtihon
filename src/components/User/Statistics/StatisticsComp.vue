<script setup>
import { ref } from 'vue'

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
                                <img src="img/statistics__img.jpg" width="49" height="49" alt="jpeg">
                                <h4 class="statistics__left-title">Срочно нужен программист yii2</h4>
                                <div class="statistics__text">
                                    <p class="statistics__left-text">2 000 000</p>
                                    <p class="statistics__left-text">6 000 000 сум</p>
                                </div>
                            </div>
                            <div class="statistics__right-wrapper">
                                <div class="statistics__text">
                                    <p class="statistics__right-text"># 345 002</p>
                                    <p class="statistics__right-text">С: 28 июнь</p>
                                    <p class="statistics__right-text">По: 28 июль</p>
                                </div>
                                <p class="statistics__right-green">Поднять</p>
                                <p class="statistics__right-blue">Рекламировать</p>
                                <button class="statistics__right-btn" @click="no">
                                    <img src="img/statistics__btn.svg" width="18" height="5" alt="button">
                                </button>
                            </div>
                        </div>
                        <div class="statistics__bottom-wrapper">
                            <p class="statistics__bottom-link">Статистика</p>
                            <p class="statistics__bottom-text">Просмотры: 195</p>
                            <p class="statistics__bottom-text">Тел.: 200</p>
                            <p class="statistics__bottom-text">В Избранном: 0</p>
                        </div>
                    </li>
                    <li class="statistics__item">
                        <div class="statistics__top-wrapper">
                            <div class="statistics__left-wrapper">
                                <img src="img/statistics__img.jpg" width="49" height="49" alt="jpeg">
                                <h4 class="statistics__left-title">Срочно нужен программист yii2</h4>
                                <div class="statistics__text">
                                    <p class="statistics__left-text">2 000 000</p>
                                    <p class="statistics__left-text">6 000 000 сум</p>
                                </div>
                            </div>
                            <div class="statistics__right-wrapper">
                                <div class="statistics__text">
                                    <p class="statistics__right-text"># 345 002</p>
                                    <p class="statistics__right-text">С: 28 июнь</p>
                                    <p class="statistics__right-text">По: 28 июль</p>
                                </div>
                                <p class="statistics__right-green">Поднять</p>
                                <p class="statistics__right-blue">Рекламировать</p>
                                <button class="statistics__right-btn" @click="no">
                                    <img src="img/statistics__btn.svg" width="18" height="5" alt="button">
                                </button>
                            </div>
                        </div>
                        <div class="statistics__bottom-wrapper">
                            <p class="statistics__bottom-link">Статистика</p>
                            <p class="statistics__bottom-text">Просмотры: 195</p>
                            <p class="statistics__bottom-text">Тел.: 200</p>
                            <p class="statistics__bottom-text">В Избранном: 0</p>
                        </div>
                    </li>
                    <li class="statistics__item">
                        <div class="statistics__top-wrapper">
                            <div class="statistics__left-wrapper">
                                <img src="img/statistics__img.jpg" width="49" height="49" alt="jpeg">
                                <h4 class="statistics__left-title">Срочно нужен программист yii2</h4>
                                <div class="statistics__text">
                                    <p class="statistics__left-text">2 000 000</p>
                                    <p class="statistics__left-text">6 000 000 сум</p>
                                </div>
                            </div>
                            <div class="statistics__right-wrapper">
                                <div class="statistics__text">
                                    <p class="statistics__right-text"># 345 002</p>
                                    <p class="statistics__right-text">С: 28 июнь</p>
                                    <p class="statistics__right-text">По: 28 июль</p>
                                </div>
                                <p class="statistics__right-green">Поднять</p>
                                <p class="statistics__right-blue">Рекламировать</p>
                                <button class="statistics__right-btn" @click="no">
                                    <img src="img/statistics__btn.svg" width="18" height="5" alt="button">
                                </button>
                            </div>
                        </div>
                        <div class="statistics__bottom-wrapper">
                            <p class="statistics__bottom-link">Статистика</p>
                            <p class="statistics__bottom-text">Просмотры: 195</p>
                            <p class="statistics__bottom-text">Тел.: 200</p>
                            <p class="statistics__bottom-text">В Избранном: 0</p>
                        </div>
                    </li>
                    <li class="statistics__item">
                        <div class="statistics__top-wrapper">
                            <div class="statistics__left-wrapper">
                                <img src="img/statistics__img.jpg" width="49" height="49" alt="jpeg">
                                <h4 class="statistics__left-title">Срочно нужен программист yii2</h4>
                                <div class="statistics__text">
                                    <p class="statistics__left-text">2 000 000</p>
                                    <p class="statistics__left-text">6 000 000 сум</p>
                                </div>
                            </div>
                            <div class="statistics__right-wrapper">
                                <div class="statistics__text">
                                    <p class="statistics__right-text"># 345 002</p>
                                    <p class="statistics__right-text">С: 28 июнь</p>
                                    <p class="statistics__right-text">По: 28 июль</p>
                                </div>
                                <p class="statistics__right-green">Поднять</p>
                                <p class="statistics__right-blue">Рекламировать</p>
                                <button class="statistics__right-btn" @click="no">
                                    <img src="img/statistics__btn.svg" width="18" height="5" alt="button">
                                </button>
                            </div>
                        </div>
                        <div class="statistics__bottom-wrapper">
                            <p class="statistics__bottom-link">Статистика</p>
                            <p class="statistics__bottom-text">Просмотры: 195</p>
                            <p class="statistics__bottom-text">Тел.: 200</p>
                            <p class="statistics__bottom-text">В Избранном: 0</p>
                        </div>
                    </li>
                    <li class="statistics__item">
                        <div class="statistics__top-wrapper">
                            <div class="statistics__left-wrapper">
                                <img src="img/statistics__img.jpg" width="49" height="49" alt="jpeg">
                                <h4 class="statistics__left-title">Срочно нужен программист yii2</h4>
                                <div class="statistics__text">
                                    <p class="statistics__left-text">2 000 000</p>
                                    <p class="statistics__left-text">6 000 000 сум</p>
                                </div>
                            </div>
                            <div class="statistics__right-wrapper">
                                <div class="statistics__text">
                                    <p class="statistics__right-text"># 345 002</p>
                                    <p class="statistics__right-text">С: 28 июнь</p>
                                    <p class="statistics__right-text">По: 28 июль</p>
                                </div>
                                <p class="statistics__right-green">Поднять</p>
                                <p class="statistics__right-blue">Рекламировать</p>
                                <button class="statistics__right-btn" @click="no">
                                    <img src="img/statistics__btn.svg" width="18" height="5" alt="button">
                                </button>
                            </div>
                        </div>
                        <div class="statistics__bottom-wrapper">
                            <p class="statistics__bottom-link">Статистика</p>
                            <p class="statistics__bottom-text">Просмотры: 195</p>
                            <p class="statistics__bottom-text">Тел.: 200</p>
                            <p class="statistics__bottom-text">В Избранном: 0</p>
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