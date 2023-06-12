"use strict"

const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function() {
        personalMovieDB.count = +prompt("How many movies have you already seen?", "");
    
        while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt("How many movies have you already seen?", "");
        }
    },
    rememberMyFilms: function() {
        for (let i = 0; i < 2; i++) {
            let lastSeenMovie = prompt("What is your last seen movie?", "").trim();
            let movieRating = prompt("How can you rate it?", "").trim();
        
            if (lastSeenMovie != null && movieRating != null && lastSeenMovie != '' && movieRating != '' && lastSeenMovie.length < 50) {
                personalMovieDB.movies[lastSeenMovie] = movieRating; 
            } else {
                i--;
            }
        }
    },
    detectPersonalLevel: function() {
        if (personalMovieDB.count < 10) {
            alert('Kinda small amount of seen movies');
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
            alert("Classic movie enjoyer!");
        } else if (personalMovieDB.count >= 30) {
            alert("Fantastic amount of films!!!")
        } else {
            alert("Error");
        }
    },
    showDB: function(hidden) {
        if (!hidden) {
            console.log(personalMovieDB);
        }
    },
    toggleVisibleMyDB: function() {
        if (personalMovieDB.privat) {
            personalMovieDB.privat = false;
        } else {
            personalMovieDB.privat = true;
        }
    },
    writeYourGenres: function() {
        for (let i = 1; i <= 3; i++) {
            const genre = prompt(`Your favourite genre by number ${i}`, "");

            if(genre === '' || genre == null) {
                console.log('You have entered incorrect data or have not entered smth');
                i--;
            } else {
                personalMovieDB.genres[i - 1] = genre; 
            }
        }

        personalMovieDB.genres.forEach((item, i) => {
            console.log(`Your favourite genre ${i + 1} - is ${item}`);
        });
    }
};

