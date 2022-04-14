<script>
import axios from "axios";

export default {
  data: function () {
    return {
      movie: {},
      errors: [],
    };
  },
  created: function () {
    axios.get("http://localhost:3000/movies/" + this.$route.params.id + ".json").then((response) => {
      console.log("movie", response.data);
      this.movie = response.data;
    });
  },
  methods: {
    updateMovie: function () {
      axios
        .patch("http://localhost:3000/movies/" + this.$route.params.id + ".json", this.movie)
        .then((response) => {
          console.log("Updated", response.data);
          this.$router.push("/movies");
        })
        .catch((error) => console.log(error.reponse));
    },
    destroyMovie: function (movie) {
      axios.delete("movies/" + movie.id).then((response) => {
        console.log("movie removed", response);
        this.$router.push("/movies");
      });
    },
  },
};
</script>

<template>
  <form v-on:submit.prevent="updateMovie()">
    <h3>Update Movie Info</h3>
    <div>
      Movie Title:
      <input type="text" v-model="movie.title" />
    </div>
    <div>
      Plot:
      <input type="text" v-model="movie.plot" />
    </div>
    <div>
      Year Released:
      <input type="text" v-model="movie.year" />
    </div>
    <div>
      <input type="submit" value="Update" />
    </div>
  </form>
  <button v-on:click="destroyMovie(movie)">Delete movie</button>
  <p><a href="/movies">Back to Movies</a></p>
</template>
