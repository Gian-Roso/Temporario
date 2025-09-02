<template>
  <div class="app">
    <!-- Toolbar -->
    <header class="app-bar">
        Robustec Catalog
    </header>
    <header class="app-bar1">
    </header>

    <main class="main-content">
    <router-view />
    </main>


    <!-- Footer -->
    <footer class="app-footer">
      © 2025 - Meu Projeto
    </footer>
  </div>
</template>

<script setup>
</script>

<style scoped>
/* Reseta margens e paddings */
:global(body, html) {
  margin: 0;
  padding: 0;
  height: 100%;
}
:global(#app) {
  height: 100%;
  margin: 0;
}

/* Layout */
.app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background: #f5f5f5;
}

.app-bar {
  background-color: #113823;
  color: white;
  padding: 1rem;
  display: flex;
  justify-content: center;
}
.app-bar1 {
  background-color: #f5f5f5;
  box-shadow: 0px 0px 10px 0 rgba(0,0,0,0.2);
  color: white;
  padding: 1rem;
}

.toolbar-title {
  margin: 0;
}

.main-content {
  flex: 1;
  display: flex;
  margin-inline: 2%;
}

.app-footer {
  background-color: #113823;
  color: white;
  text-align: center;
  padding: 1rem;
}
</style>
