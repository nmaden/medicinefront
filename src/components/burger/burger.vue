<!-- template -->
<template>
 
    <div>

        <header class="header">
            
                <div class="header__inner">
                    
                    <div class="header__white">
                        <div id = "header__labels" class="header__labels">
                            <i class="fas fa-bars" @click="openToggle()"></i>
                            <div class="header__logo">
                                <i class="fas fa-hamburger"></i>
                                <p>BURGERS</p>
                            </div>
                            <div class="header__menu">
                                <a    @click="changeMenu(0)" class="header__active" id="index_0">Burger</a>
                                <a    @click="changeMenu(1)"  id="index_1">Pizza</a>
                                <a    @click="changeMenu(2)"  id="index_2">Sushi</a>
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
                        <div class="header__logo--mobile">
                            <i class="fas fa-hamburger"></i>
                            <p>BURGERS</p>
                        </div>
                        <div id="header__basket" class="header__basket">
                            <p> +10892378 3278 </p>
                            <i class="fa fa-shopping-basket"></i>
                            <a>{{ count }}</a>
                            <button @click="$router.push('/busket')">Корзина</button>
                            
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
                    <i class="fas fa-times" @click="closeToggle()"></i>
                    <div class="toggle__inner">
                        <p>8 777 777 77 77</p>
                    
                        <a    @click="changeMenu(0)" class="header__active" id="index_0">Burger</a>
                        <a    @click="changeMenu(1)"  id="index_1">Pizza</a>
                        <a    @click="changeMenu(2)"  id="index_2">Sushi</a>
                        
                        <button @click="$router.push('/busket')">Корзина</button>
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
                    <div class="main__item" v-for="(item,index) in collections" :key="index">
                        <img :src="item.img">
                        <p class="main__burger_name">{{item.name}}</p>
                        <p class="main__burger_description">{{item.description}}</p>
                        
                        <div class="main__actions">
                            <div class="main__price">
                                <p>{{item.cost}}тг</p>
                            </div>    
                            <div class="busket__number">
                                <i class="fas fa-minus-circle" @click="addCount(-1,index)"></i>
                                    <p>{{ num }}</p>
                                <i class="fas fa-plus-circle" @click="addCount(1,index)"></i>
                            </div>
                            
               
                        </div>
                        <div class="main__order" @click="addOrder(index)">
                            <button>В корзину</button>
                        </div>

                    </div>
                   
                </div>
            </div>
        </main>     
    </div>            
</template>

<!-- scripts -->

