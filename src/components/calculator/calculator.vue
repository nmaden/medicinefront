<template>
    <div class="calc calc__column calc__ac" style="margin-top: 20px">

            <div class="calc__row calc__ac calc__types calc__mb">
                <div class="calc__type" @click="page=1" v-bind:class="{active__bg:page==1}">Заказать</div>
                <div class="calc__type" v-if="show_own_order" @click="getOwnOrders" v-bind:class="{active__bg:page==2}">Мои заказы</div>
                <div class="calc__type" v-if="show_own_order" @click="logoutPage" v-bind:class="{active__bg:page==2}">Выйти</div>
                <div class="calc__type" @click="loginPage()" v-else>Войти</div>
            </div>  
            <div class="calc__column elements" v-if="page==1" >
                
                
                <div class="calc__column" style="align-items:flex-start" v-for="(i,index) in new_orders" :key="index">
                    
                    <div class="new__element calc__column calc__mb">

                        <div class="calc__column new__element__inner">
                            <div class="calc__dropdown calc__row  calc__mr calc__mb" >
                                
                                <div class="calc__column calc__count calc__mr">
                                    <p class="new__element__title">Выберите элемент</p>
                                    <select @change="onChange($event,index)" v-model="permanent.elem" >
                                        <option value="">Выберите элемент</option>
                                        <option v-for="(item , index) in i.elements" v-bind:key="index"   >
                                                {{item.type}}
                                        </option>
                                    </select>
                                </div>

                                <div class="calc__column calc__count">
                                    <p>Выберите декор или обкат</p>
                                    <select @change="onChangeOtherElement($event,index)" v-model="permanent.elem_obkat" >
                                        <option value="">Выберите декор или обкат</option>
                                        <option v-for="(item , index) in i.other_elements" v-bind:key="index"   >
                                                {{item.type}}
                                        </option>
                                    </select>
                                </div>


                            </div>


                            <div class="calc__row calc__inputs__i" v-if="i.element && i.element.length!=0">
                                <div class="calc__column calc__count calc__mr calc__mb">
                                    <p>Толшина</p>
                                    <select name="" id="" v-model="i.tolwina" @change ="calculateTolwina(index)" >
                                        <option value="16">16</option>
                                        <option value="8">8</option>
                                    </select>
                                </div>
                                <div class="calc__column calc__count calc__mr calc__mb">
                                    <p>Длина,мм</p>
                                    <input type="text" placeholder="ширина в мм" v-model="i.dlina" @input="calculateInput(index)">
                                </div>
                                <div class="calc__column calc__count calc__mr calc__mb">
                                    <p>Ширина,мм</p>
                                    <input type="text" placeholder="ширина в мм" v-model="i.wirina" @input="calculateInput(index)">
                                </div>
                                <div class="calc__column calc__count calc__mr calc__mb">
                                    <p>Кол.</p>
                                    <input type="text" v-model="i.count" @input="calculateInput(index)">
                                </div>

                            </div>
                                                            <p class="calc__result calc__mb" style="display: none" v-if="Math.round(i.dlina*i.wirina*i.count*0.001)!=0">Общая плошадь:  {{i.dlina+'*'+i.wirina+'*'+i.count+' = '}}<span class="calc__value">{{Math.round(i.dlina*i.wirina*i.count*0.001)}} кв м</span></p>
                                <p class="calc__result calc__mb" v-if="i.price!=1">Сумма: <span class="calc__value">{{i.price_order+' тг' }}</span></p>
                            <div  class="calc__row calc__ac calc__mb" v-if="i.choosen_element && i.choosen_element.length!=0">
                                <div class="calc__column">
                                    <p>Элемент</p>
                                    <div class="calc__row calc__ac calc__mb calc__element__added">
                                        <img class="calc__choosen__img calc__mr" :src="'https://api.frezerovka04.kz'+i.choosen_element.image_path" alt="">
                                        <p class="calc__mr">{{i.choosen_element.name}}</p>
                                        <i @click="deleteRow(index,'element')" class="calc__pointer fas fa-trash-alt"></i>
                                    </div>
                                </div>
                            </div>
                            <div class="calc__row calc__ac" v-if="i.choosen_plenka && i.choosen_plenka.length!=0">
                                <div class="calc__column">
                                    <p class="calc__mb">Пленка</p>
                                    <div class="calc__row calc__ac calc__mb">
                                        <img  class="calc__choosen__img calc__mr" :src="'https://api.frezerovka04.kz'+i.choosen_plenka.image_path" alt="">
                                        <p class="calc__mr">{{i.choosen_plenka.name}}</p>
                                        <i @click="deleteRow(index,'plenka')" class="calc__pointer fas fa-trash-alt"></i>
                                    </div>

                                </div>
                            </div>

                            <div class="calc__row calc__ac" v-if="i.choosen_obkat && i.choosen_obkat.length!=0">
                                <div class="calc__column">
                                    <p class="calc__mb">Обкат</p>

                                    
                                    <div class="calc__row calc__ac calc__mb">
                                        <img  class="calc__choosen__img calc__mr" :src="'https://api.frezerovka04.kz'+i.choosen_obkat.image_path" alt="">
                                        <p class="calc__mr">{{i.choosen_plenka.name}}</p>
                                        <!-- <input class="calc__mr" v-on:input="changedObkat(index)" type="text" v-model="i.count_obkat"> -->
                                        <i @click="deleteRow(index,'obkat')" class="calc__pointer fas fa-trash-alt calc__mr"></i>
                                    </div>
      
                                </div>
                            </div>
                            <div class="calc__row calc__ac" v-if="i.choosen_decor && i.choosen_decor.length!=0">
                                <div class="calc__column">
                                    <p class="calc__mb">Декор</p>
                                    <div class="calc__row calc__ac calc__mb">
                                        <img  class="calc__choosen__img calc__mr" :src="'https://api.frezerovka04.kz'+i.choosen_decor.image_path" alt="">
                                        <p class="calc__mr">{{i.choosen_decor.name}}</p>
                                        <input class="calc__mr calc__input__obkat" v-on:input="changedDecor(index)" type="text" v-model="i.count_decor">
                                        <i @click="deleteRow(index,'decor')" class="calc__pointer fas fa-trash-alt calc__mr"></i>
                                    </div>

                                </div>
                            </div>
                            <div class="calc__row calc__ac calc__mb  calc__add__input__red" @click="removeInput(index)">
                                <i class="fas fa-minus-circle"></i>
                                <p>Удалить строку</p>
                            </div>
     
                        </div>



                    
                    </div>
                </div>


                <div class="calc__row calc__ac calc__bottom__side calc__mb calc__100 calc__jb">
                    <div class="calc__row calc__ac  calc__add__input calc__mr" @click="addInput()">
                        <i class="fas fa-plus-circle"></i>
                        <p>добавить строку</p>
                    </div>
                    <div class="calc__column">
                        <p class="calc__amount_sum">Общая сумма: <span>{{amount_sum}} тг</span> </p>
                    </div>
                </div>
                

                <!-- <div class="calc__column calc__phone">
                    <p>Телефон</p>
                    <input type="text" value="988888"  v-model="order.phone">
                </div>
                <div class="calc__column calc__phone">
                    <p>Имя</p>
                    <input type="text" value="Nurbol" v-model="order.name">
                </div> -->

                <div class="calc__order__submit"  @click="createOrder" v-if="new_orders[0] && new_orders[0].price!=1">Оформить заказ</div>

            </div>

            <div class="calc__column calc__own__orders" v-if="page==2">
               
                <div class="calc__column calc__own__order" v-for="(order,w) in own_orders" :key="w" >
                        <div class="calc__row ">
                            <div class="calc__column">
                                <p class="calc__own__label">№: {{order.id}}</p>
                                <p class="calc__own__label">Дата заказа : {{order.created_at}}</p>
                                <p class="calc__own__label">Общая сумма заказа : {{order.amount}} тг</p>
                            </div>
                            <p class="calc__own__action" v-if="order.deleted==0" @click="otmenaOrder(order.id)">Отменить заказ</p>
                            <p class="calc__own__action calc__own__red" v-else>Заказ отменен</p>
                        </div>
                    <p class="calc__own__label calc__own__title"><b>Заказанные элементы:</b> </p>
                    <div v-for="(el,e) in order.ordered_elements" :key="e" class="calc__own__order calc__own__order__inner">
                        
                        <div class="calc__row calc__ac">
                            <img class="calc__mr" :src="'https://frezerovka04.kz/'+el.image_path" alt="">
                            <div class="calc__column">
                                <p class="calc__own__label">Название: {{el.type_name}}</p>
                                <p class="calc__own__label"  v-if="el.dlina">Длина: {{el.dlina}}</p>
                                <p class="calc__own__label"  v-if="el.wirina">Ширина: {{el.wirina}}</p>
                                <p class="calc__own__label" v-if="el.count">Количество: {{el.count}}</p>
                                <p class="calc__own__label" v-if="el.order_price">Цена: {{el.order_price}} тг</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

             <div class="calc__modal" v-if="pre_register">
                 <div class="calc__modal__form">
                    <i class="calc__modal__close fas fa-times-circle calc__mb" @click="pre_register=false"></i>
                    <div class="calc__column calc__ac">
                        <div class="calc__modal__choose" @click="has_account='yes'">У меня есть аккаунт</div>
                        <div class="calc__modal__choose" @click="has_account='no'">Пройти регистрацию</div>
                    </div>

                    <div class="calc__column" >
                        <div class="sign__page" v-if="has_account!='' && has_account=='no'">
                            <p class="sign__page__title">Регистрация</p>
                            <form class="sign__page__block" @submit.prevent="register_user">

                                <input type="text" placeholder="Телефон" v-model="sign.phone" required >
                                
                                <input type="text" placeholder="Имя" v-model="sign.name" required>
                                <input type="text" placeholder="Фамилия" v-model="sign.surname" required>

                                <input type="text" placeholder="Email" v-model="sign.email" required>
                                <input type="text" placeholder="Пароль" v-model="sign.password" required>

                                <button type="submit"><p>Создать</p></button>
                            </form>
                        </div>
                        <div class="sign__page" v-if="has_account!='' && has_account=='yes'">

                            <p class="sign__page__title">Вход</p>
                            <form class="sign__page__block" @submit.prevent="sign_page">
                                <input type="text" placeholder="Логин" v-model="sign.email" >
                                <input type="text" placeholder="Пароль" v-model="sign.password" >
                                <button type="submit"><p>Войти</p></button>                                
                            </form>
                            <!-- <button type="submit" @click='$router.push("/register")'><p>Регистрация</p></button> -->

                        </div>      
                        <div class="sign__page" v-if="has_account!='' && has_account=='yes2'">

                            <p class="sign__page__title">Вход</p>
                            <form class="sign__page__block" @submit.prevent="sign_page2">
                                <input type="text" placeholder="Логин" v-model="sign.email" >
                                <input type="text" placeholder="Пароль" v-model="sign.password" >
                                <button type="submit"><p>Войти</p></button>                                
                            </form>
                            <!-- <button type="submit" @click='$router.push("/register")'><p>Регистрация</p></button> -->

                        </div>              
                    </div>
                 </div>
             </div>
            <div class="calc__modal" v-if="show_modal">
                
                <div class="calc__modal__form">
                    <i class="calc__modal__close fas fa-times-circle calc__mb" @click="show_modal=false"></i>
               
                    <div class="calc__dropdown calc__row calc__ac calc__mr" v-if="current_chosen=='Фрезировка'">
                        <div v-for="(item,index) in types_frez" :key="index">
                            <p>{{ item }}</p>
                     
                            <v-select :options="sort_category(item,new_orders[choosen_index].element)" @input="selectedEl" class="calc__mr"  style="width: 250px" placeholder="Выберите элемент" label="name" >
                                <template slot="option" slot-scope="option">
                                    <div class="calc__row calc__ac">
                                        <img  :src="'https://api.frezerovka04.kz'+option.image_path" alt="">
                                        <p    >{{ option.name }}</p>
                                    </div>
                                </template>
                            </v-select>
                         
                        </div>
                    </div>
                    <div class="calc__dropdown calc__row calc__ac calc__mr" v-else-if="current_chosen=='Пленка'">

                        <div v-for="(item,index) in types_plenka" :key="index">
                            <p>{{item}}</p>
                            <v-select  :options="sort_category(item,new_orders[choosen_index].plenka)"  @input="selectedEl"  class="calc__mr"  style="width: 250px" placeholder="Выберите элемент" label="name" >
                                <template slot="option" slot-scope="option">
                                    <div class="calc__row calc__ac">
                                        <img   :src="'https://api.frezerovka04.kz'+option.image_path" alt="">
                                        <p    >{{ option.name }}</p>
                                    </div>
                                </template>
                            </v-select>
                        </div>
                    </div>
                    <div class="calc__dropdown calc__row calc__ac calc__mr" v-else-if="current_chosen=='Декор'">
                        <div class="calc__column">
                            <p class="calc__mb">Декор</p>
                            <v-select :options="new_orders[choosen_index].decors"  @input="selectedOther"  class="calc__mr"  style="width: 250px" placeholder="Выберите элемент" label="name" >
                                <template slot="option" slot-scope="option">
                                    <div class="calc__row calc__ac">
                                        <img   :src="'https://api.frezerovka04.kz'+option.image_path" alt="">
                                        <p    >{{ option.name }}</p>
                                    </div>
                                </template>
                            </v-select>
                        </div>
                           
                    </div>
                    <div class="calc__dropdown calc__row calc__ac calc__mr" v-else-if="current_chosen=='Обкат'">
                            <div class="calc__column">
                                <p class="calc__mb">Обкат</p>
                                <v-select :options="new_orders[choosen_index].obkats"  @input="selectedOther"  class="calc__mr"  style="width: 250px" placeholder="Выберите элемент" label="name" >
                                    <template slot="option" slot-scope="option">
                                        <div class="calc__row calc__ac">
                                            <img   :src="'https://api.frezerovka04.kz'+option.image_path" alt="">
                                            <p    >{{ option.name }}</p>
                                        </div>
                                    </template>
                                </v-select>
                            </div>
                    </div>

       
                </div>
                
            </div>
            <div class="loader" v-if="show_loader">
                <img src="../../assets/images/gif.gif" alt="">
            </div>
    </div>
