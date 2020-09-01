<!-- template -->
<template>
 
       <body id="body">

        <header class="header">
            
                <div class="header__inner">
                    
                    <div class="header__white">

                        <div class="header__labels">
                            <i class="fas fa-bars" onclick="openToggle()"></i>
                            <div class="header__logo">
                                <i class="fas fa-hamburger"></i>
                                <p>BURGERS</p>
                            </div>
                            <div class="header__menu">
                                <a href="">Burger</a>
                                <a href="">Sushi</a>
                                <a href="">Pizza</a>
                            </div>
                        </div>
  
                        <div class="header__actions">

                            <div class="header__items">

                                <div class="header__cloud">
                                    <img src="https://runetparty.ucoz.ru/_si/1/83390089.jpeg" alt="">
                                    <p>Best Deal</p>
                                </div>
    
                                <div class="header__huge">
                                    <p>Double</p>
                                    <p>Decker</p>
                                </div>
    
                                <p class="header__gray">Incident tu labore et doiete</p>
    
                                <button onclick="openDetails()">More details</button>    

                            </div>
                         

                        </div>


                    </div>

                    <div class="header__red">
                      


                        <div class="header__basket">
                            
                            <p> +10892378 3278 </p>
                              
                            <i class="fa fa-shopping-basket"  @click="$router.push('/busket')"></i>
                            <p>{{ count }}</p>
                            <button>Order Online</button> 
                             

                            <div class="header__logo--mobile">
                                <i class="fas fa-hamburger"></i>
                                <p>BURGERS</p>
                            </div>
                        </div>

                        <div class="header__info">
                            <p>01</p>
                            <p>Buzzed</p>
                            <p>Burgers</p>


                        </div>


                        <div class= "header__text"> 
                            <p>Burger</p>


                        </div>
                    

                        

                    </div>
                </div>

                <div class="header__burger">
                        <div class="header__price">
                            <p class="header__only">Only</p>
                            <p class="header__cost">$5.99</p>
                        </div>

                        <img src="https://i2.wp.com/freepngimages.com/wp-content/uploads/2016/11/bacon-burger.png?fit=1000%2C1000" alt="">

                        <div class="header__arrow">
                            <i class="fas fa-chevron-circle-left"></i>
                            <i class="fas fa-chevron-circle-right"></i>
                        </div>
                </div>

                <div class="header__toggle">
                    <i class="fas fa-times" onclick="closeToggle()"></i>

                    <div class="toggle__inner">

                        <p>8 777 777 77 77</p>

                        <a href="">Burger</a>
                        <a href="">Sushi</a>
                        <a href="">Pizza</a>
                    </div>

                </div>
                <div class="header__shop">
                    <i class="fas fa-times" onclick="closeDetails()"></i>
                   
                    <div class="shop__inner">
                        <img src="https://i2.wp.com/freepngimages.com/wp-content/uploads/2016/11/bacon-burger.png?fit=1000%2C1000" alt="">
                        <p>Цена: 1500тг</p>
                        <p>Два больших рубленых бифштекса из натуральной цельной говядины с двумя кусочками сыра на карамелизованной булочке, заправленной горчицей, кетчупом, луком и двумя кусочками маринованного огурчика.</p>
                    </div>
                </div>
        </header>


        <main class="main">
            <div class="main__inner">
                <div class="main__titles">
                    <p>Natural Ingredients</p>
                    <p>Burger menu</p>
                </div>
                <div class="main__items">
                    <div class="main__item" v-for="(item,index) in data" :key="index">
                        <img :src="item.img">
                        <p class="main__burger_name">{{item.name}}</p>
                        <p class="main__burger_description">{{item.description}}</p>
                        <div class="main__actions">
                            <div class="main__price">
                                <p>${{item.cost}}</p>
                            </div>
                            <div class="main__order" @click="addOrder(index)">
                                <p>Order now</p>
                            </div>
                        </div>
                    </div>
                   
                    

                </div>

            </div>
            
        </main>   
       </body>              
