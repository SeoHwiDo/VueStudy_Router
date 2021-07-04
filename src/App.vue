<template>
  <div>
    <app-navi></app-navi>
    <v-content>
      
      <router-view></router-view>
    </v-content>
  </div>
</template>

<script>
import AppNavi from '@/components/AppNavi';

export default {
  name: 'App',
  components:{AppNavi}
}
</script>