</template>


    <script>
    export default {
    name: 'AccountPage' ,
        data() {
            return { 
                show_own_order: false,
                show_loader:false,
                sign: {
                    login: '',
                    password: '',
                    name: '',
                    surname: '',
                    phone: '',
                    password: '',
                    email: ''
                },
                pre_register: false,
                has_account: '',   
                page: 1,
                other_elements: [],
                permanent: {
                    choosen_element: ''
                },
                order: {
                    phone: '',
                    name: ""
                },
                choosen_index: 0,
                show_modal: false,
                current_chosen: '',
                
                types_frez: [],
                types_plenka: [],
                selected_type_calculate: [],
                options: [
                    {
                        title: 'Read the Docs',
                        icon: 'fa-book',
                        url: 'https://codeclimate.com/github/sagalbot/vue-select'
                        },
                        {
                        title: 'View on GitHub',
                        icon: 'fa-github',
                        url: 'https://codeclimate.com/github/sagalbot/vue-select'
                        },
                        {
                        title: 'View on NPM',
                        icon: 'fa-database',
                        url: 'https://codeclimate.com/github/sagalbot/vue-select'
                        },
                        {
                        title: 'View Codepen Examples',
                        icon: 'fa-pencil',
                        url: 'https://codeclimate.com/github/sagalbot/vue-select'
                        }
                ],
                show_one_element: false,
                 inputs: [
                     
                 ],
                 user_name: '',
                  user: {
                      role: null,
                      name: null,
                      surname: null
                  },
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
                  token: "",
                  elements: [],
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
                  one_element: [],
                  new_orders: [],
                  amount_sum: 0,
                  own_order: {

                  },
                  own_orders: []
            }
        },
        components: {
        },
        watch: {
            new_orders() {
              
            }
        },
        methods: {
            loginPage() {
                this.pre_register = true;
                this.has_account='yes2';
            },
            register_user() {
              this.pre_register =false;
              let obj = {
                    email: this.sign.email,
                    password: this.sign.password,
                    name: this.sign.name,
                    surname: this.sign.surname,
                    phone: this.sign.phone,
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
            
                this.sign_page();
              })
              .catch(errors => {
                  console.log('Ошибка ' + error.response.data.errors);
              })

        },
         sign_page2() {
                let obj = {
                    email: this.sign.email,
                    password: this.sign.password
                }
                this.$http.post('auth/login',
                obj 
                )
                .then(res => {
                    localStorage.setItem("access_token",res.data.token);
                    this.token = localStorage.getItem("access_token");
                    this.show_own_order = true;
                    this.pre_register =false;
                    this.$router.go(0);
                    // if(!localStorage.getItem("access_token")) {
                    //     this.$router.push("/login");
                    // }
                    // else {
                    //     this.token = localStorage.getItem("access_token");
                    //     this.get_profile();
                    // }
                })
                .catch(errors => {
                    console.log('Ошибка ' + error.response.data.errors);
                })
            },
            sign_page() {
                let obj = {
                    email: this.sign.email,
                    password: this.sign.password
                }
                this.$http.post('auth/login',
                obj 
                )
                .then(res => {
                    localStorage.setItem("access_token",res.data.token);
                    this.token = localStorage.getItem("access_token");
                    this.show_own_order = true;
                    this.show_loader = true;
                    this.get_profile2();
                    // if(!localStorage.getItem("access_token")) {
                    //     this.$router.push("/login");
                    // }
                    // else {
                    //     this.token = localStorage.getItem("access_token");
                    //     this.get_profile();
                    // }
                })
                .catch(errors => {
                    console.log('Ошибка ' + error.response.data.errors);
                })
            },
            login_sign(email,password) {
                let obj = {
                    email: 'kenesmebel04@gmail.com',
                    password: 'kenesmebel04@gmail.com'
                }
                this.$http.post('auth/login',
                obj 
                )
                .then(res => {
                    localStorage.setItem("access_token",res.data.token);
                    this.token = localStorage.getItem("access_token");

                    
                    if(!localStorage.getItem("access_token")) {
                        this.$router.push("/login");
                    }
                    else {
                        this.token = localStorage.getItem("access_token");
                        this.get_profile();
                    }
                })
                .catch(errors => {
                    console.log('Ошибка ' + error.response.data.errors);
                })

            },
            otmenaOrder(id) {
                const config = {
                    headers: { 'Authorization': `Bearer ${this.token}` }
                };

                this.$http.get('/calculator/delete/own/order?id='+id,  config)
                .then(res => {
                    this.own_orders = res.data;
                    this.getOwnOrders();
                })
            },
            changedDecor(index) {

                if(this.new_orders[index].decor_sum!=0) {
                    this.new_orders[index].price_order = this.new_orders[index].price_order-this.new_orders[index].decor_sum;
                    this.amount_sum = this.amount_sum-this.new_orders[index].decor_sum;
                }
                
                let order_decor = this.new_orders[index];
            
                order_decor.decor_sum = order_decor.count_decor*order_decor.choosen_decor.price;

                order_decor.price_order = order_decor.price_order+order_decor.decor_sum;
                        
                let p = this.new_orders;
                this.new_orders = [];
                this.new_orders = p;

                this.amount_sum = this.amount_sum+this.new_orders[index].decor_sum;
            }, 
            changedObkat(index) {
                console.log(this.new_orders[index].obkat_sum);
                if(this.new_orders[index].obkat_sum!=0) {
                    this.new_orders[index].price_order = this.new_orders[index].price_order-this.new_orders[index].obkat_sum;
                }
                
                let order_decor = this.new_orders[index];
                
                let b = (parseInt(order_decor.dlina)+parseInt(order_decor.wirina));
         
                console.log("bb  -- "+b);
                order_decor.obkat_sum = b*order_decor.choosen_obkat.price*0.001;
                
                console.log(order_decor.obkat_sum);
                order_decor.price_order = order_decor.price_order+order_decor.obkat_sum;
                
                let p = this.new_orders;
                this.new_orders = [];
                this.new_orders = p;

                this.amount_sum = order_decor.price_order;
            },  
            deleteRow(index,type) {
                if(type=='plenka') {
                    this.new_orders[index].choosen_plenka = [];

                    if(this.new_orders[index].price_order!=0 ) {
                        this.new_orders[index].price_order = this.new_orders[index].price_order-Math.round(0.001*this.new_orders[index].dlina*this.new_orders[index].wirina*this.new_orders[index].count*this.new_orders[index].price);
                        this.amount_sum = this.amount_sum - Math.round(0.001*this.new_orders[index].dlina*this.new_orders[index].wirina*this.new_orders[index].count*this.new_orders[index].price);
                        this.new_orders[index].price_order=this.new_orders[index].decor_sum +this.new_orders[index].obkat_sum;
                        
                    }
                    let length_element = this.new_orders[index].choosen_element;
            
                    if(length_element.length!=0  && this.new_orders[index].tolwina!=0) {
                            let formula = '';
                            formula = length_element.id+' '+this.new_orders[index].tolwina;
                            this.checkFormula(index,formula);
                
                    }

                    
                }
                else if(type=='obkat') {
                    this.new_orders[index].price_order = this.new_orders[index].price_order - this.new_orders[index].obkat_sum;
                    this.amount_sum = this.amount_sum - this.new_orders[index].obkat_sum;
                    this.new_orders[index].choosen_obkat = [];
                    this.new_orders[index].obkat_sum = 0;
                }
                else if(type=='decor') {
                    this.new_orders[index].price_order = this.new_orders[index].price_order - this.new_orders[index].decor_sum;
                    this.amount_sum = this.amount_sum - this.new_orders[index].decor_sum;
                    this.new_orders[index].choosen_decor = [];
                    this.new_orders[index].decor_sum = 0;
                } 
                else if(type=='element') {
                    this.new_orders[index].choosen_element = [];

                    if(this.new_orders[index].price_order!=0) {
                        this.new_orders[index].price_order = this.new_orders[index].price_order-Math.round(0.001*this.new_orders[index].dlina*this.new_orders[index].wirina*this.new_orders[index].count*this.new_orders[index].price);
                        this.amount_sum = this.amount_sum - Math.round(0.001*this.new_orders[index].dlina*this.new_orders[index].wirina*this.new_orders[index].count*this.new_orders[index].price);
                        this.new_orders[index].price_order=this.new_orders[index].decor_sum +this.new_orders[index].obkat_sum;
                    }

                }
                let p = this.new_orders;
                this.new_orders = [];
                this.new_orders = p;
            },
            calculateInput(index) {
                
                if(this.new_orders[index].choosen_obkat.price && this.new_orders[index].choosen_obkat.price!='') {
                    this.changedObkat(index);
                }
                this.new_orders[index].price_order = this.new_orders[index].decor_sum+this.new_orders[index].obkat_sum;
                this.amount_sum = this.new_orders[index].decor_sum+this.new_orders[index].obkat_sum;
                if(this.new_orders[index].price!=1) {
                    this.new_orders[index].price_order =this.new_orders[index].price_order+ Math.round(0.001*this.new_orders[index].dlina*this.new_orders[index].wirina*this.new_orders[index].count*this.new_orders[index].price);
                    let sum = 0;
                    for (let index = 0; index < this.new_orders.length; index++) {
                        sum=sum+this.new_orders[index].price_order;
                    }
                    this.amount_sum = sum;
                }
                else {
                    this.amount_sum = this.amount_sum-this.new_orders[index].price_order;
                }
            },
            sort_category(type,data) {
                let arr = [];
                for (let index2 = 0; index2 < data.length; index2++) {
                    if(type==data[index2].type) {
                        arr.push(data[index2]);
                    }
                }
                return arr;
            },
            createOrder() {
                
                if(this.user.user_id==20 || this.user.user_id==19){
                    this.pre_register = true;
                    return false;
                }
                this.$http.post('/calculator/create/order', 
                {
                    orders: this.new_orders,
                    name: this.user.name,
                    phone: this.user.phone,
                    amount_sum: this.amount_sum,
                    user_id: this.user.user_id
                }, {
                    headers: {
                        'Authorization': `Bearer ${this.token}` 
                    }
                }
                )
                .then(res => { 
                    if(res.data.msg=='has_price') {
                        this.new_orders[this.choosen_index].price = res.data.price;
                    }
                    else {
                        this.new_orders[this.choosen_index].price = 1;
                    }

                    this.pre_register = false;
                    this.show_loader = false;
                    let p = this.new_orders;
                    this.new_orders = [];
                    this.new_orders = p;


                });
            },
            checkFormula(index,formula) {
                this.$http.post('/calculator/check/formula', 
                {
                    formula: formula
                }, {
                    headers: {
                        'Authorization': `Bearer ${this.token}` 
                    }
                }
                )
                .then(res => { 
                    if(res.data.msg=='has_price') {
                        this.new_orders[this.choosen_index].current_formula = formula;
                        this.new_orders[this.choosen_index].price = res.data.price;
                    }
                    else {
                        this.new_orders[this.choosen_index].price = 1;
                      
                    }
                    let p = this.new_orders;
                    this.new_orders = [];
                    this.new_orders = p;

                    if(this.new_orders[index].price!=1) {
                        this.new_orders[index].price_order = this.new_orders[index].price_order +Math.round(0.001*this.new_orders[index].dlina*this.new_orders[index].wirina*this.new_orders[index].count*this.new_orders[index].price);
                        let sum = 0;
                        for (let index = 0; index < this.new_orders.length; index++) {
                            sum=sum+this.new_orders[index].price_order;
                        }
                        this.amount_sum = sum;
                    }
                });
            },
            calculateTolwina(index) {
                this.new_orders[index].price_order = this.new_orders[index].decor_sum+this.new_orders[index].obkat_sum;

                this.amount_sum = this.new_orders[index].decor_sum+this.new_orders[index].obkat_sum;

                this.choosen_index = index;
                let length_element = this.new_orders[this.choosen_index].choosen_element;
                let length_plenka = this.new_orders[this.choosen_index].choosen_plenka;

                let formula = '';  
  
                
                if(length_element.calculation_id  && length_plenka.calculation_id && this.new_orders[index].tolwina!=0) {
                    formula = length_plenka.id+' '+length_element.id+' '+this.new_orders[index].tolwina;
                    this.checkFormula(index,formula);
                }
                else if(length_element.calculation_id  && this.new_orders[index].tolwina!=0) {

                    formula = length_element.id+' '+this.new_orders[index].tolwina;
                    
                    this.checkFormula(index,formula);
                  
                }
           
                
            },
            removeElement(index,type) {
              
                if(type==1) {
                    this.new_orders[index].plenka.length = 0; 
                }
                else {
                    this.new_orders[index].element.length = 0;
                }
                let p = this.new_orders;
                this.new_orders = [];
                this.new_orders = p;
                
            },
            selectedOther(val) {
                if(this.current_chosen!='Обкат') {
                    this.new_orders[this.choosen_index].choosen_decor = [];
                    this.new_orders[this.choosen_index].choosen_decor = val;
                }
                else {
                    this.new_orders[this.choosen_index].choosen_obkat = [];
                    this.new_orders[this.choosen_index].choosen_obkat = val;

                    this.changedObkat(this.choosen_index);
                } 
                let p = this.new_orders;
                this.new_orders = [];
                this.new_orders = p;
                this.show_modal = false;
            },
            selectedEl(val) {

                if(this.current_chosen!='Пленка') {
                    this.new_orders[this.choosen_index].choosen_element = [];
                    this.new_orders[this.choosen_index].choosen_element = val;
                }
                else {
                    this.new_orders[this.choosen_index].choosen_plenka = [];
                    this.new_orders[this.choosen_index].choosen_plenka = val;
                } 
                let p = this.new_orders;
                this.new_orders = [];
                this.new_orders = p;
                this.show_modal = false;

             
                let length_element = this.new_orders[this.choosen_index].choosen_element;
                let length_plenka = this.new_orders[this.choosen_index].choosen_plenka;
                let formula = '';
                if (length_element.length!=0  && this.new_orders[this.choosen_index].tolwina!=0) {

                    formula = length_element.id+' '+this.new_orders[this.choosen_index].tolwina;
                    this.checkFormula(this.choosen_index,formula);
                    if(length_element.length!=0 && length_plenka.length!=0 && this.new_orders[this.choosen_index].tolwina!=0) {
                            formula = length_plenka.id+' '+length_element.id+' '+this.new_orders[this.choosen_index].tolwina;
                            this.checkFormula(this.choosen_index,formula);
                    }
                }

                if(this.new_orders[this.choosen_index].price!=1) {
                    this.new_orders[this.choosen_index].price_order = this.new_orders[this.choosen_index].price_order +Math.round(0.001*this.new_orders[this.choosen_index].dlina*this.new_orders[this.choosen_index].wirina*this.new_orders[this.choosen_index].count*this.new_orders[this.choosen_index].price);
                    let sum = 0;
                    for (let index = 0; index < this.new_orders.length; index++) {
                        sum=sum+this.new_orders[index].price_order;
                    }
                    this.amount_sum = sum;
                }
                
            },
            onChangeOtherElement(val,s) {
                this.show_modal = true;

                for (let index = 0; index < this.other_elements.length; index++) {
                    if(this.other_elements[index].type=='Декор') {
                        this.new_orders[s].decors = this.other_elements[index].type_calculate;
                    }
                    if(this.other_elements[index].type=='Обкат') {
                        this.new_orders[s].obkats = this.other_elements[index].type_calculate;
                    }
                }
                this.choosen_index = s;
                this.current_chosen = val.target.value;
                this.show_modal = true;

                this.permanent.elem_obkat = '';
            },
            onChange(val,s) {
                if(!this.new_orders[s].plenka) {
                    this.new_orders[s].plenka = [];
                }
                if(!this.new_orders[s].element) {
                    this.new_orders[s].element = [];
                }

                if(val.target.value=='Пленка') {

                    for (let index = 0; index < this.elements.length; index++) {
                        if(this.elements[index].type==val.target.value) {
                            this.new_orders[s].plenka = this.elements[index].type_calculate;
                        }
                    }
                }
                else {
                    for (let index = 0; index < this.elements.length; index++) {
                        if(this.elements[index].type==val.target.value) {
                            this.new_orders[s].element = this.elements[index].type_calculate;
                        }
                    }
                }

               
                let p = this.new_orders;
                this.new_orders = [];
                this.new_orders = p;


                if(val.target.value=='Фрезировка') {
                    if(this.types_frez.length==0) {
                        for (let index = 0; index < this.new_orders[s].element.length; index++) {
                            this.types_frez.push(this.new_orders[s].element[index].type);  
                        }
                        this.types_frez =  this.types_frez.filter((item,index)=>this.types_frez.indexOf(item)===index);  
                    }
                }
                else {
                    if(this.types_plenka.length==0) {
                        for (let index = 0; index < this.new_orders[s].plenka.length; index++) {
                            this.types_plenka.push(this.new_orders[s].plenka[index].type);  
                        }
                        this.types_plenka = this.types_plenka.filter((item,index)=>this.types_plenka.indexOf(item)===index);
                    }
                }
            
                this.choosen_index = s;
                this.current_chosen = val.target.value;
                this.show_modal = true;

                this.permanent.elem = '';
            },
            chooseDecor(many,el) {
                this.choosenFalse();
                el.choosen = true;
                let per = this.one_element;
                this.one_element=[];
                this.one_element = per;                
            },
            choosenFalse() {
                for (let index = 0; index < this.one_element.length; index++) {
                   this.one_element[index].choosen = false;
                }
            },
            openDecor(type) {
                this.show_one_element = true;
                this.$http.post('/calculator/get/by/type', 
                {
                    type: type
                }, {
                    headers: {
                        'Authorization': `Bearer ${this.token}` 
                    }
                }
                )
                .then(res => { 
                    this.one_element = res.data[0].type_calculate;
                });
            },

            addInput() {
                let obj = {
                        current_formula: '',
                        decor_sum: 0,
                        obkat_sum: 0,
                        count_obkat: 0,
                        count_decor: 0,
                        other_elements: [],
                        decors: [],
                        obkats: [],
                        elements: [],
                        dlina: 0,
                        wirina: 0,
                        tolwina: 0,
                        count: 0,
                        decor: [],
                        obkat: [],
                        choosen_plenka: [],
                        choosen_element: [],
                        select: '',
                        price: 1,
                        price_order: 0
                }
                this.new_orders.push(obj);
                this.new_orders[this.new_orders.length-1].elements = this.elements;
                this.new_orders[this.new_orders.length-1].other_elements = this.other_elements;
                
                if(this.new_orders.length==2) {
                    this.new_orders[this.new_orders.length-1].element = this.new_orders[0].element;
                    this.new_orders[this.new_orders.length-1].plenka = this.new_orders[0].plenka;
                    
                    this.new_orders[this.new_orders.length-1].choosen_plenka = this.new_orders[0].choosen_plenka;
                    this.new_orders[this.new_orders.length-1].choosen_element = this.new_orders[0].choosen_element;


                    this.new_orders[this.new_orders.length-1].choosen_decor = this.new_orders[0].choosen_decor;
                    this.new_orders[this.new_orders.length-1].choosen_obkat = this.new_orders[0].choosen_obkat;
                    this.new_orders[this.new_orders.length-1].price = this.new_orders[0].price;

                    this.new_orders[this.new_orders.length-1].tolwina = this.new_orders[0].tolwina;
                }
                else {
                    this.new_orders[this.new_orders.length-1].element = this.new_orders[this.new_orders.length-2].element;
                    this.new_orders[this.new_orders.length-1].plenka = this.new_orders[this.new_orders.length-2].plenka;
                    
                    this.new_orders[this.new_orders.length-1].choosen_plenka = this.new_orders[this.new_orders.length-2].choosen_plenka;
                    this.new_orders[this.new_orders.length-1].choosen_element = this.new_orders[this.new_orders.length-2].choosen_element;
                    this.new_orders[this.new_orders.length-1].choosen_decor = this.new_orders[this.new_orders.length-2].choosen_decor;
                    
                    this.new_orders[this.new_orders.length-1].choosen_obkat = this.new_orders[this.new_orders.length-2].choosen_obkat;
                    this.new_orders[this.new_orders.length-1].price = this.new_orders[this.new_orders.length-2].price;
                    this.new_orders[this.new_orders.length-1].tolwina = this.new_orders[this.new_orders.length-2].tolwina;
                }
                
                let p = this.new_orders;
                this.new_orders = [];
                this.new_orders = p;
            },
            removeInput(index) {
                if(this.new_orders.length>1) {
                    this.new_orders.length = this.new_orders.length-1;
                    let permanent = this.new_orders;
                    this.new_orders = [];
                    this.new_orders = permanent;
                }
            },
            get_profile2() {
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
                    this.user.user_id = res.data.id;
                    this.user.phone = res.data.phone;
                    
                    if(this.user.role != 4 && this.user.role != 5) {
                        this.$router.push("/login");
                    }
                    else {

                        this.createOrder();
                    }
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
                    this.user.user_id = res.data.id;
                    this.user.phone = res.data.phone;

                    
                    if(this.user.role != 4 && this.user.role != 5) {
                        this.$router.push("/login");
                    }
                    else {
                        this.get_el();
                    }
                    

                    if(this.user.user_id!=19 && this.user.user_id!=20)  {
                        this.show_own_order = true;
                    }
                });
            },
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
                

                let obj = {
                    dlina: 3,
                    wirina: 3,
                    count: 2,
                    amount: ""
                }
                
           
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
                            // this.inputs[pivot] = [];
                            // this.inputs[pivot].push(obj);
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
                if(this.orders.length==0) {
                    this.orders[0].inputs = [];
                    this.orders[0].inputs.push(obj);
                }
                else {
                    this.orders[this.orders.length-1].inputs = [];
                    this.orders[this.orders.length-1].inputs.push(obj);
                }  
            },
            logout() {
                localStorage.removeItem("access_token");
                this.$router.push("calculator");
            },
            getOwnOrders() {
                this.page = 2;
                if(this.user.user_id!=20 && this.user.user_id!=19){
                    const config = {
                        headers: { 'Authorization': `Bearer ${this.token}` }
                    };

                    this.$http.get('/calculator/get/own/orders',  config)
                    .then(res => {
                        this.own_orders = res.data;
                    })
                }
               
            },
            getOwnOrder(id) {
                const config = {
                    headers: { 'Authorization': `Bearer ${this.token}` }
                };

                this.$http.get('/calculator/get/own/order?id='+id,  config)
                .then(res => {
                    this.own_order = res.data;
                })
            },
          
            editOwnOrders() {
                let data = {
                    data: this.orders,
                    comment: this.order_comment,
                    user_name: this.user_name,
                    height: this.calc_height
                };

                const config = {
                    headers: { 'Authorization': `Bearer ${this.token}` }
                };

                this.$http.post('/calculator/edit/own/order', data, config)
                .then(res => { 
                    
                  
                    this.$fire({
                    title: res.data.msg,
                    text: "",
                    type: "success",
                    timer: 3000
                    })
               
                });
            },
            get_el() {
                const config = {
                    headers: { 'Authorization': `Bearer ${this.token}` }
                };

                this.$http.get('/calculator/get/elements',  config)
                .then(res => {
                    let obj = {
                        current_formula: '',
                        decor_sum: 0,
                        obkat_sum: 0,
                        count_obkat: 0,
                        count_decor: 0,
                        other_elements: [],
                        elements: [],
                        element: [],
                        plenka: [],
                        dlina: 0,
                        wirina: 0,
                        tolwina: 0,
                        count: 0,
                        decors: [],
                        obkats: [],
                        choosen_decor: [],
                        choosen_obkat: [],
                        choosen_plenka: [],
                        choosen_element: [],
                        select: '',
                        price: 1,
                        price_order: 0
                    }
                    this.new_orders.push(obj);
                   
                    for (let index = 0; index < res.data.length; index++) {
                        if(res.data[index].type=='Пленка' || res.data[index].type=='Фрезировка' ) { 
                            this.elements.push(res.data[index]);
                        }  
                        else {
                            this.other_elements.push(res.data[index]);
                            this.new_orders[0].other_elements.push(res.data[index]);
                        }
                    }
                    this.new_orders[0].elements = this.elements
                })
               
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
                    user_name: this.user_name,
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
                    })
               
                });

            },
            logoutPage() {
                localStorage.setItem('access_token','');
                this.show_own_order = false;
            }
            
            
        },
        mounted() {

            if(localStorage.getItem('access_token')=='') {
                this.login_sign('kenesmebel04@gmail.com','kenesmebel04@gmail.com');
            }
            else {
                this.token = localStorage.getItem('access_token');
                this.get_profile();
            }
        
        }
    }
    </script>



