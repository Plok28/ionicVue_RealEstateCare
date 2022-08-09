//The Vue.use(Vuex) like aboth gives an use error
import { createStore } from 'vuex';
import axios from 'axios';

const url = [
    "http://localhost:3000/inspections", 
    "http://localhost:3000/pdfs",
    "http://localhost:3000/creds"
]

const LOGIN = "LOGIN";
const LOGIN_SUCCESS = "LOGIN_SUCCESS";
const LOGOUT = "LOGOUT";

export const store = createStore({
    state () {
        return {
        isLoggedIn: !localStorage.getItem("token"),
        loadingStatus: 'notLoading', 
        inspections: [],
        pdfs: [], 
        creds: [], 
        currentCreds: [],
        errors: []
        }
    },
    getters: {
        isLoggedIn: state => {
            return state.isLoggedIn
        },
        currentCreds: state => {
            console.log(state);
            return state.currentCreds
        },
        inspectionNames: state => {
            return state.inspections.filter(inspection => inspection.name);
        },
        inspectionsFinished: state => {
            return state.inspections.filter(inspection => inspection.finished == true);
        }, 
        inspectionsToDo: state => {
            return state.inspections.filter(inspection => inspection.finished == false);
        }
    },
    mutations: {
        LOGIN (state, payload) {
            state.pending = true;
            state.creds = payload;
        },
        LOGIN_SUCCESS (state, payload) {
            state.isLoggedIn = true;
            state.pending = false;
            state.currentCreds = payload;
            localStorage.setItem("token", JSON.stringify(state.currentCreds));
        },
        SET_CREDS(state, payload) {
            state.creds = payload;
        },
        CLEAR_CREDS(state) {
            state.creds = []
            localStorage.removeItem("token");
        },
        LOGOUT (state) {
            state.isLoggedIn = false;
        },
        // mutations voor axios/REST inspections
        SET_LOADING_STATUS(state, payload) {
            state.loadingStatus = payload;
        },
        SET_INSPECTIONS(state, payload) {
            state.inspections = payload;
        },
        CLEAR_INSPECTIONS(state) {
            state.inspections = []
        },
        DELETE_INSPECTION(state, id){
            let index = state.inspections.findIndex(inspection => inspection.id == id);
            state.inspections.splice(index, 1);
            axios.delete('http://localhost:3000/inspections/' + id);
        },
        CHANGE_INSPECTION( state, payload ){
            alert("change inspection = " + payload.id);
            let index = state.inspections.findIndex(inspection => inspection.id == payload.id);
            state.inspections.splice(index, 1);
            axios.patch('http://localhost:3000/inspections/'+ payload.id, {"description" : payload.description, "comment": payload.comment, "performer": payload.performer} );
        },
        CHANGE_CREDS( state, payload ){
            console.log("change creds = " + payload.id);
            let index = state.currentCreds.findIndex(creds => creds.id == payload.id);
            console.log("check current works = " + index)
            state.currentCreds.splice(index, 1);
            axios.patch('http://localhost:3000/creds/'+ payload.id, {"mode" : payload.mode, } );
        },
        // mutations voor axios/REST finished inspections
        SET_FINISHED(state, payload) {
            state.finished = payload;
        },
        CLEAR_FINISHED(state) {
            state.finished = []
        },
        // mutations voor axios/REST pdfs
        SET_PDFS(state, payload) {
            state.pdfs = payload;
        },
        CLEAR_PDFS(state) {
            state.pdfs = []
        },
        // Mutation voor Error handling
        ADD_ERROR(state, payload) {
            state.errors = [...state.errors, payload]
        }
    },
    actions: {
        // actions voor Login state
        login({ commit }, data) {
            commit(LOGIN); // show spinner
                setTimeout(() => {
                    axios.get("http://localhost:3000/creds/", { params: {email: data.email} })
                    .then(result => {
                        commit('SET_LOADING_STATUS', 'notloading');
                        commit('LOGIN', result.data);
                        console.log("login succes" + JSON.stringify(result.data));
                        commit(LOGIN_SUCCESS, result.data);
                    })
                    .catch(err => {
                        console.log("error:  " + err);
                    })
            }, 1000);
        },
        logout({ commit }) {
        // localStorage.removeItem("creds", [])
        localStorage.removeItem("token");
        commit('CLEAR_CREDS');
        commit(LOGOUT);
        },
        fetchCreds(context) {
            // 1. Set loading status
            context.commit('SET_LOADING_STATUS', 'loading');
            // 2. Make http-request - optional you can simulate a delay by wrapping it in a setTimeOut
            setTimeout(() => {
                axios.get(url[2])
                    .then(result => {
                        context.commit('SET_LOADING_STATUS', 'notloading');
                        context.commit('SET_CREDS', result.data);
                    })
                    .catch(err => {
                        context.commit('SET_LOADING_STATUS', 'notloading');
                        context.commit('ADD_ERROR', err);
                    })
            }, 1500);
        },
        // actions voor de fetch inspections API
        fetchInspections(context) {
            // 1. Set loading status
            context.commit('SET_LOADING_STATUS', 'loading');
            // 2. Make http-request - optional you can simulate a delay by wrapping it in a setTimeOut
            setTimeout(() => {
                axios.get(url[0])
                    .then(result => {
                        context.commit('SET_LOADING_STATUS', 'notloading');
                        context.commit('SET_INSPECTIONS', result.data);
                    })
                    .catch(err => {
                        context.commit('SET_LOADING_STATUS', 'notloading');
                        context.commit('SET_INSPECTIONS', []);
                        context.commit('ADD_ERROR', err);
                    })
            }, 1500);
        },
        fetchPdfs(context) {
            // 1. Set loading status
            context.commit('SET_LOADING_STATUS', 'loading');
            // 2. Make http-request - optional you can simulate a delay by wrapping it in a setTimeOut
            setTimeout(() => {
                axios.get(url[1])
                    .then(result => {
                        context.commit('SET_LOADING_STATUS', 'notloading');
                        context.commit('SET_PDFS', result.data);
                    })
                    .catch(err => {
                        context.commit('SET_LOADING_STATUS', 'notloading');
                        context.commit('SET_PDFS', []);
                        context.commit('ADD_ERROR', err);
                    })
            }, 1500);
        }
    }
})