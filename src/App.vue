<template>
  <div>
    <v-content>
      <app-navi></app-navi>
      <router-view></router-view>
    </v-content>
  </div>
</template>

<script>
import AppNavi from './components/AppNavi';

export default {
  name: 'App',
  compnents:{AppNavi}
}
</script>
