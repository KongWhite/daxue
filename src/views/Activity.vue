<template>
  <div class="activity">
    <!--导航栏-->
    <ul class="nav">
      <li><a href="#">四点半学校</a></li>
      <li class="active"><a href="#">老年大学</a></li>
      <li><a href="#">億未来</a></li>
    </ul>
    <!--菜单栏-->
    <ul class="menu">
      <li @click="jump('/login')">
        <img src="@/assets/images/menu1_03.png" alt="">
        <p>申请报名</p>
      </li>
      <li @click="jump('/daka')">
        <img src="@/assets/images/menu1_05.png" alt="">
        <p>签到情况</p>
      </li>
    </ul>
    <div class="content">
      <!--主题活动-->
      <div class="list">
        <div class="title">
          <h5>主题活动</h5>
          <a href="#">更多</a>
        </div>
        <ul class="content_list">
          <li v-for="item in activity" :key="item.id" @click="jump('/Detail',item.id)">
            <div class="img_box">
              <img :src="item.img" alt="">
            </div>
            <div class="msg">
              <h3>{{item.title}}</h3>
              <p>{{item.content}}</p>
            </div>
          </li>
        </ul>
      </div>
      <div class="list">
        <div class="title">
          <h5>往期活动展示</h5>
          <a href="#">更多</a>
        </div>
        <ul class="content_list">
          <li v-for="item in activity" :key="item.id" @click="jump('/Detail',item.id)">
            <div class="img_box">
              <img :src="item.img" alt="">
            </div>
            <div class="msg">
              <h3>{{item.title}}</h3>
              <p>{{item.content}}</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data(){
    return{
      activity:[
        {
          id:1,
          img:'/img/01_10.86f9f8f1.png',
          title:"关爱老人,暖冬社团,2018暖冬社团送温暖义工活动",
          content:"羽毛球赛是以羽毛球为竞技的体育比赛单人赛或双人赛组成"
        },
        {
          id:2,
          img:'/img/01_10.86f9f8f1.png',
          title:"关爱老人,暖冬社团,2018暖冬社团送温暖义工活动",
          content:"羽毛球赛是以羽毛球为竞技的体育比赛单人赛或双人赛组成"
        },
        {
          id:3,
          img:'/img/01_10.86f9f8f1.png',
          title:"关爱老人,暖冬社团,2018暖冬社团送温暖义工活动",
          content:"羽毛球赛是以羽毛球为竞技的体育比赛单人赛或双人赛组成"
        },
      ]
    }
  },
  methods:{
    jump(router,id){
      console.log(id==undefined)
      if(id!=undefined)

        this.$router.push(router+"/"+id)
      else
        this.$router.push(router)
    }
  }
}
</script>
<style scoped>
.activity{
  background:#fff;
}
a{
  color:#333333;
}
.nav{
  display: flex;
  justify-content: space-around;
}
.nav li a{
  font-size:1.2rem;
  padding-bottom: 0.4rem;
  font-weight: bold;
}
.active a{
  color:#5287fe;
  border-bottom: 0.2rem solid #5287fe;
}
.activity .menu{
  padding:2rem;
  display: flex;
  justify-content: space-around;
}
.activity .menu p{
  font-size:1.2rem;
  margin-top:0.4rem;
}
.activity .content{
  padding:0 1.6rem;
}
.activity .title{
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom:1rem;
}
.activity .title h5{
  font-size:1.4rem;
}
.activity .title a{
  color:#739efc;
}
.activity .content_list li{
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin:1rem 0;
}
.activity .list{
  margin:2rem 0;
}
.content_list .msg{
  width:65%;
  text-align: left;
}
.content_list .img_box{
  width:30%;
  overflow: hidden;
  text-align: center;
  border-radius: 0.8rem;
}
.activity .content_list .img_box img{
  width:100%;
}
.msg p{
  margin-top:0.8rem;
  color:#999999;
}
</style>

