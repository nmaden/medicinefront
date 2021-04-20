<!-- template -->
<template>
        <div class="sign__page">

            <p class="sign__page__title">Тіркелу</p>
            <form class="sign__page__block" @submit.prevent="register_user">

                <input type="text" placeholder="Аты" v-model="name" required>
                <input type="text" placeholder="Тегі" v-model="surname" required>
                <input type="text" placeholder="Email" v-model="email" required>
                <input type="text" placeholder="Құпиясөз" v-model="password" required>

                <button type="submit"><p>Тіркелу</p></button>
                <a @click="$router.push('/')">Кері</a>
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
                  this.$router.push("/");
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
    
</style>