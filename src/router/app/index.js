import Home from 'src/home/Landing.vue'
import Technologies from 'src/home/AllTechnologies.vue'
export default{
  routes: [{
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/technologies',
    name: 'Technologies',
    component: Technologies
  }]
}

