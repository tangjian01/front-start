<template>
    <div>{{ user }}</div>
</template>

<script>
    import userinfo from "~/api/js/userinfo";
    export default {
        name: "Dashboard",
        data(){
            return {
                user : {}
            }
        },
        methods:{
            init:function () {
                var me = this;
                userinfo.getUserInfo(1).then(function (resp) {
                    me.user = resp.data;
                    console.log(process.env)
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