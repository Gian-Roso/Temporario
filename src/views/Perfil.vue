<template>
  <div class="profile-page">
    <!-- Header do perfil -->
    <div class="profile-header">
      <img :src="user.avatar" alt="Foto de perfil" class="avatar" />
      <div class="user-info">
        <h2>{{ user.nome }}</h2>
        <p class="cargo">{{ user.cargo }}</p>
      </div>
    </div>

    <!-- Conteúdo principal -->
    <div class="profile-content">
      <!-- Card de informações -->
      <div class="card info-card">
        <h3>Informações</h3>
        <p><span>Email:</span> {{ user.email }}</p>
        <p><span>Telefone:</span> {{ user.telefone }}</p>
      </div>
    </div>
    <div class="actions-card">
        <button class="logout" @click="logout">Sair</button>
      </div>
  </div>
</template>

<script setup>
import { reactive } from "vue";

const user = reactive({
  nome: "User name",
  cargo: "Admin",
  email: "Admin@robustec.com",
  telefone: "(11) 99999-9999",
  avatar: "https://via.placeholder.com/150",
});

function logout() {
  alert("Você saiu da conta!");
}
</script>

<style scoped>
.profile-page {
  flex: 1;
  width: 100%;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

/* Header com foto e nome */
.profile-header {
  display: flex;
  align-items: center;
  gap: 1.5rem;
  padding: 1.5rem;
  background: #113823;
  color: white;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15);
}

.avatar {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  border: 4px solid #ccc;
}

.user-info h2 {
  margin: 0;
  font-size: 1.5rem;
  font-family: "Antonio", sans-serif;
}

.user-info .cargo {
  margin: 0;
  color: #ccc;
  font-size: 0.95rem;
}

/* Cards principais */
.profile-content {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 1.5rem;
}

.card {
  background: white;
  padding: 1.5rem;
  border-radius: 10px;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
}

.card h3 {
  margin-top: 0;
  color: #113823;
  margin-bottom: 1rem;
  font-size: 1.2rem;
}

.card p {
  margin: 0.5rem 0;
  font-size: 0.95rem;
}

.card span {
  font-weight: bold;
  color: #113823;
}

/* Ações */
.actions-card button {
  display: block;
  width: 10%;
  margin-bottom: 0.7rem;
  padding: 0.7rem;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-family: "Antonio", sans-serif;
  font-weight: 600;
  transition: background 0.2s ease;
}

.actions-card .logout {
  background-color: #e63946; /* vermelho alaranjado */
  color: white;
}

.actions-card .logout:hover {
  background-color: #cc2f3a; /* tom mais escuro no hover */
}
</style>
