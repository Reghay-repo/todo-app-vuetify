<template>
  <div class="team">
    <h1 class="subheading grey--text">Team</h1>
    <v-container class="my-5">
      <v-layout row wrap>
        <v-flex xs12 sm6 md4  v-for="person in team" :key="person.name">
          <v-card  
              class="text-center  py-3 ma-3"
              max-width="500">
              <v-responsive class="py-4">
                <!-- Avatar -->
              <v-avatar
                size="50">
                  <img :src="person.avatar" alt="person.name">
                </v-avatar> 
              </v-responsive>
              <!-- name -->
              <div class="subheading">{{ person.name }}</div>
              <!-- role -->
              <div class="grey--text">{{ person.role }}</div>

              <v-actions>
                <v-btn class="mt-4"  elevation="0" color="" app>
                  <v-icon small left>message</v-icon>
                  <span>contact</span>
                </v-btn>
              </v-actions>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>

  export default {
    name: 'Team',
    data() {
      return {
        team: [
          {avatar : '/avatars/oussama.png' ,name: 'oussama reghay', role : 'Laravel developement'},
          {avatar : '/avatars/salim.png' ,name: 'Salim elkelloti', role : 'Selenium expert'},
          {avatar : '/avatars/adnan.png' ,name: 'adnan bensouda ', role : 'WordPress Developer/Python'}
        ]
      }
    }
    
  }
</script>
