<template>
  <div>
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
                    <div class="main__block__product" @click="$router.push('/kenes/product-1')">

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
                    <div class="main__block__product" @click="$router.push('/kenes/product-1')">

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
                    <div class="main__block__product" @click="$router.push('/kenes/product-1')">

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
  </div>
</template>