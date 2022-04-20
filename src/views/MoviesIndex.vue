<script>
import axios from "axios";
export default {
  data: function () {
    return {
      movies: [],
      titleFilter: "",
    };
  },
  created: function () {
    axios.get("http://localhost:3000/movies.json").then((response) => {
      console.log("movies", response.data);
      this.movies = response.data;
    });
  },
  methods: {
    filterMovies: function () {
      return this.movies.filter((movie) => {
        var lowerTitle = movie.title.toLowerCase();
        var lowerTitleFilter = this.titleFilter.toLowerCase();
        return lowerTitle.includes(lowerTitleFilter);
      });
    },
    sortedArray() {
      let sortedMovies = this.movies;
      sortedMovies = sortedMovies.sort((a, b) => {
        let fa = a.title.toLowerCase(),
          fb = b.title.toLowerCase();
        return fa == fb ? 0 : fa > fb ? 1 : -1;
      });
      return sortedMovies;
    },
  },
};
</script>

<template>
  <h1>Movies</h1>
  <input v-model="titleFilter" type="text" list="title" />
  <datalist id="title">
    <option v-for="movie in movies" :key="movie.id">{{ movie.title }}</option>
  </datalist>
  <button v-on:click="sortedArray()">Sort by title</button>
  <div v-for="movie in filterMovies()" :key="movie">
    <p>{{ movie.title }}</p>
    <a v-bind:href="`/movies/${movie.id}`" class="btn btn-primry">More Info</a>
  </div>
</template>
