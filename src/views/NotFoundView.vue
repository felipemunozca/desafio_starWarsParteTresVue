<template>
    <div class="not-found-container">
        
        <div class="not-found-message">
            <h2>Ups! Lo sentimos</h2>
            <h4>La pagina que buscas no se encuentra disponible, puedes volver a inicio presionando el siguiente botón.</h4>
            <button @click="volverInicio()">Volver a inicio</button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'component-name',
    // props: {},
    data: function(){
        return {}
    },
    // computed: {},
    methods: {
        volverInicio() {
            this.$router.push("/");
        }
    },
    // watch: {},
    // components: {},
    // mixins: [],
    // filters: {},
    // -- Lifecycle Methods
    // -- End Lifecycle Methods
}
</script>

<style scoped>
    .not-found-container {
        background-image: url('@/assets/404.png');
        background-size: cover;
        background-repeat: no-repeat;
        height: 450px;
        width: 600px;
        margin: 30px auto;
    }
    .not-found-message {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 450px;
    }
    .not-found-message button {
        padding: 10px;
    }
    .not-found-message button:hover {
        color: #42b983;
        border-color: #42b983;
        transition: 0.7s;
    }
</style>