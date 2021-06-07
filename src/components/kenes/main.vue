<template>
  <div class="main__column">
    <div class="main__block__title">
          <div class="main__block__round"></div>
          <p>Категории</p>
    </div>

    <div class="main__block__categories">
                    <div class="main__arrow">
                        <i class="fas fa-chevron-left"></i>
                    </div>
                    <div class="main__block__category">
                        <p>Мягкая мебель</p>
                    </div>
                    <div class="main__block__category">
                        <p>Шкафы-купе</p>
                    </div>
                    <div class="main__block__category">
                        <p>Детские</p>
                    </div>
                    <div class="main__block__category">
                        <p>Гостиные</p>
                    </div>
                    <div class="main__block__category">
                        <p>Спальни</p>
                    </div>
                    <div class="main__block__category">
                        <p>Ванная</p>
                    </div>
                    <div class="main__arrow">
                        <i class="fas fa-chevron-right"></i>
                    </div>
    </div>

    <div class="main__block__title">
          <div class="main__block__round"></div>
          <p>Новинки</p>
    </div>

      <div class="main__block__products">
                    <div class="main__block__product"  >

                        <div class="product__images">

                            <div class="product__sale">
                                <i class="fas fa-percent"></i>
                            </div>

                            <img  class="product__item" src="../../assets/images/sofa.png">
                            <div class="product__levels">
                                <div class="product__level product__level--active"></div>
                                <div class="product__level"></div>
                                <div class="product__level"></div>
                            </div>
                        </div>

                        <p class="product__name">Sofa</p>
                        <p class="product__size">Размеры: 2550x9500</p>
                        
                        <div class="product__prices">
                            <p class="product__price">24 990 тнг</p>
                            <div class="product__sale">
                                <p>-20%</p>
                            </div>
                        </div>
                        <div class="product__order" @click="openProduct()">
                            <i class="fas fa-cart-arrow-down"></i>
                            <p>Заказать</p>
                        </div>
                    </div>

                    <div class="main__block__product"  >

                        <div class="product__images">

                            <div class="product__sale">
                                <i class="fas fa-percent"></i>
                            </div>

                            <img  class="product__item" src="../../assets/images/sofa.png">
                            <div class="product__levels">
                                <div class="product__level product__level--active"></div>
                                <div class="product__level"></div>
                                <div class="product__level"></div>
                            </div>
                        </div>

                        <p class="product__name">Sofa</p>
                        <p class="product__size">Размеры: 2550x9500</p>
                        
                        <div class="product__prices">
                            <p class="product__price">24 990 тнг</p>
                            <div class="product__sale">
                                <p>-20%</p>
                            </div>
                        </div>
                        <div class="product__order">
                            <i class="fas fa-cart-arrow-down"></i>
                            <p>Заказать</p>
                        </div>
                    </div>
                    <div class="main__block__product"  >

                        <div class="product__images">

                            <div class="product__sale">
                                <i class="fas fa-percent"></i>
                            </div>

                            <img  class="product__item" src="../../assets/images/sofa.png">
                            <div class="product__levels">
                                <div class="product__level product__level--active"></div>
                                <div class="product__level"></div>
                                <div class="product__level"></div>
                            </div>
                        </div>

                        <p class="product__name">Sofa</p>
                        <p class="product__size">Размеры: 2550x9500</p>
                        
                        <div class="product__prices">
                            <p class="product__price">24 990 тнг</p>
                            <div class="product__sale">
                                <p>-20%</p>
                            </div>
                        </div>
                        <div class="product__order">
                            <i class="fas fa-cart-arrow-down"></i>
                            <p>Заказать</p>
                        </div>
                    </div>
                    <div class="main__block__product"  >

                        <div class="product__images">

                            <div class="product__sale">
                                <i class="fas fa-percent"></i>
                            </div>

                            <img  class="product__item" src="../../assets/images/sofa.png">
                            <div class="product__levels">
                                <div class="product__level product__level--active"></div>
                                <div class="product__level"></div>
                                <div class="product__level"></div>
                            </div>
                        </div>

                        <p class="product__name">Sofa</p>
                        <p class="product__size">Размеры: 2550x9500</p>
                        
                        <div class="product__prices">
                            <p class="product__price">24 990 тнг</p>
                            <div class="product__sale">
                                <p>-20%</p>
                            </div>
                        </div>
                        <div class="product__order">
                            <i class="fas fa-cart-arrow-down"></i>
                            <p>Заказать</p>
                        </div>
                    </div>
                    <div class="main__block__product" >

                        <div class="product__images">

                            <div class="product__sale">
                                <i class="fas fa-percent"></i>
                            </div>

                             <img  class="product__item" src="../../assets/images/sofa.png">
                            <div class="product__levels">
                                <div class="product__level product__level--active"></div>
                                <div class="product__level"></div>
                                <div class="product__level"></div>
                            </div>
                        </div>

                        <p class="product__name">Sofa</p>
                        <p class="product__size">Размеры: 2550x9500</p>
                        
                        <div class="product__prices ">
                            <p class="product__price">24 990 тнг</p>
                            <div class="product__sale">
                                <p>-20%</p>
                            </div>
                        </div>
                        <div class="product__order">
                            <i class="fas fa-cart-arrow-down"></i>
                            <p>Заказать</p>
                        </div>
                    </div>
    </div>

    <div class="main__bottom item__column item__ac " v-bind:class="{main__bottom__anim: open_description==true}">
        <div class="main__close item__abs" @click="open_description=false">
            <i class="fas fa-times"></i>
        </div>

        <div class="main__block__title product__title">
            <div class="main__block__round"></div>
            <p>Диван Bigben</p>
        </div>

      <div class="product product__row">

          <div class="product__column produc__column__c product__gallery">
              <div class="product__item product__column">
                  <div class="product__sale">
                    <p>%</p>
                  </div>
                
                  <img  class="" src="../../assets/images/sofa.png">
              </div>

              <div class="product__row product__corousels">
                  <div class="product__corousel">

                  </div>
                  <div class="product__corousel"></div>
                  <div class="product__corousel"></div>
                  <div class="product__corousel"></div>
              </div>

              <div class="product__levels">
                <div class="product__level"></div>
                <div class="product__level"></div>
                <div class="product__level"></div>
              </div>
          </div>

          

          <div class="product__column product__info">
              <div class="product__stars main__mb__s">

                <!-- <i class="fas fa-star main__mr__xs"></i>
                <i class="fas fa-star main__mr__xs"></i>
                <i class="fas fa-star main__mr__xs"></i>
                <i class="fas fa-star main__mr__xs"></i>
                <i class="fas fa-star"></i> -->
              </div>
              <div class="product__row product__price main__mb__s">

                <div class="product__row product__row__c">
                  <p class="main__mr__xs">62 900 tng</p>
                  <p class="main__mr__xs product__price__l">42 900 tng</p>
                  <div class="product__sale">
                      <p>20%</p>
                  </div>
                </div>
                
              </div>

              <div class="product__size main__mb__xl">
                  <p class="pr__size__text">Размеры, мм</p>
                  <p class="pr__size__value">2180 X 950 X 900</p>
              </div>

              <div class="item__row item__ac">
                  <div></div>
                  <p></p>
                  <div></div>
              </div>

              <div class="pr__val  product__row product__row__c main__mb__s">
                <i class="fas fa-share-alt main__mr__s ab_center "></i>
                <p>Механизм: еврокнижка</p>
              </div>

              <div class="pr__val product__row product__row__c main__mb__xl" >
                <i class="fas fa-stream main__mr__s ab_center"  ></i>
                <p>Кожа,велюр,алькантара</p>
              </div>
              <div class="product__order">
                    <i class="fas fa-cart-arrow-down"></i>
                    <p>Заказать</p>
              </div>
             
          </div>
          


      </div>
    </div>
  </div>
