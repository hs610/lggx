<template>
  <div class="login">
      <div class="title">
          <h3>流光共享</h3>
          <p>放大你的朋友圈价值</p>
      </div>
      <div class="login_form">
          <div class="input">
              <p>账号</p>
              <input type="tel" placeholder="请输入手机号码">
          </div>
          <div class="input">
              <p>密码</p>
              <input :type="pwdType" placeholder="请输入密码">
              <img v-if="!isDisplayPassword" @click="checkthepassword" src="../../img/open_eyes.png" alt="">
              <img v-if="isDisplayPassword" @click="checkthepassword" src="../../img/down_eyes.png" alt="">
          </div>
      </div>
      <p class="forgetthepassword" @click="resetpwd">忘记密码？</p>
      <div class="btnbootom">
          <div class="btn">
              <p class="loginbtn">登录</p>
              <p class="zuce">账号注册</p>
          </div>
          <div class="btn">
              <p class="disanf">第三方登录</p>
              <p><img src="../../img/login_weixin.png" alt=""></p>
          </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'login',
  data () {
    return {
        pwdType:'password',
        isDisplayPassword:false, // 是否显示密码
    }
  },
  methods:{
      // 查看密码
      checkthepassword(){
          this.isDisplayPassword = this.isDisplayPassword === false ? true : false;
          this.pwdType = this.pwdType === 'password' ? 'text' : 'password';
      },
      // 去重置密码
      resetpwd(){
            this.$router.push({
                name: `resetpwd`,
            })
      }
  },
  mounted(){

  }
}
</script>

<style lang="less" scoped>
    .login{
        padding: 12px;
        .title{
            margin-top: 80px;
            h3{
                font-size: 22px;
                margin-bottom: 10px;
            }
            p{
                color: #BDBDBD;
            }
        }
        .login_form{
            margin-top: 50px;
            padding: 0 20px;
          
            .input{
                color: #BDBDBD;
                padding: 15px 0;
                border-bottom: 1px solid #EEEEEE;
                p{
                 margin-bottom: 15px;
                }
                input{
                    border: 0; 
                    outline: none; 
                    background-color: rgba(0, 0, 0, 0);
                    width: 70%;
                }
                img{
                    float: right;
                    width: 30px;
                    height: auto;
                }
            }
        }
         .forgetthepassword{
                color: #24CDDC;
                margin-top: 10px;
                text-align:right;
        }
        .btnbootom{
            padding: 0 10%;
           
            .btn{
                margin-top: 50px;
                text-align: center; 
                .loginbtn{
                    color: #fff;
                    background: #1ACFC1;
                    line-height: 40px;
                    border-radius: 30px;
                    text-align: center;
                }
                .zuce{
                    margin: 10px 0;
                    color: #24CDDC;
                }
                .disanf{
                    color: #BDBDBD;
                    margin-bottom: 10px;
                }
                
            }

        }
        
    }
    
</style>>

