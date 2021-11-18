<template>
  <div class="dashboard">
    <h1 class="subheading grey--text">Dashboard</h1>

    <v-container class="my-5">
      <v-card  class="pa-3">
        <v-container>
          <v-layout row wrap>
          <v-flex xs12 md6>
            <div  class="caption grey--text">Project Title</div>
            <div class="ml-1">create website</div>
          </v-flex>
          <v-flex xs6 s4 md2 >
            <div  class="caption grey--text">Person</div>
            <div class="ml-1">the net turtle</div>
          </v-flex>
          <v-flex xs2 s4 md2 >
            <div  class="caption grey--text">Due by</div>
            <div class="ml-1">1st Feb 2021</div>
          </v-flex>
          <v-flex xs2 s4 md2 >
            <div  class="caption grey--text">Status</div>
            <div class="ml-1">Ongoing</div>
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

    
  }
</script>
