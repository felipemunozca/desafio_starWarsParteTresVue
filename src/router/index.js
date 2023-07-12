import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
/**
 * Se importan los nuevos archivos de la carpeta "views" para crear las rutas.
 */
import PersonajesView from '@/views/PersonajesView.vue';
import ContactoView from '@/views/ContactoView.vue';
import InfoPersonajeView from '@/views/InfoPersonajeView.vue';
import NotFoundView from '@/views/NotFoundView.vue';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  /**
   * Agregar un alias a la ruta /personajes, para que desde la url del navegador, al escribir /people o /character envié al 
   *    usuario a PersonajesView.
   */
  {
    path: '/personajes',
    name: 'personajes',
    component: PersonajesView,
    alias:['/people','/characters'],
  },
  /**
   * Para poder entrar a la propiedad :id que se envía por la ruta, se debe agregar la opción "props: true" para que la props 
   *    "id" declarada en el archivo InfoPersonajeView.vue sea igual al valor que se esta enviando en la ruta.
   */
  {
    path: '/personaje/:id',
    name: 'personaje',
    component: InfoPersonajeView,
    props: true,
  },
  {
    path: '/contacto',
    name: 'contacto',
    component: ContactoView,
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
