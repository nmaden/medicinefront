<template>
    <div class="" >


        <div class="notif__column notif__100 notif__home notif__ac" >

        <div class="notif__row notif__ac notif__jb notif__header notif__mb__s">
            <div class="notif__column">
                <p class="notif__salem">{{user.name}}</p>
                <p class="notif__name">{{user.surname}}</p>
            </div>

            <i class="fas fa-sign-out-alt" @click="signOut"></i>
            <!-- <i class="fas fa-user-circle"></i> -->
        </div>

        <div class="notif__sort notif__row notif__ac notif__mb__s">
            <div class="notif__type notif__row notif__ac notif__mr__l" @click="openAdd()" v-if="page==1" v-bind:class="{notif__type__active: done==1}">
                 <i class="fas fa-plus"></i>
                <p>Тапсырмалар</p> 
            </div>
            <div class="notif__type notif__row notif__ac notif__mr__l" @click="openAdd()" v-if="page==3" v-bind:class="{notif__type__active: done==1}">
                 <i class="fas fa-plus"></i>
                <p>Жазбалар</p> 
            </div>
            <!-- <div class="notif__type" @click="getDone()" v-bind:class="{notif__type__active: done==2}">Орындалған</div>
            -->
        </div>


        <div class="notif__column notif__plans notif__ac" v-if="notifs.length!=0 && page==1">

            <div class="notif__column notif__plan" v-for="(item,index) in notifs" :key="index">

                <!-- <p class="notif__month notif__mb__xs">{{item.date}}</p> -->

                <div class="notif__row notif__pl notif__ac notif__jb">

                    <div class="notif__row notif__ac ">
                        <div class="notif__column notif__day notif__ac notif__mr__l">
                            <p>{{getMonth(item.date.split("-")[1])}}</p>
                            <p>{{item.date.split("-")[2]}}</p>
                        </div>

                        <div class="notif__column notif__text">

                            <p class="notif__title" v-if="item.done==0">{{item.title}}</p>
                            <p class="notif__title" v-else><del>{{item.title}}</del></p>

                            <div class="notif__row notif__ac notif__date">
                                <i class="far fa-clock notif__mr__xs"></i>
                                <p>{{item.decription}}</p>
                            </div>
                        </div>
                    </div>
                    
                    <div class="notif__row notif__ac">
                        <div class="notif__row notif__ac notif__mr__xs notif__ok" @click="deleteNotif(item.id)">
                            <i class="fas fa-trash-alt"></i>
                        </div>
                        <div class="notif__row notif__ac notif__ok" @click="doneNotif(item.id)" v-bind:class="{notif__green: item.done==1}">
                            <i class="fas fa-check"></i>
                        </div>
                    </div>

                </div>
            </div>



        </div>

         <div class="notif__column notif__plans notif__ac" v-if="page==3">

            <div class="notif__column notif__plan" v-for="(item,index) in notes" :key="index">

                <!-- <p class="notif__month notif__mb__xs">{{item.date}}</p> -->

                <div class="notif__row notif__pl notif__ac notif__jb">

                    <div class="notif__row notif__ac ">
                        <div class="notif__column notif__day notif__ac notif__mr__l">
                            <p>{{getMonth(item.created_at.split(" ")[0].split("-")[1])}}</p>
                            <p>{{item.created_at.split(" ")[0].split("-")[2]}}</p>
                        </div>

                        <div class="notif__column notif__text">
                          
                            <p class="notif__title" >{{item.title}}</p>
                
                            <div class="notif__row notif__ac notif__date">
                                <!-- <i class="far fa-clock notif__mr__xs"></i> -->
                                <p>{{item.decription}}</p>
                            </div>
                        </div>
                    </div>
                    
                    <div class="notif__row notif__ac">
                        <div class="notif__row notif__ac notif__mr__xs notif__ok" @click="deleteNote(item.id)">
                            <i class="fas fa-trash-alt"></i>
                        </div>
                        <!-- <div class="notif__row notif__ac notif__ok" @click="doneNotif(item.id)" v-bind:class="{notif__green: item.done==1}">
                            <i class="fas fa-check"></i>
                        </div> -->
                    </div>

                </div>
            </div>



        </div>


        </div>

        <div class="notif__column notif__ac notif__analyze" v-if="page==2">
            <p class="analyze__title notif__fs">Аналитика</p>
            <div class="notif__column notif__analyze__body" >
                
                <div id="chart">
                    <apexchart type="area"  height="350" :options="chartOptions" :series="series"></apexchart>
                </div>
            </div>


        </div>

        

        <div class="notif__actions notif__row notif__ac notif__100 notif__jb">
            <div class="notif__action" @click="page=1">
                <i class="fas fa-home " v-bind:class="{notif__active: page==1}"></i>
            </div>
            <div class="notif__action" @click="page=3">
                <i class="fas fa-book-open"  v-bind:class="{notif__active: page==3}"> </i>
            </div>
            

            <div class="notif__action" @click="page=2">
                <i class="fas fa-chart-line"  v-bind:class="{notif__active: page==2}"></i>
            </div>

            
        </div>


            <div class="notif__modal" v-if="notif.show_modal">
                <form class="notif__column notif__modal__form  notif__fs notif__ac" v-if="notif.create_modal" style="margin-top: 20px" @submit.prevent="createNotif">
                        <p class="notif__title2 notif__mb__s">Тапсырма тіркеу</p>
                        <div class="notif__column notif__phar__input notif__mb__s">
                            <p class="notif__label notif__mb__xs">Тапсырма</p>
                            <input class="notif__modal__input" type="text" v-model="notif.title" required>
                        </div>
                        
                        <div class="notif__column notif__phar__input notif__mb__s">
                            <p class="notif__label notif__mb__xs">Күні</p>
                            <input class="notif__modal__input" type="date" v-model="notif.date" required>
                        </div>
                        <div class="notif__column notif__phar__input notif__mb__s">
                            <p class="notif__label notif__mb__xs">Уақыты</p>
                            <input class="notif__modal__input" v-mask="'##:##'" type="text" v-model="notif.time" required>
                        </div>
                        <button class="notif__submit notif__mb__xs" type="submit">Сақтау</button>
                        <a  class="notif__mb__s" @click="closeModal">Жабу</a>
                </form> 

                <form class="notif__column notif__modal__form  notif__fs notif__ac" v-else style="margin-top: 20px" @submit.prevent="createNote">
                        <p class="notif__title2 notif__mb__s">Жазба сақтау</p>
                        <div class="notif__column notif__phar__input notif__mb__s">
                            <p class="notif__label notif__mb__xs">Аты</p>
                            <input class="notif__modal__input" type="text" v-model="note.title" required>
                        </div>

                        <div class="notif__column notif__phar__input notif__mb__s">
                            <p class="notif__label notif__mb__xs"></p>
                            <textarea class="notif__modal__input" type="text" v-model="note.description" required></textarea>
                        </div>
                        
                        <button class="notif__submit notif__mb__xs" type="submit">Сақтау</button>
                        <a  class="notif__mb__s" @click="closeModal">Жабу</a>
                </form> 
            </div>
   
    </div>
