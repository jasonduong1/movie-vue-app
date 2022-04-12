<template>
  <div id="home">
    <h1>Movies</h1>
    <!-- create -->
    <div>
      Movie Title:
      <input type="text" v-model="newMovieParams.title" />
    </div>
    <div>
      Plot:
      <input type="text" v-model="newMovieParams.plot" />
    </div>
    <div>
      Year Released:
      <input type="text" v-model="newMovieParams.year" />
    </div>
    <div>
      <button v-on:click="createMovie">Add movie</button>
    </div>
    <!-- index -->
    <div v-for="movie in movies" :key="movie">
      <h2>{{ movie.title }}</h2>
      <button v-on:click="showMovie(movie)">Info</button>
      <button v-on:click="showMovieUpdate(movie)">Update</button>
      <!-- <p>{{ movie.plot }}</p> -->
      <!-- <p>{{ movie }}</p> -->
    </div>
    <!-- info tag -->
    <dialog id="movie-details">
      <form method="dialog">
        <h1>{{ currentMovie.title }}</h1>
        <p>{{ currentMovie }}</p>
        <!-- <p>{{ currentMovie.genres }}</p> -->
        <button>Close</button>
      </form>
    </dialog>
    <!-- update tag -->
    <dialog id="movie-update">
      <form method="dialog">
        <h3>Update</h3>
        <div>
          Movie Title:
          <input type="text" v-model="currentMovie.title" />
        </div>
        <div>
          Plot:
          <input type="text" v-model="currentMovie.plot" />
        </div>
        <div>
          Year Released:
          <input type="text" v-model="currentMovie.year" />
        </div>
        <button v-on:click="updateMovie(currentMovie)">Update</button>
        <button v-on:click="destroyMovie(currentMovie)">Remove</button>
        <button>Close</button>
      </form>
    </dialog>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data: function () {
    return {
      movies: [],
      newMovieParams: {},
      currentMovie: {},
    };
  },
  created: function () {
    this.indexMovies();
  },
  methods: {
    indexMovies: function () {
      axios.get("http://localhost:3000/movies.json").then((response) => {
        this.movies = response.data;
        console.log("Movies", this.movies);
      });
    },
    createMovie: function () {
      axios.post("http://localhost:3000/movies.json", this.newMovieParams).then((response) => {
        this.movies.push(response.data);
        console.log("Movie created.", response.data);
      });
    },
    showMovie: function (movie) {
      console.log(movie);
      this.currentMovie = movie;
      document.querySelector("#movie-details").showModal();
    },
    showMovieUpdate: function (movie) {
      console.log(movie);
      this.currentMovie = movie;
      document.querySelector("#movie-update").showModal();
    },
    updateMovie: function (movie) {
      let editMovieParams = movie;
      axios.patch("http://localhost:3000/movies/" + movie.id + ".json", editMovieParams).then((response) => {
        console.log("Updated!", response.data);
      });
    },
    destroyMovie: function (movie) {
      axios.delete("http://localhost:3000/movies/" + movie.id).then((response) => {
        console.log("Movie removed.", response.data);
        let index = this.movies.indexOf(movie);
        this.movies.splice(index, 1);
        this.movies.push(response.data);
      });
    },
  },
};
</script>
