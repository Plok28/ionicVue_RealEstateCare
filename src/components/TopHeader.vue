<template>
  <div>
      <ion-header class="header">
          <ion-toolbar class="toolbar">
            <ion-img class="logo" src="./assets/logo/logo_white.png" />
              <ion-buttons slot="primary">
                  <ion-button @click="notify" color="primary">
                      <ion-icon slot="icon-only" :icon="notifications"></ion-icon>
                  </ion-button>
                  <ion-button color="primary" @click="fetchSettings">
                      <ion-icon :icon="settings"></ion-icon>
                  </ion-button>
                  <section>
                    <router-link to="/login" v-if="!isLoggedIn">
                      <ion-icon slot="icon-only" :icon="personCircle"></ion-icon>
                    </router-link>
                    <ion-button color="primary" v-if="isLoggedIn" @click="logout">
                      <ion-icon href="#" slot="icon-only" :icon="personCircle"></ion-icon>
                    </ion-button>
                  </section>
              </ion-buttons>
          </ion-toolbar>
          
      </ion-header>
  </div>
</template> 

<script>
// import { defineComponent } from 'vue';
import { IonButton, IonButtons, IonIcon, modalController } from '@ionic/vue';
import { helpCircle, personCircle, settings, notifications } from 'ionicons/icons';
import { IonHeader, IonToolbar, IonImg } from '@ionic/vue';
import ClientLogin from "../views/Login/ClientLogin.vue";
import { mapGetters, mapActions } from 'vuex'
import SettingsOverview from "./Settings/SettingsOverview"

export default {
    name: 'TopHeader',
    components: { 
      IonHeader, 
      IonToolbar, 
      IonButton, 
      IonButtons, 
      IonIcon,
      // IonPage,
      IonImg
    },
    setup() {
    return {
      settings,
      helpCircle, 
      personCircle,
      notifications
    }
  },
  methods: {
    logout() {
     this.$store.dispatch('logout');
    },
    ...mapActions(["logout"]),

    async openModal() {
      const modal = await modalController
        .create({
          component: ClientLogin,
          cssClass: 'client-login-class'
        })
      return modal.present();
    },
    notify() {
      var audio = new Audio(this.currentCreds.preferences.sound.type);
      audio.play();
      alert("No new notifications");
    }, 
    async fetchSettings() {
      const modal = await modalController
        .create({
          component: SettingsOverview,
          cssClass: 'settings-class'
        })
      this.$router.push("/tabs/tab1/Settings")
      return modal.present();
    },
  },
  computed: {
    isLoggedIn() {
      return this.$store.getters.isLoggedIn;
    }, 
    currentCreds () {
        var getter = this.$store.getters.currentCreds;
        console.log(getter[0].name);
        return getter[0];
    }
  },
  getters: {
    ...mapGetters(["isLoggedIn"])
  }
}

</script>

<style scoped>

  .header{
    background: rgb(35, 35, 35);
    padding: 15px 0 15px 0;
  }

  ion-icon {
    cursor: pointer;
  }

  ion-buttons {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
  }

</style>