<template>
    <div class="Login">
      <div class="form">
            <div class="item">
                <label for="">姓名</label>
                <input type="text" placeholder="请输入您的姓名">
            </div>
            <div class="item">
                <label for="">手机号</label>
                <input type="text" placeholder="请输入您的手机号">
            </div>
            <div class="item">
                <label for="">验证码</label>
                <input type="text" placeholder="请输入验证码">
                <button>验证码</button>
            </div>
            <div class="btn">
                <button @click="login">登录</button>
            </div>
            <toastr v-show="childByValue" v-on:inputName="inputName" ></toastr>
      </div>
    </div>
</template>
<script>
import toastr from '../components/Toastr'
export default {
    data(){
        return{
            childByValue:false
        }
    },
    components:{
        toastr
    },
    methods:{
        login(){
            this.childByValue=true;
        },
        inputName(value){
            this.childByValue=value;
        }
    }

}
</script>
<style scoped>
.Login{
    width:100vw;
    background:#f8f8f8;
}
.Login .form{
    width:90%;
    margin:0 auto;
    box-shadow: 1px 1px 1px #ccc;
    padding:0.4rem;
    background: #fff;
    border-radius: 0.8rem;
}
.Login .form .item{
    display:flex;
    justify-content:left;
    align-items: center;
    padding:1rem 0.8rem;
    border-bottom:1px solid #eeeeee;
}
.Login .form .item:last-child{
    border:none;
}
.Login .form .item input{
    border:none;
    font-size:1rem;
    color:#666666;
    width:8rem;
    outline: none;
}
.Login .form .item>label{
    width:4rem;
    text-align: left;
    font-size:1rem;
    color:#c6c6c6;
}
.item button{
  border:none;
  border-radius: 0.8rem;
  padding:0.4rem 0.8rem;
  background: #4e84fe;
  color:#fff;
  outline: none;
}
.btn button{
  border:none;
  font-size:1rem;
  margin:4rem 0 2rem 0;
  padding:0.4rem 6rem;
  border-radius: 4rem;
  background: linear-gradient(to right, #52b4fc, #4886eb);
  color:#fff;
  outline: none;
}

</style>