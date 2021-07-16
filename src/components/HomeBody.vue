<template>
    <v-app>
        <v-container class="back" fluid >
                <v-layout row wrap>
                    <v-col cols="12" sm="4" >
                        <v-card >
                            <v-img src="../assets/home_body_poster.jpg" />
                        </v-card>
                    </v-col>
                    <v-col cols="12" sm="4">
                        <v-card>
                            <v-list>
                                <v-list-item-title class="display-1 font-weight-bold my-2">마음의 순례길 행사 및 공지</v-list-item-title>
                                    <v-list-item v-for="item in items" :key="item.name" router :to="item.link">
                                        <v-list-item-content>
                                        <v-list-item-title>{{item.title}}</v-list-item-title>
                                        </v-list-item-content>
                                    </v-list-item>
                            </v-list>
                        </v-card>
                    </v-col>
                    <v-col cols="12" sm="4">
                        <v-card>
                            <v-img src="../assets/home_body_content.jpg" />
                        </v-card>
                    </v-col>
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
                {name:'notice01',title:'2022년 3월 2일 정기 걷기',link:"#"},
                {name:'notice02',title:'마음의 순례길 공식 어플리케이션 출시',link:"#"},
                {name:'notice03',title:'마음의 순례길 사진 공모전 개최',link:"#"}
            ]
        }
    }
}
</script>
<style scoped>
.back{
    background:#5EC75E;
    
}
</style>