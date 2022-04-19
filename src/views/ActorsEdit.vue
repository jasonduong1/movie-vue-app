<script>
import axios from "axios";

export default {
  data: function () {
    return {
      actor: {},
      errors: [],
    };
  },
  created: function () {
    axios.get("http://localhost:3000/actors/" + this.$route.params.id + ".json").then((response) => {
      console.log("actor", response.data);
      this.actor = response.data;
    });
  },
  methods: {
    updateActor: function () {
      axios
        .patch("http://localhost:3000/actors/" + this.$route.params.id + ".json", this.actor)
        .then((response) => {
          console.log("Updated", response.data);
          this.$router.push("/actors");
        })
        .catch((error) => console.log(error.reponse));
    },
    destroyActor: function (actor) {
      axios.delete("actors/" + actor.id).then((response) => {
        console.log("actor removed", response);
        this.$router.push("/actors");
      });
    },
  },
};
</script>

<template>
  <form v-on:submit.prevent="updateActor()">
    <h3>Update Actor Info</h3>
    <div>
      First name:
      <input type="text" v-model="actor.first_name" />
    </div>
    <div>
      Last name:
      <input type="text" v-model="actor.last_name" />
    </div>
    <div>
      Age:
      <input type="text" v-model="actor.age" />
    </div>
    <div>
      Gender:
      <input type="text" v-model="actor.gender" />
    </div>
    <div>
      <input type="submit" value="Update" />
    </div>
  </form>
  <button v-on:click="destroyActor(actor)">Delete actor</button>
  <p><a href="/actors">Back to actors</a></p>
</template>
