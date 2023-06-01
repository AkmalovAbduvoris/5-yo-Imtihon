<script setup>
import './Product.css'
import axios from 'axios'
import { ref } from 'vue'
import { useRoute } from 'vue-router'
const route = useRoute()
let id = route.params.id
let obj = ref({})
let num1= ref('99891 166 ****')
let num2 = ref('99891 166 ****')
async function fetch(){
    let arr = await axios.get('https://fakestoreapi.com/products/' + id)
    obj.value = arr.data
}
function Clicked1(){
    num1.value = '99891 166 3787'
}
function Clicked2(){
    num2.value = '99891 166 8737'
}
fetch()
</script>
<template>
    <section class="product">
        <div class="container">
            <div class="product__wrapper">
                <p class="product__text">Объявления / Ташкент Недвижимость / Ташкент Квартиры / Ташкент Продажа / Новостройки Ташкент</p>
                <h2 class="product__title">{{ obj?.title }}</h2>
                <div class="product__card">
                    <div class="product__center">
                        <div class="product__images">
                            <img class="product__img" :src="obj?.image" width="85" height="85" :alt="obj?.title">
                            <img class="product__img" :src="obj?.image" width="85" height="85" :alt="obj?.title">
                            <img class="product__img" :src="obj?.image" width="85" height="85" :alt="obj?.title">
                            <img class="product__img" :src="obj?.image" width="85" height="85" :alt="obj?.title">
                            <img class="product__img" :src="obj?.image" width="85" height="85" :alt="obj?.title">
                        </div>
                        <div class="product__images-right">
                            <img class="product__img" :src="obj.image" width="456" height="456" :alt="obj.title">
                        </div>
                    </div>
                    <div class="product__center-text-wrapper">
                        <div class="product__top-text-wrapper">
                            <p class="product__top-text">Артикул: 4418970</p>
                            <p class="product__top-text">обновлено: 28.04.17 добавлено: 28.04.17</p>
                        </div>
                        <h3 class="product__price">{{ obj.price }}y.e</h3>
                        <p class="product__center-location">Ташкент, Ташкентская область, Юнусабадский район Ташкент,</p>
                        <div class="product__center-phone">
                            <p class="product__center-number">{{ num1 }}</p>
                            <button class="product__center-btn" @click="Clicked1">Покозать польностю</button>
                        </div>
                        <div class="product__center-phone">
                            <p class="product__center-number">{{ num2 }}</p>
                            <button class="product__center-btn" @click="Clicked2">Покозать польностю</button>
                        </div>
                        <p class="product__center-user">Автор обьявлении: <span class="product__user">Зухриддин Темиров</span></p>
                        <div class="product__center-buttons">
                            <button class="product__button">Написать автору</button>
                            <button class="product__button">Предложить свою цену</button>
                        </div>
                        <div class="product__center-table">
                            <ul class="product__list">
                                <li class="product__item">
                                    <p class="product__item-text">Количество комнат:</p>
                                    <p class="product__item-link">6</p>
                                </li>
                                <li class="product__item">
                                    <p class="product__item-text">Общая площадь:</p>
                                    <p class="product__item-link">40 м2</p>
                                </li>
                                <li class="product__item">
                                    <p class="product__item-text">Этаж:</p>
                                    <p class="product__item-link">32</p>
                                </li>
                                <li class="product__item">
                                    <p class="product__item-text">Этажность дома:</p>
                                    <p class="product__item-link">6</p>
                                </li>
                                <li class="product__item">
                                    <p class="product__item-text">Состояние квартиры:</p>
                                    <p class="product__item-link">Первая сдача </p>
                                </li>
                                <li class="product__item">
                                    <p class="product__item-text">Этаж:</p>
                                    <p class="product__item-link">32</p>
                                </li>
                                <li class="product__item">
                                    <p class="product__item-text">Планировка</p>
                                    <p class="product__item-link">Раздельная</p>
                                </li>
                                <li class="product__item">
                                    <p class="product__item-text">Год постройки/сдачи</p>
                                    <p class="product__item-link">Сдача в 2017</p>
                                </li>
                                <li class="product__item">
                                    <p class="product__item-text">Ремонт</p>
                                    <p class="product__item-link">Авторский проект</p>
                                </li>
                                <li class="product__item">
                                    <p class="product__item-text">Санузел</p>
                                    <p class="product__item-link">2 санузла и более</p>
                                </li>
                                <li class="product__item">
                                    <p class="product__item-text">Меблирована</p>
                                    <p class="product__item-link">Да</p>
                                </li>
                                <li class="product__item">
                                    <p class="product__item-text">Высота потолков</p>
                                    <p class="product__item-link">32</p>
                                </li>
                                <li class="product__item">
                                    <p class="product__item-text">Рядом есть</p>
                                    <p class="product__item-link">Больница, поликлиника, Детская, площадка, Детский сад, Остановки, Парк, зелёная зона, Развлекательные заведения, Рестораны, кафе</p>
                                </li>
                            </ul>
                            <div class="product__center-bottom">
                                <p class="product__bottom-text">
                                    Срочно продаётся 3х ком на 1 этоже 7 этажном кирпичном доме. Новостройка Голден Хаус жылой комплекс Етти Чинор Очень качественный и дорогой ремонт. Комнаты полнастю разделные болшые. 2 сан узла. Для лишних вещей есть кладовка.Ремонт шыкарный обсалютно новый. <br><br>Ремонт делолся из очень дорогова материяла. Дорогая класическая кухонная мебель. Джаккузи,Тёплые полы в каждой комнате. Дорогие люстры вовсех комнатах решодки на окнах. Теретория охранается. Всё предусмотренно для детей деские площядки качели итд. Торг наместе. Торопитесь продаю нужны денги. Первый золотой этаж и паследний в этом коплексе. Торопитесь.
                                </p>
                                <div class="product__bottom-view">
                                    <p class="product__bottom-watched">Просмотры:10958</p>
                                    <p class="product__bottom-report">Пожаловатся</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>