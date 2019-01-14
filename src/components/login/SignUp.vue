<template>
   <v-app>
    <v-content>
      <v-container fluid fill-height>
        <v-layout align-center justify-center>
          <v-flex xs12 sm8 md4>
            <v-card class="elevation-12">
              <v-toolbar dark color="primary">
                <v-toolbar-title>Formulario de registro</v-toolbar-title>
                <v-spacer></v-spacer>
              </v-toolbar>
              <v-card-text>
                <v-form>
                  <v-text-field prepend-icon="person" name="username" label="username" type="text" v-model="username"></v-text-field>
                  <v-text-field id="email" prepend-icon="email" name="email" label="email" type="email" v-model="email"></v-text-field>
                  <v-text-field id="password" prepend-icon="lock" name="password" label="Password" type="password" v-model="password"></v-text-field>
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn @click.prevent="registroUser" color="primary">Registrar</v-btn>
              </v-card-actions>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
    <Footer></Footer>
  </v-app>
</template>

<script>
import Footer from './../footer/Footer'
const axios = require('axios');
export default {
    
    data: () => ({
    username: '',
    password: '',
    email: ''
  }),
  methods:{
  registroUser(){
         console.log('Tu usuario es: '+this.username+' y tu password es: '+this.password);

         axios.post('http://127.0.0.1:8000/api/user', {
             username: this.username,
             password: this.password,
             email: this.email,
         },
        { headers: {'X-Requested-With': 'XMLHttpRequest'}
        })
          .then(function (response) {
            // handle success
            console.log(response);
          this.username = ''; 
          this.password = '';
          this.email = '';
          })
          .catch(function (error) {
            // handle error
            console.log(error);
          })
          .then(function () {
            // always executed
          });
      }
  },
  components:{
Footer
  },

  props: {
    source: String
  }
  }
</script>