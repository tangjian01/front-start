<template>
    <div>
        <button type="button" @click="login">登录</button>
        <button type="button" @click="getInfo">获取登录用户</button>
        <button type="button" @click="logout">登出</button>
        {{ user }}
    </div>
</template>

<script>
    import userinfo from "~/api/js/userinfo";
    import login from "~/api/js/login";
    export default {
        name: "Dashboard",
        data(){
            return {
                user : {}
            }
        },
        methods:{
            init:function () {
                // var me = this;
                // userinfo.getUserInfo(1).then(function (resp) {
                //     me.user = resp.data;
                //     console.log(process.env)
                // })
            },
            login:function () {
                login.login("222","123456").then(function (resp) {
                    console.log(resp)
                })
            },
            logout:function(){
                login.logout().then(function (resp) {
                    console.log(resp)
                })
            },
            getInfo:function () {
                var me  = this;
                userinfo.getCurrent().then(function (resp) {
                    me.user = resp.data;
                })
            }
        },
        mounted() {
            this.init();
        }
    }
</script>

<style scoped>

</style>