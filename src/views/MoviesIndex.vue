<script>
import axios from "axios";
export default {
  data: function () {
    return {
      movies: [],
    };
  },
  created: function () {
    axios.get("http://localhost:3000/movies.json").then((response) => {
      console.log("movies", response.data);
      this.movies = response.data;
    });
  },
};
</script>

<template>
  <div v-for="movie in movies" :key="movie">
    <p>{{ movie.title }}</p>
    <a v-bind:href="`/movies/${movie.id}`" class="btn btn-primry">More Info</a>
  </div>
</template>
