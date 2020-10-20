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
                                <a    @click="changeMenu(0)" class="header__active" id="index_0">Бургеры</a>
                                <a    @click="changeMenu(1)"  id="index_1">Пиццы</a>
                                <a    @click="changeMenu(2)"  id="index_2">Суши</a>
                                <a    @click="changeMenu(3)"  id="index_3">Напитки</a>
                                <a    @click="changeMenu(4)"  id="index_4">Соусы</a>
                                <a    @click="changeMenu(5)"  id="index_5">Закуски</a>
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
                        <!-- <img src="https://i2.wp.com/freepngimages.com/wp-content/uploads/2016/11/bacon-burger.png?fit=1000%2C1000" alt=""> -->
                        <div class="header__arrow">
                            <i class="fas fa-chevron-circle-left"></i>
                            <i class="fas fa-chevron-circle-right"></i>
                        </div>
                </div>
                <div class="header__toggle">
                    <i class="fas fa-times" @click="closeToggle()"></i>
                    <div class="toggle__inner">
                        <p>8 777 777 77 77</p>
                    
                        <a    @click="changeMenu(0)" class="header__active" id="index_0">Бургеры</a>
                        <a    @click="changeMenu(1)"  id="index_1">Пицца</a>
                        <a    @click="changeMenu(2)"  id="index_2">Суши</a>
                        <a    @click="changeMenu(3)"  id="index_3">Напитки</a>
                        <a    @click="changeMenu(4)"  id="index_4">Соусы</a>
                        <a    @click="changeMenu(5)"  id="index_5">Закуски</a>
                        
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
                                {{ current_counters}}
                                    <p>{{ current_counters[menu_id][index] }}</p>
                                <i class="fas fa-plus-circle" @click="addCount(1,index)"></i>
                            </div>
                            
               
                        </div>
                        <div class="main__order" @click="addOrder(index)">
                            <button>В корзину</button>
                        </div>

                    </div>
                   
                </div>
                <div class="main__class">
                    <div class="main__contact">
                        <div class="main__order">
                            <p class="main__info">Вы можете забрать свой заказ сами</p>
                            <p>Мы ответим на все вопросы,просто оставьте заявку и мы свяжемся с вами.</p>
                            
                        </div>
                        <div class="main__location">
                            <i class="fas fa-map-marker-alt"></i>
                            <div class="main__street">
                                <p>Актобе</p>
                                <p>Маресьева 105</p>
                            </div>
                            <i class="fas fa-phone-square-alt"></i>
                            <p>+77472189037</p>
                            
                        </div>
                        <div class="main__social">
                            <img src="https://pngicon.ru/file/uploads/vk-256x256.png" alt="" @click="addVK()">
                            <img src="https://cdn.icon-icons.com/icons2/1582/PNG/128/instagram_108043.png" alt="" @click="addInstagram()">
                            <img src="https://s1.iconbird.com/ico/2013/9/449/w256h2561380452221Facebook.png" alt="" @click="addFacebook()">
                            <img src="https://s1.iconbird.com/ico/1012/PlexIcons/w512h5121350249248gmail.png" alt="" @click="addGmail()">
                        </div>
                        <button>СВЯЗЯТЬСЯ С НАМИ</button>
                    </div>    
                    <div class="main__img">
                        <img src="https://sun9-39.userapi.com/gcCsI6IXkOhWn7zuOabDn_BDl8CjtvJIWFayFw/foqzF-tJpe4.jpg" alt="">
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
  
    export default {
        
        components: {
            Datepicker
        },
         
        data() {
            return {
                current_counters: [],
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
                                img: "data:image/png;base64,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"
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
                                description:"Котлета из говядины,помидор,свежий огурец,салат,красный лук,сметана,сырный соус",
                                cost:700,
                                img: "https://i2.wp.com/freepngimages.com/wp-content/uploads/2016/11/bacon-burger.png?fit=1000%2C1000"
                            },
                            {
                                id:2,
                                name:"Картавый", 
                                description:"Котлета из говядины,помидор,свежий огурец,салат,красный лук,сметана,сырный соус",
                                cost:800,
                                img: "https://i2.wp.com/freepngimages.com/wp-content/uploads/2016/11/bacon-burger.png?fit=1000%2C1000"
                            },
                            {
                                id:3,
                                name:"Вкусныкис", 
                                description:"Котлета из говядины,помидор,свежий огурец,салат,красный лук,сметана,сырный соус",
                                cost:500,
                                img: "https://i2.wp.com/freepngimages.com/wp-content/uploads/2016/11/bacon-burger.png?fit=1000%2C1000"
                            },
                            {
                                id:4,
                                name:"Брутал", 
                                description:"Котлета из говядины,помидор,свежий огурец,салат,красный лук,сметана,сырный соус",
                                cost:900,
                                img: "https://i2.wp.com/freepngimages.com/wp-content/uploads/2016/11/bacon-burger.png?fit=1000%2C1000"
                            },
                            {
                                id:5,
                                name:"Пухлый", 
                                description:"Котлета из говядины,помидор,свежий огурец,салат,красный лук,сметана,сырный соус",
                                cost:650,
                                img: "https://i2.wp.com/freepngimages.com/wp-content/uploads/2016/11/bacon-burger.png?fit=1000%2C1000"
                            },
                            {
                                id:6,
                                name:"Дерзкий", 
                                description:"Котлета из говядины,помидор,свежий огурец,салат,красный лук,сметана,сырный соус",
                                cost:800,
                                img: "https://i2.wp.com/freepngimages.com/wp-content/uploads/2016/11/bacon-burger.png?fit=1000%2C1000"
                            }
                        ],
                        
                    }, 
                    {
                        id:2,
                        menu: [
                             {  id:1,
                                name:"Карбонара", 
                                description:"Ветчина из цыпленка, сыры чеддер и пармезан, моцарелла, томаты черри, красный лук, чеснок, сливочный соус, итальянские травы",
                                cost:1500,
                                img: "https://cdn.dodostatic.net/static/Img/Products/28b0f2c4fd4649778f34d551046a6679_292x292.jpeg"
                            },
                            {
                                id:2,
                                name:"Пепперони Фреш ", 
                                description:"Пепперони из цыпленка, увеличенная порция моцареллы, сладкий перец, томатный соус                                         ",
                                cost:2000,
                                img: "https://cdn.dodostatic.net/static/Img/Products/82f4f03b573a424097c5f8eb1deb5fcc_292x292.jpeg"
                            },
                            {
                                id:3,
                                name:"Четыре сезона", 
                                description:"Моцарелла, ветчина из цыпленка, пепперони из цыпленка, кубики брынзы, томаты, шампиньоны, томатный соус, итальянские травы",
                                cost:2500,
                                img: "https://cdn.dodostatic.net/static/Img/Products/Pizza/ru-RU/6ac452f3-8849-4fd0-abf9-a4c136d70d24.jpg"
                            },
                            {
                                id:4,
                                name:"Мексиканская", 
                                description:"Острый цыпленок, томатный соус, сладкий перец, красный лук, моцарелла, острый перец халапеньо, томаты, соус сальса",
                                cost:2500,
                                img: "https://cdn.dodostatic.net/static/Img/Products/Pizza/ru-RU/a9420141-bc8f-42ce-b711-4fdb4d93739c.jpg"
                            }
                        ]
                    },
                    {
                        id:3,
                        menu: [
                            {  id:1,
                                name:"Дуэт (20 шт)", 
                                description:"Поцелуй гейши, Хоккайдо",
                                cost:1500,
                                img: "http://sushi-sun.kz/img/set-duet.jpg"
                            },
                            {
                                id:2,
                                name:"Солнце (40 шт)", 
                                description:"Поцелуй гейши, калифорния темпура, маки с огурцом, маки с крабом",
                                cost:2000,
                                img: "http://sushi-sun.kz/img/set-sun.jpg"
                            },
                            {
                                id:3,
                                name:"Друзья (50 шт)", 
                                description:"Поцелуй гейши, Камчатка, Калифорния Темпура, Вулкан",
                                cost:2500,
                                img: "http://sushi-sun.kz/img/set-friends.jpg"
                            },
                            {
                                id:4,
                                name:"Семья (50 шт)", 
                                description:"Поцелуй гейши, Филадельфия оригинал, Камчатка, Калифорния Темпура, Вулкан",
                                cost:2500,
                                img: "http://sushi-sun.kz/img/set-family.jpg"
                            }
                        ]
                    },
                    {   id:4,
                        menu: [
                            {  id:1,
                                name:"Coca-Cola", 
                                
                                cost:250,
                                img: "https://kubarik.kz/upload/iblock/676/676db285d75bcfc3b8b64e56903ba349.jpg"
                            },
                            {
                                id:2,
                                name:"Pepsi", 
                               
                                cost:250,
                                img: "https://mdb.kz/img/uploads/provider_products/b9/50/ea/9501/main.575x440s.jpg"
                            },
                            {
                                id:3,
                                name:"Sprite", 
                               
                                cost:250,
                                img: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMTEhIRExMSExMXGBAWGBIYFxYYFRUVFxIWGBUWGBcYHCggGRolGxYVITEhJSkuLjAuFx8zODMsNyktMCsBCgoKDg0OGxAQGy0iHyYtLi8tLS0tLSstLS0vLy0tLS0tLS0tLS0tLS8tNSsvLy0tLS0tKzU1LS0tLS0tLS0tLf/AABEIAMsA+AMBEQACEQEDEQH/xAAbAAEAAwEBAQEAAAAAAAAAAAAABQYHBAMCAf/EAEgQAAIBAgMEBwQGBAsJAAAAAAABAgMRBBIhBTFBUQYHEyJhcYEUMpGhI0JScrHRNZLB8DNTYoKisrPCw9LxFiRDY3ODk6O0/8QAGgEBAAMBAQEAAAAAAAAAAAAAAAIDBAUBBv/EADcRAQACAgAEAgkDAgUFAQAAAAABAgMRBBIhMQVRIjJBYXGBobHBE5HRI/AkMzRCUhRywtLxBv/aAAwDAQACEQMRAD8A3EAAAAAAAAAAAAAAABDdJtueywg1HPKcsqV7JWV238tPEjadM3E5/wBGsTEbmZUPGdZOKT7tOglaT1jNvu1FH7fiQ55c2fEc3lH7T/LjfWpi03enh3ZJ+7UW+/8AzPAc8vY8QzeUftP8rV0N6dvGVewnSUJNSalFuzcd6afhre5KtttXDcbOW/JaF3JugAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAKR1ipyq4OC4+0v9Xsn+ZXdzPENzakR7/wzPbWHdN2bW6S0vxqKX7CtybejOkBVrJt+Nl8L/mE4iVx6r7+30Hw+mv/AOCf7USr3W8HP+Ir8/tLcS59CAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAKL1t0pRwksQqklKHZwhSSSjKdWrCF5Tiu0Ss90ZJPLrcjadRtRnrXl559nX+VL2zsKrRdKOeTbgpStKdlJu1kr7tHvuZMvoz0cvPWcdunXaMlgZtyjepbK3dZt+nMrm0+SmbzPsj9li6oNifTVq3b1M9OVO8HGDjKE4yX1k5QektYtcjXitzQ6PB2pl9LliJhr5c6AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAApPWms9HDYdPWrXptr+TBN/wBd0yjPPo682Lj76xcnttOnn0ko3qR8IpfNkckblXxFd2RuCwqdRJ7ndfJkax1UUrHN1dfV9QVLF4mF334x08ac5Wt6TfwPcHozNVvAeha2NoJqdMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUfbcu22pRp740IpvwnJdo/kqRmv6WWI8nNzT+pxVa+yvX5/3p9bYd60/DKv6KFu6WX15cVPSUXyaPI7q46Tt8qr2OPp1PqyaT8pLKzyZ5ckSjv8AT4iJ82imt1gAAAAAAAAAAAAAAAAAAAAAAAAAAAADxxmJjSpzqzdoQjKUnyUVdnkzqNy8taKxuVB6HTlUq1sRP3p5pNcnOV0vRK3oZcXXdvNyuDmb3tkn2/39nTjXepN/ypfJ2JT3WX62l4DSLj2vrlfFHlo2pzddSvuwcd21CE+KWWXmv3T9TRWdw6uHJz0iUiSWgAAAAAAAAAAAAAAAAAAAAAAAAAAAM861ekWRU8HDvSnapUV91NPuRfnJX8oeJRnnccrneI5orTk8/s+Oi1eUMOqjjGObNLe/dWi/Bv1I0jlqq4W0xj5tIWn0jqS17KGt377/AMpV+rLNHFWn2fV0U9q1HvpR/Xf5HsZPcnGW0+x8YutVlG/ZwXhnb/uibyjebzHb6unoN0jdLFez1VlhV7qd9FU+rw47vNonhv10t4HNNb8k9p+7UjU7IAAAAAAAAAAAAAAAAAAAAAAAAAAHPj8ZCjSqVpu0IRlOT8Iq7suL8DyZ1G3lrRWNyxXCUKmOxU6sl3qks83vyQ0Sin4LLFeRljd52+dtFuIy/wB9IWjpNi40aHYx0lNZFH7MFo/lp6k8k6jTXxF4pTlj2/ZV8KjKwVS2HiShqpCQiromuV3buHt3lo1xRXPSVFvRlqfQ7bXtWFhUb767lT78Urv1TT9TdjtzV27GDJ+pSJTZNcAAAAAAAAAAAAAAAAAAAAAAAAACqdZ8mtnVUuMsOn5dvBv5Iry+qzcZaK4bTKodCdo0KVOrnlaTlD6sndJPkubZVjtER1crhM2OsW3KN6U46FTEOUJZo5YJaNc21Zrm2QydZZ+KzUtk3WXLh8TFc/gyrohS3un9kjR2nTW/N+rL8j2LR5tNcsR5/tLpjtqivrSX8yX5HvNCf69I/wDkoza206U4tKV35S/I8mNqb58c9pWXqaqO2Mi/dTw7S8X2qb/or4GnD7XS8PvFotET5NKL3RAAAAAAAAAAAAAAAAAAAAAAAAABVOs79H1PvUf7RFeX1WLxH/Tz8vuoPQzZMq97pqkpd6XPT3Vzb+XwvyuL4uuCvT1vZH5/vu5nh3B2z26x6Ptn8R/fRccZSq5tMyS5VEtLcsmm7gfKcRfDz+lrev8Ajv8A8n1lMebXTev+6P8A1fFNVY30vf7U720W7u83L4L0yXnBfv015V1v6+WvqupXNT2b+M719PPf0eUNrRbcF36iu3Cm89kucnaK14Nk7eH2iIv6tfO3o/TrM/shXj6TM0j0rR7K9fr0iPnKPq9KlFSl2FZRjLI5OySnZvK/Gybt4HRp/wDn72rFv1I1PluYc7J4/Sm947dJ111HXyfWO2pGdDPVpVqVKonBVJR7rzRe5pt7rtO1iVPBeK4e0ZKatqd+Xb4rp8V4fNimMkWrW0a3MdOvw3P0enU9G0sarp29mV1qnZ1tU+R9hgne5+H5cTwuvLN69+3b5tKNLrgAAAAAAAAAAAAAAAAAAAAAAAAAqnWd+j6v3qP9pEry+qxeIf6e3y+7OdgbTrQi8tWas1ZXbju3ZXoc+/C4b73WOvu6/v3cfh+Lz17Xnp79x+3Zc8DtqNWEpTtCUEs/K2tpLwdn8D5HxXgL4s9a06xbt/D67w7j6ZcM2v0mvf8An4Kft/pHOs3Cm3Clu5Sn4vkvD4+Hc8O8Ix8PEXydb/SPh/P7Pm/E/GcnETNMU6p9Z+Pu937vvoY8R2rVGj2qlaMrvLGO9pudrLS+m98DVx/h8cbWK71MT3V+D8TmwZJ/TrzRPf2fVd6OzqM6GGhOMazr4qUpyvJRjUjTquaS+slGjKnrvvmN+DBTDhpijrHb6S6Vq1yxE3jc2tufLfX7a19Vc6bYuUliaC7sY11UqTldRzZI06NGH/bjn3cHw1c7z1mPew8ZeZi1O0b3O/2iI+XV2dTe/GeWG/xieHvPy/KXhH+/5flpZe7IAAAAAAAAAAAAAAAAAAAAAAAAAKr1m/o+r96j/axK8vqsXiH+nt8vuy7ZC0aWrutPQzPn8PZbMdg8HhJRoYqFetWqwi5KDapxvJqCtGUXPvJ8927gStTHFo5o3MfT2OleuHB/TybmbRG9dvd5b6o3DdBazp1JTqUoVoQVT2a96mXW2Zp9y9nbf6CMc697PXwy/LM2mImOul5w9SNHH08FSpwp0exlXairN1G3TTf82PrfUuidX5Y7adasxTPGKkREa38+ypbT2/GlhMLClUXtFPE16uXflj2uIXe4K6mtN9mUzb0Y13if5c/NxUY8VYrPpRaZ+sq30j6RV8W4uq42j7sIpqCb3uzbbfi2eTabd2HPxeTPPpdvKFu6m9+M8sN/jFmHvPy/LpeEf7/l+Wlmh2QAAAAAAAAAAAAAAAAAAAAAAAAAQnTPCRq4SpTk7Julrv3VIvmuXMheN1UcRSL45rLMauzpYWtOndNxlFp7+TjfRX0twM0xyy4N8M4LzXylfHisPtGhNyhlq0FGeu+EtZJxlxi3Bprw3bi/cXj4OtF8fFUmZjrXr8HF0mxqw1fGV5OzlQpUKa4ynJycmlygsrf3lzI3nVpn3K+JyRhvfJPlER8ev2U7pL0olXxLr0c9Fdn2Kd++4ZpSbbXut34PhvKrW3bblcTx05MvPj6dNIvA7Lq1YynCN1F2bvu7rl+C+aPIiZ7M+Lh8mWOar2l0crtpJRbazLvLVWi7p7t04v1PYrK6OCy+5cOp6NnjVy9mXNaOsW4e8ul4VGuePh+Wkl7sAAAAAAAAAAAAAAAAAAAAAAAAAAgum9fJg6ss2Szo9617XqwW71t6kMk6qo4m3Ljmd67fdnuDx1PE4mEq004dxVKj7qlaFm+Fty5atmfe7dXGjJTNmibT09s9kltjbmGw8VhcHf6SVN1a7v7ilrFN79Lrkk3xekrWiOlVuXicOL+ni9sxufcgOnO1aeJxUqlJuUFGEVJq12r3aT1trxI3tFrbhh8QzUy5t07aQNKVmm1dJp24Oz3Fdo3ExHRjpaK2iZjfuSNDGwlJRdKjHNJLPJK0Lve9For39DL/ANNbcenP7uhTjMdp5f06xv2+X2SNSOHi7qWGbumrcNYrjJbsyfO0ZNXsJ4S8xr9WW2uXh6zuK12sXU/r7ZLnKjwt/GPdw3nSwRqNJeF9ee3nP8tGL3WAAAAAAAAAAAAAAAAAAAAAAAAABVOtH9G13/Kwv/1UkV5fVZ+LjeG21T6u8PTnCup04Ts6Vs0U7XU+a8CnFqd7cvgcdZ5omInsiunFCMMVljGMY9nTdkklvlwRDL0ln42lYy9I9jhwdKL3xT9CrbPSsb7JnDYGm99OHwQ220xU8oSEdm0bfwVP9Vfker/0Mf8Axj9kL0gwkIxbjCC8opCZZs2Osa1ELD1K/wAHi/v0v6sjXi7OrwdYrTpDSi5sAAAAAAAAAAAAAAAAAAAAAAAAABXOsSlm2diVpupu8naKtVg7t8ErXuRtG4VZq82OYUTq7xOSOLnZtRp055V7zyqo7Jc9TNinW3I4K2uefdH5R3Syu6s6WJtlVSFlC98qioy32V7qovW+9WIZJ31UcVM3mL+f9/l+bIwzks10ldIriNoYcc26pTDV45snG7Xqt/7+IaqWjekm5Wi3vsm7eSPWiZ1CD6SvuP8Af/VHksufvCf6lY/QYp2/40VfnalCX9424uzp8H6jRi1rAAAAAAAAAAAAAAAAAAAAAAAAABCdNoX2fjf+hXf6tNv9hG/qyhljdJ+DOurSr9LWXOmpfqzX+Yz4uky4nAT/AFLRPl+Xh0+rRqVqVSm80HBxVRO8W4ybaXlmT8cxHLMT1hHjpi1otHZwbKlLdG9uPIpZsXNvUJrCU0pX+trv379bX8UG3HWN79qUUrK7PWhXelMrRPPay5/Whb+pyC9iqNX1r1N7T1VOmuG7duNuLs6fBRMY535r2WtYAAAAAAAAAAAAAAAAAAAAAAAAAOLbVHPh68PtUq0fjBo8ns8nrDIurmebEPN3s1Gpe+ua8oN3531MuPrZwOD/AM+d+U/eHr09w8aLw9Cn3aaVSWXvN5nJXbk3rxfm23vGSIrqIS46Iry1jsjtj4qUU4q1t/iUbZcWSa9IS2Fpd7O2766ebu/38Txqx167lKOzVnuPWnvCr9LJacF8uAjuyZfXhonVTSy7Opu6eadZ3V7PvtcfI3YvVdfhP8qPmuBY0gAAAAAAAAAAAAAAAAAAAAAAAAA+akLprmmvigMQ6uqv+8wvZXhPRJJe7uSW7cZaT6b5/hp/xM/N0dM8BHDU6FGLc80qtRzlbPfxtvvm1fHIuQvXUae8VSMdYrHxcGxcTlTWVO9teO8o2zYr8s9kvhoNyzN/a0XG8r6+W74EWqkbttJtXVt278bnrRPWFT6Wy3Lce19ZkyT/AFGp9WlJR2bhkne/bSv96vUf7Tbj9V2uF/yo2s5YvAAAAAAAAAAAAAAAAAAAAAAAAAAAwnq/qKWKpyikllqOy5dm9fXf6mWvrvn8O54qfm7enOGdGFKE6jqynUqzU5e9CKVnGzk9Hmjusu4tOS8aS4uvLWImd9UbsOo1e0M3N2ei8ylkxzMT0jaXwsoubalqrrLdPe76/gRlppNZtuJSjV1vtu/Hd+wNM9lR6XSs0/x/IlXuy2jeRrXVzJPZuFy3tlmld3elSa1fFm2nqu3g/wAuFkJrgAAAAAAAAAAAAAAAAAAAAAAAAARXSraHs+DxFbjGnPL4zkssF6ycV6kbTqJlDJfkpNpZT1b4VvESnZJRhK9tycmkklwVlL4GfH1s4vCV3lmzx6ZwUJQwzqTrTi3UdWd80VNaU974WbtZe7pvv5fp0ecT6Pob37XDstWadrq6duF07opZK9J2n8PSjmlNLf5X3vj6/INdIje4SKhdWvbxDRrcK90sweaN1wPd6lmyxq8SvPVFjVPBOmlbsqk42u3pK0768Lyl8DZino63CW3TXku5Y0gAAAAAAAAAAAAAAAAAAAAAAAAAp3WtN+w5eEqtFPyTcvxiirN6rFx9uXBKE6vcMoYeU+M5v4R7qXxzP1K8XbbLwMf0+bzVrpzQaxs5cJxpyXpBRfziV5PWZ+KjWSXNgStliU5hpbg10lIU5BoiUftqF4SEqM/qu3qYUozxkXdJqhJX8HUTa+KNOGe7X4ffm5o+H5aiaHSAAAAAAAAAAAAAAAAAAAAAAAAABV+sqlfZ9V2vllRl/wC2KfybKs3qMfiEb4e3y+6vdEZKOFhJ2V87bcmorvy1tey0SIYo1Vj4PpiiXztHFYTF/QKpSlV1yO0nZ8oy0TvyTPZ5bdFl5x5fR3G1RoUZ05zpzVpQdnqreDTfBrVGaY1LmWia2mspLDYpXtdfFHiymSN6TEJWV2e6bIno8sXG8Xpe/A90hfrD96p3P2vFKTbSpxXr2mn7S7At8N72amaXVAAAAAAAAAAAAAAAAAAAAAAAAABF9KcK6uDxNNK8nSq5Vzkotx+aRG8brMK81OfHavnDE8biZ1MFQjH3M0r71m+tHTykZd9NPnpvyUis9o6GDpOpBxtacO9CW6/ON+fH/Q8jTyJifVS2LqSrulVzZZSp5Z8G503aXlvi/UZI3qU8u72i0T3j7KxjMTPtcvvO6SS4u/4ka1jTPFOaNp3DbRtKbqSvGDyxXBZFaTXqnbz8BrTRN+XvLg2j03fZxjGCjN+/Ky5uyir8ra39C3laaxfJXUaX3qboKVLEYrv/AEkoQvK2uRNtxtwvU+RZhrrbVwGOaRbbRi50AAAAAAAAAAAAAAAAAAAAAAAAAAcWOruKulcDIdpbGlHtKcFak5ylGLTTp3T7sWtHFX0vuSSM18U+xxuK4DJM7x6mN7c2z8NKkmpNy8ou/hq91uZ5GK0zvshi8Pzb3OofFKM3ZSSffzPfGycWm1zb0v5I9thnl13TycBeKx/ucj2VKNZ1YuOl5R1btK7y6W4OzPIpbWlNOEzb5dafT2X9GoxTc9b507NcLW4/vfgk4bLMnhuXe4mHN/szVqOEckUlvnZ3d7abvP4nsUsli4TiI37Pn/DZ+iNBUcPToxi1GKt5t6tvzbZorGo06uHHGOkVhYj1YAAAAAAAAAAAAAAAAAAAAAAAAADzqRQHJVw0HvigOaeBp/YiB5vZ1L7EQPxbOpfxcQPSOApfYiB0U8LBbooDrpQS3ID2AAAAAAAAAAAAD//Z"
                            },
                            {
                                id:4,
                                name:"Fanta", 
                                
                                cost:250,
                                img: "https://sudjin-roll.ru/wp-content/uploads/2019/01/fanta-portagal-1l.jpg"
                            },
                        
                        ]
                    },
                    {
                        id:5,
                        menu: [
                            {  id:1,
                                name:"Кетчуп", 
                                
                                cost:100,
                                img: "https://mcdonalds.kz/storage/634/acLMsZP4La.jpeg"
                            },
                            {
                                id:2,
                                name:"Соус барбекю", 
                               
                                cost:100,
                                img: "https://mcdonalds.kz/storage/651/UQmBOEOsY3.jpeg"
                            },
                            {
                                id:3,
                                name:"Горчичный соус", 
                               
                                cost:100,
                                img: "https://mcdonalds.kz/storage/635/vBSU291c8O.jpeg"
                            },
                            {
                                id:4,
                                name:"Соус Кисло-сладкий", 
                                
                                cost:100,
                                img: "https://mcdonalds.kz/storage/650/kVVBT8uk5Q.jpeg"
                            },
                        
                        ]
                    }, 
                    {
                        id:6,
                        menu: [
                            {  id:1,
                                name:"Картофель фри", 
                                
                                cost:300,
                                img: "https://mcdonalds.kz/storage/666/4NCA4Oc4Ba.png"
                            },
                            {
                                id:2,
                                name:"Креветки", 
                               
                                cost:800,
                                img: "https://mcdonalds.kz/storage/791/2Lrdb0kE8v.jpeg"
                            },
                            {
                                id:3,
                                name:"Чикен", 
                               
                                cost:700,
                                img: "https://mcdonalds.kz/storage/615/lZqJHSVGz26irvruEtfLvKzkH9Uw5IgK.jpg"
                            },
                            {
                                id:4,
                                name:"Крылышки", 
                                
                                cost:800,
                                img: "https://mcdonalds.kz/storage/834/WjNxTzhFfE.jpeg"
                            },
                        
                        ]
                    }, 
                      
                ]
                
                
                
            }  
        },
        
        mounted() {

            let orders = JSON.parse(localStorage.getItem("order"));
        
            if(orders[this.menu_id]) {
                
                console.log(orders[this.menu_id]);
                this.current_counters[this.menu_id] = [];

                let collection_id = [];

                for (let index = 0; index < this.data_all[this.menu_id].length; index++) {
                    
                    let menu = this.data_all[index][this.menu_id];
                    console.log(menu.id); 
                    console.log(orders[this.menu_id]); 
                    let result = this.check_id(menu.id,orders[this.menu_id]);
                    
                    this.current_counters[this.menu_id].push(result);

                }
            }
            


    


                
            this.collections = this.data_all[0].menu;
            window.onscroll = function() {
                let left_side = document.getElementById("header__labels");
                let right_side = document.getElementById("header__basket");
                if(window.pageYOffset > right_side.offsetTop+100) {

                    right_side.classList.add("bg__white");

                    left_side.classList.add("bg__white");

                 
                    right_side.classList.add("sticky");
                    left_side.classList.add("sticky");
                    left_side.classList.add("bg__white");
                }
                else {
                    right_side.classList.remove("bg__white");
                    left_side.classList.remove("bg__white");

                    right_side.classList.remove("sticky");
                    

                    left_side.classList.remove("sticky");
                     left_side.classList.remove("bg__white");
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
            check_id(id,array) {
                for (let index = 0; index < array.length; index++) {

                   if(id==array[index].id) {
                       return array[index].counter;
                   }
                   else {
                       return 0;
                   }

                }
            },
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
                        document.querySelector('.header__toggle').style.display = "none";
                         document.querySelector('#body').style.cssText = "overflow-y: scroll";
                       
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
                }
                else if(!orders[this.menu_id]) {   
                    this.all_data = orders;
                    this.all_data[this.menu_id] = [];              
                }
                else {
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
.bg__white {
    width: 50% !important;
    background-color: white;
}
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
    padding: 13px;
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
    outline: none;
    z-index: 40;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-self: center;
    align-items: center;
    width: 120px;
    height: 33px;
    border-radius: 20px;
    background-color: var(--main-project-color);
    padding: 20px;
    font-size: 14px;
    border: none;
    color: white;
    
    outline: none;

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
    margin-left: 25px;
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
    padding-left: 10px;
    padding-right: 10px;
}
.header__actives {
    background-color: red;
    
    color: white;
    padding: 10px;
    border-radius: 20px;
    padding-left: 10px;
    padding-right: 10px;
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
    
    width:170px;
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
    align-items: center;
    flex-direction: column;
    justify-content: center;
}
.main__menu {
   
    width: 20%;
    padding: 20px;
    align-self: flex-start;
    justify-content: space-between;
    display: flex;
    flex-direction: row;
    align-items: center;
}
.main__menu a {
    cursor: pointer;
    text-decoration: none;
    font-weight: bold;
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
.main__order {
    padding: 30px;
    width: 90%;
    display:flex;
    align-self: flex-start;
    flex-direction: column;

    
}
.main__info{
    color: red;
    font-size: 50px;
    margin-bottom: 20px;
}
.main__street p {
    color: red;

}
.main__street {
    margin-left: 10px;
}
.main__order p:nth-child(2) {
    font-size: 15px;
    color: red;
 
    margin-bottom: 40px;
}
.main__location {
    width: 97%;
    display: flex;
    align-items: center;
    margin-bottom: 40px;
    margin-left: 20px;
}
.main__street p:nth-child(1){
    font-size: 23px;
    font-weight: bold;
}
.main__location p {
    font-size: 15px;
    margin-left: 15px;
    color: red;

}
.main__social {
    
   
    display: flex;
    justify-content: space-evenly;
    align-self: flex-start;
    width: 30%;
    margin-bottom: 40px;
}
.main__contact button {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-self: center;
    align-items: center;
    width: 175px;
    height: 45px;
    border-radius: 20px;
    background-color: yellow;
    padding: 10px;
    font-size: 12px;
    border:1px solid red;
    color: red;
    margin-left: 20px;
    margin-bottom: 20px;
}
.main_contact {
    display: flex;
    flex-direction: column;
}
.main__img {
    display: flex;
    justify-content: center;
    align-self: center;
    
}
.main__img img {
    width: 400px;
    height: 400px;
}
.main__class {
    width: 97%;
    display: flex;
    flex-direction: row;
}
.main__social img {
    width: 40px;
    height: 40px;
}
.fa-phone-square-alt {
    margin-left: 100px;
}
.main__location i {
    display: flex;
    font-size: 40px;
    color: red;
}
.main__title p {
    color: red;
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
    width: 160px;
    height: 140px;
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
  .main__class {
      flex-direction: column;
  }
  .main__img {
      margin-top: 15px;
      margin-bottom: 10px;

  }
  .fa-phone-square-alt {
      margin-left: 20px;
  }
  .main__order p {
      margin-bottom: 0px;
  }
  .main__social {
      margin-left: 40px;
      width: 80%;
  }
  .main__contact button {
      margin-left: 100px;
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
      .main__menu {
        align-self: center;
        margin-left: 0px;
        width: 70%;
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
      .main__menu {
          align-self: center;
          margin-left: 0px;
          width: 70%;
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
       .main__menu {
          align-self: center;
          margin-left: 0px;
          width: 70%;
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
      .main__menu {
          align-self: center;
          margin-left: 0px;
          width: 70%;
      }
  }
}
</style>    