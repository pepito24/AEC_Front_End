
<template>
    <div id="app">
        <div id="nav">
            <router-link to="/" class="menu" >Home</router-link>
            <router-link v-if="authenticated === false" to="/login" class="menu">Login</router-link>
            <router-link v-if="authenticated" to="/login" v-on:click.native="logout()" replace class="menu">Logout</router-link>
            <router-link v-if="authenticated" to="/secure" class="menu">Secure</router-link>
        </div>
        <router-view @authenticated="setAuthenticated" />
    </div>
</template>

<script>
    export default {
        name: 'App',
        data() {
            return {
                authenticated: false,
                mockAccount: {
                    username: "nraboy",
                    password: "password"
                }
            }
        },
        mounted() {
            if(!this.authenticated) {
                this.$router.replace({ name: "logins" });
            }
        },
        methods: {
            setAuthenticated(status) {
                this.authenticated = status;
            },
            logout() {
                this.authenticated = false;
            }
        }
    }
</script>

<style>
    body {
        background-color: #F0F0F0;
    }
    h1 {
        padding: 0;
        margin-top: 0;
    }
    #app {
        width: 90%;
        margin: 1% 5%;
    }

.menu{
        margin: 0px 10px;
        font-size: 22px;
    }
    
</style>