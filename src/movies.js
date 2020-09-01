// Iteration 1: All directors? - Get the array of all directors.
let getAllDirectors = (dir) => {
  let result = [];
  dir.map((elem) => result.push(elem.director));
  return [...new Set(result)];
};
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
let howManyMovies = (arr) => {
  return arr.filter(
    (elem) =>
      elem.director == "Steven Spielberg" && elem.genre.includes("Drama")
  ).length;
};
// Iteration 3: All rates average - Get the average of all rates with 2 decimals
let ratesAverage = (arr) => {
  let total = 0;
  arr.map((elem) => {
    if (elem && elem.rate) {
      total += elem.rate;
    }
  });

  if (total == 0) {
    return 0;
  }

  let result = Number((total / arr.length).toFixed(2));
  return result;
};

// Iteration 4: Drama movies - Get the average of Drama Movies
const dramaMoviesRate = (arr) => {
  let drama = arr.filter((movies) => movies.genre.includes("Drama"));
  return drama.length > 0 ? ratesAverage(drama) : 0;
};

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
const orderByYear = (movies) => {
  return [...movies].sort(
    (a, b) => a.year - b.year || a.title.localeCompare(b.title)
  );
};

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
const orderAlphabetically = (movies) => {
  let mov = [...movies].sort((a, b) => a.title.localeCompare(b.title));
  let mov20 = mov.slice(0, 20);
  let mov20Arr = [];

  for (result of mov20) {
    mov20Arr.push(result.title);
  }
  return mov20Arr;
};
// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
