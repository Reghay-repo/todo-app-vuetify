<template>
  <div class="text-center">
    <v-dialog
      
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
            <v-text-field label="Title" v-model="title" :rules="formRules"  prepend-icon="folder" ></v-text-field>
            <v-textarea v-model="information" :rules="formRules" prepend-icon="edit" label="information"></v-textarea>

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
                        text
                        :close-on-content-click="false"
                        @click="submit"
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
  // import db from '/firebase'

  export default {
    name : 'Popup',
    data: () => ({
        title : '',
        information : '',
        due : null,
        formRules: [
          v => v.length >= 3 || 'more than 3 characters are required '
        ]
    }),
    methods:{
      submit(){
        if(this.$refs.form.validate()) {
          // const project = {
          //   person: 'oussama',
          //   content: this.content,
          //   title : this.title,
          //   due: format(this.due, 'do MMM yyyy'),
          //   status: 'on hold'

          // }
          // db.collection('projects').add(project).then( ()=> {
          //   console.log('added to db');
          // });
        }
      }
    },

    computed: {
    
      computedDateFormattedDatefns () {
        return this.due ? format(parseISO(this.due), 'do MMM  yyyy') : ''
      }
    },
  }
</script>