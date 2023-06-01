<script setup>
import './Footer.css'
import { ref } from 'vue';
import { useI18n } from 'vue-i18n'
const { t } = useI18n({useScope: 'global'})
let show1 = ref(true);
let show2 = ref(true);
let show3 = ref(true);
let show4 = ref(true);
let show5 = ref(false);
let show6 = ref(false);
let show7 = ref(false);
let show8 = ref(false);
function isOpen1(){
    show1.value = !show1.value
}
function isOpen2(){
    show2.value = !show2.value
}
function isOpen3(){
    show3.value = !show3.value
}
function isOpen4(){
    show4.value = !show4.value
}
function isOpen5(){
    show5.value = !show5.value
}
function isOpen6(){
    show6.value = !show6.value
}
function isOpen7(){
    show7.value = !show7.value
}
function isOpen8(){
    show8.value = !show8.value
}
</script>
<template>
    <footer class="footer">
        <div class="footer__top-wrapper">
            <div class="container">
                <div class="footer__wrapper">
                    <div class="logo__wrapper">
                        <img src="/img/logob.svg" alt="logo">
                        <p class="footer__text">{{t('footer.text1')}}</p>
                    </div>
                    <p class="footer_top-text">{{t('footer.text2')}}</p>
                    <div class="footer__top-imgs">
                        <img src="/public/img/footer__store.svg" alt="app store">
                        <img src="/public/img/footer__play.svg" alt="google play">
                    </div>
                </div>
            </div>
        </div>
        <div class="footer__bottom-wrapper">
            <div class="container">
                <ul class="footer__list">
                    <li class="footer__item">
                        <h3 @click="isOpen1" class="footer__item-title">{{t('hero.text1')}}</h3>
                        <ul v-if="show1">
                            <li>
                                <a class="footer__item-link" href="/"> Легковые авто</a>
                            </li>
                            <li>
                                <a class="footer__item-link" href="/">Мото</a>
                            </li>
                            <li>
                                <a class="footer__item-link" href="/">Автобусы</a>
                            </li>
                            <li>
                                <a class="footer__item-link" href="/">Грузовые авто</a>
                            </li>
                            <li>
                                <a class="footer__item-link" href="/">Сельхозтехника</a>
                            </li>
                            <li>
                                <a class="footer__item-link" href="/">Запчасти и Аксессуары</a>
                            </li>
                            <li>
                                <a class="footer__item-link" href="/">Прицепы и Спецтехника</a>
                            </li>
                            <li>
                                <a class="footer__item-link" href="/">Водный и Другой транспортa</a>
                            </li>
                        </ul>
                    </li>
                    <li class="footer__item">
                        <h3 @click="isOpen2" class="footer__item-title">{{t('hero.text2')}}</h3>
                        <ul v-if="show2">
                            <li>
                                <a class="footer__item-link" href="/">Аренда квартир</a>
                            </li>
                            <li>
                                <a class="footer__item-link" href="/">Аренда домов</a>
                            </li>
                            <li>
                                <a class="footer__item-link" href="/">Аренда гаражей и Стоянок</a>
                            </li>
                            <li>
                                <a class="footer__item-link" href="/">Продажа квартир</a>
                            </li>
                            <li>
                                <a class="footer__item-link" href="/">Продажа домов</a>
                            </li>
                            <li>
                                <a class="footer__item-link" href="/">Продажа земли</a>
                            </li>
                            <li>
                                <a class="footer__item-link" href="/">Продажа гаражей/Стоянок</a>
                            </li>
                            <li>
                                <a class="footer__item-link" href="/">Аренда помещений</a>
                            </li>
                            <li>
                                <a class="footer__item-link" href="/">Продажа помещений</a>
                            </li>
                            <li>
                                <a class="footer__item-link" href="/">Прочая недвижимость</a>
                            </li>
                            <li>
                                <a class="footer__item-link" href="/">Обмен недвижимости</a>
                            </li>
                            <li>
                                <a class="footer__item-link" href="/">Коммерческая недвижимость</a>
                            </li>
                        </ul>
                    </li>
                    <li @click="isOpen3" class="footer__item">
                        <h3 class="footer__item-title">{{t('hero.text3')}}</h3>
                        <ul v-if="show3">
                            <li>
                                <a class="footer__item-link" href="/">Телефоны</a>
                            </li>
                            <li>
                                <a class="footer__item-link" href="/">Компьютеры</a>
                            </li>
                            <li>
                                <a class="footer__item-link" href="/">Ноутбуки, планшеты</a>
                            </li>
                            <li>
                                <a class="footer__item-link" href="/">Оргтехника и расходники</a>
                            </li>
                            <li>
                                <a class="footer__item-link" href="/">ТВ,Фото,Видео и Аудио</a>
                            </li>
                            <li>
                                <a class="footer__item-link" href="/">Игры и Приставки</a>
                            </li>
                            <li>
                                <a class="footer__item-link" href="/">Техника для дома и Для себя</a>
                            </li>
                            <li>
                                <a class="footer__item-link" href="/">Климатическое оборудование</a>
                            </li>
                            <li>
                                <a class="footer__item-link" href="/">Аксессуары и Комплектующие</a>
                            </li>
                            <li>
                                <a class="footer__item-link" href="/">Техника для наблюдения</a>
                            </li>
                            <li>
                                <a class="footer__item-link" href="/">Прочая электроника</a>
                            </li>
                        </ul>
                    </li>
                    <li @click="isOpen4" class="footer__item">
                        <h3 class="footer__item-title">{{t('hero.text5')}}</h3>
                        <ul v-if="show4">
                            <li>
                                <a class="footer__item-link" href="/">Одежда, обувь, аксессуары</a>
                            </li>
                            <li>
                                <a class="footer__item-link" href="/">Детская одежда и обувь</a>
                            </li>
                            <li>
                                <a class="footer__item-link" href="/">Детские товары и Игрушки</a>
                            </li>
                            <li>
                                <a class="footer__item-link" href="/">Школьникам</a>
                            </li>
                            <li>
                                <a class="footer__item-link" href="/">Часы и украшения</a>
                            </li>
                            <li>
                                <a class="footer__item-link" href="/">Товары для красоты и здоровья</a>
                            </li>
                            <li>
                                <a class="footer__item-link" href="/">Разные вещи</a>
                            </li>
                        </ul>
                    </li>
                    <li @click="isOpen5" class="footer__item">
                        <h3 class="footer__item-title">{{t('hero.text6')}}</h3>
                        <ul v-if="show5">
                            <li>
                                <a class="footer__item-link" href="/"> Товары для интерьера</a>
                                </li>
                            <li>
                                <a class="footer__item-link" href="/">Товары для сада</a>
                                </li>
                            <li>
                                <a class="footer__item-link" href="/">Растения</a>
                                </li>
                            <li>
                                <a class="footer__item-link" href="/">Продукты питания</a>
                                </li>
                            <li>
                                <a class="footer__item-link" href="/">Посуда и Кухонная утварь</a>
                                </li>
                            <li>
                                <a class="footer__item-link" href="/">Хоз.инвентарь и Бытовая химия</a>
                                </li>
                            <li>
                                <a class="footer__item-link" href="/">Канцтовары и Расходные</a>
                                </li>
                            <li>
                                <a class="footer__item-link" href="/">Прочие товары для дома</a>
                                </li>
                        </ul>
                    </li>
                    <li @click="isOpen6" class="footer__item">
                        <h3 class="footer__item-title">{{t('hero.text10')}}</h3>
                        <ul v-if="show6">
                            <li>
                                <a class="footer__item-link" href="/"> Двери и окна</a>
                            </li>
                            <li>
                                <a class="footer__item-link" href="/">Сантехника</a>
                            </li>
                            <li>
                                <a class="footer__item-link" href="/">Стройматериалы</a>
                            </li>
                            <li>
                                <a class="footer__item-link" href="/">Инструменты</a>
                            </li>
                        </ul>
                    </li>
                    <li @click="isOpen7" class="footer__item">
                        <h3 class="footer__item-title">{{t('hero.text11')}}</h3>
                        <ul v-if="show7">
                            <li>
                                <a class="footer__item-link" href="/">Антиквариат и Коллекции</a>
                            </li>
                            <li>
                                <a class="footer__item-link" href="/">Музыкальные инструменты</a>
                            </li>
                            <li>
                                <a class="footer__item-link" href="/">Велосипеды</a>
                            </li>
                            <li>
                                <a class="footer__item-link" href="/">Товары для спорта и отдыха</a>
                            </li>
                            <li>
                                <a class="footer__item-link" href="/">Книги/Журналы</a>
                            </li>
                            <li>
                                <a class="footer__item-link" href="/">CD/DVD/Пластинки/Кассеты</a>
                            </li>
                            <li>
                                <a class="footer__item-link" href="/">Билеты и путешествия</a>
                            </li>
                            <li>
                                <a class="footer__item-link" href="/">Охота и рыбалка</a>
                            </li>
                        </ul>
                    </li>
                    <li @click="isOpen8" class="footer__item">
                        <h3 class="footer__item-title"> {{t('hero.text9')}}</h3>
                        <ul v-if="show8">
                            <li>
                                <a class="footer__item-link" href="/"> Сырьё и материалы</a>
                            </li>
                            <li>
                                <a class="footer__item-link" href="/">Оборудование и аренда</a>
                            </li>
                            <li>
                                <a class="footer__item-link" href="/">Производство и обработка</a>
                            </li>
                            <li>
                                <a class="footer__item-link" href="/">Продажа бизнеса и партнерство</a>
                            </li>
                            <li>
                                <a class="footer__item-link" href="/">Финансовые услуги/Бухгалтерия</a>
                            </li>
                            <li>
                                <a class="footer__item-link" href="/">Услуги для красоты и здоровья</a>
                            </li>
                            <li>
                                <a class="footer__item-link" href="/">Услуги курьера и доставки</a>
                            </li>
                            <li>
                                <a class="footer__item-link" href="/">Реклама, Полиграфия и Маркетинг</a>
                            </li>
                            <li>
                                <a class="footer__item-link" href="/">Няни, Сиделки и Домработницы</a>
                            </li>
                            <li>
                                <a class="footer__item-link" href="/">Обучение, курсы и репетиторы</a>
                            </li>
                            <li>
                                <a class="footer__item-link" href="/">Фото, видео, искусство и дизайн</a>
                            </li>
                            <li>
                                <a class="footer__item-link" href="/">Перевод и Набор текста</a>
                            </li>
                            <li>
                                <a class="footer__item-link" href="/">Юридические услуги</a>
                            </li>
                            <li>
                                <a class="footer__item-link" href="/">Прокат товаров</a>
                            </li>
                            <li>
                                <a class="footer__item-link" href="/">Туризм и спорт</a>
                            </li>
                            <li>
                                <a class="footer__item-link" href="/">Праздники и мероприятия</a>
                            </li>
                            <li>
                                <a class="footer__item-link" href="/">Перевозки и Аренда авто</a>
                            </li>
                            <li>
                                <a class="footer__item-link" href="/">Услуги спецтехники</a>
                            </li>
                            <li>
                                <a class="footer__item-link" href="/">Автосервис</a>
                            </li>
                            <li>
                                <a class="footer__item-link" href="/">Услуги такси</a>
                            </li>
                            <li>
                                <a class="footer__item-link" href="/">Химчистка и стирка</a>
                            </li>
                            <li>
                                <a class="footer__item-link" href="/">Пошив одежды и Обуви</a>
                            </li>
                            <li>
                                <a class="footer__item-link" href="/">Ювелирные услуги</a>
                            </li>
                            <li>
                                <a class="footer__item-link" href="/">Питание и доставка еды</a>
                            </li>
                            <li>
                                <a class="footer__item-link" href="/">Уход за животными</a>
                            </li>
                            <li>
                                <a class="footer__item-link" href="/">Другие услуги</a>
                            </li>
                        </ul>
                    </li>
                </ul>
                <div class="footer__more">
                    <button class="footer__btn">{{t('card.show')}}</button>
                </div>
                <div class="foooter__bottom">
                    <router-Link class="footer__link" to="/">{{t('header.lifive')}}</router-Link>
                    <router-Link class="footer__link" to="/add">{{t('header.lione')}}</router-Link>
                    <router-Link class="footer__link" to="/product">{{t('header.litwo')}}</router-Link>
                    <router-Link class="footer__link" to="/">{{t('header.lifour')}}</router-Link>
                    <router-Link class="footer__link" to="/">{{t('header.lisix')}}</router-Link>
                    <router-Link class="footer__link" to="/">{{t('header.liseven')}}</router-Link>
                    <router-Link class="footer__link" to="/">{{t('header.lieight')}}</router-Link>
                </div>
            </div>
        </div>
    </footer>
</template>