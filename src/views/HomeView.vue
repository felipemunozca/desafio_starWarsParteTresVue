<template>
  <div class="container">
    <img src="@/assets/star-wars-logo.png" alt="Logo">
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'HomeView',
  components: {
  }
}
</script>

<style scoped>
  body {
    background-image: url('@/assets/star_wars_universe.jpeg');
  }

  .container{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 60%;
    height: 80vh;
    margin: 0 auto;
  }

  img{
    width: 90%;
  }
</style>