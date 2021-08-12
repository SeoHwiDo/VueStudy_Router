<template>
  <div>
    <div><img class="imgsize" :src="img" alt=""></div>
  </div>
</template>
<script>
export default {
    name:'Intro',
    data() {
        return{
            img:require("../../assets/map.png"),
            imgsize:{
              width:"100%",
              height: "auto",
            }
        }
            
    },
}
</script>
<style scoped>
  .imgsize{
    width:100%;
    height:auto;
  }
</style>