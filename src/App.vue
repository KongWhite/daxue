<template>
  <div id="app">
    <div class="top">
      <p v-show="isshow" @click="back">&lt;</p>
      <h3>{{top}}</h3>
    </div>
    <router-view></router-view>
  </div>
</template>
<script>
  export default{
    data(){
      return{
        top:"活动中心",
        isshow:false
      }
    },
    methods:{
      back(){
        this.$router.go(-1);
      }
    },
    watch:{
      $route(now,old){
        var id=this.$route.params.id; 
        if(now.path=="/"){
          this.top="活动中心";
          this.isshow=false;
        }  
        else if(now.path=="/login"){
          this.top="申请报名";
          this.isshow=true;
        } 
        else if(now.path=="/Detail/"+id){
          this.top="活动预告";
          this.isshow=true;
        }  
        else if(now.path=="/daka"){
          this.top="打卡情况";
          this.isshow=true;
        }
     }
    }
  }
</script>
<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  padding-top:3.2rem;
  background:#f8f8f8;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
#app .top{
  position:fixed;
  top:0;
  left:0;
  width:100%;
  background:#fff;
  padding:0.8rem;
  display:flex;
  justify-content:left;
  align-items:center;
}
#app .top h3{
  font-size:1.2rem;
  margin:0 auto;
}
#app .top p{

}
</style>
