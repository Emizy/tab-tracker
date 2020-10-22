<template>
  <div>
    <h1>Register</h1>
    <input type="email" name="email" id="email" v-model="email">
    <br>
    <input type="password" name="password" id="password" v-model="password">
    <br>
    <button type="button" name="button" id="button" value="submit" @click="register">submit</button>
  </div>
</template>

<script>
// eslint-disable-next-line no-unused-vars
import Authentication from '@/services/Authentication'

export default {
  data () {
    return {
      'email': '',
      'password': ''
    }
  },
  methods: {
    async register () {
      // eslint-disable-next-line no-unused-vars
      const response = await Authentication.register({
        email: this.email,
        password: this.password
      })
      console.log(response.data)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
