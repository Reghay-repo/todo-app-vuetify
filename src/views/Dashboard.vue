<template>
  <div class="dashboard">
    <h1 class="subheading grey--text">Dashboard</h1>

    <v-container class="my-5">
      <v-card  class="pa-3 my-2" v-for="project in projects" :key="project.id">
        <v-container>
          <v-layout row wrap>
          <v-flex xs12 md6>
            <div  class="caption grey--text" >Project Title</div>
            <div class="ml-1">{{ project.title }}</div>
          </v-flex>
          <v-flex xs6 s4 md2 >
            <div  class="caption grey--text">Person</div>
            <div class="ml-1">{{ project.person }} </div>
          </v-flex>
          <v-flex xs6 s4 md2 >
            <div  class="caption grey--text">Due by</div>
            <div class="ml-1"> {{ project.due}}</div>
          </v-flex>
          <v-flex xs2 s4 md2 >
            <div  class="caption grey--text">Status</div>
            <div class="ml-1">{{ project.status }} </div>
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
          {id: '1' ,title: 'Create a todo list', person: 'Oussama', due : '19th Nov 2021', status: 'Ongoing'},
          {id: '2' ,title: 'Employee Management system', person: 'Oussama', due : '23 Nov 2021', status: 'Ongoing'},
          {id: '3' ,title: 'Brand Store Management system ', person: 'Oussama', due : '30 Nov 2021', status: 'On hold'},
          {id: '4' ,title: 'Antiques Website', person: 'Oussama', due : '8 Dec', status: 'On hold'}
        ]
      }
    }

    
  }
</script>
