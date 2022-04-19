<script>
import axios from "axios";
export default {
  data: function () {
    return {
      actors: [],
    };
  },
  created: function () {
    axios.get("http://localhost:3000/actors.json").then((response) => {
      console.log("actors", response.data);
      this.actors = response.data;
    });
  },
};
</script>

<template>
  <div v-for="actor in actors" :key="actor">
    <p>{{ actor.first_name }} {{ actor.last_name }}</p>
    <a v-bind:href="`/actors/${actor.id}`" class="btn btn-primry">More Info</a>
  </div>
</template>
