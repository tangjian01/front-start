<template>
    <div>
        用户名： <input type="text" v-model="user.name"></input>
        密码： <input type="password" v-model="user.password"></input>
        <button type="button" @click="login">登录</button>
    </div>
</template>

<script>
    import login from "~/api/js/login";
    export default {
        name: "login",
        data(){
            return{
                user:{name:"",password:""}
            }
        },
        methods:{
            login:function () {
                var me = this;
                if(!this.user.password || !this.user.name) return;
                login.login(this.user.name,this.user.password).then(function (resp) {
                    if(resp.code == "0000"){
                        window.localStorage.setItem('ms_username',me.user.name)
                        me.$router.push('/dashboard')
                    }
                })
            }
        }
    }
</script>

<style scoped>

</style>