<script>
    // imports libraries
    import Datepicker from 'vuejs-datepicker';
    import { ru, fa } from 'vuejs-datepicker/dist/locale';
    
    export default {
        
        components: {
            Datepicker
        },
         
        data() {
            return {
                menu_id: 0,
                all_data: [],
                amount: [],
                count: 0,
                num:0,
                collections: null,
                data: 
                [
                    
                    {
                        id:1,
                        menu: [ 
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
                                img: "https://st.depositphotos.com/1044737/1853/i/950/depositphotos_18534039-stock-photo-sliced-pepperoni-pizza.jpg"
                            },
                            {
                                id:3,
                                name:"Sushi", 
                                description:"Lorean ipnum ipnum ipnum ipnum",
                                cost:2000,
                                img: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAABqlBMVEX///8AAADPIjPyaUYAgAD66AsAfgAAdwD0bEfPz8/NHTIAfQD29vbz8/Ps7Oz6+vqWlpbGxsbm5uYvLy8AdAC+vr74aEhYWFienp7V1dVfX1/d3d3yZkGvr681NTX9Z0kbGxuJiYk9PT0UFBSdnZ3MABt9fX3OEiimpqbNADVJSUlvb2+QkJBSUlJ5eXlBQUH0inLRbTzkUD7xXTTAsgiz0rPm8ebN4c2RvpG0cTTmakL84NvtYUPMAB7VLzYlJSXLAA7XUi3997lQnFBLfBX66ib+/Obe7N4sjiw9lD2Et4Sfxp++2b40mkhZexr6xryXdCvLbjv2opDzeVv4sKE2fQ+lcjBreR/zdFSIdif839nz0tVzeCDijJJtqW0PjybWT1qBOCXuvsGpSTHdc3vle3bSMkHjjCT11RHrrR3edyjwwxf98QX99qDcbSn6z8d0Xln88H/noaaFj0y3sn3//+JEPwNvMh/fzwp+PD1sZAVWDhWWGSX97lMzNUg2CQ16eWlyExz760A0MAKVigaPjXEaLy799rH77mX++c1gj0G8p6ncur2qHCrmyA7JAAAMCElEQVR4nO2d/1/bxhnHZfPNBn+TjfE3RDAYsDEQggMkMQYSEgJJlqQkabMw0jRlSdqRdWHfuq1d16zb0m39n3eSTtLdSbJ1kvxtr+f9Q2osZN+H5+65e557dBUEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACA/0OSYimf2pmeTk0trmTFWLeb4ysxsVydCTCkiuFut8sXYmIiP8uK05hd6m9LRtKJjKEmm0RvxcqzgYwYVV8o5PvWkFEpQ1qrqF8oaC+W8KUZsSsN9EZcWpbbviwVkrmEbKyscW3j9u0N9VUsXE6pI7LfNIp5tf8l8c9SIK9fWz8YQRysoz4ckX9OYzvmutFQl5R31EanjbcKmtaNw5HhQcTwyMHg+Mind5AxY7iv5vvF56S1gWdllPXxsUGSsfG7SL4+VOMdb60Lqlpz0xYX744PsozfEYR53R1JHW8vL5Epra0Fi6v3zAKRxHt6P5WHo9V9vURKa6mFb7x7MGYhELEuLBKzynxPd9VlvZmmS5uDqouxYORgI5wnNFr17x6hpDcywl7atNUn+5vhDSFHLOwyvepVjeG0wly5dzBir0+WeICWQBcJM5a7IqAlGRsTxveaGVDtqGgBIBSWp3VHdTFp/R1dJawLzNMXDm08DMHwz/DvxgtF/CGljgtoiRH+0X3sSvMeKnP/6rVabfWB+vtxPD3O9NpoNExIO8MNC4FIEeLqfaWDPvzo2sTEwMDAZG3gaPXR6uO6IPbm/L9oo3DdpPDJpQuyooGJC5eeDH6sqMNMytSOhBwe0vlemhtzhCekhtAddhTeNDRNDFwi9Ok6n8aFpKpxtoeWOOSUnSEvPGcUjpklmSQ+QvcVe2zeSAZIosQVVuFVC6ux1GSngzMA1W5JoklPUwrJGf8KqfCTqx85EIj6qXyn5lNNC6QukA0wEF5w0wgoPrl2YcKJQGREpRdo83/3p40kKzAQSBhXD7QFzc8vOFKnKHwm36mHxl33NxmzwsC0pP3lNSPedy4QKxSERG9IzFkIlFnG13Fkf82ZuFBoa2urVo8cH9fRvTEckHV6mRpLS6WylEPzcSQaiyzaKAxov35vcGRs8BfNTBgKDWxtDYTkV2vbo4jG7tzcbvDkWAvJZjvpbsR5PZRL2WbrFYxc1PrzTy1niVBI/WdtOzg6GtzeCg1sjwYNFuZe1AVJ8dMXOyUvN99Uk3U3VVidNOsbkA0W3F6T5cmMIqU0C7vIjKKcnjSnDXynIM1PtRRFQyS6LRSGsLLR0WATduXhKPuy9iY3klK+pRwriDXXEaswtNZUmWFGZEUlxRW1bZ5XwsVpWwktRmIgr/v5r2qMwi1nAlUrylNjm4ZieMXc7ExCKhfR2FhCPnynlRmnihJSGRerjA1D204VLrwQ1H665L+85BLd2tlqcam6gntLWP5vuZVAg8+oQNC5CYPBuZfy5k7AeqPACyIz9nYsxrpzgYHA57rE2uqjWqtROGo4oIVTvKyY9Vcf6zhxGBOJEpOvacnd3IqTtUnZfiiKF579cqGZvkpl+/papYInkVfoq6LZgK+hFK1vpZzOqnu4Dx7VarWnj3F2Ic4lEDn8B6sovH0s+3/hvMHYrIKsVqng16/fDJ2dDX2xXUFvox+Vb4tm/JsycpQ+w+XXB2qKv5isqXmxkp0UG0gTvGzQ+r781dDZ0JvXct+sXEcvZc7OXqtvv1XvQaPel8xNpEq2KmVEZ89quj+sPUY/RzkFUgvo+hwpcO0N1jT068rodfW1qhG/uKHcJLG5WFcY7nEnk8kb7qtOzWi1um1M0QRyHfeCGHXXhwxNX1beDFmgmnHFaleLj4LeQalKl/oRGn/kdDa5ym/BAJUOP97VLXid0vLFmZVC1YxRI2Jxie4cp6g10uOaaVU5+Rs3CgNTRjB7okmsWCsy8U6QZ/4i22YeonqoN0W9f8SuuBATn7lSSAYJ57vKjFGxM5qZD/tZT9EwkZjXP+X2ncOD31oFr6HPXSoMzOpDKXYanJube+VUn8zvTBs/HCSMRmg9YWNvfGyYyT8oaYZQKOTWhoiM4b9i9ejveRQO/cG1ESPLRBNwC26PycnOm6QJUdQqL6i21yb+6F6hLHI+o82zP3Ip/Nq8AesMw/XvrJS0wpZBJRH4kFgyo6AOr6SCf/KkUCbiRuHZny020R0gad86Q1QK4k0VIsNCRa1/8aoQuzO+Xjp02dW2W1H7Uuzo4kpxHc7HE8OQDnm8KgzMqN92i5bw9paVMLKb8vsafZmmxpibe3Jx3SFOVhPDkIlav/EuUZl131IKbgn7rRRyz/p6GK+60Odq8dkwzsYTw5CNWj0rxB2OMtq+IOw3s+K3f+X2ptosMat270Nm05YYhmzU+p0PEgPVRPlvX+tz/q19pRE3PqDX77+1Uvg2xxvsa14Uz4F77J6todCUHfveD4UKl5Ug4uzsHd22G+/NCveFHc7lN86W4dzmXdO2+0N7hX50U8zff7j89eUf/iEmk8xUwPbYd7Jf5FKIo1jsniLmygljz8is8Hv/JBow24W033kvyPEdV/G7+qnTcTsTErOFWeGLf7ZDItN+0oofBEUhz26bRP/dTKNw8CG1oGEUBqXmbXUJ+4DCv7DL+fCj8uM8166wGi/pW7Z7TAXak2sTzRQ2eHNRjmFTTvsI7TXXfIgDdT2/w9iQKQ0xZXFfCTx7UVwkbNssBhY5FKp150ZQytT3MJt+IUbgwglZwewz09mC9Qo7xbXTVlQ+zJhANylPc5MOfUOm3b1zoX1GVDH7lGW+rKk6DImcDFWMTZvQYi+l8erYVULKOVNMg2PyPhvPok39GOKN2yN2JrTe79s9XmraQs9cpHPAU0x7WxEzKST76cekCUM2m0UNi2oafyEXMEphS0ZwDp7OKKsb3fQSNQot9ckbQxw7bO7Q3WqUmdscgANDauQe6lMimYGy39Cci7fcJfVKKi17ioI2HnjWbPgWyuxGqR1lQ9vtvsbLsF3LfGSaKOXnEKhPZqRPNsqWSVdqv6HZOBeqVm1qGzxZGv2PT1W+6KXnRCVak8KJxksh0kmB7PzRFMNHUKW4zzWJl5qEhsY4lGt6OqiQK4NBTGWU6deHR8YQI/+2T2AQNpTvaPPKhoCvIIMqzlY9VFhdC967s7d3ZVOo63tOk3bb7o0T5Qbb8j2f4Vl0m5o1mynmp5nptP5I0ThZe3pqJxGvOUznCbQHzsKolNVnVOll0ldHT2uh1QdCxFrhghaMti/IIOF9dt/mY0raH4pK2tUXNI0LDf1VsI6vii3Kv/yBZ73WTCHq7SWxkC7Six3pP6dzSORCY/ckqnbZhd1TZO8w+tUl3qpFl/Cm8x2kIKqqb44X5KMB5v97fvri9DwixFa+++an0Z9OjiPh8sXWH+IfvDvcjpIsM8VEUVcxs5LNlqqWw7cj8BYMtS2N1DZ4Nw7bHJ77D3dZW98p5H7sojNTmH8st5bU5wr5C2j7TCH3dN93Cl08/NRfCt3UB/eXQjdPIfbVbOHqUYSOple84kZgX63a3JWw95FC/sm+3xS6fNi5fxRmW4vpb4UzLgXyPbXUTdw/kN/tljvEw9kYHcmPecbLYzJt3/jzBS+POnUvpcSBp/MUOpSJ94S3o5Q6tZ3iAY+P4fe+QperNZ1ut78lKY8Ce1+h50MGOrSfgsgU3dzl/cyWztVQ7LjZ6vfhRLoOFhgIQozXr3EVXdjRuQlR/jbOkmlfTlDoWLZNdYoRnmHhx1PbguUxXW1Be2RQdL4U9usMs3ixfbIIjAoDp13V0wPNjMZcOi22eXVDVcE4O4nBP4GYnLtDhBzCTGzZ1oFpO84uZQ+j8RFzFUy6ReDmeblmg9ieJYBlmU+u6Xe175C9uGhxapI3Fu0Wl9Gs7flTbT61NJfwr0ZmttjUGmFrQ7p7HJ2LqFj0I4cz76AMLW12cR0QqBAVl7zMIc7/V0cRaZm6s7NHQBek4iJ/zjE1n+aL7KJlLZCbLnXjyNlYLp1dyThKzM3ki1LBVdwaS4rpdLjbx83GkoVcLqwipqVsQqFUypaltBgudLt5AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAATvkf4ORV7GNyIQkAAAAASUVORK5CYII="
                            }
                            
                        ]
                    },
                    {
                        id:2,
                        name:"Burger", 
                        description:"Lorean ipnum ipnum ipnum ipnum",
                        cost:2000,
                        img: "https://i2.wp.com/freepngimages.com/wp-content/uploads/2016/11/bacon-burger.png?fit=1000%2C1000"
                    },
                    {
                        id:3,
                        name:"Burger", 
                        description:"Lorean ipnum ipnum ipnum ipnum",
                        cost:2500,
                        img: "https://i2.wp.com/freepngimages.com/wp-content/uploads/2016/11/bacon-burger.png?fit=1000%2C1000"
                    }
                ],
                data_all: 
                [
                    {
                        id:1,
                        menu: [
                             {  id:1,
                                name:"Огненный", 
                                description:"Котлета из говядины,помидор,свежий огурец,салат айсберг,красный лук,сметана,сырный соус",
                                cost:700,
                                img: "https://i2.wp.com/freepngimages.com/wp-content/uploads/2016/11/bacon-burger.png?fit=1000%2C1000"
                            },
                            {
                                id:2,
                                name:"Картавый", 
                                description:"Котлета из говядины,помидор,свежий огурец,салат айсберг,красный лук,сметана,сырный соус",
                                cost:800,
                                img: "https://i2.wp.com/freepngimages.com/wp-content/uploads/2016/11/bacon-burger.png?fit=1000%2C1000"
                            },
                            {
                                id:3,
                                name:"Вкусныкис", 
                                description:"Котлета из говядины,помидор,свежий огурец,салат айсберг,красный лук,сметана,сырный соус",
                                cost:500,
                                img: "https://i2.wp.com/freepngimages.com/wp-content/uploads/2016/11/bacon-burger.png?fit=1000%2C1000"
                            },
                            {
                                id:4,
                                name:"Брутал", 
                                description:"Котлета из говядины,помидор,свежий огурец,салат айсберг,красный лук,сметана,сырный соус",
                                cost:900,
                                img: "https://i2.wp.com/freepngimages.com/wp-content/uploads/2016/11/bacon-burger.png?fit=1000%2C1000"
                            },
                            {
                                id:5,
                                name:"Пухлый", 
                                description:"Котлета из говядины,помидор,свежий огурец,салат айсберг,красный лук,сметана,сырный соус",
                                cost:650,
                                img: "https://i2.wp.com/freepngimages.com/wp-content/uploads/2016/11/bacon-burger.png?fit=1000%2C1000"
                            },
                            {
                                id:6,
                                name:"Дерзкий", 
                                description:"Котлета из говядины,помидор,свежий огурец,салат айсберг,красный лук,сметана,сырный соус",
                                cost:800,
                                img: "https://i2.wp.com/freepngimages.com/wp-content/uploads/2016/11/bacon-burger.png?fit=1000%2C1000"
                            }
                        ]
                    }, 
                    {
                        id:2,
                        menu: [
                             {  id:1,
                                name:"Pizza 1", 
                                description:"Пепперони из цыпленка, томаты, увеличенная порция моцареллы, томатный соус",
                                cost:1500,
                                img: "https://st.depositphotos.com/1044737/1853/i/950/depositphotos_18534039-stock-photo-sliced-pepperoni-pizza.jpg"
                            },
                            {
                                id:2,
                                name:"Pizza 2", 
                                description:"Пепперони из цыпленка, томаты, увеличенная порция моцареллы, томатный соус",
                                cost:2000,
                                img: "https://st.depositphotos.com/1044737/1853/i/950/depositphotos_18534039-stock-photo-sliced-pepperoni-pizza.jpg"
                            },
                            {
                                id:3,
                                name:"Pizza 3", 
                                description:"Пепперони из цыпленка, томаты, увеличенная порция моцареллы, томатный соус",
                                cost:2500,
                                img: "https://st.depositphotos.com/1044737/1853/i/950/depositphotos_18534039-stock-photo-sliced-pepperoni-pizza.jpg"
                            },
                            {
                                id:4,
                                name:"Pizza 4", 
                                description:"Пепперони из цыпленка, томаты, увеличенная порция моцареллы, томатный соус",
                                cost:2500,
                                img: "https://st.depositphotos.com/1044737/1853/i/950/depositphotos_18534039-stock-photo-sliced-pepperoni-pizza.jpg"
                            }
                        ]
                    }, 
                    {
                        id:3,
                        menu: [
                            {  id:1,
                                name:"Sushi 1 ", 
                                description:"Креветки, сыр, кимчи, огурцы, унаги, рис.",
                                cost:1500,
                                img: "data:image/png;base64,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"
                            },
                            {
                                id:2,
                                name:"Sushi 2", 
                                description:"Креветки, сыр, кимчи, огурцы, унаги, рис.",
                                cost:2000,
                                img: "data:image/png;base64,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"
                            },
                            {
                                id:3,
                                name:"Sushi 3", 
                                description:"Креветки, сыр, кимчи, огурцы, унаги, рис.",
                                cost:2500,
                                img: "data:image/png;base64,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"
                            },
                            {
                                id:4,
                                name:"Sushi 4", 
                                description:"Креветки, сыр, кимчи, огурцы, унаги, рис.",
                                cost:2500,
                                img: "data:image/png;base64,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"
                            }
                        ]
                    }, 
                      


                ]
                
                
                
            }  
        },
        
        mounted() {
            this.collections = this.data_all[0].menu;

            window.onscroll = function() {
                let left_side = document.getElementById("header__labels");

                let right_side = document.getElementById("header__basket");

                if(window.pageYOffset > right_side.offsetTop+100) {
                    right_side.classList.add("sticky");

                    left_side.classList.add("sticky");
                }
                else {
                
                    right_side.classList.remove("sticky");

                    left_side.classList.remove("sticky");
                }
            };

            let all_count = localStorage.getItem("all_count");
            if (all_count!==null && all_count!="") {
                this.count = parseInt(all_count);
            }

            else {
                this.count = 0;
            }
        },
        methods: {
            addPlus() {
                this.num++;
            },
            addMinus() {
                this.num--;
            },
            openToggle() {
                document.querySelector('.header__toggle').style.display = "flex";
                document.querySelector('#body').style.cssText = "overflow-y: hidden";
            },
            closeToggle() {
                document.querySelector('.header__toggle').style.display = "none";
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
            changeMenu(id) {

                this.menu_id = id;

                
                for(let index = 0; index < this.data_all.length; index++) {
                    if(index==id) {
                        document.getElementById("index_"+index).classList.add("header__active");
                    }
                    else {
                        document.getElementById("index_"+index).classList.remove("header__active");
                    }
                }
                this.collections = this.data_all[id].menu;
            },
            addOrder(index) {
                
              

                let orders = JSON.parse(localStorage.getItem("order"));
                
                
                if(orders==null) {
                    this.all_data[this.menu_id] = [];

                    console.log("11");
                }
                else if(typeof orders[this.menu_id]==='undefined') {   
                    
                    console.log("22");
                    this.all_data[this.menu_id] = [];              
                   
                }
                else {

                    console.log("33");
                    
                    this.all_data = orders;
                }

     
             

                this.count = this.count+1;
                localStorage.setItem("all_count",this.count);
                
                this.amount.push(parseInt(this.data_all[this.menu_id].menu[index].cost));

                
                let object = {
                    name: this.data_all[this.menu_id].menu[index].name,
                    cost: this.data_all[this.menu_id].menu[index].cost,
                    id: this.data_all[this.menu_id].menu[index].id,
                    description: this.data_all[this.menu_id].menu[index].description,
                    counter: 1,
                    img: this.data_all[this.menu_id].menu[index].img
                };


                
                let pivot = 0;

                if(this.all_data[this.menu_id].length>=1) {
                    let exist = this.check__exist(this.all_data[this.menu_id],this.data_all[this.menu_id].menu[index].id);
                  
                
                    if(exist[0]==true) {
                       
                        pivot = exist[1];
                        
         
                        this.all_data[this.menu_id][pivot].counter = this.all_data[this.menu_id][pivot].counter +1;
                        
                        
                    }
                
                    else {
                        this.all_data[this.menu_id].push(object);
                    }
                }
                else {  
               
                    this.all_data[this.menu_id] = [];
                    this.all_data[this.menu_id].push(object);
                }

                localStorage.setItem("order",JSON.stringify(this.all_data));

                console.log("there data");
                console.log(JSON.parse(localStorage.getItem("order")));

                
               
                // localStorage.setItem("counter",this.all_data[pivot].counter);

                let ready_order = localStorage.getItem("order");
            
                let sum_of_data = 0;
                let a = 0;



                let array = [];

                orders = JSON.parse(localStorage.getItem("order"));

                
               
                for (let index = 0; index < orders.length; index++) {
                
                    this.calc_sum(orders[index]);
                
                }
          
             
            },

            calc_sum(array) {

                let menu = [];
                let amount = 0;

               
                if (localStorage.getItem("amount") !== null) {
                    amount = parseInt(localStorage.getItem("amount"));
                }
                
            
                for (let index = 0; index < array.length; index++) {

                    amount= amount+array[index].counter*array[index].cost;
                   
                }

              
                  
                localStorage.setItem("amount",amount);

            

            },
            check__exist(all_data,id) {
               
                let truefalse = [];
                let indexes = [];
                for (let index = 0; index < all_data.length; index++) {
                
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
.sticky {
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 999;
}
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
.box {
    width:150px;
    height:50px;
    background-color:green;
    display:none;
    position:absolute;
}
.sticky {
    z-index: 40;
    position: fixed;
    top: 0;
    width: 100%;
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
.header__toggle a {
    padding: 10px;
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
    width: 440px;
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
    z-index: 40;
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
    z-index: 40;
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
    color: red;
}
.header__toggle button {
    z-index: 40;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-self: center;
    align-items: center;
    width: 120px;
    height: 33px;
    border-radius: 20px;
    background-color: yellow;
    padding: 5px;
    font-size: 20px;
    
    border: none;
    color: red;


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
   cursor: pointer;
   margin-right: 50px;
   text-decoration: none;
   font-weight: bold;
}
.header__active {
    background-color: red;
    
    color: white;
    padding: 10px;
    border-radius: 20px;
    padding-left: 25px;
    padding-right: 25px;
}
// .header__menu a:hover {
//     color: red;
// }


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
    width: 1040px;
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    // justify-content: space-between;
    
}
.main__item {
    width: 160px;
    background-color: white;
    // text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    border-radius: 5px;
    padding: 35px;
    margin-bottom: 15px;
    margin: 15px;
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
.main__burger_name:after {
     content: "";
    width: 160px;
    height: 3px;
    display: block;
    background-color: red;
    margin: 15px 0;
}
.main__burger_description {
    color: black;
    font-size: 15px;
    margin-bottom: 10px;
    margin-left: 25px;
}
.main__actions {
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 160px;
    justify-content: space-evenly;
    margin-bottom: 10px;
    
   

}
.main__price {
    width: 2px;
    height: 20px;
    padding: 10px;
    border-radius: 25px;
    // background-color: red;
    display: flex;
    justify-content: center;
    flex-direction: row;
    color: white;
}
.main__price p {
    margin-right: 30px;
    color: red;
    font-size: 20px;
    // padding: 3px;
}
.main__order button {
    width: 120px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: 10px;
    border-radius: 25px;
    color: red;
    background-color: white;
    border: 1px solid red;
    font-size: 15px;
    outline: none;

}
.main__order button:hover {
    background-color: yellow;
}
.busket__number {
    display: flex;
    flex-direction: row;
}
.busket__number i {
    color: red;
    
}
.fa-plus-circle {
    margin-left: 5px;
}
.fa-minus-circle {
    margin-right: 5px;
}

@media screen and (max-width: 600px) {
  .header__inner {
      flex-direction: row;
  }
  .header__labels {
      width: 100%;
  }
 
  .fa-bars {
      display: block;
      font-size: 22px;
      padding: 15px;
  }
  .fa-shopping-basket {
      margin-left: 320px;
  }

  .header__basket button {
      display: none;
  }
  .header__text {
      display: none;
  }
  .header__logo--mobile {
      display: flex;
      flex-direction: column;
  }
  .header__basket {
      flex-direction: column;
  }
  .header__basket a {
      padding: 10px;
      margin-left: 320px;
      
  }
  .header__basket p {
      display: none;
  }
  .header__info {
      justify-content: flex-start;
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
      margin-top: -200px;
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
      .header__info {
          margin-top: -65px;
          margin-right: 20px;
      }
  }
  @media screen and (max-width: 320px) {
      .header__burger {
          margin-top: 80px;
      }
      .header__info {
          font-size: 25px;
          margin-right: 20px;
      }
      .header__huge {
          font-size: 25px;
      }
  }
   @media screen and (min-width: 400px) {
       .header__info {
          margin-top: -65px;
          margin-right: 20px;
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
      .header__info {
          margin-top: -10px ;
      }
  }
}

</style>    