<template>
  <div class="detail">
    <div class="detail_box">
      <div class="img_box">
        <img src="@/assets/images/detail_03.png" alt="">
      </div>
      <div class="content">
        <h3>{{list.title}}</h3>
        <div class="place">
          <p>活动时间:<span>{{list.time}}</span></p>
          <p>活动地点:<span>{{list.place}}</span></p>
        </div>
        <h4>内容</h4>
        <div class="msg_box">
          <p class="msg">{{list.content}}</p>
        </div>
        <h4>报名方式</h4>
        <div class="msg_box">
          <p class="msg">{{list.know}}</p>
        </div>
      </div>
      <div>
        <div class="btn">
          <button @click="jump('/Login')">报名</button>
          <a href="#">领取任务</a>
          <span>|</span>
          <a href="#">分享</a>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data(){
    return{
      list:{
        title:"2018社区羽毛球大赛",
        time:"2018-09-09",
        place:"深圳市",
        content:"周杰伦是2000年后亚洲流行乐坛最具有革命性创作才华不仅体现在超强的现场即兴创作能力和对乐理、种乐器的精通,还体现在颠覆常人不入俗套的创作。杰伦在乐曲中融入了各式东西方古典音乐,从融入的中国风到欧洲中世纪巴洛创作思路使周杰伦的歌任何一种音乐形式",
        know:"1、购买时，您需要输入购票人身份证验证，每张门票一个证件号"
      }
    }
  },
  methods:{
    jump(router){
      this.$router.push(router)
    }
  }
}
</script>
<style scoped>
  .detail{
    width:100vw;
    height: 100vh;
  }
  .detail .detail_box{
    width:94%;
    margin:0 auto;
  }
  .detail .img_box{
    width:100%;

  }
  .detail .img_box img{
    width:100%;
  }
  .content{
    padding-bottom:4rem;
  }
  .content h3{
    text-align: left;
    font-size: 2rem;
    margin: 2rem 0;
    color:#333333;
  }
  .content h4{
    text-align: left;
    font-size: 1.6rem;
    margin: 2rem 0;
    color:#333333;
  }
  .content .place{
    display: flex;
    justify-content: left;
  }
  .content .place p{
    font-size:1rem;
    margin-right:0.8rem;
    color:#333;
  }
  .content .place p>span{
    padding-left:0.4rem;
  }
  .msg_box .msg{
    font-size:1.2rem;
    text-align: left;
    color:#999999;
    line-height: 150%;
  }
  .btn{
    width: 100%;
    position: fixed;
    bottom:0;
    left:0;
    margin-top:1rem;
    display: flex;
    align-items: center;
    justify-content: space-around;
    background:#fff;
    padding:0.8rem 0;
    color:#4e84fe;
  }
  .btn button{
    border:none;
    font-size:1.4rem;
    padding:0.2rem 4rem;
    border-radius: 4rem;
    background: linear-gradient(to right, #52b4fc, #4886eb);
    color:#fff;
  }
  .btn a{
    color:#4e84fe;
  }
</style>


