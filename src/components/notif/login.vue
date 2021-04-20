<!-- template -->
<template>
        <div class="sign__page">
            <i class="sign__top_image fas fas fa-bell"></i>
            <form class="sign__page__block" @submit.prevent="login_sign">
                <input type="text" placeholder="Логин" v-model="login" >
                <input type="text" placeholder="Құпия сөз" v-model="password" >
                <button type="submit"><p>Жүйеге кіру</p></button>
                <a  @click="$router.push('/register')">Тіркелу</a>
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
            this.$router.push("/");
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
               
                    this.$router.push("/notif");

            });
        }
      }
    };
</script>

<style scoped lang="scss"> 
   
</style>