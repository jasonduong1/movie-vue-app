<script>
import axios from "axios";
export default {
  data: function () {
    return {
      newMovieParams: {},
      error: [],
    };
  },
  methods: {
    createMovie: function () {
      axios
        .post("http://localhost:3000/movies.json", this.newMovieParams)
        .then((response) => {
          this.movies.push(response.data);
          console.log("Movie created", response.data);
        })
        .catch((error) => console.log(error.response));
    },
  },
};
</script>

<template>
  <h1>Add a Movie</h1>
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
  <button v-on:click="createMovie">Add</button>
</template>
