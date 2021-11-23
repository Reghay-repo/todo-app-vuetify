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

        <v-form class="px-3"> 
            <v-text-field label="Title" v-model="title" prepend-icon="folder" ></v-text-field>
            <v-textarea v-model="information" prepend-icon="edit" label="information"></v-textarea>

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

  export default {
    name : 'Popup',
    data: () => ({
        title : '',
        information : '',
        due : null
    }),
    methods:{
      submit(){
        console.log(this.title,this.information,parseISO(this.due))
      }
    },

    computed: {
    
      computedDateFormattedDatefns () {
        return this.due ? format(parseISO(this.due), 'EEEE, MMMM do yyyy') : ''
      }
    },
  }
</script>