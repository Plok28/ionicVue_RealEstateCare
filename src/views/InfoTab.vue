<template>
  <ion-page>

    <div id="container">
      <InfoContainer name="Info about RealEstateCare" />
    </div>

  </ion-page>
</template>

<script lang="js">
import { defineComponent } from 'vue';
import { IonPage } from '@ionic/vue';
import InfoContainer from '@/components/TabViews/InfoContainer.vue';

export default defineComponent({
  name: 'Tab2Page',
  components: { InfoContainer, IonPage }
});
</script>