</template>


    <script>
     import Vue from 'vue';
    export default {
         name: 'CalcOrder' ,
        data() {
            return {
                create_note: true,
                notes: [],
                note: {
                    title: '',
                    date: '',
                    description: ''
                },
                series: [],
                chartOptions: [],
                mask: ['+7(', /\d/, /\d/, /\d/, ') ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/],
                user: {
                    name: '',
                    surname: ''
                },
                token: '',
                notifs: [],
                notif: {
                      done: false,
                      edit_tablet: false,
                      show_modal: false,
                      date: null,
                      time: null,
                      title: null,
                      create_notif: false,
                      notif_id: null
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
            getAnalytics() {

            },
            signOut() {
                this.$router.push("/target");
            },
            getDone() {
                const config = {
                    headers: { 'Authorization': `Bearer ${this.token}` }
                };
                this.$http.get('notif/get/notifs?done=1',config)
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
                if(this.page==1) {
                    this.notif.create_modal=true;
                }
                if(this.page==3) {
                    this.notif.create_modal=false;
                }
                
            },
            cancelNotif(){
                cordova.plugins.notification.local.cancel([10]);
            },
            registerToPhone() {
                let tt = this; 
                
          
                Vue.cordova.on('deviceready', () => {
                    // Schedule notification for tomorrow to remember about the meeting
                    // firstAt: "sunday_1_52_am",
                    let hour = parseInt(tt.notif.time.split(":")[0]);
                    let minute = parseInt(tt.notif.time.split(":")[1]);
                   
                    let year = parseInt(tt.notif.date.split("-")[0]);
                    let month = parseInt(tt.notif.date.split("-")[1]);
                    let day = parseInt(tt.notif.date.split("-")[2]);

                    let date = new Date(year, month-1,day, hour,minute);
                    cordova.plugins.notification.local.schedule(
                        {
                            id: tt.notif.notif_id,
                            title: tt.notif.title,
                            text: tt.notif.date,
                            trigger: { at:date  }
                        }
                    );
                });
            },
            createNote() {
                let data = {
                    title: this.note.title,
                    description: this.note.description,
                    target_id: this.$route.query.target
                };
                const config = {
                    headers: { 'Authorization': `Bearer ${this.token}` }
                };
                this.$http.post('/notif/create/note', data, config)
                .then(res => {
                    this.$fire({
                        title: res.data.message,
                        text: "",
                        type: "success",
                        timer: 3000
                    });
                    
                    this.notif.show_modal = false; 
                    this.getNotes();
                });
            },
            getNotes() {
                const config = {
                    headers: { 'Authorization': `Bearer ${this.token}` }
                };
                this.$http.get('/notif/get/notes?target_id='+this.$route.query.target,  config)
                .then(res => {

                    this.notes = res.data;
                    this.page = 3;
                    this.notif.show_modal = false; 
                });
            },
            deleteNote(id) {
               
                const config = {
                    headers: { 'Authorization': `Bearer ${this.token}` }
                };
                this.$http.get('/notif/delete/note?id='+id,  config)
                .then(res => {
                    this.$fire({
                        title: res.data.message,
                        text: "",
                        type: "success",
                        timer: 3000
                    });
                    
                    this.notif.show_modal = false; 
                    this.getNotes();
                });
            },
            getNote() {
               
                const config = {
                    headers: { 'Authorization': `Bearer ${this.token}` }
                };
                this.$http.get('/notif/get/note?id='+this.note.id,  config)
                .then(res => {
                    
                    this.note.title = res.data.title;
                    this.note.description = res.data.decription;
                    this.note.id = res.data.id;
                    
                    this.notif.show_modal = false; 
                    this.getNotes();
                });
            },
            createNotif() {
                let data = {
                    title: this.notif.title,
                    date: this.notif.date,
                    time: this.notif.time,
                    target_id: this.$route.query.target
                };
                const config = {
                    headers: { 'Authorization': `Bearer ${this.token}` }
                };
                this.$http.post('/notif/create', data, config)
                .then(res => {
                    this.$fire({
                        title: res.data.message,
                        text: "",
                        type: "success",
                        timer: 3000
                    });
                    
                    this.notif.show_modal = false;
                    if(res.data.id!='') {
                        this.notif.notif_id = res.data.id;
                        this.registerToPhone();
                    }
                    
                    this.getNotifs();
                });
            },
            getAnalytics() {
        
                const config = {
                    headers: { 'Authorization': `Bearer ${this.token}` }
                };
                this.$http.get('notif/get/analytics',config)
                .then(res => {
                    this.chartOptions = res.data.count_notif.chartOptions;
                    this.series = res.data.count_notif.series;
                });
            },
            getNotifs() {
        
                const config = {
                    headers: { 'Authorization': `Bearer ${this.token}` }
                };
                this.$http.get('notif/get/notifs?target_id='+this.$route.query.target,config)
                .then(res => {
                    this.notifs = res.data.data;
                    this.done = 1;
                });
            },
            getNotif(id) {
                const config = {
                    headers: { 'Authorization': `Bearer ${this.token}` }
                };
               
                this.$http.get('notif/get/notif?id='+id,config)
                .then(res => {
                    this.notifs = res.data.data
                });
            },
            deleteNotif(id) {
                let data = {
                    id: id
                };

                Vue.cordova.on('deviceready', () => {
                    cordova.plugins.notification.local.cancel([id]);
                });
               
                const config = {
                    headers: { 'Authorization': `Bearer ${this.token}` }
                };
                this.$http.post('/notif/delete', data, config)
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
            doneNotif(id) {
                let data = {
                    id: id
                };
                 const config = {
                    headers: { 'Authorization': `Bearer ${this.token}` }
                };
                this.$http.post('notif/done',data,config)
                .then(res => {
                    this.getNotifs();
                });
            },
            logout() {
                localStorage.removeItem("access_token");
                this.$router.push("calculator");
            },
          
            closeModal() {
                this.notif.show_modal = false;
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
                    this.getNotes();
                    this.getAnalytics();                    
                    this.getNotifs();
                    this.user.role = res.data.roles[0].id;
                    this.user.name = res.data.name;
                    this.user.surname = res.data.surname;
                    if(!this.user.role) {
                        this.$router.push("/");
                    }
                  
                });
            },
        },
        mounted(){
            
            this.token = localStorage.getItem("access_token");
            this.get_profile();
        },
    }
    </script>



<style scoped lang="scss"> 
    .apexcharts-toolbar {
        display: none !important;
    }
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
    .analyze__title { 
        color: gray;
        font-size: 24px;
        margin-top: 20px;
        margin-bottom: 20px;
    }
    .notif__analyze__body {
            width: 90%;
            justify-content: center;
            .fa-chart-bar {
                font-size: 150px;
                align-self: center;
                margin-top: 40px;
                color: #4e28a8;
            }
    }


    
    .notif__home {
      

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
                justify-content: center;
                i {
                    margin-right: 20px;
                }
                p,i {
                    color: white;
                }
                
            }

            .notif__type__active {
                background:  #683fcc;
                color: white;
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
