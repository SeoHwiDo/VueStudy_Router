<template>
    <div>
        <v-toolbar color="#228B22" dark flat height="100px" >
            <v-app-bar-nav-icon @click="nav_drawer=!nav_drawer" v-if="$vuetify.breakpoint.xsOnly"></v-app-bar-nav-icon>
            <v-toolbar-title>
                <v-card tile color="#228B22" dark center class="white--text text-center" height="100%" router :to="'/'">
                    <span style="font-weight:bold; color:orange">G</span>
                    <span style="font-weight:bold">road</span>
                </v-card>
            </v-toolbar-title>
            <v-spacer></v-spacer>
            <v-toolbar-items v-if="$vuetify.breakpoint.smAndUp">
                <v-menu open-on-hover offset-y
                tile
                v-for="link in links" 
                :key="link.name" >
                <template v-slot:activator="{ on, attrs }">
                    <v-btn 
                        text
                        router 
                        :to="link.route"
                        
                        v-bind="attrs"
                        v-on="on">
                        {{link.Text}}
                    </v-btn>
                </template>
                    <v-list v-if="link.item">
                            <v-list-item v-for="item in link.item" :key="item.name" router :to="item.route" >
                                    <v-list-item-title>{{item.text}}</v-list-item-title>
                            </v-list-item>
                    </v-list>
                </v-menu>
            </v-toolbar-items>
        </v-toolbar>
        
        <v-navigation-drawer v-model="nav_drawer" absolute temporary>
            <v-list nav>
                <v-list-item-group v-model="group" active-class="deep-purple--text text--accent-4">
                    <v-list-item v-for="link in links" :key="link.name" router :to="link.route">
                        <v-list-item-action>
                            <v-icon left>{{link.icon}}</v-icon>
                        </v-list-item-action>
                        <v-list-item-content>
                            <v-list-item-title>{{link.Text}}</v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>
                </v-list-item-group>
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
            ShowMenu:false,
            links:[
                {icon:'mdi-image-filter-hdr', Text:'마음의 순례길', name:'intro', route:'/intro' 
                },
                {icon:'mdi-airplane-takeoff', Text:'여행 도우미', name:'triphelper', route:'/triphelper',
                item:[
                    {name:"list1",text:'여행가이드라인',route:'/triphelper/guide'},
                    {name:"list2",text:'준비물',route:'/triphelper/materials'},
                    {name:"list3",text:'서비스',route:'/triphelper/service'},
                    {name:"list4",text:'디지털패스포트',route:'/triphelper/passport'},
                    ]
                },
                {icon:'mdi-road', Text:'순례길 이야기', name:'story', route:'/story',
                item:[
                    {name:"list1",text:'제 1 코스',route:'/story/road01'},
                    {name:"list2",text:'제 2 코스',route:'/story/road02'},
                    {name:"list3",text:'제 3 코스',route:'/story/road03'},
                    {name:"list4",text:'제 4 코스',route:'/story/road04'},
                    {name:"list5",text:'제 5 코스',route:'/story/road05'},
                    {name:"list6",text:'제 6 코스',route:'/story/road06'},
                    ]
                },
                {icon:'mdi-train-car', Text:'여행 정보', name:'info', route:'/info',
                item:[
                    {name:"list1",text:'음식점 정보',route:'/info/food'},
                    {name:"list2",text:'숙박 시설',route:'/info/sleep'},
                    ]
                },
                {icon:'mdi-comment-account-outline', Text:'커뮤니티', name:'community', route:'/community',
                item:[
                    {name:"list1",text:'순례길 소식',route:'/community/notice'},
                    {name:"list2",text:'순례자 이야기',route:'/community/freeboard'},
                    {name:"list3",text:'뉴스레터',route:'/community/newsletter'},
                    {name:"list4",text:'자료실',route:'/community/content'},
                    ]
                }
            ]
        }
    },
    methods: {
        menu1:function(){
            this.ShowMenu=true;
        },
        menu2:function(){
            this.ShowMenu=false;
        }
    },
    watch:{
        group(){
            this.nav_drawer=false;
        }
    }
}
</script>