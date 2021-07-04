<template>
    <v-app>
        <v-container fluid>
            <v-layout row wrap>
                <v-flex md4><div class="poster"><img src="../assets/home_body_poster.jpg" alt=""></div></v-flex>
                <v-flex md4>
                    <div>
                        <span class="display-1 font-weight-bold my-2">마음의 순례길 행사 및 공지</span>
                        <div>
                            <span>2022년 3월 2일 정기 걷기</span>
                        </div>
                         <div>
                            <span>마음의 순례길 공식 어플리케이션 출시</span>
                        </div>
                         <div>
                            <span>마음의 순례길 사진 공모전 개최</span>
                        </div>
                    </div>
                </v-flex>
                <v-flex md4><div class="content"><img src="../assets/home_body_content.jpg" alt=""></div></v-flex>
        </v-layout>
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
    overflow: hidden;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
}
.content{
    overflow: hidden;
    align-items: center;
    justify-content: center;
    width: 150%;
    height: 150%;
}
</style>