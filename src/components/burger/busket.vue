<!-- template -->
<template>
    <div>

        <div class="busket" >
            <div class="busket__main">
                <div class="busket__title">
                    <p>Ваш заказ</p>
                    <i class="fas fa-times" @click="closeToggle()"></i>
                </div>


                <div  class="busket__block" >
                <div v-for="(category,i) in orders" :key="i">
                    
                    <div class="busket__images" v-for="(item,index) in category  " :key="index" >

                        <img :src="item.img">

                        <div class="busket__info" >
                            <p class="busket__fire">{{item.name}}</p>
                            <p class="busket__description">{{item.description}}</p>
                            <p class="busket__count">{{item.cost}}тг</p>
                            <div class="busket__number">
                                <i class="fas fa-minus-circle" @click="addCount(i,-1,index)"></i>
                                <p>{{item.counter}}</p>
                                <i class="fas fa-plus-circle" @click="addCount(i,1,index)"></i>
                            </div>
                            
                        </div>
                        <i class="far fa-trash-alt busket__delete" v-on:click="addDelete(i,index,item.cost)"></i>
                        
                    </div> 
                </div>
                </div>
          
             
                
                <div class="busket__result">
                    <b>Итого:</b>
                    <div class="busket__amount">
                        <p>{{amount}}тг</p>
                    </div>
                    
                </div>

            </div>  
            <div class="busket__contact">
                <p class="busket__data">Ваши данные:</p>
                <input placeholder="Ваше имя" id="strt-input" data-testid="delivery-form_street-input" type="text" autocomplete="off" class="input" value="">
                <input placeholder="Номер телефона" id="strt-input" data-testid="delivery-form_street-input" type="text" autocomplete="off" class="input" value="">
                <input placeholder="Улица" id="strt-input" data-testid="delivery-form_street-input" type="text" autocomplete="off" class="input" value="">
                <div class="busket__home">
                    <input placeholder="Дом" id="strt-input" data-testid="delivery-form_street-input" type="text" autocomplete="off" class="input-1" value="">
                    <input placeholder="Подъезд" id="strt-input" data-testid="delivery-form_street-input" type="text" autocomplete="off" class="input-1" value="">
                </div>
                <div class="busket__flat">
                    <input placeholder="Этаж" id="strt-input" data-testid="delivery-form_street-input" type="text" autocomplete="off" class="input-1" value="">
                    <input placeholder="Квартира" id="strt-input" data-testid="delivery-form_street-input" type="text" autocomplete="off" class="input-1" value="">
                </div>
                <div class="radiobutton">


                <div class="radiobutton__cash">
                    <input name="dzen" type="radio" value="nedzen"><p class="radiobutton">Наличными курьеру</p>
                </div>
                <div class="radiobutton__pay">
                    <input name="dzen" type="radio" value="nedzen"><p class="radiobutton">Оплата картой на сайте</p>
                </div>

                </div>
                <div class="busket__button">
                    <button type="submit">
                        <p>Оформить заказ</p>
                    </button>
                </div>
            </div>
            <a class="fas fa-times" @click="$router.push('/burger')"></a>
        </div>
    </div>    
</template>

<!-- scripts -->
<script>
 
    export default {
        data() {
            return {
                amount: 0,
                orders:[],
                count: 0,
                all_count: 0,
                isActive: true
            }
        },
        mounted() {
           
            this.orders = JSON.parse(localStorage.getItem("order"));
            // calc_sum
            

            for (let index = 0; index < this.orders.length; index++) {
                if(this.orders[index]) {
                    this.calc_sum(this.orders[index]);
                }
            }
            this.all_count = parseInt(localStorage.getItem("all_count"));
            
          
            if(this.all_count>3) {
                this.isActive = false;
            }
        },
        methods: {

            calc_sum(array) {
            
                for (let index = 0; index < array.length; index++) {
                    this.amount = this.amount+array[index].counter*array[index].cost;
                }
              
                localStorage.setItem("amount",this.amount);            

            },
            addCount(category_id,count,index) {

                this.orders[category_id][index].counter = this.orders[category_id][index].counter+count;


                localStorage.setItem("order",JSON.stringify(this.orders));


                if (count>0){
                    this.amount = this.amount+this.orders[category_id][index].cost; // общая сумма
                    
                }
                else {
                    this.amount = this.amount-this.orders[category_id][index].cost;  // общая сумма
                    
                }
                
                this.all_count = this.all_count + count; // общий коунтер
                localStorage.setItem("all_count",this.all_count);
                localStorage.setItem("amount",JSON.stringify(this.amount));
                
                if(this.orders[category_id][index].counter==0) {
                    this.orders[category_id].splice(index, 1);
                    localStorage.setItem("order",JSON.stringify(this.orders));
                  
                }
            },

            addDelete(category_id,index,cost) {

                let order = this.orders[category_id][index]; //get one category

                this.amount = this.amount-order.cost*order.counter;


                this.all_count = this.all_count - this.orders[category_id][index].counter;

                this.orders[category_id].splice(index, 1);
                
                
                localStorage.setItem("all_count",this.all_count);

                localStorage.setItem("order",JSON.stringify(this.orders));
                localStorage.setItem("amount",JSON.stringify(this.amount));
            }
               
               
            
        }
    }
    
