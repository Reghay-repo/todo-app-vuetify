<template>
    <nav>
        <v-app-bar  text app >
            <v-app-bar-nav-icon class="grey--text" @click="drawer = !drawer"></v-app-bar-nav-icon>
            <v-toolbar-title class="text--uppercase grey--text">
                <span class="font-weight-light">Project</span>
                <span>M</span>
            </v-toolbar-title >
            <v-spacer></v-spacer>
            <v-btn text  elevation="0" class="grey--text" app>
                <span>
                    Sign Out
                </span>
                <v-icon right>exit_to_app</v-icon>
            </v-btn>


        </v-app-bar>
        <v-navigation-drawer v-model="drawer" app class="primary">
            <v-layout column align-center>
                <v-flex class="my-5">
                    <v-avatar size="100">
                        <img src="/avatars/oussama.png" alt="avatar">
                    </v-avatar>
                    <p class="white--text subheading mt-3">Oussama reghay</p>
                </v-flex>
                <v-flex class="mt-4 mb-3">
                    <popup/>
                </v-flex>
            </v-layout>
            <v-list>
                <v-list-item v-for="link in links" :key="link.text" router :to="link.route">
                    <v-list-item-action>
                        <v-icon class="white--text">{{ link.icon }}</v-icon>
                    </v-list-item-action>
                    <v-list-content>
                        <v-list-item-content>
                            <v-list-item-title class="white--text">{{ link.text }}</v-list-item-title>
                        </v-list-item-content>
                    </v-list-content>
                </v-list-item>
            </v-list>
        </v-navigation-drawer>
    </nav>
</template>

<script>
import Popup from './Popup';

export default {
    components : {
        Popup
    },
    data() {
        return {
            drawer:false,
            links : [
                {icon: 'dashboard', text: 'Dashboard', route: '/'},
                {icon: 'folder', text: 'My projects', route: '/projects'},
                {icon: 'person', text: 'Team', route: '/team'},
               
            ]
        }
    }
}
</script>

<style>

</style>