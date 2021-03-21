<template>
    <div class="">


        <div class="notif__column notif__100 notif__home notif__ac" >

            <div class="notif__row notif__ac notif__jb notif__header notif__mb__s">
                <div class="notif__column">
                    <p class="notif__salem">Қош келдіңіз</p>
                    <p class="notif__name">Дәрілер базасы</p>
                </div>

                <i class="fas fa-clinic-medical" @click="logout"></i>
            </div>

            <div class="notif__search notif__row notif__ac notif__mb__s">
                <input type="text" v-model="medicine.name" placeholder="Іздеу" @input="search">
                <i class="fas fa-search"></i>
            </div>


            <div class="notif__column notif__plans  notif__ac">
                <div class="notif__column notif__plan">
                        <div class="notif__row notif__pl notif__ac notif__mb__s" v-for="(item,index) in medicine.medicines" :key="index">
                        <div class="notif__column notif__day notif__ac notif__mr__l">
                            <i class="fas fa-tags"></i>
                        </div>

                        <div class="notif__column notif__text">
                                
                            <div class="notif__row notif__ac notif__mb__xs notif__phar">
                              
                                 <i class="fas fa-capsules notif__mr__s"></i>
                                <p>{{item.name}}</p>
                            </div>
                            
                            <div class="notif__apteka notif__mb__s" v-for="(apteka,i) in item.info" :key="i">
                                <div class="notif__column notif__mb__xs"> 
             
                  
                                   
                                    <div class="notif__row notif__ac notif__mb__xs">
                                          <i class="fas fa-clinic-medical notif__mr__s"></i>
                                          <p> {{apteka.apteka.name}}</p>
                                    </div>
                                    <div class="notif__row notif__ac notif__mb__xs">
                                        <i class="fas fa-phone-alt notif__mr__s"></i>
                                        <a :href="'tel:'+apteka.apteka.phone"> {{apteka.apteka.phone}}</a>
                                    </div>
                                    <div class="notif__row notif__ac notif__mb__xs">
                                          
                                        <i class="fas fa-location-arrow notif__mr__s"></i>
                                          <p> {{apteka.apteka.address}}</p>
                                    </div>
                                    <div class="notif__row notif__ac notif__mb__xs">
                                        <i class="far fa-clock notif__mr__s"></i>
                                        <p>{{apteka.apteka.time_start+' - '+apteka.apteka.time_end}}</p>
                                    </div>
                                    <div class="notif__row">
                                        <i class="fas fa-tenge notif__mr__s"></i>
                                        <p>{{apteka.price}} тг</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                
            </div>
    </div>
    </div>
</template>


    <script>
    export default {
         name: 'CalcOrder' ,
        data() {
            return {
                  done: 1,
                  page: 1,
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
                  link: require('../../assets/images/kaz.png'),
                  medicine: {
                      medicines: [],
                      name: null
                  }
            }
        },
        components: {
        },
        mounted() {
            this.getMedicines();
        },
        methods: {
            logout() {
              
                this.$router.push("/");
            },
            getMedicines() {
               
                this.$http.get('/guest/get/medicines')
                .then(res => {
                    this.medicine.medicines = res.data
                });
            },
            search() {
                let data =  {
                    name: this.medicine.name
                };
                let d = this;
                setTimeout(function(){ 

                    d.$http.post('/guest/search/medicines',data)
                    .then(res => {
                        d.medicine.medicines = res.data
                    });
                
                }, 1000);
                
            },
        }
    }
    </script>



