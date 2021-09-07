<!-- template -->
<template>
  <div class="calls item__ac item__column">
      <div class="calls__item item__row item__ac" v-for="(item,index) in calls" :key="index">
          <p>{{item.name}}</p>
          <div class="item__row item__ac">
            <i class="fa fa-phone"></i><a :href="'tel:'+item.phone">{{item.phone}}</a>
          </div>
      </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      calls: [],
      login: '',
      password: '',
      user: {
        role: ''
      }
    }
  },
  mounted() {
      if(localStorage.getItem('access_token')) {
        this.token = localStorage.getItem('access_token');

        this.get_calls();
      } else {
        this.$router.push('/kazyna/login');
      }
  },
  methods: {
    get_calls() {
      this.$http.post('get/calls',
          {

          }, {
            headers: {
              'Authorization': `Bearer ${this.token}`
            }
          }
      )
          .then(res => {
              this.calls = res.data;
          });
    }
  }
};
</script>

<style scoped lang="scss">
.calls {
  width: 100%;


  .calls__item {
    padding: 20px;
    border-radius: 5px;
    background: white;
    margin-top: 20px;
    border-radius: 20px;
    margin-bottom: 10px;
    width: 80%;
    background: var(--main-kenes-blue);
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
    i {
      margin-right: 5px;
      color: white;
      -webkit-transform:rotate(90deg);
      -moz-transform: rotate(90deg);
      -ms-transform: rotate(90deg);
      -o-transform: rotate(90deg);
      transform: rotate(90deg);
    }
    a,p {
      margin-right: 20px;
      color:white;
    }



  }
}


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