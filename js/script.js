/* Задание на урок:

1) Первую часть задания повторить по уроку

2) Создать функцию showMyDB, которая будет проверять свойство privat. Если стоит в позиции
false - выводит в консоль главный объект программы

3) Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос 
"Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных
genres

P.S. Функции вызывать не обязательно*/

'use strict';

// Код возьмите из предыдущего домашнего задания

let numberOfFilms;

function start() {

    numberOfFilms = +prompt('Сколько фильмов Вы посмотрели?', '');

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {

        numberOfFilms = prompt('Сколько фильмов Вы посмотрели?', '');

    }

}

// start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

function rememberMyFims() {
    for (let i = 0; i < 2; i++) {
        const a = prompt('Один из последних просмотренных фильмов?', ''),
            b = prompt('На сколько оцените его?', '');
        if (a != null && b != null && a != '' && b != '' && a.length < 50) {
            personalMovieDB.movies[a] = b;

            console.log('done');
        } else {
            console.log('error');
            i--;
        }
    }

}

// rememberMyFims();

function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
    console.log("Просмотрено довольно мало фильмов");
} else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
    console.log("Вы классический зритель");
} else if (personalMovieDB.count > 30) {
    console.log("Вы киноман");
} else {
    console.log("Произошла ошибка");
}
}

// detectPersonalLevel();

function showMyDB(hidden) {
    if (!hidden) {
        console.log(personalMovieDB);
    } 
}

/*function showMyDB() {
    if (personalMovieDB.privat === false) {
        console.log(personalMovieDB);
    } else {
        console.log('error');
    }
}*/
// тоже правильно

showMyDB(personalMovieDB.privat);


function writeYourGeneres() {

    for (let i = 1; i <= 3; i++) {
        // const genre = prompt(`Ваш любиный жанр под номером ${i}`, '');
        // personalMovieDB.genres[i - 1] = genre;
        personalMovieDB.genres[i - 1] = prompt(`Ваш любиный жанр под номером ${i}`, '');

    }
}

/*function writeYourGeneres() {

    for (let i = 1; i <= 3; i++) {
        const genre = prompt('Ваш любиный жанр под номером ${}', '');
        personalMovieDB.genres.push(genre);

    }
}
console.log(showMyDB());*/
// мой вариант

writeYourGeneres();

