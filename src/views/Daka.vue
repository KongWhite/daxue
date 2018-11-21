<template>
  <div class="daka">
    <div class="user_content">
      <h3>{{user.name}}</h3>
      <p>学生信息</p>
      <p>{{user.content}}</p>
    </div>
    <div class="table">
      <table border="0" cellpadding="0" cellspacing="0">
        <tr>
          <td>日期</td>
          <td>地点</td>
          <td>签到</td>
          <td>离开</td>
        </tr>
        <tr v-for="item in daka">
          <td>{{item.time}}</td>
          <td>{{item.place}}</td>
          <td>{{item.start}}</td>
          <td>{{item.end}}</td>
        </tr>
      </table>
    </div>
  </div>
</template>
<script>
export default {
  data(){
    return{
      user:{
        name:"周多多",
        content:"石湾中心小学一年级新生.八岁大班岁大班石湾年级新生.八岁大班"
      },
      daka:[
        {
          time:"2018-09-09",
          place:"南山智园",
          start:"18:00",
          end:"20:00"
        },
        {
          time:"2018-09-09",
          place:"南山智园",
          start:"18:00",
          end:"20:00"
        },
        {
          time:"2018-09-09",
          place:"南山智园",
          start:"18:00",
          end:"20:00"
        },
        {
          time:"2018-09-09",
          place:"南山智园",
          start:"18:00",
          end:"20:00"
        }
      ]
    }
  }
}
</script>
<style>
  .daka{
    width:100vw;
    background:#f8f8f8;
  }
  .daka .user_content{
    width:90%;
    margin:2rem auto;
    box-shadow: 1px 1px 1px #ccc;
    padding:0.4rem;
    background: #fff;
    border-radius: 0.8rem;
    text-align: left;
  }
  .daka .user_content h3{
    margin-bottom:0.8rem;
    font-size: 1.4rem;
  }
  .daka .user_content p{
    margin-bottom:0.8rem;
  }
  .daka .user_content p:nth-child(2){
    color:#ccc;
  }
  .table{
    padding:0 0.4rem;
  }
  .table table tr{
    width: 100%;
  
  }
  .table table tr td{
    width:25vw;
    font-size:0.8rem;
    height: 2rem;
  }
  .table table tr:nth-child(odd){
    background: #ffffff;
  }
  .table table tr:nth-child(even){
    background: #f5f8ff;
  }
</style>

