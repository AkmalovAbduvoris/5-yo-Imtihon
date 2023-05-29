<script setup>
import './Addproduct.css'
</script>
<template>
    <section class="addproduct">
        <div class="container">
            <div class="addproduct__wrapper">
                <h3 class="addproduct__title">Цена</h3>
                <div class="addproduct__top-inputs">
                    <input class="addproduct__inp-num" type="number">
                    <select class="addproduct__price-select">
                        <option value="">Сум</option>
                        <option value="">Доллар</option>
                        <option value="">Рубль</option>
                    </select>
                    <div class="addproduct__checkbox-wrapper">
                        <input type="checkbox">
                        <p class="addproduct__check-text">Договорная</p>
                    </div>
                </div>
                <p class="addproduct__title">Количество комнат*</p>
                <div class="addproduct__center-inputs">
                    <input class="addproduct__inp-num" type="number">
                    <input class="addproduct__inp-num" type="number">
                    <input class="addproduct__inp-num" type="number">
                </div>
                <p class="addproduct__title">Расположение*</p>               
                <div class="addproduct__top-wrapper">
                    <div class="addproduct__top-item">
                        <div class="addproduct__checkbox-wrapper">
                            <input type="checkbox">
                            <p class="addproduct__check-text">В городе</p>
                        </div>
                    </div>
                    <div class="addproduct__top-item">
                        <div class="addproduct__checkbox-wrapper">
                            <input type="checkbox">
                            <p class="addproduct__check-text">Вдоль трассы</p>
                        </div>
                    </div>
                    <div class="addproduct__top-item">
                        <div class="addproduct__checkbox-wrapper">
                            <input type="checkbox">
                            <p class="addproduct__check-text">В дачном массиве</p>
                        </div>
                    </div>
                </div>
                <div class="addproduct__top-wrapper">
                    <div class="addproduct__top-item">
                        <div class="addproduct__checkbox-wrapper">
                            <input type="checkbox">
                            <p class="addproduct__check-text">В пригороде</p>
                        </div>
                    </div>
                    <div class="addproduct__top-item">
                        <div class="addproduct__checkbox-wrapper">
                            <input type="checkbox">
                            <p class="addproduct__check-text">Возле водоема, реки</p>
                        </div>
                    </div>
                    <div class="addproduct__top-item">
                        <div class="addproduct__checkbox-wrapper">
                            <input type="checkbox">
                            <p class="addproduct__check-text">На закрытой территории</p>
                        </div>
                    </div>
                </div>
                <div class="addproduct__top-wrapper">
                    <div class="addproduct__top-item">
                        <div class="addproduct__checkbox-wrapper">
                            <input type="checkbox">
                            <p class="addproduct__check-text">В сельской местности</p>
                        </div>
                    </div>
                    <div class="addproduct__top-item">
                        <div class="addproduct__checkbox-wrapper">
                            <input type="checkbox">
                            <p class="addproduct__check-text">В предгорьях</p>
                        </div>
                    </div>
                </div>
                <ul class="addproduct__center-list">
                    <li class="addproduct__center-item">
                        <p class="addproduct__title">Этажность дома*</p>
                        <input class="addproduct__inp-num" type="number">
                    </li>
                    <li class="addproduct__center-item">
                        <p class="addproduct__title">Высота потолков</p>
                        <input class="addproduct__inp-num" type="number">
                    </li>
                    <li class="addproduct__center-item">
                        <p class="addproduct__title">Площадь участка*</p>
                        <input class="addproduct__inp-num" type="number">
                    </li>
                </ul>
                <p class="addproduct__title">Состояние дома</p>
                <div class="addproduct__top-wrapper">
                    <div class="addproduct__top-item">
                        <div class="addproduct__checkbox-wrapper">
                            <input type="checkbox">
                            <p class="addproduct__check-text">Авторский проект</p>
                        </div>
                    </div>
                    <div class="addproduct__top-item">
                        <div class="addproduct__checkbox-wrapper">
                            <input type="checkbox">
                            <p class="addproduct__check-text">Требует ремонта</p>
                        </div>
                    </div>
                    <div class="addproduct__top-item">
                        <div class="addproduct__checkbox-wrapper">
                            <input type="checkbox">
                            <p class="addproduct__check-text">Черновая отделка</p>
                        </div>
                    </div>
                </div>
                <div class="addproduct__top-wrapper">
                    <div class="addproduct__top-item">
                        <div class="addproduct__checkbox-wrapper">
                            <input type="checkbox">
                            <p class="addproduct__check-text">Средний ремонт</p>
                        </div>
                    </div>
                    <div class="addproduct__top-item">
                        <div class="addproduct__checkbox-wrapper">
                            <input type="checkbox">
                            <p class="addproduct__check-text">Предчистовая отделка</p>
                        </div>
                    </div>
                    <div class="addproduct__top-item">
                        <div class="addproduct__checkbox-wrapper">
                            <input type="checkbox">
                            <p class="addproduct__check-text">Под снос</p>
                        </div>
                    </div>
                </div>
                <div class="addproduct__top-wrapper">
                    <div class="addproduct__top-item">
                        <div class="addproduct__checkbox-wrapper">
                            <input type="checkbox">
                            <p class="addproduct__check-text">Евроремонт</p>
                        </div>
                    </div>
                    <div class="addproduct__top-item">
                        <div class="addproduct__checkbox-wrapper">
                            <input type="checkbox">
                            <p class="addproduct__check-text">Не достроен</p>
                        </div>
                    </div>
                </div>
                <ul class="addproduct__select-list">
                    <li class="addproduct__select-item">
                        <p class="addproduct__title">Тип дома</p>
                        <select class="addproduct__price-select2">
                            <option value="">Коттедж</option>
                            <option value="">2</option>
                            <option value="">3</option>
                        </select>
                    </li>
                    <li class="addproduct__select-item">
                        <p class="addproduct__title">Электричество</p>
                        <select class="addproduct__price-select">
                            <option value="">Есть возможность подключения</option>
                            <option value="">2</option>
                            <option value="">3</option>
                        </select>
                    </li>
                </ul>
                <p class="addproduct__title">Отопление</p>
                <div class="addproduct__top-wrapper">
                    <div class="addproduct__top-item">
                        <div class="addproduct__checkbox-wrapper">
                            <input type="checkbox">
                            <p class="addproduct__check-text">Центральное</p>
                        </div>
                    </div>
                    <div class="addproduct__top-item">
                        <div class="addproduct__checkbox-wrapper">
                            <input type="checkbox">
                            <p class="addproduct__check-text">На жидком топлив</p>
                        </div>
                    </div>
                    <div class="addproduct__top-item">
                        <div class="addproduct__checkbox-wrapper">
                            <input type="checkbox">
                            <p class="addproduct__check-text">Без отопления</p>
                        </div>
                    </div>
                </div>
                <div class="addproduct__top-wrapper">
                    <div class="addproduct__top-item">
                        <div class="addproduct__checkbox-wrapper">
                            <input type="checkbox">
                            <p class="addproduct__check-text">На газе</p>
                        </div>
                    </div>
                    <div class="addproduct__top-item">
                        <div class="addproduct__checkbox-wrapper">
                            <input type="checkbox">
                            <p class="addproduct__check-text">Электрическое</p>
                        </div>
                    </div>
                </div>
                <div class="addproduct__top-wrapper">
                    <div class="addproduct__top-item">
                        <div class="addproduct__checkbox-wrapper">
                            <input type="checkbox">
                            <p class="addproduct__check-text">На твердом топливе</p>
                        </div>
                    </div>
                    <div class="addproduct__top-item">
                        <div class="addproduct__checkbox-wrapper">
                            <input type="checkbox">
                            <p class="addproduct__check-text">Смешанное</p>
                        </div>
                    </div>
                </div>
                <p class="addproduct__title">Электричество</p>
                <p class="addproduct__bolt">Есть возможность подключения</p>
                <textarea class="addproduct__textarea" name="" id="" cols="69" rows="10"></textarea>
                <p class="addproduct__title">9000 знаков осталос</p>
                <div class="addproduct__file-wrapper">
                    <input class="addproduct__file" type="file" id="file1">
                    <label class="addproduct__file-label" for="file1"></label>
                    <input class="addproduct__file" type="file" id="file2">
                    <label class="addproduct__file-label" for="file2"></label>
                    <input class="addproduct__file" type="file" id="file3">
                    <label class="addproduct__file-label" for="file3"></label>
                    <input class="addproduct__file" type="file" id="file4">
                    <label class="addproduct__file-label" for="file4"></label>
                    <input class="addproduct__file" type="file" id="file5">
                    <label class="addproduct__file-label" for="file5"></label>
                </div>
                <div class="addproduct__file-wrapper">
                    <input class="addproduct__file" type="file" id="file6">
                    <label class="addproduct__file-label" for="file6"></label>
                    <input class="addproduct__file" type="file" id="file7">
                    <label class="addproduct__file-label" for="file7"></label>
                    <input class="addproduct__file" type="file" id="file8">
                    <label class="addproduct__file-label" for="file8"></label>
                    <input class="addproduct__file" type="file" id="file9">
                    <label class="addproduct__file-label" for="file9"></label>
                    <input class="addproduct__file" type="file" id="file10">
                    <label class="addproduct__file-label" for="file10"></label>
                </div>
                <div class="addproduct__location-wrapper">
                    <h3 class="addproduct__location-title">Местоположение объекта</h3>
                    <ul class="addproduct__select-list">
                        <li class="addproduct__select-item">
                            <p class="addproduct__title">Регион</p>
                            <select class="addproduct__price-select2">
                                <option value="">Ташкент</option>
                                <option value="">2</option>
                                <option value="">3</option>
                            </select>
                        </li>
                        <li class="addproduct__select-item">
                            <p class="addproduct__title">Город / Район</p>
                            <select class="addproduct__price-select2">
                                <option value="">Мирза Улугбекский район</option>
                                <option value="">2</option>
                                <option value="">3</option>
                            </select>
                        </li>
                    </ul>
                    <iframe class="addproduct__iframe-location" src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d864.846682633086!2d69.1710602765167!3d41.30675959999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sru!2s!4v1685342335012!5m2!1sru!2s" width="653" height="376" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    <div class="addproduct__last-wrapper">
                        <p class="addproduct__title">Телефонный номер</p>
                        <input class="addproduct__last-inp" type="number">
                        <p class="addproduct__title">Email-адрес</p>
                        <input class="addproduct__last-inp" type="email">
                        <p class="addproduct__title">Контактный лицо</p>
                        <input class="addproduct__last-inp" type="text">
                        <div class="addproduct__btn-wrapper">
                            <button class="addproduct__last-btn">Добавить обьявления бесплатно</button>
                            <p class="addproduct__last-link">Предпросмотр</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>