<style scoped lang="scss"> 

    .notif__column {
        display: flex;
        flex-direction: column;
    }
    .notif__row {
        display: flex;
        flex-direction: row;
    }
    .notif__ac {
        align-items: center;
    }
    .notif__jb {
        justify-content: space-between;
    }
    .notif__100 {
        width: 100%;
    }
    .notif__mb__xs {
        margin-bottom: 10px;
    }
     .notif__mb__s {
        margin-bottom: 20px;
    }
    .notif__mr__xs {
        margin-right: 5px;
    }
    .notif__mr__s {
        margin-right: 10px;
    }
    .notif__mr__l {
        margin-right: 20px;
    }

    .notif__analyze__body {
            width: 90%;
            .analyze__title {
             
                color: gray;
                font-size: 30px;
                margin-top: 20px;
            }
            .fa-chart-bar {
                font-size: 150px;
                align-self: center;
                margin-top: 40px;
                color: var(--main-kenes-blue);
            }
    }


    
    .notif__home {

        .notif__search {
            width: 90%;
            align-self: center;
            input {
                width: 80%;
                outline: none;
                border: none;
                border-radius: 20px;
                padding: 15px;
                background: #fafafa;
                margin-right: 10px;
            }
            i {
                color: var(--main-kenes-blue);
                font-size: 24px;
            }
            ::placeholder {
                color: #Ccc;
            }
        }
        .notif__header {
            width: 90%;
            margin-top: 20px;
            .notif__salem {
                font-size: 30px;
                color: gray;
                margin-bottom: 2px;
            }
            .notif__name {
                color: var(--main-kenes-blue);
                font-size: 30px;
            }
            i {
                font-size: 45px;
                color: var(--main-kenes-blue);
            }
        }

        .notif__sort {
            width: 90%;
            .notif__type {
                width: 100%;
                padding: 13px;
                border-radius: 20px;
                background-color: #f8f8fa;
                color: #251a3b;;
                text-align: center;
                font-size: 16px;
                
            }

            .notif__type__active {
                background:  #683fcc;
                color: white;
            }
        }
     
        .notif__plans {
            width: 100%;
          
            .notif__plan {
                width: 90%;
                margin-bottom: 10px;
                margin-top: 10px;
                
                .notif__month {
                    font-size: 18px;
                    font-weight: bold;
                    color: #251a3b;
                }
                .notif__pl {
                    padding: 15px;
                    border-radius: 20px;
                    background: #fafafa;
                    border: 2px solid #fafafa;
                    position: relative;
                    .notif__green {
                        background: #82c91f !important;
                    }
                    .notif__address {
                        i {
                            width: 10px;
                            height: 10px;
                            display: flex;
                            justify-content: center;
                            align-items: center;
                        }
                        p,i {
                            color: gray;
                        }  
                    }
                    .notif__date {
                       
                        i {
                            width: 10px;
                            height: 10px;
                            display: flex;
                            justify-content: center;
                            align-items: center;
                        }

                        i,p {
                             color: var(--main-kenes-blue);
                        }

                    }
                    .notif__phar {
                         i {
                            width: 10px;
                            height: 10px;
                            display: flex;
                            justify-content: center;
                            align-items: center;
                        }
                         i,p {
                             color: var(--main-kenes-blue);
                        }
                    }
                    .notif__ok {
                        position: absolute;
                        right: 10px;
                        top: 10px;
                        width: 15px;
                        height: 15px;
                        border-radius:7.5px;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        background-color: red;
                        i {
                            color: white;
                        }

                    }
                    .notif__day {
                        background: #f1eef5;
                        border-radius: 20px;
                        padding: 15px;
                        i {
                            color: var(--main-kenes-blue);
                        }
                        p:nth-child(1) {
                            margin-bottom: 5px;
                            color:  var(--main-kenes-blue);
                        }
                        p:nth-child(2) {
                            font-weight: bold;
                            color:  var(--main-kenes-blue);
                            font-size: 22px;
                        }
                    }
                    .notif__text {
                        .notif__title {
                            font-size: 20px;
                            margin-bottom: 10px;
                            color: #251a3b;
                        }

                        
                        .notif__phone {
                             i {
                                width: 10px;
                                height: 10px;
                                display: flex;
                                justify-content: center;
                                align-items: center;
                            }
                            text-decoration: none;
                            p,i {
                                color: gray;
                            }

                        }
                    }
                }
            }
        }
     
    
    }

       
       .notif__actions {
            position: fixed;
            bottom: 5px;
            .notif__action {
                cursor: pointer;
                width: 40px;
                height: 40px;
                display: flex;
                margin: 30px;
                justify-content: center;
                align-items: center;

                .notif__active {
                    color: var(--main-kenes-blue);
                }
                i {
                    color: gray;
                    margin: 30px;
                    font-size: 25px;
                }
            }
            .notif__add {
                box-shadow: 0px 0 10px rgba(0, 0, 0, 0.2);
                i {
                    color: white;
                }
                background-color: #fe92a1;

                border-radius: 3px;
            }
        }
    @media only screen and (max-width: 600px) {
        
    }
</style>
