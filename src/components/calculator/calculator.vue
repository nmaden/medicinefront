<template>
    <div class="calc calc__column calc__ac" style="margin-top: 20px">


            <div class="calc__column elements" >

                   
                    <div class="calc__column elements__row" v-for="(item,index) in elements" :key="index">

                        <div class="calc__row elements__row calc__mb elements__body calc__ac" @click="show_calcs(index)">
                            <p>{{ item.type}}</p>
                           
                            <div class="calc__row ">
                             
                                <!-- <i  class="fas fa-pencil-alt"></i>
                                <i  class="fas fa-trash-alt"></i> -->
                               
                             
                                <!-- <i    @click="show_calcs(index)" v-if="show_hide[index]==1" class="fas fa-chevron-up"></i>
                                <i    @click="show_calcs(index)" v-else class="fas fa-chevron-down"></i> -->
                            </div>
                        </div>


                       
                        
                       

                        <div class="calc__column elements__row calc__mb" v-if="show_hide[index]==1">

                            <div class="calc__row elements__row calc__mb"   >
                                
                                <div v-if="item.type=='Фрезировка' || item.type=='Пленка'" class="calc__row" >
                                    

                                  
                
                                    <div class="calc__column ">
                                    
                                        <div>
                                            
                                            <div class="calc__row calc__ac calc__mb calc__search">
                                              
                                                <input type="text" placeholder="поиск" class="calc__mr" @input="search_el()">
                                                <i style="color:black" class="fas fa-search"></i>
                                            </div>

                                            <div class="calc__menu" >   
                                                <div class="calc__column "  v-for="(el,j) in item.type_calculate" :key="j" >
                                                    <div class="calc__column calc__menu__item calc__mr" v-if="el.type=='easy'" @click="choose_item(index,el.id,el.calculation_id)">
                                                    
                                                        <img :src="'http://127.0.0.1:8000'+el.image_path" alt="">
                                                
                                                        <p>{{el.name}}</p>
                                                        <p>{{el.price}}</p>
                                                    </div>
                                                </div>
                                            </div>
                                           

                                        </div>
                                    </div>
                                    <div class="calc__column">
                                        
                                        <div >
                                            <div class="calc__row calc__ac calc__mb calc__search">
                                               
                                                <input type="text" placeholder="поиск" class="calc__mr" @input="search_el()">
                                                <i style="color:black" class="fas fa-search"></i>
                                            </div>
                                            <div class="calc__menu">
                                                <div class="calc__column " v-for="(el,j) in item.type_calculate" :key="j">
                                                    <div class="calc__column calc__menu__item calc__mr" v-if="el.type=='hard'" @click="choose_item(index,el.id,el.calculation_id)">
                                                        <img :src="'http://127.0.0.1:8000'+el.image_path" alt="">
                                                
                                                        <p>{{el.name}}</p>
                                                        <p>{{el.price}}</p>
                                                    </div>
                                                </div>
                                            </div>
                              
                                        </div>
                                    </div>
                                   
                                </div>
                                <div v-else>
                                    <div class="calc__column">
                                    
                                        <div >
                                             <div class="calc__row calc__ac calc__mb calc__search">
                                             
                                                <input type="text" placeholder="поиск" class="calc__mr" @input="search_el()">
                                                <i style="color:black" class="fas fa-search"></i>
                                            </div>

                                            <div class="calc__menu">
                                                <div class="calc__column "  v-for="(el,j) in item.type_calculate" :key="j">
                                                    <div class="calc__column calc__menu__item" @click="choose_item(index,el.id,el.calculation_id)">
                                                        <img :src="'http://127.0.0.1:8000'+el.image_path" alt="">
                                                
                                                        <p>{{el.name}}</p>
                                                    </div>
                                                </div>
                                            </div>
                                            

                                        </div>
                                    </div>
                                </div>
                                

                               
                           
                        </div>
                        
                    </div>

                </div>


                <form class="calc__column calc__main__body" @submit.prevent="send_order">
                    

   
                    <!-- <div class="calc__row calc__orders__row calc__mb">
                        <p class="calc__mr calc__bold calc__l">Название</p>
                        <p class="calc__mr calc__bold calc__l">Тип рассчета</p>
                        <p class="calc__mr calc__bold calc__l">Цена</p>
                        <p class="calc__mr calc__bold calc__l">Ввод размеров</p>
                        <p class="calc__mr calc__bold calc__l">Количество</p>
                        <p class="calc__mr calc__bold calc__l">Сумма</p>
                    </div> -->

                    <div class="calc__column" v-for="(i,j) in orders" :key="j">

                        <div class="calc__column calc__height" v-if="j==0" >
                            <p class="calc__calc__label">Толшина</p>
                            <input type="number" placeholder="Толшина"  v-model="calc_height" required>
                        </div>
                         <div class="calc__column calc__mb calc__orders__row">
                            


                            <div class="calc__row calc__jb calc__width100">
                
                                <p class="calc__mr calc__mb__xs calc__order__title">{{i.name}}</p>

                                <div class="calc__column calc__inputs">
                                    <div class="calc__mr" v-if="i.type_calculate=='by_size'">
                                 
                                        <input class="calc__mr calc__mb__xs"  type="text" placeholder="Длина"  v-model="wirina[j]"  required>
                                        <input class="calc__mr calc__mb__xs"  type="text" placeholder="Ширина"  v-model="dlina[j]"  required>

                                    </div>
                                    <div v-if="i.type_calculate=='by_size'">
                                        <input  type="number"  placeholder="Количество"  v-model="count[j]"   @input="calculation('by_size',j)" required>
                                    </div>
                                    <!-- <div class="calc__mr"  v-if="i.type_calculate=='by_height'" >
                                        <input type="number"  placeholder="Толшина" v-model="height[j]" @input="calculation('by_height',j,i.price)" required>
                                    </div> -->
                                    <div  v-if="i.type_calculate=='by_count'">
                                        <input  type="number"  placeholder="Количество"  v-model="count[j]"   @input="calculation('by_count',j)" required>
                                    </div>
                                    
                                
                                    <p class="result" v-if="i.type_calculate=='by_size' && result[j]">{{wirina[j]}}м x {{dlina[j]}}м x {{count[j]}} = {{result[j]}} кв м</p>
                                    
                                </div>
                            </div>
                             
                             <!-- <p  class="calc__mr" v-if="i.type_calculate=='by_height'">По толшине</p>
                             <p class="calc__mr" v-else-if="i.type_calculate=='by_size'">По размерам</p>
                             <p class="calc__mr" v-else-if="i.type_calculate=='by_count'">По количеству</p> -->

                          
                            
                             
                         </div>
                    </div>
                    
                    <div class="calc__column">
                        <p class="calc__mb">Примечание о заказе необезательно</p>
                        <textarea name="" v-model="order_comment" id="" cols="50" rows="10" placeholder="Примечание о заказе необезательно"></textarea>
      
                    </div>
                  

                    <button class="calc__send" type="submit" v-if="orders.length!=0">Завершить заказ</button>
                </form>
            </div>
    </div>
