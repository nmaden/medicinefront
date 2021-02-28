<template>
    <div class="calc calc__column calc__ac">

        <p class="calc__mb calc__toptext" style="font-size: 16px;margin-top: 10px;font-weight: bold;">Страница админ системы</p>
        <p class="calc__mb calc__toptext" style="font-size: 16px">Для создание элементов для рассчета и просмотра заказов</p>

        <div class="calc__menu calc__row calc__jb calc__mb">

                <p class="calc__type" @click="show_page(1)" v-bind:class="{active_color:page==1}"> Создать элемент</p>
                <p class="calc__type" @click="show_page(2)" v-bind:class="{active_color:page==2}">Элементы</p>
                <p class="calc__type" @click="show_page(3)" v-bind:class="{active_color:page==3}">Заказы</p>

        </div>
        <div class="calc__column">

            <div class="calc__modal" v-if="show_modal">

                
                <form   class="calc__column calc__modal__form" v-if="modal_type==1" @submit.prevent="update_element(1)">
                    
                    <i class="far fa-window-close calc__mb" @click="show_modal=false"></i>
                    <p class="calc__modal__title">Редактировать</p>
                    
                    <div class="calc__column calc__mb calc__ac">
                        <p>Тип</p>
                        <input type="text" v-model="edit_data.type">
                    </div>
                    <div class="calc__column calc__mb calc__ac">
                        <p>Название</p>
                        <input type="text" v-model="edit_data.name">
                    </div>

                    <button type="submit">Редактировать</button>
                </form>

                <form   class="calc__column calc__modal__form" v-if="modal_type==2" @submit.prevent="update_element(2)">
                    
                    <i class="far fa-window-close calc__mb" @click="show_modal=false"></i>
                    <p class="calc__modal__title">Редактировать</p>
                    
                    <div class="calc__column calc__mb calc__ac">
                        <p>Название</p>
                        <input type="text"  v-model="edit_data.name">
                    </div>
                    <div class="calc__column calc__mb calc__ac">
                        <p>Примечание</p>
                        <input type="text"  v-model="edit_data.comment">
                    </div>
                    <div class="calc__column calc__mb calc__ac">
                        <p>Тип рассчета</p>
                      
                        <select  v-model="edit_data.type_calc">
                            <option value="by_count">По количеству</option>
                            <option value="by_size">По размерам</option>
                            <option value="by_height">По толшине</option>
                        </select>
                    </div>
                    <!-- <div class="calc__column calc__mb" >
                        <p>Цена</p>
                        <input type="text"  v-model="edit_data.price">
                    </div> -->

                    <button type="submit">Редактировать</button>
                </form>
            </div>


            <div class="calc__body calc__column">

              
                <form class="calc__element calc__column" @submit.prevent="create_element()" v-if="page==1"> 

                    <div class="calc__column calc__mb">
                        <p>Выберите тип</p>
                        <select name="" id="" placeholder="Выберите тип" v-model="calculator.type_el" required>
                            <option value="2">Фрезировка</option>
                            <option value="3">Пленка</option>
                            <option value="4">Декор</option>
                            <option value="5">Обкат</option>
                            <option value="other">Добавить дополнительный элемент</option>
                        </select>
                    </div>

                    <div class="calc__column calc__mb" v-if="calculator.type_el=='other'">
                        <p>Название типа</p>
                        <input type="text" required  v-model="calculator.type">
                    </div>
                    <div class="calc__column calc__mb">
                        <p>Название элемента</p>
                        <input type="text" required  v-model="calculator.el_name">
                    </div>
                    <div class="calc__column calc__mb" >
                        <p>Тип рассчета</p>
                        <select name="" id="" placeholder="Выберите тип" v-model="calculator.type_calc" required>
                            <option value="by_count">По количеству</option>
                            <option value="by_size">По размерам</option>
                            <option value="by_height">По толшине</option>
                        </select>
                    </div>


                    <div class="calc__column calc__mb">
                        <p>Рисунок</p>
                        <input type="file" @change="uploadImage" class="custom-file-input"  name="image"   accept="image/*" >
                    </div>
                    
                    <div class="calc__column calc__mb" v-if="calculator.type_el==2">
                        <p>Тип фрезировки</p>
                        <select name="" id="" placeholder="Выберите тип" v-model="calculator.type_frez" required>
                            <option value="easy">Простой</option>
                            <option value="hard">Сложный</option>
                        </select>
                    </div>
                    <div class="calc__column calc__mb" v-if="calculator.type_el==3">
                        <p>Тип  пленки</p>
                        <select name="" id="" placeholder="Выберите тип" v-model="calculator.type_plenka" required>
                            <option value="easy">Простой</option>
                            <option value="hard">Сложный</option>
                        </select>
                    </div>

                    
                  

                   
                    <!-- <div class="calc__column calc__mb">
                        <p>Цена</p>
                        <input type="number" required  v-model="calculator.price">
                    </div> -->
                    <div class="calc__column calc__mb">
                        <p>Примечание</p>
                        <input type="text" required v-model="calculator.comment"> 
                    </div>

                    <button type="submit">Создать</button>
                </form>

                <div class="calc__column elements" v-else-if="page==2">


                    <div class="calc__column elements__row" v-for="(item,index) in elements" :key="index">

                        <div class="calc__row elements__row calc__mb elements__body"  >
                            <p>{{ item.type}}</p>
                            <p>{{ item.name}}</p>

                            <div class="calc__row ">
                             
                                <i @click="edit_element(1,item.id)" class="fas fa-pencil-alt"></i>
                                <i @click="delete_element(1,item.id)" class="fas fa-trash-alt"></i>
                               
                             
                                <i  @click="show_calcs(index)" v-if="show_hide[index]==1" class="fas fa-chevron-up"></i>
                                <i  @click="show_calcs(index)" v-else class="fas fa-chevron-down"></i>
                            </div>
                        </div>

                        <div class="calc__column elements__row calc__mb" v-if="show_hide[index]==1">
                            <div class="calc__row elements__row calc__mb" v-for="(el,j) in item.type_calculate" :key="j"  >

                                <div class="calc__column">

                                  

                                    <div class="calc__row elements__body__yellow">  
                                        <p>{{ el.name}}</p>
                                        <p>{{ el.comment}}</p>
                                 
                                      
                                        

                                        <div class="calc__row ">
                                          
                                            <i @click="edit_element(2,el.id)" class="fas fa-pencil-alt"></i>
                                            <i @click="delete_element(2,el.id)" class="fas fa-trash-alt"></i>
                               
                                        </div>

                                    </div>
                                
                                </div>
                            </div>
                        </div>
                        
                    </div>

                </div>

                <div class="calc__column" ref="testHtml" v-else> 

                    
                    <p class="calc__order__title">Последние заказы</p>
                    <div class="calc__order__top">
                    <div class="calc__column" v-for="(el,index) in orders" :key="index">


                           
                                <div class="calc__column calc__user__order" @click="show_ordered_elements(index)">
                                    
                                    
                                    <div class="calc__row calc__ac calc__border__line">
                                        <p class="calc__user__label">{{index+1}} - заказ</p>
                                        <i class="fas fa-trash-alt" style="margin-left: 50px" @click="delete_order(index)"></i>
                                    </div>


                                    <div class="calc__row calc__ac">
                                        <p class="calc__user__label">Сотрудник:</p>
                                        <p>{{el.who}}</p>
                                    </div>
                                    <div class="calc__row calc__ac">
                                        <p class="calc__user__label">Примечание:</p>
                                        <p v-if="el.comment">{{el.comment}}</p>
                                    </div>
                                    
                                    <div class="calc__row calc__ac">
                                        <p class="calc__user__label">Толшина:</p>
                                        <p>{{el.height}}</p>
                                    </div>
                                    <div class="calc__row calc__ac">
                                        <p class="calc__user__label">Сумма:</p>
                                        <p v-if="el.amount">{{el.amount}} тг</p>
                                        <p v-else>0 тг</p>
                                    </div>

                                    <div class="calc__row calc__ac">
                                        <p class="calc__user__label">Дата заказа:</p>
                                        <p v-if="el.comment">{{convert_date(el.created_at)}}</p>
                                    </div>
                                    
                            </div>
                       


                          
                           
                    </div>
                    </div>

                    <div class="calc__column calc__order__bottom" v-if="show_ordered" style="margin-top: 50px">
                        <p class="calc__order__level">{{current_user_index+1}} - Заказ</p>
                        <div class="calc__column" v-for="(order,i) in ordered_elements[current_user_index]" :key="i">

                                <div class="calc__column calc__orders">
                                    
                                   
                                    <div class="calc__column calc__order" v-if="order.type_calculate=='by_count'">
                                        <p class="calc__order__title">{{order.type_name}}</p>
                                        
                                        
                                        <div class="calc__column">
                                            <p class="calc__input__label">Количество</p>
                                            <p>{{order.count}}</p>
                                        </div>
                                       <div class="calc__column">
                                            <p class="calc__input__label">Цена</p>
                                             <input type="text" placeholder="Цена" v-model="order.price" @input="set_price(order.price,i,current_user_index,order.count,order.dlina,order.wirina,order.type_calculate)">
                                        </div>


                                        <div class="calc__column">
                                            <p class="calc__input__label">Сумма</p>
                                            <input type="text" placeholder="Сумма"    v-model="order.amount_sum">
                                        </div>
                                       
                                    </div>

                                    <div class="calc__column calc__order" v-else>
                                        <p class="calc__order__title">{{order.type_name}}</p>
                                       
                                       
                                        <div class="calc__column">
                                            <p class="calc__input__label">Количество</p>
                                            <p>{{ order.count }}</p>
                                        </div>
                                        <div class="calc__column">
                                            <p class="calc__input__label">Длина</p>
                                            <p>{{order.dlina}}</p>
                                        </div>
                                        <div class="calc__column">
                                            <p class="calc__input__label">Ширина</p>
                                            <p>{{order.wirina}}</p>
                                        </div>
                                        <div>
                                            <p class="calc__input__label">Площадь</p>
                                            <p>{{order.size}}</p>
                                        </div>

                                         <div class="calc__column">
                                            <p class="calc__input__label">Цена</p>
                                            <input type="text" placeholder="Цена" v-model="order.price" @input="set_price(order.price,i,current_user_index,order.count,order.dlina,order.wirina,order.type_calculate)">
                                        </div>
                                        <div class="calc__column">
                                            <p class="calc__input__label">Сумма</p>
                                            <input type="text" placeholder="Сумма"    v-model="order.amount_sum">
                                        </div>
                                    </div>
                           
                                    
                                </div>
                        </div>

                    </div>

    

                    <button class="calc__save__order" v-if="show_save_btn" @click="saveOrder()">Сохранить</button>

                    <!-- <download-excel class="calc__save__order" :data="json_data" v-if="show_save_btn">
                        Скачать excel
 
                    </download-excel> -->
                    <button class="calc__save__order" v-if="show_save_btn" @click="getPdf(current_user_index)">Скачать PDF</button>
                </div>
             

                
                
            </div>

        </div>
        

    </div>
