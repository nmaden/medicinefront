<template>
  <div>
      <div class="main__block__title">
                    <div class="main__block__round"></div>
                    <p>Диван Bigben</p>
      </div>

      <div class="product product__row product__row__jb">

          <div class="product__column produc__column__c">
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

                <i class="fas fa-star main__mr__xs"></i>
                <i class="fas fa-star main__mr__xs"></i>
                <i class="fas fa-star main__mr__xs"></i>
                <i class="fas fa-star main__mr__xs"></i>
                <i class="fas fa-star"></i>
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
</template>

<style lang="scss">
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