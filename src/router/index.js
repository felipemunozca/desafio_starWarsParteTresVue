import Vue from 'vue'
import VueRouter from 'vue-router'
/**
 * Ya que el desafió de esta sesión pide utilizar lazy loading en las rutas "/", "/personajes", "/personaje:id", "/contacto" 
 *    ya no es necesario importar directamente las rutas de los archivos en la carpeta views.
 */
//import HomeView from '../views/HomeView.vue'
// import PersonajesView from '@/views/PersonajesView.vue';
// import ContactoView from '@/views/ContactoView.vue';
// import InfoPersonajeView from '@/views/InfoPersonajeView.vue';

import NotFoundView from '@/views/NotFoundView.vue';

Vue.use(VueRouter)

const routes = [
  /**
   * Para poder utilizar lazy loading en las rutas del proyecto, se debe utilizar la propiedad "component" como una función
   *    flecha anónima, en donde dentro del método import() se debe utilizar como comentario, la palabra reservada 
   *    webpackChunkName junto al nombre que se le ha dado a la ruta, y luego, la ruta hacia el archivo. Importante recordar
   *    que al archivo se le debe agregar la extension .vue
   */
  {
    path: '/',
    name: 'home',
    // component: HomeView
    component: () => import(/* webpackChunkName: "home" */ '../views/HomeView.vue')
  },
  /**
   * Agregar un alias a la ruta /personajes, para que desde la url del navegador, al escribir /people o /character envié al 
   *    usuario a PersonajesView.
   */
  {
    path: '/personajes',
    name: 'personajes',
    // component: PersonajesView,
    component: () => import(/* webpackChunkName: "personajes" */ '../views/PersonajesView.vue'),
    alias:['/people','/characters'],
  },
  /**
   * Para poder entrar a la propiedad :id que se envía por la ruta, se debe agregar la opción "props: true" para que la props 
   *    "id" declarada en el archivo InfoPersonajeView.vue sea igual al valor que se esta enviando en la ruta.
   */
  {
    path: '/personaje/:id',
    name: 'personaje',
    // component: InfoPersonajeView,
    component: () => import(/* webpackChunkName: "personaje" */ '../views/InfoPersonajeView.vue'),
    props: true,
  },
  {
    path: '/contacto',
    name: 'contacto',
    // component: ContactoView,
    component: () => import(/* webpackChunkName: "contacto" */ '../views/ContactoView.vue'),
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  /**
   * Crear una ruta comodín para mostrar un mensaje al usuario cuando intente entrar a una ruta no valida.
   */
  {
    path: '*',
    name: 'notFound',
    component: NotFoundView,
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
