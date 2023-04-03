"use strict"

const numberOfFilms = prompt("How many movies have you already seen?", "");
// console.log(numberOfFilms);
const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

for (let i = 0; i < 2; i++) {
    let lastSeenMovie = prompt("What is your last seen movie?", "");
    let movieRating = prompt("How can you rate it?", "");

    if (lastSeenMovie != null && movieRating != null && lastSeenMovie != '' && movieRating != '' && lastSeenMovie.length < 50) {
        personalMovieDB.movies[lastSeenMovie] = movieRating; 
    } else {
        i--;
    }
}

if (personalMovieDB.count < 10) {
    alert('Kinda small amount of seen movies');
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    alert("Classic movie enjoyer!");
} else if (personalMovieDB.count >= 30) {
    alert("Fantastic amount of films!!!")
} else {
    alert("Error");
}

console.log(personalMovieDB);