</template>

<!-- scripts -->
<script>
    // imports libraries
    import Datepicker from 'vuejs-datepicker';
    import { ru } from 'vuejs-datepicker/dist/locale';

    export default {
        components: {
            Datepicker
        },
        
        data() {
            return {
                all_data: [],
                amount: [],
                count: 0,
                data: 
                [
                    {
                        id:1,
                        name:"Burger", 
                        description:"Lorean ipnum ipnum ipnum ipnum",
                        cost:1500,
                        img: "https://i2.wp.com/freepngimages.com/wp-content/uploads/2016/11/bacon-burger.png?fit=1000%2C1000"
                    },
                    {
                        id:2,
                        name:"Pizza", 
                        description:"Lorean ipnum ipnum ipnum ipnum",
                        cost:2000,
                        img: "https://st.depositphotos.com/2640119/3010/i/450/depositphotos_30103299-stock-photo-pepperoni-pizza.jpg"
                    },
                    {
                        id:3,
                        name:"Sushi", 
                        description:"Lorean ipnum ipnum ipnum ipnum",
                        cost:2000,
                        img: "data:image/png;base64,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"
                    }
                ]
                
                
            }  
        },
        methods: {
            addOrder(index) {
                this.count = this.count+1;
                this.amount.push(parseInt(this.data[index].cost));
                let object = {
                    name: this.data[index].name,
                    cost: this.data[index].cost,
                    id: this.data[index].id,
                    description: this.data[index].description,
                    counter: 1,
                    img: this.data[index].img
                };


                
                
                if(this.all_data.length>=1) {
                    let exist = this.check__exist(this.all_data,this.data[index].id);
                    if(exist[0]==true) {
                       
                        let index = exist[1];
                         console.log("kaitalandi:");
                        console.log(this.all_data[index]);
                        this.all_data[index].counter = this.all_data[index].counter +1;
                        console.log(this.all_data);
                        
                    }
                
                    else {
                        this.all_data.push(object);
                    }
                }
                else {  
                    this.all_data.push(object);
                }

                localStorage.setItem("order",JSON.stringify(this.all_data));
                localStorage.setItem("counter",this.all_data[index].counter);
                let ready_order = localStorage.getItem("order");
                // console.log( this.all_data);
                let sum_of_data = 0;
                let a = 0;
             for (let index = 0; index < this.all_data.length; index++) {
                a = this.all_data[index].cost*this.all_data[index].counter;
                sum_of_data = sum_of_data+a;
                console.log("kosindisi:"+sum_of_data);
            }
            localStorage.setItem("amount",sum_of_data);


            },
            check__exist(all_data,id) {
                //console.log("length::"+all_data.length);
                let truefalse = [];
                let indexes = [];
                for (let index = 0; index < all_data.length; index++) {
                  // console.log(all_data[index]["id"]+" - "+id);
                    if(all_data[index]["id"]==id) {
                        
                        truefalse.push(true);
                        indexes.push(index);
                    }
                    else {
                        truefalse.push(false);
                    }
                }

                
                let answer = [];
                

                if(truefalse.includes(true)) {
                    answer.push(true);
                    answer.push(indexes[0]);
                    return answer;
                    
                }
                else {
                    answer.push(false);
                    return answer;
                }
            }
        }
    }
    
</script>

<!-- style -->
<style scoped lang="scss"> 
    
  body {  
    width: 100%;
    display: flex;
    flex-direction: column;
    margin: 0;
    padding: 0;
}
p {
    margin: 0;
    padding: 0;
}