<style scoped lang="scss">
    .loader {
        position: fixed;

        width: 100%;
        height: 100vh;
        background: white;
        display: flex;
        justify-content: center;
        align-items: center;
        opacity: 0.7;
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
        button {
          cursor: pointer;
          text-transform: uppercase;
          width: 350px;
          outline: none;
          border: none;
          background-color: cornflowerblue;
          padding: 20px;
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
      
    }
    .calc__input__obkat {
        width: 50px;
        padding: 10px;
    }
    .active__bg {
        background: rgb(212, 90, 90) !important;
    }
    .calc__own__orders {
        .calc__own__order {
             .calc__own__title {
                font-size: 22px;
                color: var(--main-kenes-blue);
            }
            .calc__own__order__inner {
                margin-bottom: 10px;
                border-bottom: 5px solid rgb(212, 90, 90);
            }
 
            .calc__own__action {
                color: white;
                font-weight: bold;
                background:  var(--main-kenes-blue);
                padding: 10px;
                height: 40px;
            }
            .calc__own__action:hover {
                color: rgb(212, 90, 90);
            }
            .calc__own__red {
                background: rgb(212, 90, 90);
            }
            .calc__own__label {
                margin-bottom: 10px;
                font-size: 16px;
                padding: 10px;
            }
           
            img {
                width: 70px;
                height: 70px;
            }
            background: white;
            
            border-bottom: 5px solid var(--main-kenes-blue);

        }
    }
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
    .calc__pointer {
        cursor: pointer;
    }
    .calc__pointer:hover {
        color: var(--main-kenes-blue);
    }
    .calc__phone {
        width: 240px;
        margin-bottom: 20px;
        p {
            margin-bottom: 5px;
            font-weight: bold;
        }
        input {
            padding: 12px;
        }
    }
    .calc__amount_sum {
        font-size: 25px;
        align-self: flex-end;
        font-weight: bold;
        span {
            color: var(--main-kenes-blue);
            font-size: 28px;
        }
    }
    .calc__order__submit {
        cursor: pointer;
        padding: 20px;
        color: white;
        text-align: center;
        text-transform: uppercase;
        background: var(--main-kenes-blue);
        width: 200px;
    }
    .calc__order__submit:hover {
        opacity: 0.7;
    }
    .calc__result {
        font-size: 18px;
    }
    .calc__value {
        font-size: 22px;
        font-weight: bold;
        color: var(--main-kenes-blue);
    }
    select {
        -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none;
    }
    .calc__mr {
        margin-right: 10px;
    }
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
        align-self: center;
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
        overflow-x: hidden;
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
      
        background-color: white;
        border-radius: 10px;
        padding: 20px 40px;
        border-bottom: 8px solid var(--main-kenes-blue);
        
        .calc__to__order {
            position: relative;

            .calc__decor {
                position: absolute;
                bottom: -40px;
                right: 0; 
                background-color: white;
                box-shadow: 0px 0 10px rgba(0, 0, 0, 0.8);
                border-radius: 3px;
                .calc__choosen {
                    border: 2px solid red;
                }
                .fa-window-close {
                    font-size: 24px;
                    margin: 10px;
                    align-self: flex-end;
                    cursor: pointer;
                }
               
                .calc__one {
                    height: 200px;
                    overflow-y: auto;
                    z-index: 10px;
                    display: flex;
                    flex-wrap: wrap;

                    input {
                        width: 100px;
                    }
                   
                    .calc__column { 
                        padding: 10px;
                        margin-right: 3px;
                        cursor: pointer;
                        img {
                            width: 30px;
                            height: 30px;
                            border-radius: 5px;
                        }
                    }
                }
            }
            
        }

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
            display: flex;
            flex-direction: column;
            justify-content: space-evenly;
         
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
            i {
                font-size: 24px;
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

            .calc__add__input {
                cursor: pointer;
                
                i {
                    font-size: 24px;
                    color:var(--main-kenes-blue);
                }
                p {
                    margin-left: 4px;
                    text-transform: uppercase;
                    color: var(--main-kenes-blue);
                }
            
            }
        
            .calc__add__input__red {
                cursor: pointer;
                
                i {
                    font-size: 24px;
                    color:red;
                }
                p {
                    margin-left: 4px;
                    text-transform: uppercase;
                    color:red;
                }
            }
            .new__element {
               
                align-self: center;
                width: 90%;
                background: white;
                border-bottom: 5px solid var(--main-kenes-blue);
                padding: 20px;
             
                margin-bottom: 30px;
                .calc__choosen__img {
                    width: 40px;
                    height: 40px;
                }
            }
            .calc__count {
                width: 300px;
             
                p {
                    margin-bottom: 3px;
                    font-weight: bold;
                    
                }
                input {
                    padding: 10px;
                }
                select {
                    padding: 12px;
                }
            }
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
            flex-direction: column;
            justify-content: center;
            align-items: center;
            position: fixed;
            top: 0;
            right: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0,0,0,0.7);
        
            .calc__modal__close {
                z-index: 14;
                position: absolute;
                right: 20px;
                cursor: pointer;
                color: black;
                font-size: 22px;
                text-transform: uppercase;
            }
            .calc__modal__close:hover {
                border-bottom: 1px solid white;
            }

            .calc__modal__form {
                width: 50%;
                position:absolute;
         
                min-height: 300px;
                background-color: white;
                padding: 20px;
                .calc__modal__choose {
                    color: var(--main-kenes-blue);
                    margin-bottom: 10px;
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

        @media only screen and (max-width: 600px) {
             .calc__element__added {
                width: 100%;
                justify-content: space-between;
            }
            .calc__bottom__side {
                flex-direction: column;
                padding: 20px;
                
                .calc__add__input {
                    margin-bottom: 10px;
                }
                p {
                    font-size: 16px;
                    white-space: nowrap;
                }
                span {
                    font-size: 16px;
                }
            }
            input {
                width: 100%;
                margin: 10px;
            }
            select{
                 width: 80%;
                 margin: 10px;
            }
            .calc__inputs__i {
                flex-direction: row;
                justify-content: space-between;
                input {
                    width: 70px;
                }
                .calc__count {
                    width: 70px;
                    margin-right: 15px;
                  
                }
            }
            .calc__dropdown {
                .calc__count {
                    width: 100%;
                }
            }
            .calc__types {
                flex-direction: column;
            }
            .new__element {
                flex-direction: column;
                width: 90%;
                padding: 0 !important;
                box-shadow: rgba(0, 0, 0, 0.08) 0px 4px 12px;

                .new__element__inner {
                    padding-top: 30px;
                    .new__element__title {
                        font-size: 18px;
                        text-transform: uppercase;
                        color: var(--main-kenes-blue);
                    }
                }
                .calc__column {
                    align-items: center;
                }
                .column {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                }
                .calc__dropdown {}
            }
           .calc__amount_sum {
               align-self: center;
           }
            .calc__dropdown {
                flex-direction: column;
            }
            .calc__row {
                .calc__inputs {
                    margin-left: 0;
                    margin-top: 20px;
                }
            }
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
                padding: 0;
                p {
                    padding: 20px;
                }
            }
            .calc__amount {
                font-size: 16px;
            }

            .calc__orders__row {
                padding: 0;
                p {
                    padding: 20px;
                    
                }
             
            }
            .calc__inputs {
             
            }

             .elements__row {
                a,p {
                    width: unset !important;
                }
            }

             .calc__modal__form {
                width: 100% !important;
           
            }
        }

        .calc__dropdown {
            width: 100%;
            cursor: pointer;
        }
       
        .calc__dropdown .dropdown li {
        border-bottom: 1px solid rgba(112, 128, 144, 0.1)
        }
        .calc__dropdown img {
            width: 40px;
            height: 40px;
        }
        .calc__dropdown .dropdown li  {
            display: flex;
            flex-direction: row;
            align-items: center;
        }
        .calc__dropdown .dropdown li:last-child {
        border-bottom: none;
        }

        .calc__dropdown .dropdown li a {
        padding: 10px 20px;
        display: flex;
        width: 100%;
        align-items: center;
        font-size: 1.25em;
        }

        #calc__dropdown .dropdown li a .fa {
        padding-right: 0.5em;
        }


    </style>
