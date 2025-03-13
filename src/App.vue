<template>
  <div class="container">
    <ul>
      <li> <router-link to="/">Home</router-link></li>
      <li> <router-link to="/login">Login</router-link></li>
      <li><router-link to="/dashboard">Dashboard</router-link></li>
    </ul>
    <router-view />
  </div>






</template>

<script>
export default {
  name: "App",
};

</script>

<style>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

ul {
  display: flex;
  list-style: none;
  padding: 0;
}

li {
  margin: 0 10px;
}
</style>
