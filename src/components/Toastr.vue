<template>
  <div class="toastr">
    <div class="toastr_box">
      <div class="close" @click="close">
        <i class="icon iconfont icon-x"></i>
      </div>
      <h5>恭喜您成功报名老年大学活动</h5>
      <p>后续针对老年大学活动动态,会通过微信消息推送给您,感谢您的关注</p>
      <div class="btn">
        <button @click="ok">好的,我知道了</button>
      </div>
    </div>
    <div class="ture">
      <i class="icon iconfont icon-duigou"></i>
    </div>
  </div>
</template>
<script>
export default {
  name:"toastr",
  data(){
    return{}
  },
  methods:{
    ok(){
     this.$router.push("/")
    },
    close(){
      this.$emit('inputName',false);
    }
  }
}
</script>

<style scoped>
.toastr{
  position: fixed;
  top:0;
  left: 0;
  background-color: rgba(124, 124, 124, .7);
  width:100vw;
  height:100vh;
}
.toastr .toastr_box{
  padding:5rem 0.4rem 0.4rem 0.4rem;
  width:90vw;
  height:30vh;
  position:absolute;
  top:50%;
  left:50%;
  margin-top:-20vh;
  margin-left:-45vw;
  background:#f8f8f8;
  border-radius: 2rem;
}
.toastr .toastr_box h5{
  font-size:1.2rem;
}
.toastr .toastr_box p{
  margin-top:1rem;
  color:#666666;
  line-height: 150%;
}
.ture {
  width:6rem;
  height:6rem;
  background:#51b3fc;
  text-align: center;
  position: relative;
  border-radius: 50%;
  top:24%;
  left:50%;
  margin-left:-3rem;

}
.ture .icon-duigou{
  color:#fff;
  font-size:3rem;
  position: absolute;
  top:50%;
  left:50%;
  margin-top:-1.5rem;
  margin-left:-1.5rem;
}
.btn button{
  border:none;
  font-size:1.4rem;
  margin-top:2rem;
  padding:0.8rem 4rem;
  border-radius: 4rem;
  background: linear-gradient(to right, #52b4fc, #4886eb);
  color:#fff;
}
.close {
  padding:0.4rem;
  background:#dedede;
  position: absolute;
  top:5%;
  right:5%;
  border-radius: 50%;
  
}
.icon-x{
color:#b9b9b9;
font-size:1.4rem;
}
</style>
