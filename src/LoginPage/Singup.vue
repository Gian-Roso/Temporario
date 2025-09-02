<template>
  <div class="app">
    

    <main class="main-content login-main">
      <div class="login-box">
        <img src="../picture/logo_9.png" alt="" class="logo">
        <h2>Cadastrar</h2>
        <form @submit.prevent="login">
          <div class="form-group">
            <label for="email">Email</label>
            <input type="email" id="email" v-model="email" required />
          </div>
          <div class="form-group">
            <label for="number">Number</label>
            <input type="number" id="number" v-model="number" required />
          </div>
          <p>Sua solicitação de cadastro sera enviada para nossa equipe</p>
          <p>dentro de alguns minutos entraremos em contato</p>
          <button type="submit">Solicitar cadastro</button>
          <a href="./Login.vue">Ir para o login</a>
        </form>
      </div>
    </main>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const email = ref('')
const password = ref('')

function login() {
  alert(`Email: ${email.value}\nSenha: ${password.value}`)
}
</script>

<style scoped>
/* Layout base do seu app */
:global(body, html) {
  margin: 0;
  padding: 0;
  height: 100%;
}
:global(#app) {
  height: 100%;
  margin: 0;
}

.app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.main-content {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
}


.main-content {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(to bottom, #113823, #082112);
}

.login-box {
  background: white; /* a caixa de login continua branca para contraste */
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0px 0px 15px rgba(0,0,0,0.1);
  width: 300px;
  text-align: center;
}

.logo {
  width: 250px;
  margin: 0rem auto;
  display: block;
}
.login-box h2 {
  margin-bottom: 1.5rem;
  color: #113823;
  font-family: "Antonio", sans-serif;
}
.login-box p, a {
    font-size: 13px;
}

.form-group {
  margin-bottom: 1rem;
  text-align: left;
}

.form-group label {
  display: block;
  margin-bottom: 0.3rem;
  font-size: 0.9rem;
  color: #333;
}

.form-group input {
  width: 100%;
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
}

button {
  width: 100%;
  padding: 0.7rem;
  background-color: #113823;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-family: "Antonio", sans-serif;
  font-weight: 600;
}

button:hover {
  background-color: #0e2b1b;
}

.app-footer {
  background-color: #113823;
  color: white;
  text-align: center;
  padding: 1rem;
}
</style>
