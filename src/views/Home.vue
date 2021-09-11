<template>
<v-app>
    <home-head></home-head>
    <v-row no-gutters dense class="cyan lighten-3">
      <v-col cols=4><course-summary></course-summary></v-col>
      <v-col><course-summary></course-summary></v-col>
      <v-col><course-summary></course-summary></v-col>
    </v-row>
    <home-body></home-body>
</v-app>

</template>

<script>
  import HomeHead from '../components/HomeHead';
  import HomeBody from '../components/HomeBody';
  import CourseSummary from '../components/CourseSummary.vue';
  export default {
    components: {
      HomeHead,HomeBody,CourseSummary
    },
  }
</script>

