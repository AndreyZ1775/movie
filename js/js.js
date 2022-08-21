"use strict";

// 1)
const numberOfFilms = +prompt('how many films you watch?', '');

// 2)
const personalMovieDB = {
    count: numberOfFilms,
    movies: {

    },
    actors: {
        
    },
    genres: [],
    privat: false
};

// 3)
const a = prompt('one is your last watched films?', ''),
      b = prompt('how much you rate it?', ''),
      c = prompt('one is your last watched films?', ''),
      d = prompt('how much you rate it?', '');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);