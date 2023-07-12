<template>
    <div class="character-container">
        <div v-if="personaje">
            <div class="character-title">Nombre:</div>
            <div class="character-information">
                {{personaje.name}}
            </div>
            <div class="character-title">Genero:</div>
            <div class="character-information">
                {{personaje.gender}}
            </div>
            <div class="character-title">Altura:</div>
            <div class="character-information">
                {{personaje.height}}
            </div>
            <div class="character-title">Número de películas:</div>
            <div class="character-information">
                {{personaje.films.length}}
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    name: 'info-personaje-view',
    props: {
        id: {
            type: String,
            required: true,
        }
    },
    data: function(){
        return {
            personaje: null,
        }
    },
    // computed: {},
    methods: {
        async obtenerPersonaje() {
            try {
                let datosPersonaje = await axios.get(`https://swapi.dev/api/people/${this.id}`);
                this.personaje = datosPersonaje.data;
                // console.log(datos);
            } catch (error) {
                console.log(error)
            }
        }
    },
    // watch: {},
    // components: {},
    // mixins: [],
    // filters: {},
    // -- Lifecycle Methods
    created() {
        this.obtenerPersonaje();
    }
    // -- End Lifecycle Methods
}
</script>

<style scoped>
    .character-container {
        width: 40%;
        margin: 30px auto;
        border: 2px solid gray;
        text-align: center;
    }
    .character-title {
        background: gray;
        color: #fffe0e;
        padding: 10px;
    }
    .character-information {
        color: white;
        padding: 10px;
        background: black;
    }
</style>