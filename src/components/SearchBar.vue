<template>
  <div>
    <input @input="onInput" />
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: "SearchBar",
  methods: {
    ...mapActions([
      'onTermChange'
    ]),
    onInput: function(event) {
      this.onTermChange(event.target.value);
      // this.$emit("termChange", event.target.value);
    }
  }
};
</script>

<style scoped>
input {
  width: 75%;
}
div {
  text-align: center;
  margin: 20px;
}
</style>
