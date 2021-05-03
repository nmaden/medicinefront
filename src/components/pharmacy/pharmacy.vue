<template>
    <div class="">


        <div class="notif__column notif__100 notif__home notif__ac" >

            <div class="notif__jb notif__header notif__mb__s">

                <p class="notif__header__title">Поиск лекарств</p>
                <div class="notif__search notif__row notif__ac ">
                    
                    <div class="notif__icon__search">
                        <i class="fas fa-search"></i>
                    </div>
                    <input type="text" v-model="medicine.name"  placeholder="Лекарства" @input="search">
                    
                </div>
                <div class="notif__column notif__spell" v-if="spells">
                    <p v-for="(text,index) in spells" :key="index" @click="chooseCorrect(text)" >{{text}}</p>
                </div>
            </div>

           
            <div class="notif__column notif__plans  notif__ac" >

                <div class="notif__menus" v-if="search_page">
                    <div class="notif__menu" @click="show_fixed_third=true">
                        <i class="fas fa-bookmark"></i>
                        <p>Избранное</p>
                        <p>Мои избранные места</p>
                    </div>
                    <div class="notif__menu" @click="show_pharmacies=true">
                        <i class="fas fa-clinic-medical"></i>
                        <p>Аптеки</p>
                        <p>Круглосуточные производственные</p>
                    </div>
                    <div class="notif__menu"  @click="show_fixed=true">
                        <i class="fas fa-pills"></i>
                        <p>Группы лекарств</p>
                        <p>Антибиотики,</p>
                        <p>витамины...</p>
                    </div>
                </div>
                

                 <div class="notif__column  notif__categories" v-bind:class="{show__categories: show_pharmacies==true}"  >
            
                        <div class="notif__category__title notif__row">
                            <i class="fas fa-arrow-left" @click="show_pharmacies=false"></i>
                            <p>Аптеки</p>
                        </div>

                        <div class="notif__apteka__pharm notif__mb__s" v-for="(apteka,i) in pharmacies" :key="i">
                                <div class="notif__column notif__mb__xs"> 
             
                  
                                   
                                    <div class="notif__row notif__ac notif__mb__xs">
                                          <!-- <i class="fas fa-clinic-medical notif__mr__s"></i> -->

                                          <img :src="'https://api.frezerovka04.kz'+apteka.image_path" alt="">
                                          <p> {{apteka.name}}</p>
                                    </div>
                                    <div class="notif__row notif__ac notif__mb__xs">
                                        <i class="fas fa-phone-alt notif__mr__s"></i>
                                        <a :href="'tel:'+apteka.phone"> {{apteka.phone}}</a>
                                    </div>
                                    <div class="notif__row notif__ac notif__mb__xs">
                                          
                                        <i class="fas fa-location-arrow notif__mr__s"></i>
                                          <p> {{apteka.address}}</p>
                                    </div>
                                    <div class="notif__row notif__ac notif__mb__xs">
                                        <i class="far fa-clock notif__mr__s"></i>
                                        <p>{{apteka.time_start+' - '+apteka.time_end}}</p>
                                    </div>
                                   
                                </div>
                            </div>
                </div>
                <div class="notif__column  notif__categories" v-bind:class="{show__categories: show_fixed==true}"  >
            
                        <div class="notif__category__title notif__row">
                            <i class="fas fa-arrow-left" @click="show_fixed=false"></i>
                            <p>Группы лекарств</p>
                        </div>

                        <div class="notif__category__item" v-for="(cat,i) in categories" :key="i">
                                <p @click="getByCategory(cat.id)">{{cat.category_name}}</p>
                        </div>
                </div>
                

                <div class="notif__column notif__plan notif__categories" v-bind:class="{show__categories: show_fixed_second==true}" >
                        <div class="notif__category__title notif__row">
                            <i class="fas fa-arrow-left" @click="closeCategory()"></i>
                            <p>Группы лекарств</p>
                        </div>
                        <div class="notif__row notif__pl notif__ac notif__mb__s" v-for="(item,index) in medicine.medicines_c" :key="index">
                        <div class="notif__column notif__day notif__ac notif__mr__l">
                            <i class="fas fa-tags"></i>
                        </div>

                        <div class="notif__column notif__text">
                                
                            <div class="notif__column  notif__mb__xs notif__phar">
                              
                                <div class="notif__row notif__ac notif__top">
                                    <i class="fas fa-capsules notif__mr__s"></i>
                                    <p class="notif__phar__name">{{item.name}}</p>
                                </div>

                                <p class="notif__phar__description" v-html="item.description"></p>
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
                                    
                                    <div class="notif__row notif__ac">
                                        <i class="fas fa-minus-circle" @click="deleteSaved(item)"></i>
                                        <i class="fas fa-bookmark" @click="saveData(item)"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="notif__column notif__plan" v-if="!search_page">
                
                        <div class="notif__row notif__pl notif__ac notif__mb__s" v-for="(item,index) in medicine.medicines" :key="index">
                        <div class="notif__column notif__day notif__ac notif__mr__l">
                            <i class="fas fa-tags"></i>
                        </div>

                        <div class="notif__column notif__text">
                                
                            <div class="notif__column  notif__mb__xs notif__phar">
                              
                                <div class="notif__row notif__ac notif__top">
                                    <i class="fas fa-capsules notif__mr__s"></i>
                                    <p class="notif__phar__name">{{item.name}}</p>
                                </div>
                                <p class="notif__phar__description" v-html="item.description"></p>
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
                                    
                                    <div class="notif__row notif__ac">
                                        <i class="fas fa-minus-circle" @click="deleteSaved(item)"></i>
                                        <i class="fas fa-bookmark" @click="saveData(item)"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="notif__column  notif__plan notif__categories notif__cat" v-bind:class="{show__categories: show_fixed_third==true}" >
                    <div class="notif__category__title notif__category__second notif__row notif__ac">
                        <i class="fas fa-arrow-left" @click="show_fixed_third=false"></i>
                        <p style="margin-right: 20px">Избранное</p>
                        <p style="font-size:12px" @click="deleteIzb">Очистить cписок</p>
                    </div>
                    <div class="notif__row notif__pl notif__ac notif__mb__s" v-for="(item,j) in all_saved" :key="j">
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
                                    <i class="fas fa-bookmark" @click="saveData(item)"></i>
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
                  show_pharmacies: false,
                  pharmacies: [],
                  search_page: true,
                  show_fixed_third: false,
                  show_fixed_second: false,
                  show_fixed: false,
                  categories: [],
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
                      medicines_c: [],
                      medicines: [],
                      name: null
                  },
                  all_saved: [],
                  spells: []
            }
        },
        components: {
        },
        mounted() {
          
            this.getMedicines();
            this.getCategories();
            this.getPharmacies();
            if(localStorage.getItem("saved")) {
                this.all_saved = JSON.parse(localStorage.getItem("saved"));
            }
        },
        methods: {
            chooseCorrect(text) {
                this.medicine.name = text;
                this.spells = [];

                 let data =  {
                    name: this.medicine.name
                };
                let d = this;
                setTimeout(function(){ 

                    d.$http.post('/guest/search/medicines',data)
                    .then(res => {
                        d.medicine.medicines = res.data.data
                    });
                
                }, 100);
           
            },
            spellCheck() {
                let d = this;
                setTimeout(function(){ 
                   d.$http2.get('/services/spellservice.json/checkTexts?text='+d.medicine.name)
                    .then(res => {
                        d.spells = res.data[0][0].s;
                        console.log(this.spells);
                    });
                }, 500);
            },
            deleteIzb() {
                localStorage.removeItem("saved");
                this.all_saved = [];
            },
            getPharmacies() {
                this.show_fixed = false;
                this.show_fixed_second = false;
                this.$http.get('/pharmacy/get/pharmacies/all')
                .then(res => {
                    this.pharmacies = res.data;
                });
            },
            closeCategory() {
                this.show_fixed_second=false;
                this.medicine.medicines_c = [];
            },
              getByCategory(id) {
                this.show_fixed = false;
                this.show_fixed_second = true;
                this.$http.get('/guest/get/by/category/medicines?id='+id)
                .then(res => {
                    this.medicine.medicines_c = res.data
                });
              },
              getCategories() {
                const config = {
                    headers: { 'Authorization': `Bearer ${this.token}` }
                };

                this.$http.get('/pharmacy/get/categories')
                .then(res => {
                    this.categories = res.data
                });
            },
            saveData(data){
               
                if(!localStorage.getItem("saved")) {
                    let b = [];
                    b.push(data);
                    localStorage.setItem("saved",JSON.stringify(b));
                    this.all_saved = JSON.parse(localStorage.getItem("saved"));
                }
                else {
                    let all = JSON.parse(localStorage.getItem("saved"));

                    let truefalse = [];

                    for (let index = 0; index < all.length; index++) {
                        if(all[index].id==data.id) {
                            truefalse.push(true);
                        }
                       
                    }

                    if(truefalse.length==0) {
                        all.push(data);
                        localStorage.setItem("saved",JSON.stringify(all));          

                    }
                  
        
                   
                    
                    this.all_saved = JSON.parse(localStorage.getItem("saved"));



                   
                   
                }

            },
            deleteSaved(data) {
                let all = JSON.parse(localStorage.getItem("saved"));

                 let filtered = this.arrayRemove(all,data.id);
                 localStorage.setItem("saved",JSON.stringify(filtered)); 
                this.all_saved = JSON.parse(localStorage.getItem("saved"));


            },
            arrayRemove(arr, value) { 
    
                return arr.filter(function(ele){ 
                    return ele.id != value; 
                });
            },

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
                this.spellCheck();
                if(this.medicine.name!='') {
                    this.search_page = false;
                }
                else {
                    this.search_page = true;
                }
                let data =  {
                    name: this.medicine.name
                };
                let d = this;
                setTimeout(function(){ 

                    d.$http.post('/guest/search/medicines',data)
                    .then(res => {
                        d.medicine.medicines = res.data.data
                    });
                
                }, 1000);
                
            },
        }
    }
    </script>



