<template>
  <div class="login">
     <mt-header>
        <router-link to="/" slot="left">
            <mt-button icon="back"></mt-button>
        </router-link>
    </mt-header>
      <div class="title">
          <h3>忘记密码</h3>
      </div>
      <div class="login_form">
          <div class="input">
              <p>手机号码</p>
              <input type="tel" placeholder="请输入手机号码">
          </div>
          <div class="input">
              <p>验证码</p>
              <input type="text" placeholder="输入验证码登录">
              <span class="c_24CDDC">获取验证码</span>
          </div>
      </div>

      <div class="btnbootom">
          <div class="btn">
              <p class="loginbtn">下一步</p>
          </div>
  
      </div>
  </div>
</template>

<script>
export default {
  name: 'resetpwd',
  data () {
    return {
        
    }
  },
  methods:{
      
  },
  mounted(){

  }
}
</script>

<style lang="less" scoped>
    .login{
        padding: 12px;
        .title{
            margin-top:40px;
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

