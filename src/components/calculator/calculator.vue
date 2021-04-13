<template>
    <div class="calc calc__column calc__ac" style="margin-top: 20px">


            <div class="calc__column elements" >
                
                <div class="calc__row calc__ac">
                        <div class="calc__row calc__ac calc__mb calc__add__input calc__mr" @click="addInput()">
                            <i class="fas fa-plus-circle"></i>
                            <p>добавить строку</p>
                        </div>
                       
                </div>
                <div class="calc__column" style="align-items:flex-start" v-for="(i,index) in new_orders" :key="index">
                    
                    <div class="new__element calc__row calc__mb">

                        <div class="calc__column">
                            <div class="calc__dropdown  calc__mr" >
                                
                                <div class="calc__column calc__count calc__mb">
                                    <p>Выберите элемент</p>
                                    <select @change="onChange($event,index)" v-model="permanent.elem" >
                                        <option value="">Выберите элемент</option>
                                        <option v-for="(item , index) in i.elements" v-bind:key="index"   >
                                                {{item.type}}
                                        </option>
                                    </select>
                                </div>

                                <div class="calc__column calc__count calc__mb">
                                    <p>Выберите декор или обкат</p>
                                    <select @change="onChangeOtherElement($event,index)" v-model="permanent.elem_obkat" >
                                        <option value="">Выберите декор или обкат</option>
                                        <option v-for="(item , index) in i.other_elements" v-bind:key="index"   >
                                                {{item.type}}
                                        </option>
                                    </select>
                                </div>


                            </div>
                            <div  class="calc__row calc__ac calc__mb" v-if="i.choosen_element && i.choosen_element.length!=0">
                                <div class="calc__column">
                                    <p>Элемент</p>
                                    <div class="calc__row calc__ac calc__mb">
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
                                        <input class="calc__mr" v-on:input="changedObkat(index)" type="text" v-model="i.count_obkat">
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
                                        <input class="calc__mr" v-on:input="changedDecor(index)" type="text" v-model="i.count_decor">
                                        <i @click="deleteRow(index,'decor')" class="calc__pointer fas fa-trash-alt calc__mr"></i>
                                    </div>

                                </div>
                            </div>
                            <div class="calc__row calc__ac calc__mb  calc__add__input__red" @click="removeInput(index)">
                                <i class="fas fa-minus-circle"></i>
                                <p>Удалить строку</p>
                            </div>
     
                        </div>

                        <div class="column" v-if="i.element && i.element.length!=0">
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
                                <p>Количество</p>
                                <input type="text" v-model="i.count" @input="calculateInput(index)">
                            </div>
                            <p class="calc__result calc__mb" v-if="Math.round(i.dlina*i.wirina*i.count*0.001)!=0">Общая плошадь:  {{i.dlina+'*'+i.wirina+'*'+i.count+' = '}}<span class="calc__value">{{Math.round(i.dlina*i.wirina*i.count*0.001)}} кв м</span></p>
                            <p class="calc__result calc__mb" v-if="i.price!=1">Сумма: <span class="calc__value">{{i.price_order+' тг' }}</span></p>
                        </div>


                    
                    </div>
                </div>


                <div class="calc__column">
                    <p class="calc__amount_sum">Общая сумма: <span>{{amount_sum}} тг</span> </p>
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
    </div>
</template>


    <script>
    export default {
    name: 'AccountPage' ,
        data() {
            return {    
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
                  amount_sum: 0
            }
        },
        components: {
        },
        watch: {
            new_orders() {
              
            }
        },
        methods: {
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

                if(this.new_orders[index].obkat_sum!=0) {
                    this.new_orders[index].price_order = this.new_orders[index].price_order-this.new_orders[index].obkat_sum;
                }
                
                let order_decor = this.new_orders[index];
            
                order_decor.obkat_sum = (order_decor.dlina+order_decor.wirina)*order_decor.count_obkat*order_decor.choosen_obkat.price*0.001;
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
                if (length_element.length!=0  && this.new_orders[index].tolwina!=0) {
                    formula = length_element.id+' '+this.new_orders[index].tolwina;
                    this.checkFormula(index,formula);
                    if(length_element.length!=0 && length_plenka.length!=0 && this.new_orders[index].tolwina!=0) {
                        formula = length_plenka.id+' '+length_element.id+' '+this.new_orders[index].tolwina;
                        this.checkFormula(index,formula);
                    }
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

            }
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
                width: 180px;
             
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
        }

        .calc__dropdown {
            width: 250px !important;
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
