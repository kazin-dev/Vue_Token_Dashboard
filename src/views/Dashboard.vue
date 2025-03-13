<template>
    <div>
      <h1>Dashboard - Área Protegida</h1>
      <button @click="logout">Sair</button>
    </div>
  </template>
  
  <script>
  export default {
    created() {
      const token = localStorage.getItem("token");
      if (!token) {
        this.$router.push("/login");
      }
    },
    methods: {
      logout() {
        localStorage.removeItem("token");
        this.$router.push("/login");
      }
    }
  };
  </script>
  