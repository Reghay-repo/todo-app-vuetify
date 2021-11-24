<template>
  <div class="projects">
    <h1 class="subheading grey--text">Projects</h1>

  <v-expansion-panels>
    <v-expansion-panel v-for="project in projects" :key="project.id">
      <v-expansion-panel-header>{{ project.title }} </v-expansion-panel-header>
      <v-expansion-panel-content>
        <v-card flat class="px-4">
          <v-card-text>
            <div class="font-weight-bold grey--text">Due by {{ project.due }} </div>
            <div class="grey--text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, modi?</div>
          </v-card-text>
        </v-card>
      </v-expansion-panel-content>

    </v-expansion-panel>
  </v-expansion-panels>
  </div>
</template>

<script>

  export default {
    title : 'my projects',
    name: 'Projects',
    data() {
      return {
         projects : [
          {id: '1' ,title: 'Create a todo list', person: 'Oussama', due : '19th Nov 2021', status: 'ongoing'},
          {id: '2' ,title: 'Employee Management system', person: 'Oussama', due : '23 Nov 2021', status: 'ongoing'},
          {id: '3' ,title: 'Brand Store Management system ', person: 'Oussama', due : '30 Nov 2021', status: 'On hold'},
          {id: '4' ,title: 'Antiques Website', person: 'Oussama', due : '8 Dec 2021', status: 'On hold'},
          {id: '5' ,title: 'Multi vendor Ecomerce website', person: 'Oussama', due : '12th Oct 2020', status: 'complete'},
        ]
      }
    },
    computed: {
      //
    }

    
  }
</script>
