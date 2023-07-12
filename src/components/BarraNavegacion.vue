<template>
    <nav class="menu">
        <router-link to="/" class="menu-link">Inicio</router-link> |
        <router-link to="/personajes" class="menu-link">Personajes</router-link> |
        <router-link to="/contacto" class="menu-link">Contacto</router-link> |
        <router-link to="/about" class="menu-link">Acerca de...</router-link>
    </nav>
</template>

<script>
export default {
    name: 'navbar-comp',
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
    .menu {
        display: flex;
        background: #fffe0e;
        padding: 20px 12px;
    }
    .menu-link {
        margin: 0 6px;
        text-decoration: none;
    }
</style>