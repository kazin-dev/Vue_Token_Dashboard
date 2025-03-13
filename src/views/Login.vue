<template>
  <div>
    <h1>Login</h1>
    <form @submit.prevent="login">
      <input type="text" v-model="username" placeholder="Usuário" required />
      <input type="password" v-model="password" placeholder="Senha" required />
      <button type="submit">Entrar</button>
    </form>
    <p v-if="errorMessage">{{ errorMessage }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: "",
      password: "",
      errorMessage: ""
    };
  },
  methods: {
    login() {
      const users = [
        { username: "admin", password: "123456" },
        { username: "user", password: "senha123" }
      ];

      const user = users.find(
        u => u.username === this.username && u.password === this.password
      );

      if (user) {
        const fakeJWT = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9"; // Simulando um token JWT
        localStorage.setItem("token", fakeJWT); // Salvamos no localStorage
        this.$router.push("/dashboard"); // Redireciona para a página protegida
      } else {
        this.errorMessage = "Usuário ou senha incorretos!";
      }
    }
  }
};
</script>
