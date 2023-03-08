<script>
import { mapActions } from 'vuex';

export default {
  name: 'HelloWorld',
  props: {
    msg: String,
    tpye: String,
    count: Number
  },
  methods: {
    ...mapActions(['increment', 'decrement']),
  }
}
</script>

<template lang="pug">
.hello
  p {{ msg }}
  .counter {{ count }}
  button.increment(@click="increment") Increment
  button.decrement(@click="decrement") Decrement
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