</script>

<!-- style -->
<style scoped lang="scss"> 
//*BUSKET*/
.busket {
  
    display: flex;
    flex-direction: row;
    width: 100%;
    background-color: #131313;
    justify-content: space-between;
    height: 100vh;
 
}
.busket__main {
    display: flex;
    flex-direction: column;
    justify-content: space-between; 
      height: 90vh;
    padding: 20px;
}

.busket__inner {
    display: flex;
    flex-direction: row;
}
.busket__title {
    font-size: 30px;
    margin-bottom: 20px;
  
    /*border: 2px solid white;*/
}
.busket__title p {
    color: white;
    font-family: Arial, Helvetica, sans-serif;
    font-weight: bold;
}
.busket__title i {
    display: none;
}
.busket__images img {
    width: 170px;
    height: 170px;
    align-self: flex-start;
    margin-right: 100px;
}

.busket__block {
    height: 100vh;
 
    overflow-y: auto;
  
    .busket__images {
        width: 80%;
        height: 200px;
        margin-top: 30px;
        margin-bottom: 60px;
        display: flex;
        flex-direction: row;
        // margin-bottom: 60px;

        .busket__delete {
            cursor: pointer;
        }
        
    }
    
    .busket__images:nth-child(1) {
        margin-top: 50px;
    }
}
.busket__block::-webkit-scrollbar {
    width: 5px;
    background-color: red;
}

.busket__block::-webkit-scrollbar-track {
background-color: #e8e8e8;
}
.busket__block::-webkit-scrollbar-thumb {
        width: 5px;
        height: 50px;
background-color:red;
}


.busket__info {
    width: 50%;
    height: 200px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    // margin-top: 40px;
    .busket__description {
        margin-bottom: 10px;
    }
}
.busket__info p {
    color: white;
}
.busket__count {
    font-size: 20px;
    margin-bottom: 10px;
}
.busket__fire {
    font-size: 25px;
    color: white;
}
.busket__fire:after {
    content: "";
    width: 200px;
    height: 3px;
    display: block;
    background-color: red;
    margin: 15px 0;
}
.busket__result {
    margin-top: 40px;
    width: 60%;
    display: flex;
    flex-direction: row;
    font-size: 30px;
    justify-content: space-between;
}
.busket__result b {
    color: white;
    font-weight: bold;
}
.busket__result p {
    color: red;
    font-weight: bold;
}
.busket__data {
   margin-bottom: 20px;
   font-size: 30px;
   color: white;
   font-weight: bold;
}
.busket__name {
    display: flex;
    flex-direction: column;
}
.busket__contact {
    display: flex;
    flex-direction: column;
    margin: 60px 20px;
    padding: 40px;
    height: 70vh;
    border-radius: 20px;
    -webkit-box-shadow: 1px -2px 20px 9px rgba(0,0,0,0.75);
    -moz-box-shadow: 1px -2px 20px 9px rgba(0,0,0,0.75);
    box-shadow: 1px -2px 20px 9px rgba(0,0,0,0.75);
}
.busket__home {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}
.busket__flat {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}
.busket__button {
    display: flex;
    justify-content: center;
}
.busket__button button {
      display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: 15px;
    border-radius: 25px;
    background-color: red;
    font-size: 20px;
    font-weight: bold;
    border: none;
    color: black;
    p {
        color: black;
        font-weight: bold;
    }
}
.busket__number {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    
}
.busket__counter {
    display: flex;
    flex-direction: row;
}
.busket__number i {
    color: red;
    font-size: 20px;
}


