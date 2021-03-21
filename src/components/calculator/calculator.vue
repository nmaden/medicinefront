<template>
    <div class="calc calc__column calc__ac" style="margin-top: 20px">


            <div class="calc__column elements" >
                
                <div class="calc__row calc__ac">
                        <div class="calc__row calc__ac calc__mb calc__add__input calc__mr" @click="addInput()">
                            <i class="fas fa-plus-circle"></i>
                            <p>добавить строку</p>
                        </div>
                        <div class="calc__row calc__ac calc__mb  calc__add__input__red" @click="removeInput(index)">
                            <i class="fas fa-minus-circle"></i>
                            <p>Удалить строку</p>
                        </div>
                </div>
                <div class="calc__column" style="align-items:flex-start" v-for="(i,index) in new_orders" :key="index">
                    
                    <div class="new__element calc__row calc__mb">

                        <div class="calc__column">
                            <div class="calc__dropdown  calc__mr" >
                                <div class="calc__column calc__count calc__mb">
                                    <p>Выберите элемент</p>
                                    <select @change="onChange($event,index)" >
                                        <option value="">Выберите элемент</option>
                                        <option v-for="(item , index) in i.elements" v-bind:key="index"   >
                                                {{item.type}}
                                        </option>
                                    </select>
                                </div>
                            </div>
                            <div  class="calc__row calc__ac calc__mb" v-if="i.choosen_element && i.choosen_element.length!=0">
                                <img class="calc__choosen__img calc__mr" :src="'http://127.0.0.1:8000'+i.choosen_element.image_path" alt="">
                                <p>{{i.choosen_element.name}}</p>
                            </div>
                            <div class="calc__row calc__ac" v-if="i.choosen_plenka && i.choosen_plenka.length!=0">
                                <img  class="calc__choosen__img calc__mr" :src="'http://127.0.0.1:8000'+i.choosen_plenka.image_path" alt="">
                                <p>{{i.choosen_plenka.name}}</p>
                            </div>
     
                        </div>

                        <div class="column" v-if="i.element && i.element.length!=0">
                            <div class="calc__column calc__count calc__mr">
                                <p>Толшина</p>
                                <input type="text" v-model="i.tolwina" @input="calculateInput(index)" >
                            </div>
                            <div class="calc__column calc__count calc__mr">
                                <p>Длина</p>
                                <input type="text" v-model="i.dlina" @input="calculateInput(index)">
                            </div>
                            <div class="calc__column calc__count calc__mr">
                                <p>Ширина</p>
                                <input type="text" v-model="i.wirina" @input="calculateInput(index)">
                            </div>
                            <div class="calc__column calc__count calc__mr calc__mb">
                                <p>Количество</p>
                                <input type="text" v-model="i.count" @input="calculateInput(index)">
                            </div>

                            <p>Плошадь:  {{i.dlina+'*'+i.wirina+'*'+i.count+'='+i.dlina*i.wirina*i.count}}</p>
                            <p>Сумма: </p>
                        </div>
                    
                    </div>
                </div>

            </div>

            <div class="calc__modal" v-if="show_modal">
                
                <div class="calc__modal__form">
                    <i class="calc__modal__close fas fa-times-circle calc__mb" @click="show_modal=false"></i>
               
                    <div class="calc__dropdown calc__row calc__ac" v-if=" current_chosen=='Фрезировка'">
                        <div v-for="(item,index) in types_frez" :key="index">
                            <p v-if="item=='easy'">простой</p>
                            <p v-if="item=='hard'">сложный</p>

                            <v-select :options="new_orders[choosen_index].element" @input="selectedEl" class="calc__mr"  style="width: 250px" placeholder="Выберите элемент" label="name" >
                                <template slot="option" slot-scope="option">
                                    <div class="calc__row calc__ac">
                                        <img v-if="item ==option.type"  :src="'http://127.0.0.1:8000'+option.image_path" alt="">
                                        <p   v-if="item == option.type" >{{ option.name }}</p>
                                    </div>
                                </template>
                            </v-select>
                         
                        </div>
                    </div>
                    <div class="calc__dropdown calc__row calc__ac" v-else-if="current_chosen=='Пленка'">
                            <v-select :options="new_orders[choosen_index].plenka"  @input="selectedEl"  class="calc__mr"  style="width: 250px" placeholder="Выберите элемент" label="name" >
                                <template slot="option" slot-scope="option">
                                    <div class="calc__row calc__ac">
                                        <img   :src="'http://127.0.0.1:8000'+option.image_path" alt="">
                                        <p    >{{ option.name }}</p>
                                    </div>
                                </template>
                            </v-select>
                    </div>
                    <div class="calc__dropdown calc__row calc__ac" v-else>
                            <v-select :options="new_orders[choosen_index].element"  @input="selectedEl"  class="calc__mr"  style="width: 250px" placeholder="Выберите элемент" label="name" >
                                <template slot="option" slot-scope="option">
                                    <div class="calc__row calc__ac">
                                        <img   :src="'http://127.0.0.1:8000'+option.image_path" alt="">
                                        <p    >{{ option.name }}</p>
                                    </div>
                                </template>
                            </v-select>
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
                  link: require('../../assets/images/kaz.png'),
                  one_element: [],

                  new_orders: []
            }
        },
        components: {
        },
        watch: {
            new_orders() {
              
            }
        },
        methods: {
            calculateInput() {

            },
            removeElement(index,type) {
              
                if(type==1) {
                    this.new_orders[index].plenka.length = 0; 
                    console.log( this.new_orders[index].plenka);
                }
                else {
                    this.new_orders[index].element.length = 0;
                }
                let p = this.new_orders;
                this.new_orders = [];
                this.new_orders = p;
                
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
                        elements: [],

                        dlina: 1,
                        wirina: 1,
                        tolwina: 1,
                        count: 1,
                        decor: [],
                        obkat: [],
                        choosen_plenka: [],
                        choosen_element: [],
                        select: ''
                }
                this.new_orders.push(obj);
                
                this.new_orders[this.new_orders.length-1].elements = this.elements;
                if(this.new_orders.length==2) {
                    this.new_orders[this.new_orders.length-1].element = this.new_orders[0].element;
                    this.new_orders[this.new_orders.length-1].plenka = this.new_orders[0].plenka;
                    
                    this.new_orders[this.new_orders.length-1].choosen_plenka = this.new_orders[0].choosen_plenka;
                    this.new_orders[this.new_orders.length-1].choosen_element = this.new_orders[0].choosen_element;
                }
                else {
                    this.new_orders[this.new_orders.length-1].element = this.new_orders[this.new_orders.length-2].element;
                    this.new_orders[this.new_orders.length-1].plenka = this.new_orders[this.new_orders.length-2].plenka;
                    
                    this.new_orders[this.new_orders.length-1].choosen_plenka = this.new_orders[this.new_orders.length-2].choosen_plenka;
                    this.new_orders[this.new_orders.length-1].choosen_element = this.new_orders[this.new_orders.length-2].choosen_element;
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
                    if(this.user.role != 4) {
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
                    this.elements = res.data;
                    
                    let obj = {
                        elements: [],
                        element: [],
                        plenka: [],
                        dlina: 1,
                        wirina: 1,
                        tolwina: 1,
                        count: 1,
                        decor: [],
                        obkat: [],
                        choosen_plenka: [],
                        choosen_element: [],
                        select: ''
                    }
                    this.new_orders.push(obj);
                    this.new_orders[0].elements = this.elements;
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
                p {
                    margin-bottom: 3px;
                    
                }
                input {
                    padding: 10px;
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
