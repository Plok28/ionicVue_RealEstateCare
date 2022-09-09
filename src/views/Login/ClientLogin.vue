<template>
  <ion-header>
    <ion-toolbar>
      <ion-buttons slot="start">
      </ion-buttons>
      <ion-title>Login screen</ion-title>
    </ion-toolbar>
  </ion-header>
    <br>
    <ion-item>Login with your credentials.</ion-item>
    <form class="loginForm" @submit.prevent="login({ email, password })" action="db.json/creds" method="post">
      <input pattern="\b[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}\b" type="text" placeholder="E-mail" v-model="email">
			<input id="password" type="password" placeholder="Your password" v-model="password">
			<ion-icon @click="togglePassword" id="eye" class="eyeOn" :icon="eye"></ion-icon>
      <button type="submit">Login</button>
    </form>
</template>

<script>

import { IonHeader, IonTitle, IonToolbar, IonButtons, IonItem } from '@ionic/vue';
import { eye, eyeOff } from 'ionicons/icons';
import mixins from '/src/mixins/mixins.js'
import { close } from 'ionicons/icons';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ClientLogin',
  components: { 
    IonHeader, 
    IonTitle, 
    IonToolbar, 
    IonButtons,
    IonItem
  },
  mixins: [mixins],
  setup() {
    return{
      close, 
      eye, 
      eyeOff
    }
  }, 
  data() {
    return {
      email: "",
      password: "",
      registeredUser: []
    }
  },
  methods: {
   togglePassword() {
      document.getElementById("password").type == "password"
        ? (document.getElementById("password").type = "text")
        : (document.getElementById("password").type = "password");
    },
  }
});

</script>

<style scoped>

  input {
    display: block;
    width: 80%;
    box-shadow: inset 0px 0px 8px gray;
    margin-top: 5px;
    border: none;
    padding: 5px;
  }
  
  label {
    display: block;
    width: 80%;
  }

  button {
    display: block;
    width: 50%;
    background: var(--ion-color-secondary);
    opacity: 0.6;
    padding: 10px 15px;
    margin-top: 5px;
  }

  button:hover {
    background: var(--ion-color-secondary);
    opacity: 1;
    scale: 1.1;
  }
  
  #eye {
    z-index: 9999;
    position: absolute;
    top: 42%;
    right: 100px;
    cursor: pointer;
  }

</style>