.header {
    width: 100%;
    position: relative;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.header__toggle {
    display: none;
    flex-direction: column;
    background-color: #2b2929;
    height: 100vh;
    width: 100%;
    position: absolute;
    left: 0;
    top: 0;
    z-index: 40;
    justify-content: center;
}
.header__shop {
    display: none;
    flex-direction: row;
    background-color: gray;
    height: 100vh;
    width: 100%;
    position: absolute;
    left: 0;
    top: 0;
    z-index: 40;
    justify-content: center;
}
.header__shop .fa-times {
    position: absolute;
    align-self: flex-end;
    font-size: 28px;
    right: 20px;
    top: 20px;
    color:white;
}
.shop__inner img {
    align-self: center;
    width: 220px;
    height: 220px;
}
.shop__inner {
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 20px;
    color: white;
    justify-content: space-evenly;
    font-weight: bold;
}
.header__toggle .fa-times {
    position: absolute;
    align-self: flex-end;
    font-size: 28px;
    right: 20px;
    top: 20px;
    color:white;
}
.toggle__inner {
      display: flex;
      flex-direction: column;
      font-size: 30px;
      align-items: center;
  }
.toggle__inner a {
    text-decoration: none;
    font-family: Tahoma;
    margin-bottom: 10px;
    color: white;
}
.toggle__inner p {
    color: white;
    margin-bottom: 10px;
}
.header__burger {
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    position: absolute;
    
}
.header__details {
    display: flex;
}
.header__burger img {
    width: 350px;
    height: 350px;
}
.header__price {
    width: 100px;
    height: 100px;
    border-radius: 50px;
    position: absolute;
    top: 80px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-self: flex-start;
    align-items: center;
    align-self: flex-end;
    background-color: white;
}
.header__only {
    color: yellow;
    font-family: cursive;
    font-size: 14px;
}
.header__cost {
    color: red;
    font-family: cursive;
    font-size: 18px;
}
.header__details {
    display: none;
}
.header__arrow {
    z-index: 20;
    align-self: center;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 60px;
    font-size: 25px;
    
}
.header__arrow i{
    color: orange;
}


.header__inner {
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}
.header__white {
    width: 50%;
    display: flex;
    flex-direction: column;
}
.header__labels {
    width: 300px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}
.header__logo {
    background-color:red;
    color: white;
    padding: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
}
.header__logo--mobile {
    width: 50px;
    color: white;
    padding: 10px;
    display: none;
    flex-direction: column;
    align-items: center;
    align-self: flex-end;
}
.header__basket {
    width: 367px;
    color: white;
    padding: 10px;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    align-self: flex-end;
}
.header__basket i {
    font-size: 25px;
}

.header__basket button {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-self: flex-end;
    align-items: flex-end;
    width: 120px;
    height: 33px;
    border-radius: 20px;
    background-color: yellow;
    padding: 10px;
    font-size: 14px;
    
    border: none;
    color: white;


}
.header__busket p {
    display: flex;
    flex-direction: row;
    
    font-size: 15px;

}
.header__logo--mobile i {
    font-size: 25px;
}
.header__logo--mobile p {
    transform: rotate(-7deg);
    font-size: 12px;
}
.header__logo i {
    font-size: 25px;
}
.header__logo p {
    transform: rotate(-7deg);
    font-size: 12px;
}
.fa-bars {
    display: none;
}

.header__info {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-self: center;
    height: 350px;
    font-size: 30px;
    font-weight: bold;
    font-family: sans-serif;
    color: white;
}
.header__menu {
    display: flex;
    flex-direction: row;
    align-items: center;

    font-family: Tahoma;
}
.header__menu a {
   color: black;
   margin-right: 10px;
   text-decoration: none;
   font-weight: bold;
}
.header__menu a:hover {
    color: red;
}


.header__actions {
    height: 300px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    align-items: center;
}

.header__items {
    height: 300px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
}
.header__huge {
    font-size: 45px;
    font-family: Comic Sans MS;
    font-weight: bold;

}
.header__gray {
    color: #ccc;
    font-size: 12px;
}

.header__cloud {
    display: none;
    position: relative;
    margin-bottom: 30px;
}
.header__cloud img {
    width: 160px;
    height: 60px;
    position: absolute;
}
.header__cloud p {
    font-family: cursive;
    color: red;
    
    position: absolute;
    top: 17px;
    left: 50px;
}

.header__actions button {
    width: 160px;
    border-radius: 20px;
    background-color: red;
    padding: 10px;
    font-size: 14px;
    
    border: none;
    color: white;
}

.header__red {
    width: 50%;
    border: 1px solid red;
    background-color: red;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
}
.header__text {
    
    width:150px;
    margin-top: 40px;

}
    
.header__text p {
    color: white;
    opacity: 0.6;
    font-size: 140px;
    font-family: Tahoma;
    font-weight: bold;
    transform: rotate(-90deg);

}







/*---main---*/
.main {
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #fff0f5;
}
.main__inner {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
}
.main__titles {
    margin-top: 20px;
    width: 1000px;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: space-between;
}
.main__titles p:nth-child(1) {
    font-size: 18px;
    font-family: cursive;
    color: red;
}
.main__titles p:nth-child(2) {
    color: black;
    font-size: 30px;
}
.main__items {
    width: 725px;
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    
}
.main__item {
    width: 160px;
    background-color: white;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    border-radius: 5px;
    padding: 35px;
    margin-bottom: 15px;
}
.main__item img {
    width: 120px;
    height: 120px;
}

.main__burger_name {
    color:red;
    font-weight: bold;
    font-size: 16px;
    margin-bottom: 10px;
}
.main__burger_description {
    color: gray;
    font-size: 12px;
    margin-bottom: 20px;
}
.main__actions {
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 190px;
    justify-content: space-between;

}
.main__price {
    width: 20px;
    height: 20px;
    padding: 10px;
    border-radius: 20px;
    background-color: red;
    display: flex;
    justify-content: center;
    flex-direction: row;
    color: white;
}
.main__order {
    width: 120px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: 10px;
    border-radius: 20px;
    border: 1px solid red;
    color: red;

}


@media screen and (max-width: 600px) {
  .header__inner {
      flex-direction: row;
  }
  .header__labels {
      width: 100%;
  }
  .toggle__inner {
  }
  .fa-bars {
      display: block;
      font-size: 22px;
      padding: 15px;
  }
  .header__logo--mobile {
      display: flex;
      flex-direction: column;
  }
  .header__basket {
  }
  .header__menu {
      display: none;
  }
  .header__logo {
      display: none;
  }
  .header__white {
     /* width: 50%;*/
      height: 100vh;
  }
  .header__red {
      /*width: 50%;*/
      height: 100vh;
  }
  .main {
      width: 100%;
  }
  .main__titles {
      width: 100%;   
  }
  .main__items {
      width: 50%;
      justify-content: center;
      padding: 0;
  }
  .header__burger img {
      width: 220px;
      height: 220px;
  }
  .header__burger {
      height: 0;
      justify-content: center;
      
  }
  .header__price {
      background-color: white;
      color: red;
      width: 70px;
      height: 70px;
      border-radius: 35px;
      top: -130;
  }
  .header__cost {
      color: red;
  }
  .header__items button {
      width: 120px;
      margin-top: 10px;
  }
  .header__items {
      justify-content: flex-start;
      width: 60%;
      margin-top: 20px;
  }
  .header__huge {
      margin-bottom: 10px;
      font-size: 30px;
      font-weight: bold;
      
  }
  .header__huge p {
      margin-bottom: 5px;
  }
  .header__actions {
     width: 100%;
  }


  @media screen and (max-width: 380px) {
      .header__items {
          justify-content: flex-start;
      }
      .header__items button {
          width: 100px;
          margin-top: 10px;
      }
      .header__huge {
          font-size: 30px;
      }
      .header__burger {
          margin-top: 50px;
      }
  }
  @media screen and (max-width: 320px) {
      .header__burger {
          margin-top: 80px;
      }
  }
  @media screen and (min-height: 800px) {
      .header__burger {
          margin-top: 20px;
      }
      .header__items {
          justify-content: center;
          color: black;
      }
  }
}

</style>    