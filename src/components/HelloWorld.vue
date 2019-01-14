<template>

    <v-app id="inspire">
    <v-content>
      <v-container fluid fill-height>
        <v-layout align-center justify-center>
          <v-flex xs12 sm8 md4>
            <v-card class="elevation-12">
              <v-toolbar dark color="primary">
                <v-toolbar-title>Ingreso al sistema</v-toolbar-title>
              </v-toolbar>
              <v-card-text>
                <v-form>

                  <v-flex xs12 sm10>
                      <v-text-field xs12 sm10 prepend-icon="fas fa-user" v-model="username" name="login" label="Usuario" type="text"></v-text-field>
                  </v-flex>
                   
                  <v-flex xs12 sm10>
                    <v-text-field
                      prepend-icon="fas fa-key"
                      v-model="password"
                      :append-icon="show1 ? 'visibility_off' : 'visibility'"
                      :rules="[rules.required, rules.min]"
                      :type="show1 ? 'text' : 'password'"
                      name="input-10-1"
                      label="Contraseña"
                      hint="Mínimo 8 caracteres."
                      counter
                      @click:append="show1 = !show1"
                    ></v-text-field>
                  </v-flex>
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn @click="inicioSesion" color="primary">Login</v-btn>
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
import Footer from './footer/Footer'
const axios = require('axios');

  export default {
    data (){
      return {
        username: '',
        show1: false,
        show2: true,
        show3: false,
        show4: false,
        password: '',
        rules: {
          required: value => !!value || 'Required.',
          min: v => v.length >= 8 || 'Min 8 characters',
          emailMatch: () => ('The email and password you entered don\'t match')
        }
      }
    },
    methods:{
      inicioSesion(){
         console.log('Tu usuario es: '+this.username+' y tu password es: '+this.password);

         axios.get('/user?ID=12345')
          .then(function (response) {
            // handle success
            console.log(response);
          this.username = ''; 
          this.password = '';
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
    components: {
      Footer
    }
  }
</script>

<style>

</style>
