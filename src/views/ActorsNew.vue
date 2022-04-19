<script>
import axios from "axios";
export default {
  data: function () {
    return {
      newActorParams: {},
      error: [],
    };
  },
  methods: {
    createActor: function () {
      axios
        .post("http://localhost:3000/actors.json", this.newActorParams)
        .then((response) => {
          this.actors.push(response.data);
          console.log("Actor created", response.data);
        })
        .catch((error) => console.log(error.response));
    },
  },
};
</script>

<template>
  <h1>Add an actor</h1>
  <div>
    First name:
    <input type="text" v-model="newActorParams.first_name" />
  </div>
  <div>
    Last name:
    <input type="text" v-model="newActorParams.last_name" />
  </div>
  <div>
    Age:
    <input type="text" v-model="newActorParams.age" />
  </div>
  <div>
    Gender:
    <input type="text" v-model="newActorParams.gender" />
  </div>
  <div>
    Known for:
    <input type="text" v-model="newActorParams.known_for" />
  </div>
  <button v-on:click="createActor">Add</button>
</template>
