/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');
import moment from 'moment';
import { Form, HasError, AlertError } from 'vform';


import swal from 'sweetalert2'
window.swal = swal;

const toast = swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 3000
});

window.toast = toast;


window.Form = Form;
Vue.component(HasError.name, HasError)
Vue.component(AlertError.name, AlertError)

import VueRouter from 'vue-router'
Vue.use(VueRouter)

import VueProgressBar from 'vue-progressbar'
Vue.use(VueProgressBar, {
    color: 'rgb(143, 255, 199)',
    failedColor: 'red',
    height: '3px'
  })

let routes = [
    { path: '/dashboard', component: require('./components/Dashboard.vue')  },
    { path: '/developer', component: require('./components/Developer.vue') },
    { path: '/users', component: require('./components/Users.vue') },
    { path: '/profile', component: require('./components/Profile.vue') },
    { path: '/kapak', component: require('./components/Kapak.vue') },
    { path: '/events', component: require('./components/Events.vue') },
    
]



let router = new VueRouter({
    history,
    routes // short for `routes: routes`
  })


Vue.filter('upText', function(text){
    return text.charAt(0).toUpperCase() + text.slice(1)
});

Vue.filter('myDate',function(created){

    return moment(created).format('MMMM Do YYYY');
});
Vue.filter('myDate2',function(created){
    moment.locale('tr')
    return moment(created).format('ll','tr');
});


window.Fire =  new Vue();

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */


Vue.component(
    'part',
    require('./components/Main/Part.vue')
);
Vue.component(
    'slider',
    require('./components/Main/Slider.vue')
);
 Vue.component(
    'islem',
    require('./components/Main/Islem.vue')
);

Vue.component(
    'etkinlik',
    require('./components/Main/Etkinlik.vue')
);

Vue.component(
    'sayac',
    require('./components/Main/Sayac.vue')
);
Vue.component(
    'etkinlik',
    require('./components/Main/Etkinlik.vue')
);


Vue.component(
    'ekibimiz',
    require('./components/Altsayfalar/Ekibimiz.vue')
);
Vue.component(
    'misyonumuz',
    require('./components/Altsayfalar/Misyon.vue')
);
Vue.component(
    'iletisim',
    require('./components/Altsayfalar/Contact.vue')
);

Vue.component(
    'etkinlikler',
    require('./components/Altsayfalar/Etkinlikler.vue')
);

Vue.component(
    'passport-clients',
    require('./components/passport/Clients.vue')
);


Vue.component(
    'passport-clients',
    require('./components/passport/Clients.vue')
);



Vue.component(
    'passport-authorized-clients',
    require('./components/passport/AuthorizedClients.vue')
);

Vue.component(
    'passport-personal-access-tokens',
    require('./components/passport/PersonalAccessTokens.vue')
);


Vue.component('example-component', require('./components/ExampleComponent.vue'));

const app = new Vue({
    el: '#app',
    router,
});
