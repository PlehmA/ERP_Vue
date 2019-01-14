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
                  <v-text-field prepend-icon="person" name="name" label="Nombre" type="text" v-model="name"></v-text-field>
                  <v-text-field prepend-icon="person_outline" name="username" label="Nombre de usuario" type="text" v-model="username"></v-text-field>
                  <v-text-field id="email" prepend-icon="email" name="email" label="Correo" type="email" v-model="email"></v-text-field>
                  <v-text-field id="password" prepend-icon="lock" name="password" label="Password" type="password" v-model="password"></v-text-field>
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn @keyup.enter.prevent="registroUser" @click.prevent="registroUser" color="primary">Registrar</v-btn>
              </v-card-actions>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
     <v-snackbar
      v-model="snackbar"
      :bottom="y === 'bottom'"
      :left="x === 'left'"
      :multi-line="mode === 'multi-line'"
      :right="x === 'right'"
      :timeout="timeout"
      :top="y === 'top'"
      :color="color"
      :vertical="mode === 'vertical'"
    >
      {{ text }}
      <v-btn
        color="pink"
        flat
        @click="snackbar = false"
      >
        Close
      </v-btn>
    </v-snackbar>
    <Footer></Footer>
  </v-app>
</template>

<script>

import Footer from './../footer/Footer'
const axios = require('axios');

export default {
    
    data: () => ({
      name:  '',
      username: '',
      password: '',
      email: '',
      snackbar: false,
      y: 'top',
      x: 'right',
      color: 'info',
      mode: '',
      timeout: 6000,
      text: ''
  }),
  methods:{
  registroUser(){

    const that = this;

    if(this.username == '' || this.password == '' || this.email == '' || this.name== '')
    {
      return false;
    }

         axios.post('http://127.0.0.1:8000/api/user', {
             name: this.name,
             username: this.username,
             password: this.password,
             email: this.email,
         },
        { headers: {'X-Requested-With': 'XMLHttpRequest'}
        })
          .then((response) => {

            that.snackbar = true;
            that.text = 'Usuario '+ response.data.username +' creado exitosamente.';
           
          })
            .catch((error) => {
            if (error.response) {
  
              if(error.response.status == 422){
                alert('El nombre de usuario ya se encuentra en uso.')
              }else{
                console.log(error);
              }

            } 
          });
            this.name=null;
            this.username=null;
            this.password=null;
            this.email=null;
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