<template>
    <div class="contact-container">
        <h2>Contacto</h2>
        <p>Para contactarnos puede escribirnos</p>
        <form>
            <div class="contact-input-group">
                <label for="">Nombre completo</label>
                <input type="text">
            </div>
            <div class="contact-input-group">
                <label for="">Correo electrónico</label>
                <input type="text">
            </div>
            <div class="contact-input-group">
                <label for="">Mensaje</label>
                <textarea name="" id="" cols="30" rows="10"></textarea>
            </div>
            <button @click.prevent>Enviar</button>
        </form>
    </div>
</template>

<script>
export default {
    name: 'contacto-view',
    // props: {},
    data: function(){
        return {}
    },
    // computed: {},
    // methods: {}
    // watch: {},
    // components: {},
    // mixins: [],
    // filters: {},
    // -- Lifecycle Methods
    // -- End Lifecycle Methods
}
</script>

<style scoped>
    .contact-container {
        width: 60%;
        margin: 0 auto;
        color: white;
    }
    .contact-input-group {
        display: flex;
        flex-direction: column;
        text-align: start;
        padding-bottom: 8px;
    }
    .contact-input-group input{
        width: 60%;
        padding: 4px;
    }
    .contact-container button {
        display: flex;
        justify-content: center;
        background: #29b129;
        color: white;
        width: 40%;
        padding: 8px;
        cursor: pointer;
    }
</style>