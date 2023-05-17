"use strict"

let numberOfFilms;

function start() {
    numberOfFilms = +prompt("How many movies have you already seen?", "");

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt("How many movies have you already seen?", "");
    }
}

start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};



function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
        let lastSeenMovie = prompt("What is your last seen movie?", "");
        let movieRating = prompt("How can you rate it?", "");
    
        if (lastSeenMovie != null && movieRating != null && lastSeenMovie != '' && movieRating != '' && lastSeenMovie.length < 50) {
            personalMovieDB.movies[lastSeenMovie] = movieRating; 
        } else {
            i--;
        }
    }
}

rememberMyFilms();


function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        alert('Kinda small amount of seen movies');
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        alert("Classic movie enjoyer!");
    } else if (personalMovieDB.count >= 30) {
        alert("Fantastic amount of films!!!")
    } else {
        alert("Error");
    }
}

detectPersonalLevel();

function showDB(hidden) {
    if (!hidden) {
        console.log(personalMovieDB);
    }
}

showDB(personalMovieDB.privat);

function writeYourGenres() {
    for (let i = 1; i <= 3; i++) {
        const genre = prompt(`Your favourite genre by number ${i}`, "");
        personalMovieDB.genres[i - 1] = genre; 
    }
}

writeYourGenres();

console.log(personalMovieDB);