<style scoped lang="scss"> 
    .notif__spell {
        width: 90%;
        align-self: flex-start;
        padding: 20px;
        padding-top: 0;
        p {
            padding: 5px;
            border-bottom: 1px solid #ccc;
            
            color: white;
            border-radius: 20px;
        }
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
    .notif__mr__s {
        margin-right: 10px;
    }
    .notif__mr__l {
        margin-right: 20px;
    }

    .show__categories {
        display: flex !important;
    }

    .notif__apteka__pharm {
        padding: 15px;
        border-radius: 20px;
        margin-bottom: 15px;
        box-shadow: rgba(0, 0, 0, 0.08) 0px 4px 12px;
        
        width: 80%;
        align-self: center;

        img {
            width: 120px;
            height: 120px;
            border-radius: 60px;
            margin-right: 20px;
             box-shadow: rgba(0, 0, 0, 0.08) 0px 4px 12px;
             margin-bottom: 20px;
            // border: 3px solid var(--main-kenes-blue);
        }
    }
    .notif__categories {
        display: none;
        position:fixed !important;
        width: 100% !important;
        top: 0;
        z-index: 10;
        background: white;
        min-height: 100vh;
        height: 100%;
        overflow-y: scroll;
        margin-top: 0 !important;


        .notif__category__title {
            padding: 25px;
            justify-content: center;
            position: relative;
            i {
                position: absolute;
                left: 10px;
                top: 25px;
                font-size: 24px;
            }
            p {
                font-size: 20px;
                font-weight: bold;
            }
        }
        .notif__category__item {
          
            padding: 15px;
            border-bottom: 1px solid #ccc;
            display: flex;
            justify-content: center;
        }
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
            position: relative;
            input {
                width: 100%;
                outline: none;
                border: none;
                border-radius: 25px;
                padding: 20px;
                background: #fafafa;
                margin-right: 10px;
                padding-left: 70px;
                
            }
            .notif__icon__search {
                width: 30px;
                height: 30px;
                border-radius: 15px;
                background: #f96080;
                  position: absolute;
                left: 20px;
                display: flex;
                justify-content: center;
                align-items: center;
            }
            i {
                font-size: 14px !important;
                position: absolute;
                left: 8px;
                color: white !important;

            }
            ::placeholder {
                color: #Ccc;
            }
        }
        .notif__header {
            width: 100%;
            background: #29d0e5;
            display: flex;
            flex-direction: column;
            align-items: center;
            padding-top: 30px;
            padding-bottom: 30px;
            .notif__header__title {
             
                color: white;
                font-size: 36px;
                margin-bottom: 20px;
        
            }
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

            .notif__menus {
                display: flex;
                flex-wrap: wrap;
                justify-content: space-between;
                width: 90%;
            }
            .notif__menu {
                width: 110px;
                padding: 15px;
                border-radius: 20px;
                margin-bottom: 15px;
                box-shadow: rgba(0, 0, 0, 0.08) 0px 4px 12px;
                i {
                    font-size: 18px;
                    margin-bottom: 20px;
                }
                p:nth-child(2){
                    font-size: 18px;
                    margin-bottom: 10px;
                    width: 70px;
                }
                p:nth-child(3) {
                    font-size: 12px;
                }
                p:nth-child(4) {
                    font-size: 12px;
                }
            }
            .notif__plan {
                width: 90%;
                margin-bottom: 10px;
                margin-top: 10px;
                position: relative;
                .fa-minus-circle {
                    color: #f27474;
                    position: absolute;
                    right: 50px;
                    bottom: 20px;
                    font-size: 24px; 
                }
                .fa-bookmark {
                    color: #f27474;
                    position: absolute;
                    right: 20px;
                    bottom: 20px;
                    font-size: 24px;
                }
                .fa-trash {
                    color: #f27474;
                    position: absolute;
                    right: 50px;
                    bottom: 20px;
                    font-size: 24px;
                }
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
                    box-shadow: rgba(0, 0, 0, 0.08) 0px 4px 12px;
                    width: 80%;
                    align-self: center;
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
                        .notif__top {
                            margin-bottom: 10px;
                        }
                        .notif__phar__name {
                 
                            font-size: 20px;
                        }
                        .notif__phar__description {
                            overflow-y: scroll;
                            max-height: 100px;
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
