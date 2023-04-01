"use strict"

const numberOfFilms = +prompt("How many movies have you already seen?", "");
// console.log(numberOfFilms);
const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const lastSeenMovie = prompt("What is your last seen movie?", ""),
      movieRating = prompt("How can you rate it?", ""),
      lastSeenMovie2 = prompt("What is your last seen movie?", ""),
      movieRating2 = prompt("How can you rate it?", "");

personalMovieDB.movies[lastSeenMovie] = movieRating; // квадратні скобки для виключення конфлікту типів змінних отриманих від користувача 
personalMovieDB.movies[lastSeenMovie2] = movieRating2;

// console.log(personalMovieDB);