<template>
    <div class="container">
        <ion-header>
        <ion-toolbar>
          <ion-buttons slot="start">
            <ion-button @click="dismissModal(), backHome()">
              <ion-icon :icon="close" />
            </ion-button>
          </ion-buttons>
              <h2> Overview Finished Reports</h2>
              <p> Overview - Change </p>
        </ion-toolbar>
      </ion-header>
        <div class="choiceBar">
            <ion-button @click="fetchInspections(), filteredInspections()" class="btn btn-success">Fetch</ion-button>
            <ion-button class="btn">A/Z</ion-button>
            <!-- Searchbar with a custom debounce -->
            <ion-searchbar animated></ion-searchbar>
        </div>

        <!--Loading indicator/spinner-->
        <div v-if="!loading" style="text-align: center;">
            <img src="/assets/spinner.svg" alt="Loading indicator...">
        </div>

        <!--Oh no, something bad happened! -->
        <div v-if="error" class="alert alert-danger">
            <h3>Error!</h3>
            <div>{{ errorList }}</div>
        </div>

        <!--List with finished inspection data-->
        <ion-list class="list-group" v-if="inspections && inspections.length">
            <ion-item class="list-group-item"
                v-for="inspection in sortedInspections"
                :key="inspection.location">
                <!-- <ion-checkbox slot="start"></ion-checkbox> -->
                <ion-label type="button" class="btn">
                    <div class="labelInfo"> 
                        <ion-badge color="success" slot="end"> {{ inspection.name }} </ion-badge>
                        <p> {{ inspection.date }} </p>
                    </div>
                    <h1> {{ inspection.location }} </h1>
                </ion-label>
                <ion-fab-button @click="selectInspection(inspection.id), showModal()">
                    <ion-icon :icon="create" style="color: white;"></ion-icon>
                </ion-fab-button>
            </ion-item>
        </ion-list>

        <ChangeInspection v-if="selectedInspection" :inspection="selectedInspection" v-show="isModalVisible" @close="closeModal"></ChangeInspection>

    </div>
</template>

<script>
  import mixins from '/src/mixins/mixins.js'
  import { IonFabButton, IonItem, IonList, IonLabel, IonIcon, IonHeader, IonToolbar, IonButtons, IonButton, IonSearchbar, IonBadge } from '@ionic/vue';
  import { add, close, create, trash } from 'ionicons/icons';
  import ChangeInspection from './ChangeInspection';

    export default {
        name: "FinishedReports",
        setup() {
            return {
                add, 
                close, 
                create, 
                trash
            }
        },
        mixins: [mixins],
        components: { 
            ChangeInspection, 
            IonBadge,
            IonSearchbar,
            IonFabButton, 
            IonItem, 
            IonList, 
            IonLabel, 
            IonIcon, 
            IonHeader, 
            IonToolbar, 
            IonButtons, 
            IonButton
        },
        data() {
            return {
                sortedInspections: [], 
                isModalVisible: false, 
                selectedInspectionIndex: 0
            }
        },
        methods: {
            // 1. fetch all Inspections from the store
            fetchInspections() {
                this.$store.dispatch('fetchInspections')
            },
            //filtering before getting cloned data in Mounted
            filteredInspections() {
                console.log(this.inspectionsFinished);
                if (!this.inspectionsFinished) return;
                this.sortedInspections = [...this.inspectionsFinished];
                console.log("these are sorted: " + this.sortedInspections);
                this.sortedInspections.sort(function (a, b) {
                let dateA = new Date(a.date);
                let dateB = new Date(b.date);
                return dateA - dateB;
                });
            },
            showModal() {
                console.log("hallo");
                this.isModalVisible = true;
            },
            closeModal() {
                this.isModalVisible = false;
            },
            //select the inspection on-clicking
            selectInspection(inspectionId) {
                // const modalContent = Object.entries();
                this.selectedInspectionIndex = inspectionId - 1;
                console.log("Inspection ID = " + inspectionId);
            }
        },
        computed: {
            inspections() {
                return this.$store.state.inspections;
            },
            inspectionsFinished () {
                return this.$store.getters.inspectionsFinished;
            },
            selectedInspection() {
                console.log('Inspection selected')
                return {
                    ...this.inspections[this.selectedInspectionIndex]
                }
            }
        }
    }
</script>

<style scoped>
    ion-fab-button {
        width: 35px;
        height: 35px; 
        margin: 5px;
    }

    .choiceBar{
        display: flex;
        justify-content: space-around;
        margin: 5px;
    }

    .labelInfo{
        display: flex;
        flex-direction: row;
    }

    img {
        width: 20%;
        margin: 5px;
    }

    ion-badge, div > p {
        margin-right: 5px;
    }

    ion-searchbar {
        width: 200px;
        padding: 0;
        margin: 0;
    }


</style>
