<template>
  <div class="text-center">
    <v-dialog
      v-model="dialog"
      width="500"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          color="green"
          
          v-bind="attrs"
          v-on="on"
        >
          <span class="white--text">Add a new Project</span>
        </v-btn>
      </template>

      <v-card>
        <v-card-title class="text-h5 grey lighten-2">
          Add new Project
        </v-card-title>

        <v-form class="px-3" ref="form"> 
            <v-text-field label="Title" v-model="title"  :rules="formRules"  prepend-icon="folder" ></v-text-field>
            <v-textarea v-model="information" :rules="formRules"  clearable prepend-icon="edit" label="information"></v-textarea>

            <!-- date picker -->
           <v-menu

          v-model="menu2"
          :close-on-content-click="false"
          max-width="290"
        >
          <template v-slot:activator="{ on, attrs }">
            <v-text-field
              :value="computedDateFormattedDatefns"
              clearable
              label="Due Date"
              readonly
               :rules="formRules"
              prepend-icon="mdi-calendar"
              v-bind="attrs"
              v-on="on"
              @click:clear="due = null"
            ></v-text-field>
          </template>
          <v-date-picker
            v-model="due"
            @change="menu2 = false"
          ></v-date-picker>
        </v-menu>
            <!-- date picker -->
            <v-card-actions>
            <v-spacer></v-spacer>
                    <v-btn
                        color="primary"
                        @click="submit(); dialog = false"
                    >
                        Add Project
                    </v-btn>
            </v-card-actions>
        </v-form>
       
        <v-divider></v-divider>

      
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
  import { format, parseISO } from 'date-fns'
  import axios from 'axios';

  axios.defaults.baseURL = (process.env.API_PATH !== 'production') ? 'http://localhost:8000/api/' : '';



 

  export default {
    name : 'Popup',
    data: () => ({
        title : null,
        information : null,
        due : null,
        dialog:false,
        formRules: [
          v => v.length >= 3 || 'more than 3 characters are required '
        ]
    }),
    methods:{

      submit(){

        if(this.$refs.form.validate()) {
          this.loading = true
          const project = {
               person: 'oussama',
              information: this.information,
              title: this.title,
              status: 'on hold',
             due: this.due
           };
          axios.post('/create', project)
          .then(function (response) {
            console.log(response);

          })
          .catch(function (error) {
            console.log(error);
          });

         
        }
      }
    },

    watch: {
     
    dialog() {
        this.$refs.form.reset()

    }
  },

    computed: {
    
      computedDateFormattedDatefns () {
        return this.due ? format(parseISO(this.due), 'do MMM  yyyy') : ''
      }
    },
  }
</script>