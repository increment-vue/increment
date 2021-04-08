import Home from 'src/home/Landing.vue'
import HowWeWork from 'src/home/Landing/HowWeWork.vue'
export default{
  routes: [{
    path: '/',
    name: 'Home',
    component: Home
  },{
    path: '/howWeWork',
    name: 'howWeWork',
    component: HowWeWork
  }]
}

