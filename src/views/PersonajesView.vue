<template>
    <div class="character-container">
        <h2>Personajes</h2>
        <button @click="obtenerDatos" class="btn-character">Buscar más personajes</button>
        <div v-if="cargando" class="loading-container">
            Cargando...
        </div>
        <div class="character-list">
            <button v-for="(personaje, index) in personajes" :key="index" @click="redireccionar(personaje.url)">
                {{personaje.name}}
            </button>
        </div>
    </div>
    
</template>

<script>

/**
 * Se importa la librería Axios para hacer operaciones HTTP, por lo que podremos configurar y realizar solicitudes a un servidor 
 *      y recibir respuestas fáciles de procesar.
 */
import axios from 'axios';

export default {
    name: 'personajes-view',
    // props: {},
    data: function(){
        return {
            pagina: 1,
            personajes: [],
            cargando: false,
        }
    },
    // computed: {},
    methods: {
        async obtenerDatos() {
            try {
                this.cargando = true;

                let datos = await axios.get(`https://swapi.dev/api/people?page=${this.pagina}`);
                console.log(datos);
                let respuesta = datos.data.results;
    
                respuesta.forEach(personaje => {
                    this.personajes.push(personaje)
                });

                this.pagina ++;
                this.cargando = false;

            } catch (error) {
                console.log(error);
            }
        },
        /**
         * Ya que la API de Star Wars no tiene un "id" para cada personaje, cuesta un poco mas poder obtener su información, 
         *      asi que se utilizara la propiedad "url" en donde se detalla la información de cada personajes, por eso se
         *      utilizara este valor como parámetro para enviar dentro del método redireccionar().
         * Si se hace un console.log de index, la respuesta en la consola seria: https://swapi.dev/api/people/1/
         * Es por ese motivo que se utilizara un truco para rescatar solo el valor numérico final, es decir, un supuesto "id"
         *      con el que se conectara a cada data de personaje. Para esto se utilizara la función match() que es una propiedad
         *      de los arreglos y permite pasar una expresión regular. La expresión buscara un patron en la url en donde aparezca 
         *      un dígito (d) que tenga un valor de 0 a 9 y en caso que sea mayor a 10, se utiliza el mas (+). Y el corchete cero
         *      [0] es la devolución del primer del primer elemento que haga match, que serian el numero final que esta enviando
         *      cada url.
         */
        redireccionar(url) {
            // let index = url;
            // console.log(index); // imprime en la consola: https://swapi.dev/api/people/2/

            let index = ((url).match(/\d+/))[0];
            // console.log(index); // imprime en la consola: 2
            this.$router.push(`/personaje/${index}`);
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
    
    .character-container {
        text-align: center;
    }
    .character-container h2 {
        color: white;
    }

    .loading-container {
        color: white;
        font-size: 1rem;
        margin-top: 10px;
    }

    .character-list {
        gap: 8px;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        width: 85%;
        margin: 30px auto 0;
    }
    .character-list button {
        border: 1px solid white;
        color:#fffe0e;
        background-color: black;
        padding: 10px 0;
    }
    .character-list button:hover {
        color: #42b983;
        transition: 0.7s;
    }

    .btn-character {
        padding: 5px 10px;
        cursor: pointer;
    }
    .btn-character:hover {
        background-color: #fffe0e;
        transition: 0.7s;
        /* border: 1px solid white; */
    }

</style>