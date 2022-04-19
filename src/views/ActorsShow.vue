<script>
import axios from "axios";
export default {
  data: function () {
    return {
      actor: {},
    };
  },
  created: function () {
    axios.get("http://localhost:3000/actors/" + this.$route.params.id + ".json").then((response) => {
      console.log("actor", response.data);
      this.actor = response.data;
    });
  },
};
</script>

<template>
  <h1>Actor show</h1>
  {{ actor }}
  <br />
  <a :href="`/actors/${actor.id}/edit`">Edit</a>
  <br />
  <a href="/actors">Back to actors</a>
</template>