</template>

<script>
 
    export default {
        data() {
            return {
                amount: 0,
                orders:[],
                count: 0,
                all_count: 0,
                isActive: true,
                open_description: false
            }
        },
        mounted() {
           
         
        },
        methods: {
            openProduct() {
                this.open_description = true;
            }
   
        }
    }
    
</script>

<style lang="scss">

  
  
    .main__bottom {
        background: white;
        box-shadow: rgba(0, 0, 0, 0.08) 0px 4px 12px;
        width: 100%;
        // height: 400px;
        border-top-left-radius: 20px;
        border-top-right-radius: 20px;
        position: fixed;
        left: 0;
        bottom: 0;
        visibility: hidden !important;
        
        .product__title {
            width: 59%;
            margin-top: 20px;
        }
        .main__close {
            cursor: pointer;
            position: absolute;
            right: 10px;
            top: 10px;

            width: 30px;
            height: 30px;
            border-radius: 15px;
            background: #ccc;
            i {
                color: gray;
            }
        }
    }
    .main__bottom__anim {
        visibility: visible !important;
        animation: mymove 1s;
        animation-fill-mode: forwards;
    }
    @keyframes mymove {
        from {bottom: -200px;}
        to {bottom: 0; background-color: white;}
    }
    // .main__top__anim {
    //     visibility: visible !important;
    //     animation: movebottom 1s;
    //     animation-fill-mode: forwards;
    // }
    // @keyframes movebottom {
    //     from {bottom: 0;}
    //     to {bottom: -200px; background-color: blue;visibility: hidden;}
    // }




    .ab_center {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .product__row__c {
    align-items: center;
  }
  .product__row__jb {
    justify-content: space-between;
  }
  .product__column {
    display: flex;
    flex-direction: column;
  }
  .produc__column__c {
    align-items: center;
  }


  .main__mr__xs {
    margin-right: 5px;
  }
  .main__mr__s {
    margin-right: 15px;
  }
  .main__mr__m {
    margin-right: 20px;
  }
  .main__mb__xs {
    margin-bottom: 10px;
  }
  .main__mb__s {
    margin-bottom: 15px;
  }
  .main__mb__m {
    margin-bottom: 20px;
  }
  .main__mb__l {
    margin-bottom: 25px;
  }
  .main__mb__xl {
    margin-bottom: 30px;
  }


  .product__row {
    display: flex;
    flex-direction: row;
    justify-content: center;

    .product__gallery {
        margin-right: 30px;
    }
    .product__item {
      padding: 20px;
      width: 650px;
      background-color: #f5f5f5;
      border-radius: 10px;
      margin-bottom: 20px;
      img {
        width: 300px;
        align-self: center;
      }
      .product__sale {
        align-self: flex-end;
        padding: 10px;
        background-color: var(--main-kenes-red);
        width: 10px;
        height: 10px;
        border-radius: 10px;
        text-align: center;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 18px;

        p {
          color: white;
        }
      }
    }

    .product__corousels {
      width:100%;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      margin-bottom: 20px;
      .product__corousel {
        padding: 20px;
        border-radius: 10px;
        background-color: #f5f5f5;
        width: 120px;
        height: 100px;
      }
    }

    .product__info {
      width: 230px;
      border-radius: 10px;
      background-color: #f5f5f5;
      padding: 20px;

      .product__price__l {
        font-size: 20px;
        font-weight: bold;
      } 
      .pr__val {

        i {
          width: 15px;
          height: 15px;
          color: var(--main-kenes-red);
          font-size: 24px;
        }
        p {
          color: #333;
        }
      }
      .product__stars {
        i {
          margin-right: 5px;
          color: #fdcc3a;
        }
      }

      .product__size {
        padding: 20px;
        background-color: white;
        border-radius: 10px;
        .pr__size__text {
          color: var(--main-kenes-gray);  
          font-size: 12px;
        }
        .pr__size__value {
          font-size: 22px;
          font-weight: bold;
          color: var(--main-kenes-blue);
        }
      }
    
    }
  }
</style>