<!-- template -->
<template>
        <div class="sign__page">

            <i class="sign__top_image fas fa-clinic-medical"></i>
            <form class="sign__page__block" @submit.prevent="login_sign">
                <input type="text" placeholder="Логин" v-model="login" >
                <input type="text" placeholder="Құпия сөз" v-model="password" >
                <button type="submit"><p>Жүйеге кіру</p></button>
                <a  @click="signAsGuest">Қонақ ретінде кіру</a>
            </form>

        
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
        signAsGuest() {
            this.$router.push("/pharmacy");
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
                    this.$router.push("/pharmacy/admin");
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
      .sign__top_image {
          font-size: 40px;
          margin-bottom: 20px;
          color: var(--main-kenes-blue);
      }
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
        border-radius: 30px;
        border:1px solid  var(--main-kenes-blue);
        outline: none;
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
        a {
            text-align: center;
            text-decoration: underline;
            cursor: pointer;
            text-transform: uppercase;
            width: 250px;
            outline: none;
            border: none;
            color: var(--main-kenes-blue);
            padding: 20px;
            @media only screen and (max-width: 764px) {
                width: 250px;
            }
        }
        button {
          cursor: pointer;
          text-transform: uppercase;
          width: 350px;
          border-radius: 30px;
          outline: none;
          border: none;
          background-color: cornflowerblue;
          padding: 20px;
          margin-bottom: 10px;
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
      
    }
</style>