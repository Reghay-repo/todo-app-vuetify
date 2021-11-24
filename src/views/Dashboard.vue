<template>
  <div class="dashboard">
    <h1 class="subheading grey--text">Dashboard</h1>

    <v-container class="my-5">

      <!-- order by  -->
      <v-layout row class="mb-3">
        <v-tooltip bottom>
          <template v-slot:activator="{ on, attrs }">
               <v-btn small 
                     text
                    class="grey--text mr-2" 
                    color="white"
                     @click="sortBy('title')"
                      elevation="0" 
                     v-bind="attrs"
                      v-on="on"
                      app>
                <v-icon>folder</v-icon>
                <span class="caption">By project name</span>
              </v-btn>
          </template>
                <span>Sort projects by Project name</span>
        </v-tooltip>
        <v-tooltip bottom>
          <template v-slot:activator="{ on, attrs }">
               <v-btn small 
                     text
                    class="grey--text mr-2" 
                    color="white"
                     @click="sortBy('person')"
                      elevation="0" 
                     v-bind="attrs"
                      v-on="on"
                      app>
                <v-icon>person</v-icon>
                <span class="caption">By person</span>
              </v-btn>
          </template>
                <span small>Sort projects by person name</span>
        </v-tooltip>

       
      </v-layout>
      <!-- projects cards -->
      <v-card  class="pa-3 my-2 " v-for="project in projects" :key="project.id">
        <v-container>
          <v-layout row wrap :class="`my-2  project ${project.status}`" >
          <v-flex xs12 md6>
            <div  class="caption grey--text ml-2 " >Project Title</div>
            <div class="ml-2">{{ project.title }}</div>
          </v-flex>
          <v-flex xs6 s4 md2 >
            <div  class="caption grey--text ml-2">Person</div>
            <div class="ml-2">{{ project.person }} </div>
          </v-flex>
          <v-flex xs6 s4 md2 >
            <div  class="caption grey--text">Due by</div>
            <div class="ml-1"> {{ project.due}}</div>
          </v-flex>
          <v-flex xs6 s4 md2 >
            <div  class="caption grey--text ml-2">Status</div>
             <div id="chip-container">
              <v-chip
                  pill
                  smallnp
                  class="my-2 caption"
                  text-color="white"
                  :class="project.status"
                  
                >{{ project.status }}</v-chip>
             </div>
          </v-flex>
        </v-layout>
        </v-container>
      </v-card>
    </v-container>
  </div>
</template>

<script>

  export default {
    name: 'Dashboard',
    data() {
      return {
        projects : [
          {id: '1' ,title: 'Create a todo list', person: 'Oussama', due : '19th Nov 2021', status: 'ongoing'},
          {id: '2' ,title: 'Employee Management system', person: 'Oussama', due : '23 Nov 2021', status: 'ongoing'},
          {id: '3' ,title: 'Brand Store Management system ', person: 'Oussama', due : '30 Nov 2021', status: 'On hold'},
          {id: '4' ,title: 'Antiques Website', person: 'Oussama', due : '8 Dec 2021', status: 'On hold'},
          {id: '5' ,title: 'Multi vendor Ecomerce website', person: 'Oussama', due : '12th Oct 2020', status: 'complete'},
          {id: '6' ,title: 'Multi vendor Ecomerce website', person: 'Saad', due : '12th Oct 2020', status: 'complete'},
        ]
      }
    },
    methods : {
      sortBy(prop) {
        this.projects.sort((a,b) => a[prop] < b[prop] ? -1 : 1)
      }
    }

    
  }
</script>



<style>
  .project.ongoing {
    border-left: 5px solid orange;
    
  }

  #chip-container .v-chip.ongoing {
    background: orange;
  }

  .project.hold {
    border-left: 5px solid red;
  }
  #chip-container .v-chip.hold {
    background: red;
  }


  .project.complete {
    border-left: 5px solid green;
  }
 
  #chip-container .v-chip.complete {
    background: green;
  }

</style>