<template>
   <v-footer dark padless tile >
      <v-card tile color="#228B22" dark center class="white--text text-center" width="100%">
        <v-card-text>
          <v-btn v-for="icon in icons" :key="icon" class="mx-4 white--text" icon>
            <v-icon size="24px">{{ icon }}</v-icon>
          </v-btn>
        </v-card-text>
        <v-card-text class="white--text pt-0">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam quam commodi a hic in dolore molestias dolorem maiores nobis possimus culpa atque mollitia autem debitis reiciendis velit, porro tempora corporis?
        </v-card-text>        
        <v-divider></v-divider>        
        <v-card-text class="white--text">
          {{ new Date().getFullYear() }} — <strong>봄내웹</strong>
      </v-card-text>
    </v-card>
  </v-footer>
</template>
<script>
  export default {
    data: () => ({
      icons: [
        'mdi-facebook',
        'mdi-twitter',
        'mdi-linkedin',
        'mdi-instagram',
      ],
    }),
  }
</script>
