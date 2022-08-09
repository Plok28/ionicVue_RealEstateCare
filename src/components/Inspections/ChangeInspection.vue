<template>
  <transition name="modal-fade">
    <div class="modal-backdrop">
      <form class="modal"
        id="inspectionForm"
        @submit="changeInspection(inspection.id)"
        method="patch"
        name="changeInspectionForm">
        <div class="heading">
          <button type="button" class="btn-close" @click="close" aria-label="Close modal">
            x
          </button>
           <h2>{{ inspection.location }}</h2>
           <div style="border-bottom: 2px solid grey;">
              <div>
                <p style="font-weight: 600">Start: </p><br>
                <p>{{ inspection.date }}</p>
              </div>
              <div>
                <p style="font-weight: 600">Modified by: </p>
                <input v-model="performer" type="text" name="performer" size="10" :placeholder="inspection.performer">
              </div>
           </div>
        </div>
        <div class="badges">
          <div>
            <p>Inspection type:</p>
            <input type="text" id="type" name="name" size="10" :value="inspection.name">
          </div>
          <div>
            <p>Cause of:</p>
            <input type="text" id="cause" name="type" size="10" :value="inspection.type">
          </div>
        </div>
        <div class="describeComment">
          <h3>Description: </h3>
          <textarea v-model="description" type="text" id="description" name="description" rows="2" cols="30" :placeholder="inspection.description"></textarea>
        </div>
        <div>
          <h3>Comments: </h3>
          <textarea v-model="comment" type="text" id="comment" name="comment" rows="2" cols="30" :placeholder="inspection.comment"></textarea>
        </div>
        <div>
          <input type="submit" value="Add inspection">
          <button type="submit" id="btnSubmit" class="btn-submit"></button>
        </div>
      </form>
    </div>
  </transition>
</template>


<script>
import { defineComponent } from 'vue';
import mixins from '/src/mixins/mixins.js'

export default defineComponent({
    name: 'ChangeInspection',
    props: ['inspection'],
    mixins: [mixins],
    methods: {
      fetchInspections() {
          this.$store.dispatch('fetchInspections')
      },
      closeModal() {
          this.isModalVisible = false;
      },
      changeInspection: function(id) {
        alert(this.description);
        this.$store.commit('CHANGE_INSPECTION', { "id": id, "description": this.description, "comment": this.comment, "performer": this.performer  });
        console.log("CHANGED INSPECTION BY CHANGED" + id.id)
      }, 
      close() {
        this.$emit('close');
      },
    }
})
</script>

<style scoped>
  input {
    font-size: 14px;
  }
  h3 {
    line-height: 0;
    font-size: 16px;
    font-weight: 600;
  }
  .describeComment {
    margin: 0;
    padding: 0;
  }
  .describeComment p{
    margin: 0;
    padding: 0;
  }
  .heading {
    margin: 0;
  }
  .heading p {
    margin: 0;
  }
  .heading div {
    display: flex;
    flex-direction: row;
  }
  .heading div div {
    margin-right: 20px;
  }
  .badges p {
    line-height: 0;
  }
  .badges {
    display: flex;
    margin: 0;
  }
  .badges div {
    margin-right: 25px;
  }
  .list-group {
    text-align: left;
    list-style-type: circle;
  }
  .modal-backdrop {
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.2);
    display: flex;
    height: 750px;
    justify-content: center;
    align-items: center;
  }
  .modal {
    background: #FFFFFF;
    width: 320px;
    height: 300px;
    border-radius: 5px;
    box-shadow: 2px 2px 15px 1px;
    overflow-x: auto;
    display: flex;
    padding: 15px;
    flex-direction: column;
  }
  .modal-header,
  .modal-footer {
    padding: 15px;
    display: flex;
    flex-direction: column;
  }
  .modal-header {
    position: relative;
    border-bottom: 1px solid #eeeeee;
    color: #4AAE9B;
  }
  .modal-footer {
    border-top: 1px solid #eeeeee;
  }
  .modal-body {
    position: relative;
    padding: 20px 10px;
  }
  .btn-close {
    float: right;
    border: none;
    font-size: 30px;
    cursor: pointer;
    font-weight: bold;
    color: #4AAE9B;
    background: transparent;
    position: absolute;
    margin-left: 250px;
    margin-right: 0;
  }
  .modal-fade-enter,
  .modal-fade-leave-to {
    opacity: 0;
  }
  .modal-fade-enter-active,
  .modal-fade-leave-active {
    transition: opacity .5s ease;
  }
</style> 