//*INPUT*/

.input {
    margin-bottom: 10px;
    display: flex;

    background-color:black;
    color: white;
    font-size: 16px;

    box-sizing: border-box;
    width: 300px;
    border-radius: 25px;
    border-width: 1px;
    border-style: solid;
    border-color:red;
    padding:  15px;
    outline: none;
    
}
.input-1 {
    display: flex;

    background-color:black;
    color: white;
    font-size: 16px;

    box-sizing: border-box;
    width: 100px;
    border-radius: 25px;
    border-width: 1px;
    border-style: solid;
    border-color:red;
    padding:  15px;
    margin-bottom: 10px;
    outline: none;
    
}

//* RADIOBUTTON */

.radiobutton {
    align-self: center;
    line-height: 1.5;
}
.radiobutton p {
    color: white;
    display: flex;
    align-items: center;
}
.radiobutton__pay {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-bottom: 10px;
    
}
.radiobutton__cash  {
    display: flex;
    flex-direction: row;
    align-items: center;
}
.radiobutton__cash p {
    margin-left: 10px;
}
.radiobutton__pay p {
    margin-left: 10px;
}
.fa-times {
 
    font-size: 30px;
    color: white;
    margin-right: 20px;
    margin-top: 20px;
    
}
.fa-plus-circle {
    margin-left: 5px;
}
.fa-minus-circle {
    margin-right: 5px;
}
.fa-trash-alt {
    margin-left: 50px;
    
    color: white;
}
@media screen and (max-width: 370px) {
    .busket__info {
        font-size: 15px;
    }
    .busket__result {
        margin-left: 35px;
    }
    .busket__images img {
        width: 150px;
    }
    

}
@media screen and (max-height: 580px) {
    .busket__images img {
        width: 120px;
        height: 160px;
    }
    .busket__info {
        font-size: 14px;
    }
    
    .busket__title {
       margin-left: 10px;
    }
   
}

@media screen and (max-width: 600px) {
    .busket {
        height: 100%;
    }
    .busket__main {
        height: 80vh;
        height: unset;
        flex-direction: column;
    }
    
    .busket {
        height: 100%;
        flex-direction: column;

    }
    .busket__counter {
        margin-left: 30px;
    }
    .busket__info {
        margin-left: 15px;
    }
    .busket__info p {
        
    }
  
    .busket__images img {
 
        margin-right: 0;
    }
    .busket__fire:after {
        width: 145px;
    }
    .busket__title {
        display: flex;
        flex-direction: row;
        margin-left: 0px;
        justify-content: space-between;
    }
    .busket__title i {
        display: flex;
        margin-top: -15px;
    }
    .busket__result {
        justify-content: space-around;
        
    }
    .busket__home {
        justify-content: space-between;
        margin-right: 80px;
    }
    .busket__flat {
        justify-content: space-between;
        margin-right: 80px;
    }
    .busket a {
        display: none;
    }
    .busket {
       
    }
    .busket__contact {
        margin-top: 0px;
    }
    .busket__description {
        margin-bottom: 10px;
    }
}
@media screen and (max-width: 600px) {
    .busket__block {
        overflow-y: none;
        height: unset;
    }
    .busket__images {
        flex-direction: row;
    }
   
    .busket__count {
        font-size: 20px;
    }
    .busket__fire {
        font-size: 25px;
    }
    .busket {
        flex-direction: column;
    }
    .busket__counter {
        margin-left: 30px;
    }
    .busket__info {
        margin-left: 15px;
    }
    .busket__info p {
        
    }
    .busket__images img {
        margin-left: 0px;
    }
    .busket__fire:after {
        width: 145px;
    }
    .busket__title {
        display: flex;
        flex-direction: row;
        margin-left: 0px;
        justify-content: space-between;
    }
    .busket__title i {
        display: flex;
        margin-top: -15px;
    }
    .busket__result {
        justify-content: space-around;
        
    }
    .busket__home {
        justify-content: space-between;
        margin-right: 80px;
    }
    .busket__flat {
        justify-content: space-between;
        margin-right: 80px;
    }
    .busket a {
        display: none;
    }

    .busket__contact {
        margin-top: 0px;
    }
         .busket__images {
           width: 100%;
        flex-direction: column !important;
        height: unset !important;
        align-items: center;

    }
    
    
}

</style>
