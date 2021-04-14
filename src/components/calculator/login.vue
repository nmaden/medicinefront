<!-- template -->
<template>
        <div class="sign__page">

            <p class="sign__page__title">KENES CALCULATOR</p>
            <form class="sign__page__block" @submit.prevent="login_sign">
                <input type="text" placeholder="Логин" v-model="login" >
                <input type="text" placeholder="Пароль" v-model="password" >
                <button type="submit"><p>Войти</p></button>

                
            </form>
            <button type="submit" @click='$router.push("/register")'><p>Регистрация</p></button>

        </div>                   
</template>

<!-- scripts -->
<script>
    export default {
      data() {
          return {
            login: '',
            password: '',
            user: {
                role: ''
            }
          }
      },
      mounted() {
        
      },
      methods: {
        login_sign() {
              let obj = {
                    email: this.login,
                    password: this.password
              }
              this.$http.post('auth/login',
               obj 
              )
              .then(res => {
                  localStorage.setItem("access_token",res.data.token);

                  this.token = localStorage.getItem("access_token");

                
                  this.get_profile();
              })
              .catch(errors => {
                  console.log('Ошибка ' + error.response.data.errors);
              })

        },
        get_profile() {
      
            this.$http.post('user/me', 
            {
        
            }, {
                headers: {
                    'Authorization': `Bearer ${this.token}` 
                }
            }
            )
            .then(res => { 
                this.user.role = res.data.roles[0].id;
                if(this.user.role == 1) {
                    this.$router.push("/calculator/admin");
                }else {
                    this.$router.push("/calculator/main");
                }
            });
        }
      }
    };
</script>

<style scoped lang="scss"> 
    .sign__page {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      height: 70vh;
      @media only screen and (max-width: 764px) {
        width: 100%;
      }
      .sign__page__title {
        font-weight: bold;
        font-size: 26px;
        margin-bottom: 20px;
        color: #333;
      }
      .sign__page__block {
        display: flex;
        flex-direction: column;
        input {
          width: 300px;
          padding: 20px;
          margin-bottom: 20px;
          @media only screen and (max-width: 764px) {
             width: 200px;
          }
        }
        ::placeholder {
          color: #333;
        }
       
      }
       button {
          cursor: pointer;
          text-transform: uppercase;
          width: 350px;
          outline: none;
          border: none;
          background-color: cornflowerblue;
          padding: 20px;
          margin-bottom: 20px;
          @media only screen and (max-width: 764px) {
             width: 250px;
          }
          p {
            color: white;
            font-weight: bold;
          }
        }
        button:hover {
          background-color: #285bb6;
        }
      
    }
</style>