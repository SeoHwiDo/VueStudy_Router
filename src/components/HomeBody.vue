<template>
    <v-app>
        <v-container fluid>
            <v-flex xs4 class="text-xs-center my-2"><div class="poster"></div></v-flex>
            <v-flex xs4 class="text-xs-center my-2">
                <div>
                    <span class="display-1 font-weight-bold my-2">마음의 순례길 행사 및 공지</span>
                    <div>
                        <span v-for="item in items" :key="item.title" :href="item.link">{{item.title}}</span>
                    </div>
                </div>
            </v-flex>
            <v-flex xs4 class="text-xs-center my-2"><div class="content"></div></v-flex>
        </v-container>
    </v-app>
</template>
<script>
export default {
    name:"HomeBody",
    data(){
        return{
            items:[
                {title:'2022년 3월 2일 정기 걷기',link:"~@/assets/notice01.txt"},
                {title:'마음의 순례길 공식 어플리케이션 출시',link:"~@/assets/notice01.txt"},
                {title:'마음의 순례길 사진 공모전 개최',link:"~@/assets/notice01.txt"}
            ]
        }
    }
}
</script>
<style scoped>
.poster{
    background: url('~@assets/home_body_poster.jpg');
    background-size: cover;
    width: 100%;
    height: 100%;
}
.content{
    background: url('~@assets/home_body_content.jpg');
    background-size: cover;
    width: 100%;
    height: 100%;
}
</style>