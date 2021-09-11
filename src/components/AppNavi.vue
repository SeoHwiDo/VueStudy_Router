
<template>
    <div>
        <v-toolbar dark color="#FFFFFF" height="80">
            <v-app-bar-nav-icon @click="nav_drawer=!nav_drawer" v-if="$vuetify.breakpoint.xsOnly"/>
            <v-toolbar-items >
                <v-card flat color="rgba(0,0,0,0)" router :to="'/'">
                <v-img src="../assets/logo.png" width="80" />
                </v-card>
            </v-toolbar-items>
            <v-spacer />
            <v-toolbar-items v-if="$vuetify.breakpoint.smAndUp">
                <v-menu open-on-hover offset-y tile v-for="link in links" :key="link.name">
                    <template v-slot:activator="{ on, attrs }">
                        <v-btn text style="font-weight:bold" color="#3b7097" router :to="link.route" v-bind="attrs" v-on="on">
                            {{link.Text}}
                        </v-btn>
                    </template>
                    <v-card
                    >
                        <v-list v-if="link.item">
                            <v-list-item v-for="item in link.item" :key="item.name" router :to="item.route" >
                                <v-list-item-title>
                                    {{item.text}}
                                </v-list-item-title>
                            </v-list-item>
                        </v-list>
                        <v-list v-else-if="link.Text==='마음의 순례길'">
                            <v-list-item>
                                <v-list-item-content>
                                    <v-list-item-title>마음의 순례길</v-list-item-title>
                                    <v-list-item-subtitle>
                                    <v-img src="../assets/map.png" max-width="500"/>
                                    </v-list-item-subtitle>
                                </v-list-item-content>
                            </v-list-item>
                        </v-list>
                        
                    </v-card>
                </v-menu>
            </v-toolbar-items>
        <v-spacer></v-spacer>
        <v-toolbar-items v-if="$vuetify.breakpoint.smAndUp">
            <v-toolbar-items v-if="login_status">
                <v-btn text style="font-weight:bold" color="#3b7097" router :to="'mypage'" >
                    마이페이지
                </v-btn>
                <v-btn text style="font-weight:bold" color="#3b7097" @click="login_status=!login_status">
                    로그아웃
                </v-btn>
            </v-toolbar-items>
            <v-toolbar-items v-else>
                <v-btn text style="font-weight:bold" color="#3b7097" router :to="'signup'">
                    회원가입
                </v-btn>
                <v-btn text style="font-weight:bold" color="#3b7097" @click="login_status=!login_status" router :to="'login'">
                    로그인
                </v-btn>
            </v-toolbar-items>
            <v-btn text style="font-weight:bold" color="#3b7097" @click="ㅇ">
                    검색
                </v-btn>
        </v-toolbar-items>
            
            
        </v-toolbar>
        <v-navigation-drawer v-model="nav_drawer" absolute temporary>
            <v-menu open-on-hover offset-x tile v-for="link in links" :key="link.name">
                <template v-slot:activator="{ on, attrs }">
                    <v-list nav>
                        <v-list-item-group v-model="group" active-class="deep-purple--text text--accent-4">
                            <v-list-item router :to="link.route" v-bind="attrs" v-on="on">
                                <v-list-item-action>
                                    <v-icon left>
                                        {{link.icon}}
                                    </v-icon>
                                </v-list-item-action>
                                <v-list-item-content>
                                    <v-list-item-title>
                                        {{link.Text}}
                                    </v-list-item-title>
                                </v-list-item-content>
                            </v-list-item>
                        </v-list-item-group>  
                    </v-list>
                </template>
                <v-card>
                    <v-list v-if="link.item">
                        <v-list-item v-for="item in link.item" :key="item.name" router :to="item.route" >
                            <v-list-item-title>
                                {{item.text}}
                            </v-list-item-title>
                        </v-list-item>
                    </v-list>
                </v-card>
            </v-menu>
        </v-navigation-drawer>
    </div>
</template>
<script>

export default {
    name:'AppNavi',
    data(){
        return{
            login_status:false,
            nav_drawer:false,
            group: null,
            ShowMenu:false,
            links:[
                {icon:'mdi-image-filter-hdr', Text:'마음의 순례길', name:'intro', route:'/intro'},
                {icon:'mdi-airplane-takeoff', Text:'여행 도우미', name:'triphelper', route:'/triphelper'},
                {icon:'mdi-road', Text:'순례길 이야기', name:'story', route:'/story',
                    item:[
                        {name:"list1",text:'1길',route:'/story/road01'},
                        {name:"list2",text:'2길',route:'/story/road02'},
                        {name:"list3",text:'3길',route:'/story/road03'}
                    ]
                },
                {icon:'mdi-train-car', Text:'여행 정보', name:'info', route:'/info'},
                {icon:'mdi-comment-account-outline', Text:'커뮤니티', name:'community', route:'/community',
                    item:[
                        {name:"list1",text:'순례길 소식',route:'/community/notice'},
                        {name:"list2",text:'순례자 이야기',route:'/community/freeboard'}
                    ]
                },
            ],
            logins_bf:[
                {menu:"로그인",route:"#"},
                {menu:"회원가입",route:"#"},
                
            ],
            logins_af:[
                {menu:"마이페이지",route:"#"},
                {menu:"로그아웃"}
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