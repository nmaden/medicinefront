<!-- template -->
<template>
           <body id="body">

        <header class="header">
            
                <div class="header__inner">
                    
                    <div class="header__white">

                        <div class="header__labels">

                            <i class="fas fa-bars" onclick="openToggle()" ></i>

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
    
                                <button onclick="openDetail()">More details</button>    

                            </div>
                         

                        </div>


                    </div>

                    <div class="header__red">

                        <div class="header__logo--mobile">
                            <i class="fas fa-hamburger"></i>
                            <p>BURGERS</p>
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
                
                

        </header>


        <main class="main">
            <div class="main__inner">
                <div class="main__titles">
                    <p>Natural Ingredients</p>
                    <p>Burger menu</p>
                </div>
                <div class="main__items">
                    <div class="main__item">
                        <img src="https://i2.wp.com/freepngimages.com/wp-content/uploads/2016/11/bacon-burger.png?fit=1000%2C1000 " alt="">
                        <p class="main__burger_name">Burger Buns</p>
                        <p class="main__burger_description">Lorean ipnum ipnum ipnum ipnum</p>
                        <div class="main__actions">
                            <div class="main__price">
                                <p>$5</p>
                            </div>
                            <div class="main__order">
                                <p>Order now</p>
                            </div>
                        </div>
                    </div>
                    <div class="main__item">
                        <img src="https://i2.wp.com/freepngimages.com/wp-content/uploads/2016/11/bacon-burger.png?fit=1000%2C1000 " alt="">
                        <p class="main__burger_name">Burger Buns</p>
                        <p class="main__burger_description">Lorean ipnum ipnum ipnum ipnum</p>
                        <div class="main__actions">
                            <div class="main__price">
                                <p>$5</p>
                            </div>
                            <div class="main__order">
                                <p>Order now</p>
                            </div>
                        </div>
                    </div>
                    <div class="main__item">
                        <img src="https://i2.wp.com/freepngimages.com/wp-content/uploads/2016/11/bacon-burger.png?fit=1000%2C1000" alt="">
                        <p class="main__burger_name">Burger Buns</p>
                        <p class="main__burger_description">Lorean ipnum ipnum ipnum ipnum</p>
                        <div class="main__actions">
                            <div class="main__price">
                                <p>$5</p>
                            </div>
                            <div class="main__order">
                                <p>Order now</p>
                            </div>
                        </div>
                    </div>

                    <div class="main__item">
                        <img src="https://i2.wp.com/freepngimages.com/wp-content/uploads/2016/11/bacon-burger.png?fit=1000%2C1000 " alt="">
                        <p class="main__burger_name">Burger Buns</p>
                        <p class="main__burger_description">Lorean ipnum ipnum ipnum ipnum</p>
                        <div class="main__actions">
                            <div class="main__price">
                                <p>$5</p>
                            </div>
                            <div class="main__order">
                                <p>Order now</p>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
            
        </main>
        <footer>

        </footer>
    </body>              
</template>

<!-- scripts -->

<script src="https://kit.fontawesome.com/a076d05399.js"></script>
<script>
    export default {
    };
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

.header__toggle .fa-times {
  position: absolute;
  right: 20px;
  top: 20px;
  align-self: flex-end;

  font-size: 28px;
  color: white;


}
.toggle__inner {
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: Tahoma;
}
.toggle__inner p {
    margin-bottom: 10px;
    color: white;
    font-size: 22px
}
.toggle__inner a {
    text-decoration: none;
    font-size: 22px;
    margin-bottom: 10px;
    color: white;
  
}


.header__burger {
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    position: absolute;
    
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
.fa-bars {
    display: none;
}
.header__logo {
    background-color:red;
    color: white;
    padding: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;

}
.header__logo i {
    font-size: 25px;
}
.header__logo p {
    transform: rotate(-7deg);
    font-size: 12px;
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
.header__logo--mobile i {
    font-size: 25px;
}
.header__logo--mobile p {
    transform: rotate(-7deg);
    font-size: 12px;
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

 .header__toggle {
    display: none;
    flex-direction: column;
    justify-content: center;
    
    background-color: #2b2929;

    height: 100vh;
    width: 80%;
    z-index: 40;
    position: absolute;
    left: 0;
    top: 0;
}
  .header__labels {
      width: 100%;
  }
  .fa-bars {
    display: block;
    font-size: 22px;
    padding: 15px;
  }
  .header__menu {
      display: none;
  }
  .header__logo {
      display: none;
  }
  .header__logo--mobile {
      display: flex;
  }


  .header__inner {
      flex-direction: row;
      
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
  .header__arrow {
      
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
  .header__items p {

  }
  .header__huge {
      margin-bottom: 10px;
      font-size: 30px;
      font-weight: bold;
      
  }
  .header__huge p {
      margin-bottom: 5px;
  }
  .header__gray {
      
  }
  .header__actions {
     width: 100%;
  }
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
      }
  }
</style>