<template>
<v-app>
    <home-head></home-head>
    <home-body></home-body>
</v-app>
</template>

<script>
  import HomeHead from '../components/HomeHead';
  import HomeBody from '../components/HomeBody';
  export default {
    components: {
      HomeHead,HomeBody
    },
  }
</script>

