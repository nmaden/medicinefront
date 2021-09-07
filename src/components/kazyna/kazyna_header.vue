<template>
  <div class="calc calc__column">


    <div class="calc__header calc__row calc__ja calc__ac">

      <p class="calc__title">KAZYNA PREMIUM</p>

      <div class="calc__column">
        <p class="calc__user">{{user.name+" "+user.surname}}</p>
        <p class="calc__logout" @click="logout">Выход из системы</p>
      </div>
    </div>

    <router-view></router-view>

  </div>
</template>


<script>
export default {

  data() {
    return {
      user: {
        role: '',
        name: null,
        surname: null
      },
      current_image: 1,
      current_slide: 1,
      object: {
        ru: 'RU',
        kaz: 'KAZ',
        en: 'USA',
      },
      languages: {
        ru: require('../../assets/images/ru.png'),
        kaz: require('../../assets/images/kaz.png'),
        en: require('../../assets/images/en.png'),
      },
      link: require('../../assets/images/kaz.png')
    }
  },
  components: {
  },
  methods: {
    logout() {
      localStorage.removeItem("access_token");

      this.$router.push("/login");
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
            this.user.name = res.data.name;
            this.user.surname = res.data.surname;


          });
    },

  },
  mounted() {
    if(!localStorage.getItem("access_token")) {
      this.$router.push("/login");
    }
    else {
      this.token = localStorage.getItem("access_token");
      this.get_profile();
    }
  }
}
</script>



<style scoped lang="scss">
.calc__column {
  display: flex;
  flex-direction: column;
}
.calc__row {
  display: flex;
  flex-direction: row;
}
.calc__ac {
  align-items: center;
}
.calc__jb {
  justify-content: space-between;
}
.calc__ja {
  justify-content: space-around;
}

.calc {
  background-color: #fafafd;
}

.calc__header {

  background-color: var(--main-kenes-blue);
  padding: 15px;

  .calc__title {
    font-size: 22px;
    color: white;
    font-weight: bold;
  }
  .calc__user {
    margin-bottom: 5px;
  }

  .calc__logout {
    color: white;
    cursor: pointer;
  }
  .calc__logout:hover {
    border-bottom: 2px solid white;
  }
}

@media only screen and (max-width: 600px) {
  .calc__column {
    width: 100%;
  }
  .calc__row {
    width: 100%;
  }
  .calc__title {
    font-size: 14px !important;
  }

  .calc__header {
    justify-content: space-between;
    padding: 0;
    p {
      padding: 10px;
    }
    .calc__column {
      width: unset;
      p {
        padding: 5px;
      }
    }


  }
}
</style>
