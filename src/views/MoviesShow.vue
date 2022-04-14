<script>
import axios from "axios";
export default {
  data: function () {
    return {
      movie: {},
    };
  },
  created: function () {
    axios.get("http://localhost:3000/movies/" + this.$route.params.id + ".json").then((response) => {
      console.log("movie", response.data);
      this.movie = response.data;
    });
  },
};
</script>

<template>
  <h1>Movie Show</h1>
  {{ movie }}
  <br />
  <a :href="`/movies/${movie.id}/edit`">Edit</a>
  <br />
  <a href="/movies">Back to Movies</a>
</template>
