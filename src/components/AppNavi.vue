<template>
    <div>
        <v-toolbar dense color="blue" dark flat>
            <v-toolbar-title>
                <span style="font-weight:bold color:orange">G</span>
                <span style="font-weight:bold">road</span>
            </v-toolbar-title>
            <v-spacer></v-spacer>
            <v-toolbar-items>
                <v-btn text v-for="link in links" :key="link.icon" router :to="link.route">{{link.Text}}</v-btn>
            </v-toolbar-items>
        </v-toolbar>
        <v-navigation-drawer  app v-model="nav_drawer" temporary>
            <v-list nav dense>
                <v-list-item v-for="link in links" :key="link.icon" router :to="link.route">
                    <v-list-item-action>
                        <v-icon left>{{link.icon}}</v-icon>
                    </v-list-item-action>
                    <v-list-item-content>
                        <v-list-item-title>{{link.text}}</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </v-list>
        </v-navigation-drawer>
    </div>
</template>
<script>
export default {
    name:'AppNavi',
    data(){
        return{
            nav_drawer:false,
            group: null,
            links:[
                {icon:'mdi-image-filter-hdr', Text:'마음의 순례길', name:'intro', route:'/intro'},
                {icon:'mdi-airplane-takeoff', Text:'여행 도우미', name:'triphelper', route:'/triphelp'},
                {icon:'mdi-road', Text:'순례길 이야기', name:'story', route:'/stroy'},
                {icon:'mdi-train-car', Text:'여행 정보', name:'info', route:'/info'},
                {icon:'mdi-comment-account-outline', Text:'커뮤니티', name:'cummunity', route:'/community'}
            ]
        }
    },
    watch:{
        group(){
            this.nav_drawer=false;
        }
    }
}
</script>