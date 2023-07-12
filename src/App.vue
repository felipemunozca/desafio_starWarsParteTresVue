<template>
  <div id="app">
    <BarraNavegacion/>

    <!--  
      Para poder cargar las transiciones dentro de la etiqueta <router-view> primero se debe envolver dentro de una etiqueta
        <template> a la que se le debe agregar un mode, en este caso out-in que significa que primero saca el contenido de la
        vista y luego agrega el nuevo contenido (existe el mode in-out pero para este ejercicio no es compatible) y luego en 
        las palabras reservadas de Vue, "enter-active" y "leave-active" se agrega una animación para cada situación.
    -->
    <transition mode="out-in" enter-active-class="fade-in-top" leave-active-class="fade-out">
      <router-view/>
    </transition>
  </div>
</template>

<script>
import BarraNavegacion from '@/components/BarraNavegacion.vue';

export default {
  components: {
    BarraNavegacion,
  }
}
</script>

<style>

body {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  background-image: url('@/assets/star_wars_universe.jpeg');
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}

/**
  * Como parte del desafió, se pide que al cambiar de ruta, se agregue una transición para hacer el cambio de pagina 
  *    mas agradable. Para utilizar transiciones, se utilizo la librería https://animista.net/ para copiar estilos
  *    de entrada y de salida.
  */
.fade-in-top {
	animation: fade-in-top 0.6s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;
}
.fade-out {
	animation: fade-out 1s ease-out both;
}

@keyframes fade-in-top {
  0% {
    transform: translateY(-50px);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
}

@keyframes fade-out {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
</style>