</template>


    <script>
    export default {
    name: 'AccountPage' ,
        data() {
            return {
                  calc_height: null,
                  order_comment: '',
                  amount: "",
                  dlina: [],
                  wirina: [],
                  height: [],
                  count: [],
                  result: [],
                  collect_id: [],
                  orders: [],
                  show_hide: [],
                  token: "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIzIiwianRpIjoiZjM1MGUyYTBkZDI1MzIxMGIzZDQ0YjM1YmZiMTc4NDVlODAyYzVmYjU1MjMzODg3M2Q0NTkxZTFmOGMyMWY2OTJmNGZkMDdmMWVmNDJlZjciLCJpYXQiOjE2MTQwOTg1ODcsIm5iZiI6MTYxNDA5ODU4NywiZXhwIjoxNjI5NzM2OTg2LCJzdWIiOiIxOCIsInNjb3BlcyI6W119.umhjH7mgq2TsuBKTeRLRP956sXykMKZ8HYfwRY4Y46PZx9brJzREfpwKF8g2-ShD4ZAaRUuNS8qTM6mvxnLnY7X2OwXVtpsBmwWcQq2sSrX2udo76giyy39X_8AY4SvrN8ncfQyFtbousxqv1PTkqPH5v5nNSRtZfmqiqFp7ribCI2dhAL-NPfYuubpQ_VTFwfgJKNgtwaqUzCNYdnWpZFeMMv-9RdageBTlQ3TlWq1OH2FB_exMUDb90l-LMFSPkmbzN24Ia9kJMtlJceRXZFzrJwLbNLcNzyhest2HXt8uU8uA6N-QTJuHJ9Vo19LfZbzcFwY-g26fjnGo4txn4yCeXANu2tVMusfiC65O4MKnwduhficxhXHzAQwZyvmkoGBt7nJgu-U-zjCwzs9D4YFY3taocYkqiyrjPeJFFfYO65ZRTnIlVau5pBRioP-q1Dam_Qg_PTnMumxT4dW5aBid6Lr6t0kJcfrc-K43-2U2KZuD4DDBRipsz-vaUlhKNC5VFoIBP7WfEXSDRoN9WW6zl0LXtGjXVJNVMIHVHRhT_zkURTkChx9XG4pT4LxXvTA-4tP2fexGvIVDWC1WInLDgRFJ7gsYNkLv7DONwbpAGwwtYYEPPcizGTizrnp5vtVDQlPRylXze4y1soauXJDwSRDvsNzCdjAl5ZMaFzE",
                  elements: '',
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
            calculation(type,index) {
                
                if(type=="by_size") {
                    if(this.dlina[index] && this.wirina[index]) {
                        this.result[index] = this.dlina[index]*this.wirina[index]*this.count[index];
                    }
                    this.orders[index].dlina = this.dlina[index];
                    this.orders[index].wirina = this.wirina[index];
                    this.orders[index].count = this.count[index];
                }   
                if(type=="by_height") {
                    this.result[index] = this.height[index];
                }
                if(type=="by_count") {
                    this.result[index] = this.count[index];
                    this.orders[index].count = this.count[index];
                }

                this.orders[index].volume = this.result[index];
                this.amount = this.result.reduce((a, b) => a + b, 0)
            },

            remove(array, element) {
                return array.filter(el => el.calculation_id !== element);
            },
            choose_item(pivot,id,calc_id) {
                
                if(this.collect_id.length!=0) {
                    for (let index = 0; index < this.collect_id.length; index++) {

                        if(this.collect_id[index]==calc_id) {
                          
                            if(this.dlina[index]) {
                                this.dlina[index] = "";
                                this.wirina[index] = "";  
                            }
                            if(this.count[index]) {
                                this.count[index] = "";
                            }
                            if(this.height[index]) {
                                this.height[index] = "";
                            }
                            this.result[index] = "";
                            this.orders = this.remove(this.orders,calc_id)
                        }
                        
                    }
                }

                let arr = this.elements[pivot].type_calculate;

                for (let index = 0; index < arr.length; index++) {
                    if(arr[index].id == id) {
                        this.collect_id.push(arr[index].calculation_id);
                        this.orders.push(arr[index]);
                    }
                }
            },
            logout() {
                localStorage.removeItem("access_token");
                this.$router.push("calculator");
            },
            get_el() {
                const config = {
                    headers: { 'Authorization': `Bearer ${this.token}` }
                };

                this.$http.get('/calculator/get/elements',  config)
                .then(res => {
                    this.elements = res.data;
                })
                .catch(error => {
                    
                });
            },
            show_calcs(item) {
              
                for (let index = 0; index < this.elements.length; index++) {
                    if(item!=index) {
                        this.show_hide[index] = false;
                    }
                }
                this.show_hide[item] = !this.show_hide[item];
           
              
                this.get_el();

            },
            send_order() {
                
                let data = {
                    data: this.orders,
                    comment: this.order_comment,
                    height: this.calc_height
                };

                const config = {
                    headers: { 'Authorization': `Bearer ${this.token}` }
                };

                this.$http.post('/calculator/create/order', data, config)
                .then(res => { 
                    
                  
                    this.$fire({
                    title: res.data.msg,
                    text: "",
                    type: "success",
                    timer: 3000
                    }).then(r => {
                        console.log(r.value);
                    });
                        // this.show_modal = false;
                    // this.get_el();
                });

            }
        },
        mounted() {
            this.get_el();
        }
    }
    </script>



    <style scoped lang="scss"> 

    .calc__width100 {
        width: 100%;
    }
    .calc__main__body {
        width: 100%;
        align-items: flex-start;
    }
    .calc__column {
    display: flex;
    flex-direction: column;
    }
    .calc__row {
    display: flex;
    flex-direction: row;
    }
    .calc__row__second {
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
    .calc__mb {
            margin-bottom: 20px;
    } 
    .calc__mb__xs {
        margin-bottom: 10px;
    } 

    ::placeholder {
            color: #ccc;
    }
    .calc__search {
        input {
            padding: 7px;
        }
       
    }
    
    .calc__mr {
        margin-right: 10px;
    }

    .calc__as {
        align-self: flex-end;
    }
    .calc__bold {
        font-weight: bold;
    }
    .calc__l {
        font-size: 20px;
    }

    .calc__send {
        padding: 15px;
        border: none;
        outline: none;
        color: white;
        background-color: var(--main-kenes-blue);
        cursor: pointer;
        font-size: 16px;
        text-transform: uppercase;
        width: 200px;
        align-self: flex-end;
        opacity: 0.8;
    }
    .calc__send:hover {
        opacity: 1;
    }
    .result {
        font-size: 16px;
    }


    .calc__menu {
        width: 320px;
        height: 200px;
        display: flex;
        flex-wrap: wrap;
        overflow-y: auto;
        img {
            width: 80px;
            height: 80px;
            object-fit: contain;
            border: 2px solid white;
        }
        .calc__menu__item {
            cursor: pointer;
            width: 80px;
        }
        .calc__menu__item:hover img {

            border: 2px solid red;
        }

      
      
    }

  
    .calc__amount {
        font-size: 20px;
        border-bottom: 2px solid black;
        font-weight: bold;
    }
    .calc__orders__row {
        width: 400px;
        background-color: white;
        border-radius: 10px;
        padding: 20px 40px;
        border-bottom: 8px solid var(--main-kenes-blue);
        

        .calc__inputs {
            align-self: flex-end;
            margin-left: 120px;
        }
        .calc__order__title {
            font-size: 24px;
        }
       
        input {
            padding: 10px;
            margin-bottom: 10px;

        }
        ::placeholder {
            color: #ccc;
        }
        .result {
            font-weight: bold;
            font-size: 18px;
            white-space: nowrap;
        }
    }

     .calc__menu::-webkit-scrollbar {
        width: 5px;
        height: 5px;
        background-color:  var(--main-text-hover-color) #ccc;
      }

      .calc__menu::-webkit-scrollbar-track {
      
        background-color: #E8E8E8;
      }
      .calc__menu::-webkit-scrollbar-thumb {
        background-color:  red;
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

        .elements__header {
            a,p {
                font-weight: bold;
                font-size: 24px;
            }
        }   
        .elements__row {
            width: 100%;
            a,p {
                margin-right: 50px;
                width: 180px;
            }
            i {
                color: white;
                cursor: pointer;
                margin-right: 10px;
            }
            a {
                cursor: pointer;
               
            }
            a:hover {
                 text-decoration: underline;
            }
        }
        .elements__body {
            cursor: pointer;
            padding: 20px;
            background-color: var(--main-kenes-blue);
            p,a {
                font-size: 24px;
                color: white;
            }
        }
        .elements__body__yellow {
            background-color: black;
            padding: 10px;
            p,a {
                color: white;
            }
        }

        .elements {
            width: 800px;

            .calc__height {
                margin-bottom: 20px;
                p {
                    margin-bottom: 5px;
                    font-weight: bold;
                    font-size: 18px;
                }
                input {
                    padding: 10px;
                    width: 150px;
                }
                ::placeholder {
                    color: #ccc;
                }
            }
        }

        .calc__modal {
            display: flex;
            justify-content: center;
            align-items: center;
            position: fixed;
            top: 0;
            right: 0;
            width: 100%;
            height: 100%;
            background-color:black;
            

            .calc__modal__close {
                position: absolute;
                top: 200px;
                right: 500px;
                cursor: pointer;
                color: white;
                font-size: 22px;
                text-transform: uppercase;
            }
            .calc__modal__close:hover {
                border-bottom: 1px solid white;
            }

            .calc__modal__form {
                position:absolute;
                width: 400px;
                background-color: white;
                padding: 20px;
                .calc__modal__title {
                    font-size: 22px;
                    font-weight: bold;
                    margin-bottom: 20px;
                    text-transform: uppercase;
                }
                .calc__column {
                    p {
                        margin-bottom: 10px;
                    }
                }
                input {
                    padding: 10px;
                    width: 190px;
                    
                }
                select {
                    padding: 10px;
                    width: 220px;

                }
                button {
                    cursor: pointer;
                    padding: 20px;
                    width: 220px;
                }
            }
        }

        @media only screen and (max-width: 600px) {
            .elements {
                width: 100%;
            }
            .calc__menu {
                width: 100%;
            }
         
            .calc__orders__row {
                width: 100%;
                overflow-x: scroll;
                p {
                    font-size: 20px;
                    width: unset;

                }
                div {
                    width: unset;
                }
                .result {
                    font-size: 14px;
                }
            }
            .calc__column {
                width: 100%;
            }
            .elements__body {
                padding: 10px;
            }
            .calc__amount {
                font-size: 16px;
            }

            .calc__orders__row {
                padding: 0;
                p {
                    padding: 20px;
                    
                }
                input {
                    margin: 20px;
                }
            }
        }
    </style>
