<template>
    <div class="" >


        <div class="notif__column notif__100 notif__home notif__ac" v-if="page==1">

        <div class="notif__row notif__ac notif__jb notif__header notif__mb__s">
            <div class="notif__column">
                <p class="notif__salem">Сәлем</p>
                <p class="notif__name">Абдур Рахман</p>
            </div>

            <i class="fas fa-user-circle"></i>
        </div>

        <div class="notif__sort notif__row notif__ac notif__mb__s">
            <div class="notif__type notif__mr__l" @click="getNotifs()" v-bind:class="{notif__type__active: done==1}">Орындалмаған</div>
            <div class="notif__type" @click="getDone()" v-bind:class="{notif__type__active: done==2}">Орындалған</div>
        </div>


        <div class="notif__column notif__plans notif__ac" v-if="notifs.length!=0">

            <div class="notif__column notif__plan" v-for="(item,index) in notifs" :key="index">

                <!-- <p class="notif__month notif__mb__xs">{{item.date}}</p> -->

                <div class="notif__row notif__pl notif__ac">

                    <div class="notif__column notif__day notif__ac notif__mr__l">
                        <p>{{getMonth(item.date.split("-")[1])}}</p>
                        <p>{{item.date.split("-")[2]}}</p>
                    </div>

                    <div class="notif__column notif__text">

                        <p class="notif__title">{{item.title}}</p>

                        <div class="notif__row notif__ac notif__date">
                            <i class="far fa-clock notif__mr__xs"></i>
                            <p>{{item.decription}}</p>
                        </div>
                    </div>

                    <div class="notif__row notif__ac notif__ok" @click="doneNotif(item.id)" v-bind:class="{notif__green: item.done==1}">
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

            <div class="notif__action notif__add" @click="openAdd">
                <i class="fas fa-plus"></i>
            </div>

            <div class="notif__action" @click="page=2">
                <i class="fas fa-chart-line"  v-bind:class="{notif__active: page==2}"></i>
            </div>
        </div>


            <div class="notif__modal" v-if="notif.show_modal">
                <form class="notif__column notif__modal__form  notif__fs notif__ac" v-if="notif.create_modal" style="margin-top: 20px" @submit.prevent="createNotif">
                        <p class="notif__title2 notif__mb__s">Добавить уведомление</p>
                        <div class="notif__column notif__phar__input notif__mb__s">
                            <p class="notif__label notif__mb__xs">Задача</p>
                            <input class="notif__modal__input" type="text" v-model="notif.title" required>
                        </div>
                        
                        <div class="notif__column notif__phar__input notif__mb__s">
                            <p class="notif__label notif__mb__xs">Дата</p>
                            <input class="notif__modal__input" type="date" v-model="notif.date" required>
                        </div>
                        <div class="notif__column notif__phar__input notif__mb__s">
                            <p class="notif__label notif__mb__xs">Время</p>
                            <input class="notif__modal__input" type="text" v-model="notif.time" required>
                        </div>
                        <button class="notif__submit notif__mb__xs" type="submit">Сохранить</button>
                        <a  class="notif__mb__s" @click="closeModal">Закрыть</a>
                </form> 

                <form class="notif__column notif__modal__form  notif__fs notif__ac" v-if="notif.done_modal" style="margin-top: 20px" @submit.prevent="addInfo">
                        <p class="notif__title2 notif__mb__s">Завершить задачу</p>
                        <div class="notif__column notif__phar__input notif__mb__s">
                            <p class="notif__label notif__mb__xs">Задача</p>
                            <p>{{notif.title}}</p>
                        </div>
                        <div class="notif__row notif__ac">
                            <input type="checkbox" v-model="notif.done" class="notif__mr">
                            <p>Завершено</p>
                        </div>
                        <button class="notif__submit notif__mb__xs" type="submit">Cохранить</button>
                        <a  class="notif__mb__s" @click="closeModal">Закрыть</a>
                </form>       
            </div>
   
    </div>
</template>


    <script>
    export default {
         name: 'CalcOrder' ,
        data() {
            return {
                notifs: [],
                notif: {
                      done: false,
                      edit_tablet: false,
                      show_modal: false,
                      date: null,
                      time: null,
                      title: null,
                      create_notif: false
                },
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
            getDone() {
                this.$http.get('guest/notif/get/notifs?done=1')
                .then(res => {
                    this.notifs = res.data.data;
                    this.done = 2;
                });
            },
            getMonth(month) {
                if(parseInt(month)==1) {
                    return "Январь"
                }
                if(parseInt(month)==2) {
                    return "Февраль"
                }
                if(parseInt(month)==3) {
                    return "Март"
                }
                if(parseInt(month)==4) {
                    return "Апрель"
                }
                if(parseInt(month)==5) {
                    return "Май"
                }
                if(parseInt(month)==6) {
                    return "Июнь"
                }
                if(parseInt(month)==7) {
                    return "Июль"
                }
                if(parseInt(month)==8) {
                    return "Августь"
                }
                if(parseInt(month)==9) {
                    return "Сеньтябрь"
                }
                if(parseInt(month)==10) {
                    return "Ноябрь"
                }
                if(parseInt(month)==11) {
                    return "Декабрь"
                }
            },
            openAdd() {
                this.notif.show_modal=true;
                this.notif.create_modal=true;
            },
            createNotif() {
                // const config = {
                //     headers: { 'Authorization': `Bearer ${this.token}` }
                // };
                let data = {
                    title: this.notif.title,
                    date: this.notif.date,
                    time: this.notif.time
                };
                this.$http.post('guest/notif/create',data)
                .then(res => {
                    this.$fire({
                        title: res.data.message,
                        text: "",
                        type: "success",
                        timer: 3000
                    });
                    this.getNotifs();
                });
            },
            getNotifs() {
                // const config = {
                //     headers: { 'Authorization': `Bearer ${this.token}` }
                // };
                this.$http.get('guest/notif/get/notifs')
                .then(res => {
                    this.notifs = res.data.data;
                    this.done = 1;
                });
            },
            getNotif(id) {
                this.$http.get('guest/notif/get/notif?id='+id)
                .then(res => {
                    this.notifs = res.data.data
                });
            },
            doneNotif(id) {
                let data = {
                    id: id
                };
                this.$http.post('guest/notif/done',data)
                .then(res => {
                    this.notifs = res.data.data;
                    this.getNotifs();
                });
            },
            logout() {
                localStorage.removeItem("access_token");
                this.$router.push("calculator");
            },
          
            closeModal() {
                this.notif.show_modal = false;
            }
        },
        mounted(){
            this.getNotifs();
        },
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
            height: 100%;
            margin-bottom: 100px;
            overflow-y: auto;
            
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

        .notif__actions::-webkit-scrollbar {
            width: 0px;
            background: transparent;
        }
       .notif__actions {
              min-height: 0 !important; /* added */
            background: white;
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
