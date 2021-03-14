<template>
    <div class="">


        <div class="notif__column notif__100 notif__home notif__ac" v-if="page==1">

        <div class="notif__row notif__ac notif__jb notif__header notif__mb__s">
            <div class="notif__column">
                <p class="notif__salem">Сәлем</p>
                <p class="notif__name">Абдур Рахман</p>
            </div>

            <i class="fas fa-user-circle"></i>
        </div>

        <div class="notif__sort notif__row notif__ac notif__mb__s">


            <div class="notif__type notif__mr__l" @click="done=1" v-bind:class="{notif__type__active: done==1}">Орындалмаған</div>
            <div class="notif__type" @click="done=2" v-bind:class="{notif__type__active: done==2}">Орындалған</div>


        </div>


        <div class="notif__column notif__plans notif__ac">

            <div class="notif__column notif__plan">

                <p class="notif__month notif__mb__xs">Май 2020</p>

                <div class="notif__row notif__pl notif__ac">

                    <div class="notif__column notif__day notif__ac notif__mr__l">
                        <p>Май</p>
                        <p>17</p>
                    </div>

                    <div class="notif__column notif__text">

                        <p class="notif__title">Тапсырма</p>

                        <div class="notif__row notif__ac notif__date">
                            <i class="far fa-clock notif__mr__xs"></i>
                            <p>12:00 - 20:00</p>
                        </div>
                    </div>

                    <div class="notif__row notif__ac notif__ok" v-bind:class="{notif__green: done==2}">
                        <i class="fas fa-check"></i>
                    </div>

                </div>
            </div>

            <div class="notif__column notif__plan">

                <p class="notif__month notif__mb__xs">Май 2020</p>

                <div class="notif__row notif__pl notif__ac">

                    <div class="notif__column notif__day notif__ac notif__mr__l">
                        <p>Май</p>
                        <p>17</p>
                    </div>

                    <div class="notif__column notif__text">

                        <p class="notif__title">Тапсырма</p>

                        <div class="notif__row notif__ac notif__date">
                            <i class="far fa-clock notif__mr__xs"></i>
                            <p>12:00 - 20:00</p>
                        </div>
                    </div>

                    <div class="notif__row notif__ac notif__ok" v-bind:class="{notif__green: done==2}">
                        <i class="fas fa-check"></i>
                    </div>

                </div>
            </div>


        </div>
        </div>

        <div class="notif__column notif__ac notif__analyze" v-if="page==2">
            
            <div class="notif__column notif__analyze__body">
                <p class="analyze__title">Аналитика</p>

                <i class="fas fa-chart-bar"></i>
            </div>


        </div>

        


        <div class="notif__actions notif__row notif__ac notif__100 notif__jb">


            <div class="notif__action" @click="page=1">
                <i class="fas fa-home " v-bind:class="{notif__active: page==1}"></i>
            </div>

            <div class="notif__action notif__add">
                <i class="fas fa-plus"></i>
            </div>

            <div class="notif__action" @click="page=2">
                <i class="fas fa-chart-line"  v-bind:class="{notif__active: page==2}"></i>
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
                  link: require('../../assets/images/kaz.png')
            }
        },
        components: {
        },
        methods: {
            logout() {
                localStorage.removeItem("access_token");

                this.$router.push("calculator");
            }
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
                color: #4e28a8;
            }
    }


    
    .notif__home {
        .notif__header {
            width: 90%;
            margin-top: 20px;
            .notif__salem {
                font-size: 30px;
                color: gray;
                margin-bottom: 2px;
            }
            .notif__name {
                color: #4e28a8;
                font-size: 30px;
            }
            i {
                font-size: 45px;
                color: #4e28a8;
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
                    .notif__ok {
                        position: absolute;
                        right: 10px;
                        bottom: 10px;
                        width: 25px;
                        height: 25px;
                        border-radius: 12.5px;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        background-color: gray;
                        i {
                            color: white;
                        }

                    }
                    .notif__day {
                        background: #f1eef5;
                        border-radius: 20px;
                        padding: 15px;
                        
                        p:nth-child(1) {
                            margin-bottom: 5px;
                            color:  #4e28a8;
                        }
                        p:nth-child(2) {
                            font-weight: bold;
                            color:  #4e28a8;
                            font-size: 22px;
                        }
                    }
                    .notif__text {
                        .notif__title {
                            font-size: 18px;
                            margin-bottom: 10px;
                            color: #251a3b;
                        }
                        .notif__date {
                            p,i {
                                color: #ccc;
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
                    color: #4e28a8;
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
