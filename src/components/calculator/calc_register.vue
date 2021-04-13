<!-- template -->
<template>
        <div class="sign__page">

            <p class="sign__page__title">KENES CALCULATOR</p>
            <form class="sign__page__block" @submit.prevent="register_user">

                <input type="text" placeholder="Телефон" v-model="phone" required >
                
                <input type="text" placeholder="Имя" v-model="name" required>
                <input type="text" placeholder="Фамилия" v-model="surname" required>

                <input type="text" placeholder="Email" v-model="email" required>
                <input type="text" placeholder="Пароль" v-model="password" required>

                <button type="submit"><p>Войти</p></button>
            </form>

        </div>                   
</template>

<!-- scripts -->
<script>
    export default {
      data() {
          return {
            email: '',
            password: '',
            phone: '',
            name: '',
            surname: '',
            user: {
                role: ''
            }
          }
      },
      mounted() {
        
      },
      methods: {
        register_user() {
              let obj = {
                    email: this.email,
                    password: this.password,
                    name: this.name,
                    surname: this.surname,
                    phone: this.phone,
                    role: {
                        name: 'Пользователь МР'
                    }
              }
              this.$http.post('auth/register',
               obj 
              )
              .then(res => {
                  this.$fire({
                        title: res.data.msg,
                        text: "Успешно зарегистрирован",
                        type: "success",
                        timer: 3000
                    }).then(r => {
                        console.log(r.value);
                    });
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
        button {
          cursor: pointer;
          text-transform: uppercase;
          width: 350px;
          outline: none;
          border: none;
          background-color: cornflowerblue;
          padding: 20px;
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