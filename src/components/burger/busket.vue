<!-- template -->
<template>
        <div class="busket">
            <div class="busket__main">
                <div class="busket__title">
                    <p>Ваш заказ</p>
                    <i class="fas fa-times" @click="closeToggle()"></i>
                </div>
              
                <div  v-for="(category,i) in orders" :key="i">

                    <div class="busket__images" v-for="(item,index) in category  " :key="index" >

                        <img :src="item.img">

                        <div class="busket__info">
                            <p class="busket__fire">{{item.name}}</p>
                            <p class="busket__description">{{item.description}}</p>
                            
                            <div class="busket__number">
                                <p class="busket__count">{{item.cost}}тг</p>
                                <div class="busket__counter">
                                    <i class="fas fa-minus-circle" @click="addCount(-1,index)"></i>
                                    <p>{{item.counter}}</p>
                                    <i class="fas fa-plus-circle" @click="addCount(1,index)"></i>
                                </div>
                              
                            </div>
                            
                        </div>
                        <i class="far fa-trash-alt" v-on:click="addDelete(index)"></i>
                        
                    </div> 
                </div>
             
                
                <div class="busket__result">
                    <b>Итого:</b>
                    <div class="busket__amount">
                        <p>{{amount}}тг</p>
                    </div>
                    
                </div>

            </div>  
            <!-- <div class="busket__contact">
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
                    <button>Оформить заказ</button>
                </div>
            </div> -->
            <a class="fas fa-times" @click="$router.push('/burger')"></a>
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
                all_count: 0
            }
        },
        mounted() {
            this.orders = JSON.parse(localStorage.getItem("order"));
            // calc_sum
            
            for (let index = 0; index < this.orders.length; index++) {
                this.calc_sum(this.orders[index]);
            }


            this.all_count = parseInt(localStorage.getItem("all_count"));
        },
        methods: {
            calc_sum(array) {
               
              
                for (let index = 0; index < array.length; index++) {
                    this.amount= this.amount+array[index].counter*array[index].cost;
                } 
                
                localStorage.setItem("amount",this.amount)
            },
             closeToggle() {
                document.querySelector('.busket').style.display = "none";
                document.querySelector('#body').style.cssText = "overflow-y: scroll";
            },
            addCount(count,index) {
                this.orders[index].counter = this.orders[index].counter+count;
                localStorage.setItem("order",JSON.stringify(this.orders));
                if (count>0){
                    this.amount = this.amount+this.orders[index].cost; // общая сумма
                    
                }
                else {
                    this.amount = this.amount-this.orders[index].cost;  // общая сумма
                    
                }
                
                this.all_count = this.all_count + count; // общий коунтер
                localStorage.setItem("all_count",this.all_count);
                localStorage.setItem("amount",JSON.stringify(this.amount));
                
                if(this.orders[index].counter==0) {
                    this.orders.splice(index, 1);
                    localStorage.setItem("order",JSON.stringify(this.orders));
                  
                }
            },
            addDelete: function name(index,cost) {
                 this.amount = this.amount-this.orders[index].cost*this.orders[index].counter;
                this.all_count = this.all_count -this.orders[index].counter;
                this.orders.splice(index, 1);
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
    background-color: #333;
    justify-content: space-between;
}
.busket__inner {
    display: flex;
    flex-direction: row;
}
.busket__title {
    font-size: 30px;
    padding: 10px;
    margin-left: 60px;
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
    margin-left: 50px;
}
.busket__images {
    width: 50%;
    height: 200px;
   /* border: 2px solid white;*/
    display: flex;
    flex-direction: row;
    margin-bottom: 50px;

    
}
.busket__info {
    width: 50%;
    height: 200px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    margin-left: 100px;
    // margin-top: 40px;
}
.busket__info p {
    color: white;
}
.busket__count {
    font-size: 20px;
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
    display: flex;
    flex-direction: row;
    font-size: 30px;
    padding: 15px;
    
    
    margin-left: 50px;
}
.busket__amount {
    margin-left: 100px;
}
.busket__result b {
    color: white;
    font-weight: bold;
}
.busket__result p {
    color: red;
    font-weight: bold;
    margin-right: 50px;
}
.busket__data {
   font-size: 30px;
   color: white;
   font-weight: bold;
}
.busket__name {
    display: flex;
    flex-direction: column;
}
.busket__contact {
    margin-top: 155px;
    height: 400px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
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
    width: 200px;
    height: 40px;
    border-radius: 20px;
    background-color: red;
    font-size: 20px;
    font-weight: bold;
    border: none;
    color: black;
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
    display: flex;
    height: 40px;
    background-color:black;
    color: white;
    font-size: 16px;
    line-height: 40px;
    box-sizing: border-box;
    width: 300px;
    border-radius: 10px;
    border-width: 1px;
    border-style: solid;
    border-color:red;
    padding: 0px 15px;
    outline: none;
    margin-left: 10px;
}
.input-1 {
    display: flex;
    height: 40px;
    background-color:black;
    color: white;
    font-size: 16px;
    line-height: 40px;
    box-sizing: border-box;
    width: 100px;
    border-radius: 10px;
    border-width: 1px;
    border-style: solid;
    border-color:red;
    padding: 0px 15px;
    outline: none;
    margin-left: 10px;
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
    padding: 20px;
    font-size: 30px;
    color: white;
    
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

@media screen and (min-height: 800px) {

    .busket__main {
        flex-direction: row;
    }
    .busket__images {
        flex-direction: row;
    }
    .busket__images img {
        width: 150px;
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
    .busket__main {
        flex-direction: row;
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
    .busket {
       
    }
    .busket__contact {
        margin-top: 0px;
    }
    .busket__description {
        margin-bottom: 10px;
    }
  
}

</style>
