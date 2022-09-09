// // Mixins are global Javascript logic that can be recalled in multiple components
// // Potentially replaces mixins in the future

import { modalController } from '@ionic/vue';

export default { 
    methods: {
        dismissModal() {
            modalController.dismiss({dismissed: true});
        },
        fetchCreds() {
            this.$store.dispatch('fetchCreds')
        }, 
        setTheme(event) {
            let checkCreds = this.creds.find(o => o.mode === this.mode);
            console.log(checkCreds);
            // console.log(checkCreds.preferences.splice(1, 1, "dark"))
            if(event.detail.checked === true){
                document.body.setAttribute('color-theme', 'dark')
                console.log("Dark Theme Enabled");
            }else if(event.detail.checked === false){
                document.body.setAttribute('color-theme', 'light');
                console.log("Light Theme Enabled");
            }
        },
        login() {
            let checkCreds = this.creds.find(o => o.email === this.email && o.password === this.password);
            // this.$store.dispatch("login", true);
            console.log(checkCreds);
            if (checkCreds) {
              this.$store.dispatch("login", {
                email: this.email,
                password: this.password
              }).then(() => {
                document.body.setAttribute('color-theme', checkCreds.preferences.mode)
                this.$router.push("/")
              });
            } else {
              alert("Invalid credentials");
            } 
          }, 
        backHome() {
            return this.$router.push("/tabs/tab1")
        }
    },
    beforeMount() {
        this.fetchCreds();
    }, 
    computed: {
        creds() {
            return this.$store.state.creds;
        },
        currentCreds() {
            console.log(this);
            return this.$store.state.currentCreds;
        },
        loading() {
            return this.$store.state.loadingStatus === 'notloading'
        },
        error() {
            return this.$store.state.errors.length > 0;
        },
        errorList() {
            return this.$store.state.errors;
        }
    },
}