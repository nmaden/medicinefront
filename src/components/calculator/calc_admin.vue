<template>
    <div class="calc calc__column calc__ac">

        <p class="calc__mb calc__toptext" style="font-size: 16px;margin-top: 10px;font-weight: bold;">Страница админ системы</p>
        <p class="calc__mb calc__toptext" style="font-size: 16px">Для создание элементов для рассчета и просмотра заказов</p>

        <div class="calc__menu calc__row calc__jb calc__mb">
                
                <div class="calc__column">
                    <p class="calc__type calc__mb" @click="show_page(4)" v-bind:class="{active_color:page==4}">Создать формулу</p>
                    <p class="calc__type" @click="show_page(1)" v-bind:class="{active_color:page==1}"> Создать элемент</p>
                </div>
                <div class="calc__column">
                    <p class="calc__type calc__mb" @click="show_page(2)" v-bind:class="{active_color:page==2}">Элементы</p>
                    <p class="calc__type" @click="show_page(3)" v-bind:class="{active_color:page==3}">Заказы</p>
                </div>

                <div class="calc__column">
                    <p class="calc__type calc__mb" @click="show_page(5)" v-bind:class="{active_color:page==5}">Создать толшину</p>
                    <p class="calc__type" @click="show_page(6)" v-bind:class="{active_color:page==6}">Создать категорию</p>

                </div>
                <div class="calc__column">
                    <p class="calc__type calc__mb" @click="show_page(7)" v-bind:class="{active_color:page==7}">Формулы</p>
                    <p class="calc__type" @click="show_page(8)" v-bind:class="{active_color:page==8}">Клиенты</p>
                </div>
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

                    <!-- <div class="calc__column calc__mb calc__ac">
                        <p>Тип рассчета</p>
                      
                        <select  v-model="edit_data.type_calc">
                            <option value="by_count">По количеству</option>
                            <option value="by_size">По размерам</option>
                            <option value="by_height">По толшине</option>
                        </select>
                    </div> -->
                    <div class="calc__column calc__mb" v-if="edit_data.price" >
                        <p>Цена</p>
                        <input type="text"  v-model="edit_data.price">
                    </div>

                    <button type="submit">Редактировать</button>
                </form>

                 <form   class="calc__column calc__modal__form" v-if="modal_type==3" @submit.prevent="editFormula()"> 
                    <i class="far fa-window-close calc__mb" @click="show_modal=false"></i>
                    <p class="calc__modal__title">Редактировать</p>
                    
                    <div class="calc__column calc__mb calc__ac">
                        <p>Цена</p>
                        <input type="text" v-model="formula_edit.price">
                    </div>
                    <button type="submit">Редактировать</button>
                </form>
            </div>


            <div class="calc__body calc__column">

              
                <form class="calc__element calc__column" @submit.prevent="create_element()" v-if="page==1"> 
                    <p>Создание элемента</p>
                    <div class="calc__column calc__mb">
                        <p>Выберите тип</p>
                        <select name="" id="" placeholder="Выберите тип" v-model="calculator.type_el" required>
                            <option value="2">Фрезировка</option>
                            <option value="3">Пленка</option>
                            <option value="4">Декор</option>
                            <option value="5">Обкат</option>
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
                    <!-- <div class="calc__column calc__mb" >
                        <p>Тип рассчета</p>
                        <select name="" id="" placeholder="Выберите тип" v-model="calculator.type_calc" required>
                            <option value="by_count">По количеству</option>
                            <option value="by_size">По размерам</option>
                            <option value="by_height">По толшине</option>
                        </select>
                    </div> -->


                    <div class="calc__column calc__mb">
                        <p>Рисунок</p>
                        <input type="file" @change="uploadImage" class="custom-file-input"  name="image"   accept="image/*" required >
                    </div>
                    
                    <div class="calc__column calc__mb" v-if="calculator.type_el==2">
                        <p>Тип фрезировки</p>
 
                        <select name="" id="" placeholder="Выберите тип" v-model="calculator.type_frez" required>
                             <option v-for="(item , index) in calculator.type_frezs" v-bind:key="index"  :value="item.id" >
                                    {{item.name}}
                            </option>
                        </select>
                    </div>
                    <div class="calc__column calc__mb calc__border" v-if="calculator.type_el==2 || calculator.type_el==4 || calculator.type_el==5">
                        <p>Цена</p>
                        <input type="number" required v-model="calculator.price"> 
                    </div>
                    <div class="calc__column calc__mb" v-if="calculator.type_el==3">
                        <p>Тип  пленки</p>
                        <select name="" id="" placeholder="Выберите тип" v-model="calculator.type_plenka" required>
                             <option v-for="(item , index) in calculator.type_plenkas" v-bind:key="index" :value="item.id"  >
                                    {{item.name}}
                            </option>
                        </select>
                    </div>

                    
            
                    <div class="calc__column calc__mb">
                        <p>Примечание</p>
                        <input type="text" required v-model="calculator.comment"> 
                    </div>
                    

                    <button type="submit">Создать</button>
                </form>

                <div class="calc__column elements" v-else-if="page==2">


                    <div class="calc__column elements__row" v-for="(item,index) in elements" :key="index">

                        <div class="calc__row  calc__mb elements__body calc__ac"  >
                            <p>{{item.type}}</p>
                            <div class="calc__row ">
                                
                                <i @click="edit_element(1,item.id)" class="fas fa-pencil-alt" style="margin-left: 10px"></i>
                                <i @click="delete_element(1,item.id)" class="fas fa-trash-alt"></i>
                               
                             
                                <i  @click="show_calcs(index)" v-if="show_hide[index]==1" class="fas fa-chevron-up"></i>
                                <i  @click="show_calcs(index)" v-else class="fas fa-chevron-down"></i>
                            </div>
                        </div>

                        <div class="calc__column elements__row calc__mb" v-if="show_hide[index]==1">
                            <div class="calc__row elements__row calc__ac calc__mb" v-for="(el,j) in item.type_calculate" :key="j"  >

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

                <div class="calc__column" ref="testHtml" v-if="page==3"> 

                    
                    <p class="calc__order__title">Последние заказы</p>
                    <div class="calc__order__top">
                    <div class="calc__column" v-for="(el,index) in orders" :key="index">

                                

                                <div class="calc__column calc__user__order" >
                                    
                                    
                                    <div class="calc__row calc__ac calc__border__line">
                                        
                                        <p class="calc__user__label">{{index+1}} - заказ</p>
                                        <i class="fas fa-trash-alt"  @click="delete_order(index)"></i>

                                        <i class="fas fa-eye" @click="show_ordered_elements(index)"></i>
                                    </div>

                                
                                    <div class="calc__row calc__ac">
                                        <p class="calc__user__label">Заказщик:</p>
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
                                        <p class="calc__user__label">Сумма заказа:</p>
                                        <p v-if="el.amount">{{el.amount}} тг</p>
                                        <p v-else>0 тг</p>
                                    </div>

                                    <div class="calc__row calc__ac">
                                        <p class="calc__user__label">Дата заказа:</p>
                                        <p v-if="el.created_at">{{convert_date(el.created_at)}}</p>
                                    </div>
                                    
                                    <!-- <div class="calc__type" style="background: #c83c3c " @click="deleteOrder(el.id)">Сделка завершено Удалить заказ</div> -->

                                    
                            </div>
                    </div>
                    </div>

                    <div class="calc__column calc__order__bottom" v-if="show_ordered" style="margin-top: 50px">
                        <p class="calc__order__level">{{current_user_index+1}} - Заказ</p>
                        <div class="calc__column" v-for="(order,i) in ordered_elements[current_user_index]" :key="i">
                                <div class="calc__column calc__orders">


                                    <div class="calc__column calc__order">
                                        <p class="calc__order__title">{{order.type_name}}</p> 
                                      
                                        <div class="calc__data calc__row calc__ac" v-if="order.price">
                                            <p class="calc__input__label" >Цена заказа <span >:{{order.order_price}}</span></p>
                                        </div>

                                        <div class="calc__data calc__row calc__ac" v-if="order.dlina">
                                            <p class="calc__input__label" >Длина <span >:{{order.dlina}}</span></p>
                                        </div>
                                        <div class="calc__data calc__row calc__ac" v-if="order.wirina">
                                            <p class="calc__input__label" >Ширина <span >:{{order.wirina}}</span></p>
                                        </div>
                                        <div class="calc__data calc__row calc__ac" v-if="order.tolwina">
                                            <p class="calc__input__label" >Толшина <span >:{{ ' '+order.tolwina}}</span></p>
                                        </div>
                                      
                                        <div class="calc__data calc__row calc__ac">
                                            <p class="calc__input__label" >Количество <span >:{{ ' '+order.count}}</span></p>
                                        </div>
                                       

                                        <div class="calc__data calc__row calc__ac" v-if="order.choosen_formula">
                                            <p class="calc__input__label" >Формула <span >:{{' '+order.choosen_formula}}</span></p>
                                            <p class="calc__input__label" >Цена формулы<span >:{{' '+order.choosen_formula_price}}</span></p>
                                        </div>
                                    </div>

                                </div>
                        </div>
                    <button class="calc__save__order" v-if="show_save_btn" @click="saveOrder()">Сохранить</button>
                    <button class="calc__save__order" v-if="show_save_btn" @click="getPdf(current_user_index)">Скачать PDF</button>
                    </div>

                </div>

                <div class="calc__column calc__ac" v-if="page==4">
                    
                    <div class="calc__row calc__formulatype">
                        <div class="calc__type" @click="choosenFormula(true)" v-bind:class="{active_color:three_dimension==true}">3 х переменный формула</div>
                        <div class="calc__type" @click="choosenFormula(false)" v-bind:class="{active_color:three_dimension==false}">2 х переменный формула</div>
                    </div>


                    <div class="calc__column calc__ac" v-if="three_dimension">
                            <div class="calc__column"  v-bind:class="{calc__hide: x_array.length!=0 && y_array.length!=0 && calc_height}">
                        <p class="calc__mb">Сначало нужно выбрать фрезирову!</p>

                        <div v-for="(item,index) in elements" :key="index">


                            <p v-if="item.type=='Пленка'" >{{item.type}}</p>
                            <p v-if="item.type=='Фрезировка'">{{item.type}}</p>


                            <div v-if="item.type=='Фрезировка'"  class="calc__mb" style="border-bottom: 2px solid blue">
                                <p class="calc__mb calc__choose__level">1</p>
                                <div class="calc__column calc__ac">
                                    
                                    <div class="calc__mr calc__mb" v-for="(j,i) in remove_same(item.type_calculate)" :key="i"> 
                                        <p class="calc__mb__s">{{j}}</p>
                                        <div class="calc__row calc__ac" >
                                            <v-select :options="sort_category(j,item.type_calculate)" v-on:input="selectedEl($event,1)" class="calc__mr calc__select"  style="width: 250px" placeholder="Выберите элемент" label="name" >    
                                                <template slot="option" slot-scope="option"  >
                                                    <div class="calc__row calc__ac"  v-if="option.type==j" >
                                                        <img  class="calc__mr"   :src="'https://api.frezerovka04.kz'+option.image_path" alt="">
                                                        <p    >{{ option.name }}</p>
                                                    </div>
                                                </template>
                                   
                                            </v-select>
                                            <input type="checkbox" @input="selectedAll(item.type_calculate,j,1)">
                                        </div>
                                        
                                    </div>
                                </div>
                            </div>
                            <div v-if="item.type=='Пленка'">
                                <p class="calc__mb calc__choose__level">2</p>
                                <div class="calc__column calc__ac">
                                    <div class="calc__mr calc__mb" v-for="(j,i) in remove_same(item.type_calculate)" :key="i"> 
                                        <p class="calc__mb__s">{{j}}</p>

                                        <div class="calc__row calc__ac" >
                                            <v-select :options="sort_category(j,item.type_calculate)" class="calc__mr calc__select"  v-on:input="selectedEl($event,2)" style="width: 250px" placeholder="Выберите элемент" label="name" >    
                                                <template slot="option" slot-scope="option">
                                                    <div class="calc__row calc__ac">
                                                        <img v-if="option.type==j" class="calc__mr"   :src="'https://api.frezerovka04.kz'+option.image_path" alt="">
                                                        <p   v-if="option.type==j"  >{{ option.name }}</p>
                                                    </div>
                                                </template>
                                            </v-select>
                                            <input type="checkbox"  @input="selectedAll(item.type_calculate,j,2)">
                                        </div>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>                        
                        <div class="calc__ac calc__mb" >
                            <p class="calc__mb calc__choose__level">3</p>
                            <p class="calc__mb calc__mb__xs">Выберите толшину</p>
                            <v-select :options="heights"  v-on:input="selectedHeight($event)" class="calc__mr calc__select"  style="width: 250px" placeholder="Выберите толшину" label="height" >    
                                    <template slot="option" slot-scope="option">
                                        <div class="calc__row calc__ac">
                                            <p   >{{ option.height }}</p>
                                        </div>
                                    </template>
                            </v-select>
                        </div>
                    </div>
                        <div v-if="x_array.length!=0 && y_array.length!=0 && calc_height" class="calc__mb">
                            <div v-for="(item,index) in y_array" :key="index">
                                <div v-for="(j,i) in x_array" :key="i">
                                    <div class="calc__column calc__ac calc__mb calc__border__bottom">    
                                        <p class="calc__formula__f calc__mb__xs">{{j.name+' + '+item.name+' + '+item.height }}</p>
                                        <div class="calc__formula__input calc__column calc__mb__s">
                                            <p class="calc__mb__xs">Цена:</p>
                                            <input type="number"    class="setted_prices calc__formula__price"/> 
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div  v-if="x_array.length!=0 && y_array.length!=0 && calc_height" class="calc__row calc__ac">
                                <button class="calc__save__order calc__mr"  @click="createFormula">Создать формулу</button>
                                <button class="calc__save__order"   @click="clearFormula">Очистить формулу</button>
                        </div>
                    </div>

                    <div class="calc__column calc__ac" v-else>
                        <div v-for="(item,index) in elements" :key="index">
                            <p v-if="item.type=='Фрезировка'">{{item.type}}</p>
                            <div v-if="item.type=='Фрезировка'"  class="calc__mb" style="border-bottom: 2px solid blue">
                                <p class="calc__mb calc__choose__level">1</p>
                                <div class="calc__column calc__ac">
                                    
                                    <div class="calc__mr calc__mb" v-for="(j,i) in remove_same(item.type_calculate)" :key="i"> 
                                        <p class="calc__mb__s">{{j}}</p>
                                        <div class="calc__row calc__ac" >
                                            <v-select :options="sort_category(j,item.type_calculate)" v-on:input="selectedElTwo($event,1)" class="calc__mr calc__select"  style="width: 250px" placeholder="Выберите элемент" label="name" >    
                                                <template slot="option" slot-scope="option"  >
                                                    <div class="calc__row calc__ac"  v-if="option.type==j" >
                                                        <img  class="calc__mr"   :src="'https://api.frezerovka04.kz'+option.image_path" alt="">
                                                        <p    >{{ option.name }}</p>
                                                    </div>
                                                </template>
                                   
                                            </v-select>
                                            <input type="checkbox" @input="selectedAll(item.type_calculate,j,1)">
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="calc__ac calc__mb" >
                            <p class="calc__mb calc__choose__level">2</p>
                            <p class="calc__mb calc__mb__xs">Выберите толшину</p>
                            <v-select :options="heights"  v-on:input="selectedHeightTwo($event)" class="calc__mr calc__select"  style="width: 250px" placeholder="Выберите толшину" label="height" >    
                                    <template slot="option" slot-scope="option">
                                        <div class="calc__row calc__ac">
                                            <p   >{{ option.height }}</p>
                                        </div>
                                    </template>
                            </v-select>
                        </div>

                        <div v-if="x_array.length!=0 && calc_height" class="calc__mb">
                            
                            <div v-for="(j,i) in x_array" :key="i">
                                <div class="calc__column calc__ac calc__mb calc__border__bottom">    
                                    <p class="calc__formula__f calc__mb__xs">{{j.name+' + '+calc_height}}</p>
                                    <div class="calc__formula__input calc__column calc__mb__s">
                                        <p class="calc__mb__xs">Цена:</p>
                                        <input type="number"    class="setted_prices_two calc__formula__price"/> 
                                    </div>
                                </div>
                            </div>
                        

                        </div>
                        <div  v-if="x_array.length!=0 && calc_height" class="calc__row calc__ac">
                                <button class="calc__save__order calc__mr"  @click="createFormulaTwo">Создать формулу</button>
                                <button class="calc__save__order"   @click="clearFormulaTwo">Очистить формулу</button>
                        </div>
                    </div>


                    
                

                </div>

                <div class="calc__column calc__ac calc__orders" v-if="page==7">
                  
                    <div v-for="(formula,f) in all_formula" :key="f" class="calc__order calc__column calc__ac calc__mb">
                            <p>Формула: {{formula.formula_name}}</p>
                            <p>Цена: {{formula.height}} тг</p>

                            
                            <div class="calc__row calc__ac calc__edit calc__pointer" @click="getFormula(formula.id)">
                                <i  class=" fas fa-pencil-alt" style="margin-left: 10px"></i>
                                <p>Редактировать</p>
                            </div>

                            <div class="calc__row calc__ac calc__edit calc__pointer" @click="deleteFormula(formula.id)" >
                                <i class=" fas fa-trash-alt"></i>
                                <p>Удалить</p>
                            </div>
                    </div>
                </div>

                <div class="calc__column calc__ac calc__orders" v-if="page==8">

                </div>


                <div class="calc__column calc__ac" v-if="page==6">

                    <form  @submit.prevent="createCategory" class=" calc__mb calc__element calc__column">
                        
                        <div class="calc__column calc__mb">
                            <p>Выберите элемент</p>
                            <select name="" v-model="categories.type" id="">
                                <option value="" selected>Выберите элемент</option>
                                <option value="1">Фрезировка</option>
                                <option value="2">Пленка</option>
                            </select>
                        </div>
                        <div class="calc__column calc__mb">
                            <p>Название</p>
                            <input type="text" v-model="categories.name" required>
                        </div>

                        <button type="submit">Создать</button>
                    </form>

                    <div class="calc__column calc__orders" >
                     
                        <div class="calc__row  calc__order calc__mb calc__ac " v-for="(item,index) in categories_all" :key="index">
                                <p class="calc__mr">{{item.name}}</p>
                                <i @click="deleteCategories(item.id)" class="fas fa-trash-alt"></i>
                        </div>
                    </div>
                 


                </div>


                <div class="calc__column calc__ac" v-if="page==5">

                     <form @submit.prevent="createHeight" class="calc__mb calc__column calc__element">
                        
                        <div class="calc__column calc__mb">
                            <p>Высота</p>
                            <input type="number" v-model="heights.height" required>
                        </div>
                        <button type="submit">Создать</button>
                     </form>
      
                    <div class="calc__column calc__orders" >

                        <div class="calc__row calc__order calc__mb calc__ac calc__100" v-for="(item,index) in heights" :key="index">
                                <p class="calc__mr">{{item.height}}</p>
                                <i @click="deleteHeights(item.id)" class=" calc__pointer fas fa-trash-alt"></i>
                        </div>
                    </div>
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
                    all_formula: [],
                    two_dimension: false,
                    three_dimension: true,
                    heights: {
                        heights: null
                    },
                    categories: {
                        name: null,
                        type: null
                    },
                    setted_prices: [],
                    calc_height: null,
                    x_array: [],
                    y_array: [],
                    heights: [
                        {
                            height: 8,
                            price: 2000
                        },
                        {
                            height: 16,
                            price: 3000
                        },
                        {
                            height: 18,
                            price: 5000
                        }
                    ],
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
                  page: 4,
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
                      type_plenka: '',
                      type_frezs: [],
                      type_plenkas: []
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
                  link: require('../../assets/images/kaz.png'),
                  for_frez: [],
                  heights:[],
                  categories_all: [],
                  formula_edit: {
                      price: '',
                      id: ''
                  }
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

            this.getCategories();
            this.getHeights();
            this.getAllFormula();
          
        },
        methods: {
            deleteFormula(id) {
                confirm("Удалить формулу?");
                const config = {
                    headers: { 'Authorization': `Bearer ${this.token}` }
                };
                this.$http.get('/calculator/delete/formula?id='+id, config)
                .then(res => {
                    this.$fire({
                        title: res.data.msg,
                        text: "",
                        type: "success",
                        timer: 3000
                    }).then(r => {
                        console.log(r.value);
                    });
                    this.getAllFormula();
                });
            },
            getFormula(id) {
                this.modal_type = 3;
                this.show_modal = true;
                let data = {
                    id: id
                };
                const config = {
                    headers: { 'Authorization': `Bearer ${this.token}` }
                };
                this.$http.post('/calculator/get/formula', data, config)
                .then(res => { 
                    
                    this.formula_edit.price = res.data.height;
                    this.formula_edit.id = res.data.id;
                });
            },
            editFormula() {
               let data = {
                    id: this.formula_edit.id,
                    price: this.formula_edit.price
                };
                const config = {
                    headers: { 'Authorization': `Bearer ${this.token}` }
                };
                this.$http.post('/calculator/edit/formula', data, config)
                .then(res => { 

                    this.$fire({
                        title: res.data.msg,
                        text: "",
                        type: "success",
                        timer: 3000
                    }).then(r => {
                        console.log(r.value);
                    });
                    this.show_modal = false;
                    this.getAllFormula();
                });
            },
            getAllFormula() {
                const config = {
                    headers: { 'Authorization': `Bearer ${this.token}` }
                };
                this.$http.get('/calculator/get/all/formula', config)
                .then(res => {
                    this.all_formula = res.data
                });
            },
            choosenFormula(bool) {
                this.three_dimension = bool;
                this.clearFormulaTwo();
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
            createCategory() {
                let data = {
                    type: this.categories.type,
                    name: this.categories.name
                };

                const config = {
                    headers: { 'Authorization': `Bearer ${this.token}` }
                };

                this.$http.post('/calculator/create/categories', data, config)
                .then(res => { 

                    this.$fire({
                        title: res.data.msg,
                        text: "",
                        type: "success",
                        timer: 3000
                    }).then(r => {
                        console.log(r.value);
                    });
                    this.getCategories();
                });
            },
            createHeight() {
                let data = {
                    height: this.heights.height
                };

                const config = {
                    headers: { 'Authorization': `Bearer ${this.token}` }
                };

                this.$http.post('/calculator/create/heights', data, config)
                .then(res => { 
                    this.$fire({
                        title: res.data.msg,
                        text: "",
                        type: "success",
                        timer: 3000
                    }).then(r => {
                        console.log(r.value);
                    });
                    this.getHeights();
                });
            },
            getHeights() {
                const config = {
                    headers: { 'Authorization': `Bearer ${this.token}` }
                };
                this.$http.get('/calculator/get/heights', config)
                .then(res => {
                    this.heights = res.data
                });
            },
            getCategories() {
                console.log("thrfsdfsd");
                const config = {
                    headers: { 'Authorization': `Bearer ${this.token}` }
                };
                this.$http.get('/calculator/get/categories', config)
                .then(res => {
               
                    this.categories_all = res.data;

                    for (let index = 0; index < this.categories_all.length; index++) {
                       if(this.categories_all[index].calc_id==1) {
                           this.calculator.type_frezs.push(this.categories_all[index]);
                       }
                       else {
                          this.calculator.type_plenkas.push(this.categories_all[index]); 
                       }
                    }
                });
            },
            deleteHeights(id) {
                       
                let data = {
                    id: id
                };

                const config = {
                    headers: { 'Authorization': `Bearer ${this.token}` }
                };

                this.$http.post('/calculator/delete/heights', data, config)
                .then(res => { 

                    this.$fire({
                        title: res.data.message,
                        text: "",
                        type: "success",
                        timer: 3000
                    }).then(r => {
                        console.log(r.value);
                    });

                    this.getHeights();
                 
                });
            },
            deleteCategories(id) {
                       
                let data = {
                    id: id
                };

                const config = {
                    headers: { 'Authorization': `Bearer ${this.token}` }
                };

                this.$http.post('/calculator/delete/categories', data, config)
                .then(res => { 

                    this.$fire({
                        title: res.data.message,
                        text: "",
                        type: "success",
                        timer: 3000
                    }).then(r => {
                        console.log(r.value);
                    });

                    this.getCategories();
                 
                });
            },

         
            createFormula() {
                let length = document.querySelectorAll('.setted_prices').length;


                let createdFormula = [];
                let createdNameFormula = [];
                for (let index = 0; index < this.y_array.length; index++) {
                    for (let j = 0; j < this.x_array.length; j++) {
                        createdFormula.push(this.y_array[index].id+' '+this.x_array[j].id+' '+this.calc_height); 
                        createdNameFormula.push(this.y_array[index].name+' '+this.x_array[j].name+' '+this.calc_height);
                    }
                }
                let obj = {
                    formula: '',
                    price: ''
                }
                let send_formula = [];
                for (let index = 0; index < length; index++) {
                    if(document.getElementsByClassName("setted_prices")[index].value=='') {
                        this.$fire({
                            title: "Заполните цену",
                            text: "",
                            type: "warning",
                            timer: 3000
                        });
                        return false;
                    }
                    obj = {
                        formula_name: createdNameFormula[index],
                        formula_id: createdFormula[index],
                        price: document.getElementsByClassName("setted_prices")[index].value
                    };
                     document.getElementsByClassName("setted_prices")[index].value = "";
                    send_formula.push(obj);
                }

                const config = {
                    headers: { 'Authorization': `Bearer ${this.token}` }
                };


                let data =  {
                    data: send_formula
                }
                this.$http.post('/calculator/create/formula', data, config)
                .then(res => { 
                     this.$fire({
                            title: "Формула сохранен",
                            text: "",
                            type: "success",
                            timer: 3000
                    });
                });

            },
            clearFormulaTwo() {
                this.x_array = [];
                this.y_array = [];
                this.calc_height = '';
            },
            clearFormula() {
                this.x_array = [];
                this.y_array = [];
                this.calc_height = '';

                this.$router.go(0);
                this.show_page(4);

            },
            createFormulaTwo() {

                let length = document.querySelectorAll('.setted_prices_two').length;

                let createdFormula = [];
                let createdNameFormula = [];
                for (let index = 0; index < this.x_array.length; index++) {
                    createdNameFormula.push(this.x_array[index].name+' '+this.calc_height);
                    createdFormula.push(this.x_array[index].id+' '+this.calc_height);
                }

               
                
                let obj = {
                    formula: '',
                    price: '',
                    formula_id: ''
                }
                let send_formula = [];

                let create = true;
                for (let index = 0; index < length; index++) {
                    if(!document.getElementsByClassName("setted_prices_two")[index].value) {
                        this.$fire({
                            title: "Заполните цену",
                            text: "",
                            type: "success",
                            timer: 3000
                        });
                        create = false;
                        return false;
                    }
                    obj = {
                        formula_name: createdNameFormula[index],
                        formula_id: createdFormula[index],
                        price: document.getElementsByClassName("setted_prices_two")[index].value
                    };
                    document.getElementsByClassName("setted_prices_two")[index].value = "";
                    send_formula.push(obj);
                }
          
                const config = {
                    headers: { 'Authorization': `Bearer ${this.token}` }
                };
                let data =  {
                    data: send_formula
                }
                

                let checker = [];
                for (let index = 0; index < send_formula.length; index++) {
                    if(!send_formula[index].price) {
                        checker.push("false");
                    }
                }

            
                if(checker.length==0) {
                    this.$http.post('/calculator/create/formula', data, config)
                    .then(res => { 
                        this.$fire({
                                title: "Формула сохранен 22",
                                text: "",
                                type: "warning",
                                timer: 3000
                        });
                    });

                }
    
            },
            selectedHeight(el) {
                this.calc_height = el.height;
                if(this.y_array.length!=0) {
                    for (let index = 0; index < this.y_array.length; index++) {
                        this.y_array[index].height = el.height;
                        this.y_array[index].height_price = el.price; 
                    }
                }
            },
            selectedHeightTwo(el) {
                this.calc_height = el.height;
                
            },
            selectedAll(el,type,y) {
                if(y==1) {
                 
                    for (let index = 0; index < el.length; index++) {
                    
                        if(el[index].type==type) {
                            
                            this.x_array.push(el[index]);
                        }
                    }
                }
                if(y==2) {
                    for (let index = 0; index < el.length; index++) {
                        if(el[index].type==type) {
                            
                            this.y_array.push(el[index]);
                        }
                    }
                }
                if(this.y_array.length!=0 && this.x_array.length!=0) {
                        if(this.x_array.length>this.y_array) {
                            let first = this.x_array;
                            let second =   this.y_array;
                            this.x_array = [];
                            this.y_array = [];

                            this.y_array = second;
                            this.x_array = first;
                        }
                }
               
            },
            selectedElTwo(el) {
                this.x_array.push(el);

                
            },
            selectedEl(el,type) {
                if(type==1) {
                    this.x_array.push(el);
                }
                else {
                    this.y_array.push(el);
                }
            },
            remove_same(arr) {
                
                let arr2 = [];
                let str = '';
                arr.forEach(element => {
                    str = str+element.type+',';
                });
                arr2 = str.split(',');
                arr2 =arr2.splice(0,arr2.length-1);
                arr2 =  arr2.filter((item,index)=>arr2.indexOf(item)===index);  
                return arr2;
            },
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
                    

                    this.g = false;
                    this.get_el();
                    this.get_elements();

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
                    this.get_elements();
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

                        if(this.elements[index].type =='Фрезировка') {
                            
                            // console.log(this.elements[index]['type_calculate']);
                            for (let j = 0; j < this.elements[index]['type_calculate'].length; j++) {
                                // console.log(this.elements[index]['type_calculate'][j]["type"]);

                                this.for_frez.push(this.for_frez,this.elements[index]['type_calculate'][j]["type"]);
                            }
                        }
                        this.show_hide.push(false) 
                    }

                

                    

                    // var result = [];
                    // this.for_frez.forEach(function(item) {
                    //     if(result.indexOf(item) < 0) {
                    //         result.push(item);
                    //     }
                    // });
                    // console.log(result);



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
               
                
                // if(this.calculator.type_el=='other') {
                //     this.calculator.type_el = this.calculator.type;
                // }  
                // else {
                //     this.calculator.type_el = this.types[this.calculator.type_el-1];
                // } 

                console.log(this.calculator);
                return false;
                let fm = new FormData();
                fm.append('type',this.types[this.calculator.type_el-1]);
                fm.append('name', this.calculator.el_name)
                
                fm.append('image', this.calculator.image)
                fm.append('type_calc', this.calculator.type_calc)

                fm.append('price', this.calculator.price)
                fm.append('comment', this.calculator.comment)
                if(this.calculator.type_el==2) {
                    fm.append('type_el', this.calculator.type_el) 
                    fm.append('type_frez', this.calculator.type_frez)    
                }
                else if(this.calculator.type_el==3) {
                    fm.append('type_el', this.calculator.type_el)
                    fm.append('type_plenka', this.calculator.type_plenka)   
                }
                else if(this.calculator.type_el==4) {
                    fm.append('type_el', this.calculator.type_el)  
                }
                else if(this.calculator.type_el==5) {
                    fm.append('type_el', this.calculator.type_el)  
                }
              
                const config = {
                        headers: { 'Authorization': `Bearer ${this.token}` }
                };

                this.$http.post('/calculator/create/element', fm, config)
                .then(res => {
                    this.show_page(2);
                    this.calculator.price = null;
                    this.calculator.type_el= null;
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
        .calc__formulatype {
            
        }
        .calc__pointer {
            cursor: pointer;
        }
        .calc__hide {
            display: none !important;
        }
        .calc__formula__f {

        }
        .calc__formula__input {
            input {
                padding: 10px;
            }
            
        }
        .calc__mr {
            margin-right: 10px;
        }
        select {
            -webkit-appearance: none;
            -moz-appearance: none;
            appearance: none;
        }
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
        .calc__mb__xs {
            margin-bottom: 10px;
        } 
        .calc__mb__s {
            margin-bottom: 15px;
        } 
        
        .calc__ml {
            margin-left: 20px;
        }
        .calc__border__bottom {
            border-bottom: 2px solid var(--main-kenes-blue);
        }
        .calc__choose__level {
            font-size: 24px;
            font-size: bold;
            color: gray;
        }

        .calc {
            .calc__select {
                img {
                    width: 30px;
                    height: 30px; 
                }
            }
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
            display: flex;
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
            padding: 10px;
            background-color: var(--main-kenes-blue);
            p,a {
                color: white;
            }
        }
        .elements__body__yellow {
            width: 100%;
            justify-content: space-evenly;
            background-color: black;
           
            p,a {
                color: white;
                padding: 10px;
            }
            i {
                padding: 10px;
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

            overflow-y: auto;
            .calc__data {
                margin-bottom: 10px;
                border-bottom: 1px solid #ccc;
                padding-bottom: 10px;
                input {
                    margin: 0;
                    margin-left: 10px;
                    
                }
            }
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
                i {
                    margin-left: 10px;
                }
                .fa-trash-alt:hover {
                    color: red;
                }
                .fa-eye:hover {
                    color: var(--main-kenes-blue);
                }
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
            .calc__edit:hover p {
                color: var(--main-kenes-blue);
            }
            .calc__edit:hover i {
                color: var(--main-kenes-blue);
            }
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
        .calc__formulatype {
            flex-direction: column;
        }
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
