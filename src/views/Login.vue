<template>
  <div class="login-container" :style="note">
    <el-form :model="rule" :rules="rule2" ref="rule" class="login-page">
      <div class="content">
        <p>{{user}}</p><el-form-item prop="username" class="username">
          <el-input type="text" 
              v-model="rule.username" 
              auto-complete="off" 
              placeholder="用户名"
          ></el-input>
      </el-form-item>

      <p class="pas">{{pas}}</p><el-form-item prop="password" class="password">
          <el-input type="password" 
              v-model="rule.password" 
              auto-complete="off" 
              placeholder="密码"
          ></el-input>
      </el-form-item>


      <el-form-item  style="padding-top:30px;">
          <el-button class="btn" type="primary"  @click="change" :loading="logining">登录</el-button>
      </el-form-item>
      </div>
      
      </el-form>
  </div>
    
</template>

<script>
export default {
  data(){
    return{
      note:{
        backgroundImage:"url("+require("../assets/tu.jpg")+")",
        backgroundRepeat:"no-repeat"
      },
      logining:false,
      rule:{
        username:'',
        password:'',
      },
      rule2:{
        username:[{required:true,message:'请输入用户名',trigger:'blur'}],
        password:[{required:true,message:'请输入密码',triggerL:'blur'}]
      },
      checked:false,
      img: require('../assets/tu.jpg'),
      user: "用户名：",
      pas:"密 码：",
      check:"登录",
    }
  },
  methods:{
    change(event){
      this.$refs.rule.validate((valid) =>{
        if(valid){
          this.logining=true;
          if(this.rule.username=='yanjiahong' && this.rule.password=='123456'){
            this.logining=false;
            sessionStorage.setItem('user',this.rule.username);
            this.$router.push({path:'/main'});
          }else{
            this.logining=false;
            this.$alert('用户名或密码错误',{
              confirmButtonText:'ok'
            })
          }
        }else{
          console.log('提交错误');
          return false;
        }
      })
      
    }
  }
}
</script>

<style>
.login-container{
  top: 0;
  left: 0;
  position: absolute;
  background-size:cover;
  width: 100%;
  height: 100%;
}
.login-page{
   padding-top: 100px;
  background-color:rgba(255,255,255,0.5);
  width: 600px;
  height: 300px;
  margin: 0 auto;
  margin-top: 100px;
}
.content>p{
  float: left;
  padding-left: 86px;
}
.pas{
  padding-top: 25px;
}

.username{
  width: 300px;
  margin:0 auto;
}
.password{
  width: 300px;
  margin: 0 auto;
  padding-top: 30px;
}

.btn{
  width: 130px;
  
}

</style>