</template>


<script>
    import { jsPDF } from "jspdf";
    export default {
    
    name: 'CalcAdmin' ,
        data() {
            return { 
                    json_fields: {
                        "Complete name": "name",
                        City: "city",
                        Telephone: "phone.mobile",
                        "Telephone 2": {
                            field: "phone.landline",
                            callback: (value) => {
                            return `Landline Phone - ${value}`;
                            },
                        },
                        },
                        json_data: [
                        {
                            name: "Tony Peña",
                            city: "New York",
                            country: "United States",
                            birthdate: "1978-03-15",
                            phone: {
                            mobile: "1-541-754-3010",
                            landline: "(541) 754-3010",
                            },
                        },
                        {
                            name: "Thessaloniki",
                            city: "Athens",
                            country: "Greece",
                            birthdate: "1987-11-23",
                            phone: {
                            mobile: "+1 855 275 5071",
                            landline: "(2741) 2621-244",
                            },
                        },
                        ],
                        json_meta: [
                        [
                            {
                            key: "charset",
                            value: "utf-8",
                            },
                        ],
                        ],
                  user: {
                      role: '',
                      name: null,
                      surname: null
                  },
                  current_order: '',
                  show_save_btn: false,
                  current_user_index: 0,
                  ordered_elements: [],
                  show_ordered: false,
                  orders: [] ,              
                  modal_type: 1,
                  show_modal: false,
                  show_hide: [],
                  elements: '',
                  page: 1,
                  token: "",
                  types: ["Дверь","Фрезировка","Пленка","Декор","Обкат"],
                  calculator: {
                      type_el:'',
                      type_calc: '',
                      price: '',
                      comment: '',
                      el_name: '',
                      image: '',
                      type_frez: '',
                      type_plenka: ''
                  },
                  edit_data: {
                      type: "",
                      name: "",
                      comment: "",
                      type_calc: "",
                      price: ""
                  },
                  current_type: 1,
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
        mounted() {

            if(!localStorage.getItem("access_token")) {
                this.$router.push("/login");
            }
            else {
                this.token = localStorage.getItem("access_token");
                this.get_profile();
            }
          
        },
        methods: {
            delete_order(index) {
              
                let data = {
                    id: this.orders[index].id
                };

                const config = {
                    headers: { 'Authorization': `Bearer ${this.token}` }
                };

                this.$http.post('/calculator/delete/order', data, config)
                .then(res => { 

                    this.$fire({
                        title: res.data.message,
                        text: "",
                        type: "success",
                        timer: 3000
                    }).then(r => {
                        console.log(r.value);
                    });

                    this.get_orders();
                 
                });

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
                    if(this.user.role != 1) {
                        this.$router.push("/login");
                    }
                    else {
                        this.get_elements();  
                        this.get_orders();
                    }
                });
            },
            saveOrder() {
               
                let data = {
                    ordered_elements: this.ordered_elements[this.current_user_index],
                    orders: this.orders[this.current_user_index]
                };

                const config = {
                    headers: { 'Authorization': `Bearer ${this.token}` }
                };

                this.$http.post('/calculator/save/order', data, config)
                .then(res => { 
                    this.$fire({
                    title: res.data.msg,
                    text: "",
                    type: "success",
                    timer: 3000
                    }).then(r => {
                        console.log(r.value);
                    });
                 
                });

               
            },
            getPdf() {
                window.open("https://api.frezerovka04.kz/kenes/pdf?id="+this.current_order,"_blank");
            },
            convert_date(val) {
               let year =  val.split(" ")[0].split("-")[0];
               let month = val.split(" ")[0].split("-")[1];
               let day = val.split(" ")[0].split("-")[2];

               return day+'.'+month+'.'+year+' '+val.split(" ")[1];
            },
            set_price(price,pos,index,count,dlina,wirina,type_calculate) {

                
                if(type_calculate=='by_count') {

                    
                    this.ordered_elements[index][pos].amount_sum = count*price;
                }
                else {
                    this.ordered_elements[index][pos].amount_sum = count*dlina*wirina*price;
                }
            
                let amount = 0;
                for (let j = 0; j < this.ordered_elements[index].length; j++) {
                 
                    amount = amount+this.ordered_elements[index][j].amount_sum;
                }

                this.orders[index].amount = amount;
            },
            show_ordered_elements(index) {
                this.show_save_btn = true;
                this.current_user_index = index; 
                this.show_ordered = true;


                this.current_order = this.orders[index].id;                
                this.ordered_elements[index] = this.orders[index].ordered_elements;
            },
            get_orders(){
                const config = {
                    headers: { 'Authorization': `Bearer ${this.token}` }
                };

                this.$http.get('/calculator/get/orders', config)
                .then(res => {
                    this.orders = res.data
                });
            },
            update_element(type) {
                let route = "element";

                this.modal_type = type;

                let data = {
                    type: this.edit_data.type,
                    name: this.edit_data.name
                };

                if(type==2) {   
                    route ="calc";

                     data = {
                        name: this.edit_data.name ,
                        comment: this.edit_data.comment,
                        type_calculate : this.edit_data.type_calc,
                        price: this.edit_data.price,
                    };
                }

                const config = {
                    headers: { 'Authorization': `Bearer ${this.token}` }
                };

                this.$http.post('/calculator/edit/'+route+'?id='+this.edit_data.id, data, config)
                .then(res => {
                    

                    this.show_modal = false;
                    this.get_el();

                });

            },
            edit_element(type,id) {
                let route = 'element';
                this.modal_type = type;

                if(type==2) {
                    route = 'calc'; 
                }
                const config = {
                    headers: { 'Authorization': `Bearer ${this.token}` }
                };

                this.$http.get('/calculator/get/'+route+'?id='+id,   config)
                .then(res => {
                    this.edit_data.id = res.data.data.id
                    this.edit_data.type = res.data.data.type
                    this.edit_data.name = res.data.data.name

                    
                    if(type==2) {
                        this.edit_data.id = res.data.data.id
                        this.edit_data.name = res.data.data.name
                        this.edit_data.comment = res.data.data.comment
                        this.edit_data.type_calc = res.data.data.type_calculate
                        this.edit_data.price = res.data.data.price

                        
                    }

                    this.show_modal = true;
                  

                });
            },
            delete_element(type,id) {

                let route = 'element';
                if(type==2) {
                    route = 'calc';
                }
              
                const config = {
                    headers: { 'Authorization': `Bearer ${this.token}` }
                };

                this.$http.get('/calculator/delete/'+route+'?id='+id,  config)
                .then(res => {

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
            get_elements() {
                const config = {
                    headers: { 'Authorization': `Bearer ${this.token}` }
                };

                this.$http.get('/calculator/get/elements',  config)
                .then(res => {
                
                    this.elements = res.data;

                    for (let index = 0; index < this.elements.length; index++) {
                        this.show_hide.push(false) 
                    }

                })
                .catch(error => {
                    
                });
            },
            show_page(page) {
                this.page = page;

                if(page==2) {
                    this.get_elements();
                }

            },
            logout() {
                localStorage.removeItem("access_token");
                this.$router.push("calculator");
            },
            create_element() {
               

                if(this.calculator.type_el=='other') {
                    this.calculator.type_el = this.calculator.type;
                }  
                else {
                    this.calculator.type_el = this.types[this.calculator.type_el-1];
                } 
                let fm = new FormData()
                

                fm.append('type', this.calculator.type_el)
                fm.append('name', this.calculator.el_name)
                
                fm.append('image', this.calculator.image)
                fm.append('type_calc', this.calculator.type_calc)

                fm.append('price', this.calculator.price)
                fm.append('comment', this.calculator.comment)


                
                if(this.calculator.type_el=="Фрезировка") {
                    fm.append('type_of_el', this.calculator.type_frez)    
                }
                else if(this.calculator.type_el=="Пленка") {
                    fm.append('type_of_el', this.calculator.type_plenka)   
                }

                const config = {
                        headers: { 'Authorization': `Bearer ${this.token}` }
                };

                this.$http.post('/calculator/create/element', fm, config)
                .then(res => {
                    this.show_page(2);
                })
                .catch(error => {
                    
                });

            },
            uploadImage (e) {
                this.calculator.image = e.target.files[0];
            }
    }
    }
    </script>



<style scoped lang="scss"> 

        .active_color {
            background-color: rgb(200, 60, 60) !important;
        }
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
        .calc__mb {
            margin-bottom: 20px;
        } 
        .calc__ml {
            margin-left: 20px;
        }

        .calc__header {

            background-color: var(--main-kenes-blue);
            padding: 15px;

            .calc__title {
                font-size: 16px;
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

        .calc__menu {
            margin-right: 20px;
           
            .calc__type {
                text-transform: uppercase;
                text-align: center;
                width: 200px;
                margin-right: 10px;
                margin-bottom: 5px;
                padding: 10px;
                background-color: var(--main-kenes-blue);
                color: white;

                cursor: pointer;
            }

         
        }

        .calc__element {
            width: 600px;
            .calc__column {
                p {
                    margin-bottom: 10px;
                    font-size: 18px;
                    font-weight: bold;
                }
                input {
                    padding: 10px;
                    width: 250px;
                }
                select {
                    padding: 12px;
                    width: 270px;
                }   
            }
            button {
                cursor: pointer;
                padding: 20px;
                background-color: var(--main-kenes-blue);
                border: none;
                outline: none;
                color: white;
                text-transform: uppercase;  
                width: 270px;
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
            padding: 10px;
            background-color: var(--main-kenes-blue);
            p,a {
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
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                i {
                    font-size: 24px;
                    cursor: pointer;
                    align-self: flex-end;
                    margin-right: 20px;
                }
                .calc__close {
                    font-weight: bold;
                    font-size: 20px;
                }
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

        .calc__save__order {
            padding: 20px;
            background-color: var(--main-kenes-blue);
            border: none;
            text-transform: uppercase;
            color: white;
            cursor: pointer;
            margin-bottom: 20px;
            text-align: center;
            font-size: 14px;
        }


        .calc__order__top {
            height: 350px;
            overflow-y: auto;
        }
        .calc__order__bottom {
            height: 350px;
            overflow-y: auto;
        }
        .calc__order__bottom::-webkit-scrollbar {
            width: 7px;
            height: 10px;
        }

        .calc__order__bottom::-webkit-scrollbar-track {
            border-radius: 2px;
            background-color: #ccc;
        }
        .calc__order__bottom::-webkit-scrollbar-thumb {
            background-color: var(--main-kenes-blue);
            border-radius: 2px;
            height: 10px;
        }

        .calc__order__top::-webkit-scrollbar {
            width: 7px;
            height: 10px;
        }

        .calc__order__top::-webkit-scrollbar-track {
            border-radius: 2px;
            background-color: #ccc;
        }
        .calc__order__top::-webkit-scrollbar-thumb {
            background-color: var(--main-kenes-blue);
            border-radius: 2px;
            height: 10px;
        }

        .calc__order__title {
            font-size: 24px;
            font-weight: bold;
            margin-bottom: 20px;
            text-transform: uppercase;
        }
        .calc__user__order {
            background-color: white;
            border-bottom: 8px solid var(--main-kenes-blue);
            width: 350px;
            margin-bottom: 20px;
          
            cursor: pointer;

            .calc__border__line {
                border-bottom: 2px solid #cbe7ff;
            }
            
            p {
                padding: 10px;
                font-size: 18px;
                color: var(--main-kenes-blue);
            }
            .calc__user__label {
                font-weight: bold;
                font-size: 18px;
                color: #333;
              
            }
        }
        .calc__order__level {
            margin-bottom: 10px;
            font-size: 30px;
            font-weight: bold;
        }

        .calc__orders {

            input {
                
                margin: 20px;
                padding: 10px;
            }
            ::placeholder {
                color: #ccc;
            }

            .calc__order {
                margin-bottom: 30px;
                background-color: white;
                
                p {
                    padding: 20px;
                }
                .calc__input__label {
                    margin-bottom: 2px;
                    margin-left: 20px;
                    font-weight: bold;
                    padding: 0;
                }
                input {
                    margin-top: 0;
                }
                .calc__order__title {
                    font-weight: bold;
                    font-size: 20px;
                }
            }
        }


    @media (max-width: 900px) {
        .calc {
            width: 100%;
            .calc__header {
                padding: 0;
            }
            .calc__column {
                width: 100% !important;
            }
            .calc__element {
                width: 100% !important;
                align-items: center;
                justify-content: center;
                .calc__column {
                    align-items: center;
                }
            }
            .calc__menu {
                flex-direction: column;
            }
            .calc__header {
                width: 100%;
            }

            .calc__body {
                align-items: center;
            }
        }
        .calc__toptext {
            font-size: 18px;
            text-align: center;
            font-weight: bold;
            width: 200px;
        }
        .elements__body {
            padding: 0;
            p {
                padding: 10px;
            }
            i {
                padding: 10px;
            }
        }
        .calc__order__title {
            text-align: center;
            font-size: 18px;
        }
   

    }
       
    </style>
