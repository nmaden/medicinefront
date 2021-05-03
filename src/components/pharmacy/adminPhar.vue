<template>
    <div class="">


        <div class="notif__column notif__100 notif__home notif__ac" v-if="page==1">

        <div class="notif__row notif__ac notif__jb notif__header notif__mb__s">
            <i class="fas fa-clinic-medical"></i>
            <div class="notif__column">
                <p class="notif__salem"></p>
                <p class="notif__logout" @click="logout">Выйти</p>
            </div>            
        </div>

        <div class="notif__sort notif__wrap notif__ac notif__mb__s">
            <div class="notif__type notif__mr__l notif__mb__xs" @click="done=1" v-bind:class="{notif__type__active: done==1}">Аптеки</div>
            <div class="notif__type notif__mb__xs" @click="done=2" v-bind:class="{notif__type__active: done==2}">Лекарства</div>
            <div class="notif__type notif__mb__xs" @click="done=3" v-bind:class="{notif__type__active: done==3}">Категорий</div>
        </div>

        <div class="notif__sort notif__row notif__ac notif__mb__s" v-if="pharmacy.edit" >
            <div class="notif__type notif__mr__l notif__type__active" @click="showEditPharmacy" >
                <i class="fas fa-plus-circle" style="color: white"></i>
                Добавить аптеку
            </div>
        </div>

        <div class="notif__column notif__plans notif__ac" v-if="done==3">

            <div class="notif__add__category" @click="addСategoryForMedicine()">Добавить категорий</div>
            <div class="notif__column notif__plan">
                <div class="notif__row notif__pl notif__ac notif__mb__s" v-for="(item,index) in medicine.categories" :key="index">
                    <div class="notif__column notif__day notif__ac notif__mr__l">
                        <i class="fas fa-capsules"></i>
                    </div>

                    <div class="notif__column notif__text">
                            
                        <div class="notif__row notif__ac notif__mb__xs notif__phar">
                            <i class="fas fa-clinic-medical notif__mr__s"></i>
                            <p>{{item.category_name}}</p>
                        </div>
                        <div class="notif__row notif__ac notif__address notif__mb__xs" @click="deleteСategory(item.id)">
                            <i class="fas fa-trash-alt notif__mr__s"></i>
                            <p>Удалить</p>
                        </div>  
                    </div>
                </div>
            </div>
        </div>
        <div class="notif__column notif__plans notif__ac" v-if="done==2">
            <div class="notif__column notif__plan ">
                <form class="notif__column notif__pl notif__fs"  v-if="!medicine.edit"  @submit.prevent="createMedicine">
                    <p class="notif__title">Добавить препарат</p>

                    <div class="notif__column notif__phar__input">
                        <p>Название препарата</p>
                        <input type="text" v-model="medicine.name" required>
                    </div>
                    <div class="notif__column notif__phar__input">
                        <p>Описание</p>
                        <textarea rows="4" type="text" v-model="medicine.description" required></textarea>
                    </div>

                    <div class="notif__column notif__phar__input">
                        <p>Выберите категорию</p>
                        <select name="" id="" v-model="medicine.category_id" required>
                            <option value="">Выберите категорию</option>

                            <option value="" v-for="cat in medicine.categories" :value="cat.id">{{cat.category_name}}</option>
                        </select>
                    </div>

                  
                    <button type="submit">Сохранить</button>
                </form>
                
                


                <form class="notif__column notif__pl notif__fs" v-if="medicine.edit" @submit.prevent="editInfo">
                    <p class="notif__title">Изменить лекарства</p>
                    <div class="notif__column notif__phar__input">
                        <p>Название</p>
                        <input type="text" v-model="medicine.name" required>
                    </div>
                    
                    <button type="submit">Сохранить</button>
                </form>

               

     
               
            </div>
            <div class="notif__column notif__plan">
                <div class="notif__row notif__pl notif__ac notif__mb__s" v-for="(item,index) in medicine.medicines" :key="index">
                    <div class="notif__column notif__day notif__ac notif__mr__l">
                        <i class="fas fa-capsules"></i>
                    </div>

                    <div class="notif__column notif__text">
                            
                        <div class="notif__row notif__ac notif__mb__xs notif__phar">
                            <i class="fas fa-clinic-medical notif__mr__s"></i>
                            <p>{{item.name}}</p>
                        </div>
                        

                        <div class="notif__row notif__ac notif__address notif__mb__xs" @click="getMedicine(item.id)">
                            <i class="fas fa-pencil-alt notif__mr__s"></i>
                            <p>Редактировать</p>
                        </div>
                        <div class="notif__row notif__ac notif__address notif__mb__xs" @click="deleteMedicine(item.id)">
                            <i class="fas fa-trash-alt notif__mr__s"></i>
                            <p>Удалить</p>
                        </div>  
                        <div class="notif__row notif__ac notif__address notif__mb__xs" @click="addPharmacyForMedicine(item.id)">
                            <i class="fas fa-plus-circle notif__mr__s" ></i>
                            <p>Добавить аптеку</p>
                        </div> 

                        <div class="notif__apteka notif__mb__s" v-for="(apteka,i) in item.info" :key="i">
                        
                            <div class="notif__column notif__mb__xs"> 
                                <p class="notif__mb__xs">Аптека: {{apteka.apteka.name}}</p>
                                <p>Цена: {{apteka.price}} тг</p>
                            </div>
                            <div class="notif__row  notif__ac notif__address notif__mb__xs" @click="getInfo(apteka.id)">
                                <i class="fas fa-pencil-alt notif__mr__s"></i>
                                <p>Изменить</p>
                            </div>
                            <div class="notif__row notif__ac notif__address notif__mb__xs" @click="deleteInfo(apteka.id)">
                                <i class="fas fa-trash-alt notif__mr__s"></i>
                                <p>Удалить</p>
                            </div>  
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        <div class="notif__column notif__plans notif__ac" v-if="done==1">

            <div class="notif__column notif__plan ">
                <form class="notif__column notif__pl notif__fs"  v-if="!pharmacy.edit"  @submit.prevent="createPharmacy">
                    <p class="notif__title">Добавить аптеку</p>
                    <div class="notif__column notif__phar__input">
                        <p>Название аптеки</p>
                        <input type="text" v-model="pharmacy.name" required>
                    </div>
                    <div class="notif__column notif__phar__input ">
                        <p>Время работы</p>
                        <div class="notif__row notif__100 notif__jb">
                            <input  class="notif__hour notif__mr__l " type="text" v-model="pharmacy.time_start" required>
                            <input class="notif__hour" type="text" v-model="pharmacy.time_end" required>
                        </div>
                    </div>
                    <div class="notif__column notif__phar__input">
                        <p>Телефон</p>
                        <input type="text" v-model="pharmacy.phone" required>
                    </div>
                    <div class="notif__column notif__phar__input">
                        <p>Адрес</p>
                        <input type="text" v-model="pharmacy.address" required>
                    </div>
                    <div class="notif__column notif__phar__input">
                        <p>Фото</p>
                        <input type="file" @change="uploadImage" required>
                    </div>

                    <button type="submit">Сохранить</button>
                </form>
                <form class="notif__column notif__pl notif__fs" v-if="pharmacy.edit" @submit.prevent="editPharmacy">
                    <p class="notif__title">Редактировать аптеку</p>
                    <div class="notif__column notif__phar__input">
                        <p>Название аптеки</p>
                        <input type="text" v-model="pharmacy.name" required>
                    </div>
                    <div class="notif__column notif__phar__input ">
                        <p>График работы</p>
                        <div class="notif__row notif__100 notif__jb">
                            <input  class="notif__hour notif__mr__l " type="text" v-model="pharmacy.time_start" required>
                            <input class="notif__hour" type="text" v-model="pharmacy.time_end" required>
                        </div>
                    </div>
                    <div class="notif__column notif__phar__input">
                        <p>Телефон</p>
                        <input type="text" v-model="pharmacy.phone" required>
                    </div>
                    <div class="notif__column notif__phar__input">
                        <p>Адрес</p>
                        <input type="text" v-model="pharmacy.address" required>
                    </div>
                    <div class="notif__column notif__phar__input">
                        <p>Фото</p>
                        <input type="file" @change="uploadImage" >
                    </div>

                    <button type="submit">Сохранить</button>
                </form>
               
            </div>

            
            <div class="notif__column notif__plan">
                <div class="notif__row notif__pl notif__ac notif__mb__s" v-for="(item,index) in pharmacy.pharmacies" :key="index">
                    
                    <div class="notif__column notif__day notif__ac notif__mr__l">
                        <i class="fas fa-capsules"></i>
                    </div>

                    <div class="notif__column notif__text">
                            
                        <div class="notif__row notif__ac notif__mb__xs notif__phar">
                            <i class="fas fa-clinic-medical notif__mr__s"></i>
                            <p>{{item.name}}</p>
                        </div>
                        <div  class="notif__row notif__ac notif__date notif__mb__xs">
                            <i class="far fa-clock notif__mr__s"></i>
                            <p>{{item.time_start+'-'+item.time_end}}</p>
                        </div>
                        <a :href="'tel:'+item.phone" class="notif__row notif__ac notif__phone notif__mb__xs">
                            <i class="fas fa-phone-alt notif__mr__s"></i>
                            <p>{{item.phone}}</p>
                        </a>
                        <div class="notif__row notif__ac notif__address notif__mb__xs">
                            <i class="fas fa-map-marker-alt notif__mr__s"></i>
                            <p>{{item.address}}</p>
                        </div>

                        <div class="notif__row notif__ac notif__address notif__mb__xs" @click="getPharmacy(item.id)">
                            <i class="fas fa-pencil-alt notif__mr__s"></i>
                            <p>Изменить</p>
                        </div>
                        <div class="notif__row notif__ac notif__address notif__mb__xs" @click="deletePharmacy(item.id)">
                            <i class="fas fa-trash-alt notif__mr__s"></i>
                            <p>Удалить</p>
                        </div>    
                    </div>

                    <!-- <div class="notif__row notif__ac notif__ok" v-bind:class="{notif__green: done==2}">
  
                    </div> -->
                </div>
            </div>
        </div>
        </div>

        <div class="notif__column notif__ac notif__analyze" v-if="page==2">
            
            <div class="notif__column notif__analyze__body">
                <p class="analyze__title">Аналитика</p>

                <i class="fas fa-chart-bar"></i>
            </div>


        </div>

        

        <div class="notif__modal" v-if="medicine.show_modal">
                <form class="notif__column notif__modal__form  notif__fs" style="margin-top: 20px" v-if="medicine.price_edit" @submit.prevent="editInfo">
                        <p class="notif__title notif__mb__s">Изменить цену</p>
                        <div class="notif__column notif__phar__input notif__mb__s">
                            <p class="notif__mb__xs">Цена</p>
                            <input type="text" v-model="medicine.price" required>
                        </div>
                        <button class="notif__mb__xs" type="submit">Сохранить</button>
                        <a  class="notif__mb__s" @click="closeModal">Закрыть</a>
                </form>
               
                 <form class="notif__column notif__modal__form  notif__pl notif__fs " v-if="medicine.addMedicine" @submit.prevent="addPharmacy">
                    
                    <p class="notif__title">Добавить аптеку</p>
                   
                    <div class="notif__column notif__phar__input notif__mb__xs">
                        <p class="notif__mb__xs">Выберите аптеку</p>
                        <select class="" v-model="medicine.pharmacy" >
                            <option value="">Выберите аптеку</option>
                            <option v-for="(item , index) in pharmacy.pharmacies" v-bind:key="index" :value="item.id"   >
                                    {{item.name}}
                            </option>
                        </select>
                    </div>
                    

                    <div class="notif__column notif__phar__input notif__mb__s">
                        <p>Цена</p>
                        <input type="text" v-model="medicine.price" required>
                    </div>

                    <button class="notif__mb__xs" type="submit">Сохранить</button>
                    <a  class="notif__mb__s" @click="closeModal">Закрыть</a>
                </form>

                 <form class="notif__column notif__modal__form  notif__pl notif__fs " v-if="medicine.edit_tablet" @submit.prevent="editMedicine">
                    
                    <p class="notif__title">Изменить</p>
                   
                    <div class="notif__column notif__phar__input notif__mb__s">
                        <p>Название</p>
                        <input type="text" v-model="edit.name" required>
                    </div>
                    <div class="notif__column notif__phar__input notif__mb__s">
                        <p>Описание</p>
                        <textarea  rows="4" type="text" v-model="edit.description" required></textarea>
                    </div>

                    <button class="notif__mb__xs" type="submit">Сохранить</button>
                    <a  class="notif__mb__s" @click="closeModal">Закрыть</a>
                </form>

                <form class="notif__column notif__modal__form  notif__pl notif__fs " v-if="medicine.addCategory" @submit.prevent="createCategory">
                    
                    <p class="notif__title">Добавить категорию</p>
                   
                   
                    

                    <div class="notif__column notif__phar__input notif__mb__s">
                        <p>Название категорий</p>
                        <input type="text" v-model="category_name" required>
                    </div>

                    <button class="notif__mb__xs" type="submit">Сохранить</button>
                    <a  class="notif__mb__s" @click="closeModal">Закрыть</a>
                </form>


                
        </div>

        <div class="notif__actions notif__row notif__ac notif__100 notif__jb">


            <!-- <div class="notif__action" @click="page=1">
                <i class="fas fa-home " v-bind:class="{notif__active: page==1}"></i>
            </div> -->

            <!-- <div class="notif__action notif__add">
                <i class="fas fa-plus"></i>
            </div> -->

            <!-- <div class="notif__action" @click="page=2">
                <i class="fas fa-chart-line"  v-bind:class="{notif__active: page==2}"></i>
            </div> -->
        </div>
   
    </div>
</template>


    <script>
    export default {
         name: 'AdminPharmacy' ,
        data() {
            return {
                  edit: {
                      name: '',
                      description: ''
                  },
                  category_name: '',
                  pharmacy: {
                      edit: false,
                      pharmacy: null,
                      pharmacies: null,
                      id: null,
                      name: null,
                      time_start: null,
                      time_end: null,
                      phone: null,
                      address: null,
                      img: null
                  },
                  medicine: {
                      category_id: '',
                      addCategory: false,
                      edit_tablet: false,
                      show_modal: false,
                      price_id: null,
                      price_edit: false,
                      price: null,
                      pharmacy: '',
                      addMedicine: false,
                      medicines: [],
                      edit: false,
                      id: null,
                      name: null,
                      list_apteka: null,
                      list_price: null,
                      description: ''
                  },
                  done: 1,
                  page: 1,
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
                  token: ""
            }
        },
        components: {
        },
        mounted() {

            this.token = localStorage.getItem("access_token");
            this.getPharmacies();
            this.getMedicines();

            this.getCategories();

        },
        methods: {
            uploadImage (e) {
                this.pharmacy.img = e.target.files[0]
               
            },
            getCategories() {
                const config = {
                    headers: { 'Authorization': `Bearer ${this.token}` }
                };

                this.$http.get('/pharmacy/get/categories', config)
                .then(res => {
                    this.medicine.categories = res.data
                });
            },
            deleteСategory(id) {
                const config = {
                    headers: { 'Authorization': `Bearer ${this.token}` }
                };
                this.$http.get('/pharmacy/delete/category?id='+id, config)
                .then(res => {
                    this.getCategories();
                });
            },
            createCategory() {
                let data = {
                    category_name: this.category_name,
                };
                const config = {
                    headers: { 'Authorization': `Bearer ${this.token}` }
                };
                this.$http.post('/pharmacy/create/category', data, config)
                .then(res => { 

                    this.$fire({
                        title: res.data.message,
                        text: "",
                        type: "success",
                        timer: 3000
                    }).then(r => {
                        console.log(r.value);
                    });

                    this.medicine.addMedicine =false;
                    this.medicine.show_modal = false;
                    this.getCategories();
                 
                });
            },
            showEditPharmacy() {
                this.pharmacy.edit=false;
                this.pharmacy.id = '';
                this.pharmacy.name = '';
                this.pharmacy.time_start = '';
                this.pharmacy.time_end = '';
                this.pharmacy.phone = '';
                this.pharmacy.address = '';
            },
            closeModal() {
                this.medicine.price_edit = false;
                this.medicine.show_modal = false;
                this.medicine.addMedicine = false;
                this.medicine.edit_tablet = false;
                this.medicine.addCategory = false;
            },
            logout() {
                localStorage.removeItem("access_token");

                this.$router.push("/");
            },
           
            getPharmacies() {
                const config = {
                    headers: { 'Authorization': `Bearer ${this.token}` }
                };

                this.$http.get('/pharmacy/get/pharmacies', config)
                .then(res => {
                    this.pharmacy.pharmacies = res.data
                });
            },
            getPharmacy(id) {
                this.pharmacy.edit = true;
                const config = {
                    headers: { 'Authorization': `Bearer ${this.token}` }
                };

                this.$http.get('/pharmacy/get/pharmacy?id='+id, config)
                .then(res => {
                    this.pharmacy.id = res.data.id;
                    this.pharmacy.name = res.data.name;
                    this.pharmacy.time_start = res.data.time_start;
                    this.pharmacy.time_end = res.data.time_end;
                    this.pharmacy.phone = res.data.phone;
                    this.pharmacy.address = res.data.address;
           
                });
            },
            createPharmacy() {
              
                let fd= new FormData()
                fd.append('image', this.pharmacy.img);
                fd.append('name',this.pharmacy.name);
                fd.append('time_start',this.pharmacy.time_start);
                fd.append('time_end',this.pharmacy.time_end);
                fd.append('phone',this.pharmacy.phone);
                fd.append('address',this.pharmacy.address);

                const config = {
                    headers: { 
                        'Authorization': `Bearer ${this.token}`,
                        'Content-Type': 'multipart/form-data'
                    }
                };

                this.$http.post('/pharmacy/create/pharmacy', fd, config)
                .then(res => { 

                    this.$fire({
                        title: res.data.message,
                        text: "",
                        type: "success",
                        timer: 3000
                    }).then(r => {
                        console.log(r.value);
                    });
                    this.pharmacy.img = null;
                    this.getPharmacies();
                 
                });
            },
            deletePharmacy(id) {
              
                const config = {
                    headers: { 'Authorization': `Bearer ${this.token}` }
                };
                 let data = {
                    id: id
                 
                };

                this.$http.post('/pharmacy/delete/pharmacy',data, config)
                .then(res => { 

                    this.$fire({
                        title: res.data.msg,
                        text: "",
                        type: "success",
                        timer: 3000
                    });

                    this.getPharmacies();
                 
                });
            },
            editPharmacy() {                      
                let fd= new FormData()
                
                fd.append('name',this.pharmacy.name);
                fd.append('time_start',this.pharmacy.time_start);
                fd.append('time_end',this.pharmacy.time_end);
                fd.append('phone',this.pharmacy.phone);
                fd.append('address',this.pharmacy.address);
                fd.append('id',this.pharmacy.id);

                if(this.pharmacy.img) {
                    fd.append('image', this.pharmacy.img);
                    fd.append('has_img', "yes");
                }
               
                const config = {
                    headers: { 'Authorization': `Bearer ${this.token}` },
                    'Content-Type': 'multipart/form-data'
                };

                this.$http.post('/pharmacy/edit/pharmacy', fd, config)
                .then(res => { 

                    this.$fire({
                        title: res.data.msg,
                        text: "",
                        type: "success",
                        timer: 3000
                    }).then(r => {
                        console.log(r.value);
                    });

                    this.pharmacy.id = '';
                    this.pharmacy.name = '';
                    this.pharmacy.time_start = '';
                    this.pharmacy.time_end = '';
                    this.pharmacy.phone = '';
                    this.pharmacy.address = '';

                    this.getPharmacies();
                 
                });
            },
            createMedicine() {
                let data = {
                    name: this.medicine.name,
                    category_id: this.medicine.category_id,
                    description: this.medicine.description
                };

                const config = {
                    headers: { 'Authorization': `Bearer ${this.token}` }
                };

                this.$http.post('/pharmacy/create/medicine', data, config)
                .then(res => { 

                    this.$fire({
                        title: res.data.msg,
                        text: "",
                        type: "success",
                        timer: 3000
                    }).then(r => {
                        console.log(r.value);
                    });
                    this.getMedicines();
                });
            },    
            editMedicine() {
                let data = {
                    id: this.medicine.id,
                    name: this.edit.name,
                    description: this.edit.description
                };

                const config = {
                    headers: { 'Authorization': `Bearer ${this.token}` }
                };

                this.$http.post('/pharmacy/edit/medicine', data, config)
                .then(res => { 

                    this.$fire({
                        title: res.data.msg,
                        text: "",
                        type: "success",
                        timer: 3000
                    }).then(r => {
                        console.log(r.value);
                    });
                    this.medicine.id = '';
                    this.medicine.name = '';
                    this.medicine.description = '';

                    this.medicine.show_modal = false;
                    this.medicine.edit_tablet = false;
                    this.getMedicines();
                });
            },         
     
            deleteMedicine(id) {
                let data = {
                    id: id
                };  
                
                const config = {
                    headers: { 'Authorization': `Bearer ${this.token}` }
                };

                this.$http.post('/pharmacy/delete/medicine', data, config)
                .then(res => { 
                    
                    this.$fire({
                        title: res.data.msg,
                        text: "",
                        type: "success",
                        timer: 3000
                    }).then(r => {
                        console.log(r.value);
                    });
                    this.getMedicines();
                });
            },
            getMedicines() {
                const config = {
                    headers: { 'Authorization': `Bearer ${this.token}` }
                };
                this.$http.get('/pharmacy/get/medicines', config)
                .then(res => {
                    this.medicine.medicines = res.data
                });
            },
            getMedicine(id) {

                const config = {
                    headers: { 'Authorization': `Bearer ${this.token}` }
                };
                this.$http.get('/pharmacy/get/medicine?id='+id, config)
                .then(res => {
                    this.edit.name = res.data.name;
                    this.medicine.id = res.data.id;
                    this.medicine.edit_tablet = true;
                    this.medicine.show_modal = true;
                    this.edit.description = res.data.description;
                });
            },
            addPharmacyForMedicine(id) {
                this.medicine.id = id;
                this.medicine.addMedicine = true;
                this.medicine.show_modal = true;
            },
            addСategoryForMedicine() {
           
                this.medicine.addCategory = true;
                this.medicine.show_modal = true;
            },
            getInfo(id) {
                this.medicine.show_modal = true;
                this.medicine.price_id = id;
                this.medicine.price_edit = true;
                let data = {
                    id: id
                };               
                const config = {
                    headers: { 'Authorization': `Bearer ${this.token}` }
                };

                this.$http.post('/pharmacy/get/medicine/info', data, config)
                .then(res => { 
                    this.medicine.price = res.data.price;
                 
                    this.getMedicines();
                });
            },
            deleteInfo(id) {
                let data = {
                    id: id
                };  
                
                const config = {
                    headers: { 'Authorization': `Bearer ${this.token}` }
                };

                this.$http.post('/pharmacy/delete/medicine/info', data, config)
                .then(res => { 
                    
                    this.$fire({
                        title: res.data.msg,
                        text: "",
                        type: "success",
                        timer: 3000
                    }).then(r => {
                        console.log(r.value);
                    });
                    this.getMedicines();
                });
            },
            editInfo() {
                let data = {
                    id: this.medicine.price_id,
                    price: this.medicine.price
                };               
                const config = {
                    headers: { 'Authorization': `Bearer ${this.token}` }
                };

                this.$http.post('/pharmacy/edit/medicine/info', data, config)
                .then(res => { 

                    this.$fire({
                        title: res.data.msg,
                        text: "",
                        type: "success",
                        timer: 3000
                    }).then(r => {
                        console.log(r.value);
                    });
                    this.medicine.price_edit = false;
                    this.medicine.show_modal = false;
                    this.getMedicines();
                });
            },
            addPharmacy() {

                let data = {
                    price: this.medicine.price,
                    pharmacy: this.medicine.pharmacy,
                    id: this.medicine.id
                };

               
                const config = {
                    headers: { 'Authorization': `Bearer ${this.token}` }
                };

                this.$http.post('/pharmacy/create/medicine/info', data, config)
                .then(res => { 

                    this.$fire({
                        title: res.data.msg,
                        text: "",
                        type: "success",
                        timer: 3000
                    }).then(r => {
                        console.log(r.value);
                    });
                    this.medicine.addMedicine =false;
                    this.medicine.show_modal = false;
                    this.getMedicines();
                });
            }


        }
    }
    </script>



<style scoped lang="scss"> 

    .notif__add__category {
        border-radius: 25px;
        background: var(--main-kenes-blue);
        padding:15px;
        color: white;
        box-shadow: 0px 0 10px rgba(0, 0, 0, 0.2);
        
    }
         input,textarea {
            border: 1px solid gray;
            color: gray;
            padding: 7px;
            border-radius: 20px;
            border: none;
            outline: none; 
            padding-left: 10px;
            width: 100%;
            
        }
        textarea {
                border: 1px solid gray;
            color: gray;
            padding: 7px;
            border-radius: 20px;
   
            outline: none; 
            padding-left: 10px;
            width: 100%;
            
        }

    .notif__analyze__body {
            width: 90%;
            .analyze__title {
             
                color: gray;
                font-size: 30px;
                margin-top: 20px;
            }
            .fa-chart-bar {
                font-size: 150px;
                align-self: center;
                margin-top: 40px;
                color: var(--main-kenes-blue);
            }
    }


    
    .notif__home {

        .notif__search {
            width: 90%;
            align-self: center;
            input {
                width: 80%;
                outline: none;
                border: none;
                border-radius: 20px;
                padding: 15px;
                background: #fafafa;
                margin-right: 10px;
            }
            i {
                color: var(--main-kenes-blue);
                font-size: 24px;
            }
            ::placeholder {
                color: #Ccc;
            }
        }
        .notif__header {
            width: 90%;
            margin-top: 20px;
            .notif__salem {
                font-size: 30px;
                color: gray;
                margin-bottom: 2px;
            }
            .notif__logout {
                color: var(--main-kenes-blue);
                font-size: 16px;
                border-bottom: 1px solid  var(--main-kenes-blue);
            }
            .notif__name {
                color: var(--main-kenes-blue);
                font-size: 30px;
                border-bottom: 1px solid  var(--main-kenes-blue);
            }
            i {
                font-size: 45px;
                color: var(--main-kenes-blue);
            }
        }

        .notif__sort {
            width: 90%;
            .notif__type {
                width: 100%;
                padding: 13px;
                border-radius: 20px;
                background-color: #f8f8fa;
                color: #251a3b;;
                text-align: center;
                font-size: 16px;
                
            }

            .notif__type__active {
                background:  var(--main-kenes-blue);
                color: white;
            }
        }
     
        .notif__plans {
            width: 100%;
          
            .notif__plan {
                width: 90%;
                margin-bottom: 10px;
                margin-top: 10px;
                .notif__apteka {
                    background-color: white;
                    padding: 10px;
                    width: 100%;
                    border-radius: 10px;
                }
                .notif__month {
                    font-size: 18px;
                    font-weight: bold;
                    color: #251a3b;
                }
                .notif__pl {
                    padding: 15px;
                    border-radius: 20px;
                    background: #fafafa;
                    border: 2px solid #fafafa;
                    position: relative;
                    width: 90%;
                          input,textarea {
                              border: 1px solid #ccc;
                           color: gray;
                           padding: 7px;
                           border-radius: 20px;
                           border: none;
                           outline: none; 
                           padding-left: 10px;
                           width: 100%;
                          
                        }
                    .notif__title {
                        font-size: 20px;
                        color: gray;
                        align-self: center;
                        margin-bottom: 20px;
                        color: var(--main-kenes-blue);
                        text-transform: uppercase;
                    }
                    button {
                        width: 100%;
                        border-radius: 20px;
                        padding: 15px;
                        border: none;
                        outline: none;
                        background: var(--main-kenes-blue);
                        color: white;
                    }
                    button:hover {
                        background: #4a85b9;
                    }
                    .notif__phar__input {
                        width: 90%;
                        margin-bottom: 10px;
                     
                        p {
                            margin-bottom: 5px;   
                            color: gray;
                        }
                        select {
                          color: gray;
                           padding: 7px;
                           border-radius: 20px;
                           border: none;
                           outline: none; 
                           padding-left: 10px;
                           width: 100%;
                        }
                        input,textarea {
                           color: gray;
                           padding: 7px;
                           border-radius: 20px;
                           border: none;
                           outline: none; 
                           padding-left: 10px;
                           width: 100%;
                          
                        }
                        .notif__hour {
                            width: 80%;
                        }
                    }
                
                    .notif__green {
                        background: #82c91f !important;
                    }
                    .notif__address {
                        i {
                            width: 10px;
                            height: 10px;
                            display: flex;
                            justify-content: center;
                            align-items: center;
                        }
                        p,i {
                            color: gray;
                        }  
                    }
                    .notif__date {
                       
                        i {
                            width: 10px;
                            height: 10px;
                            display: flex;
                            justify-content: center;
                            align-items: center;
                        }

                        i,p {
                             color: var(--main-kenes-blue);
                        }

                    }
                    .notif__phar {
                         i {
                            width: 10px;
                            height: 10px;
                            display: flex;
                            justify-content: center;
                            align-items: center;
                        }
                         i,p {
                             color: var(--main-kenes-blue);
                        }
                    }
                    .notif__ok {
                        position: absolute;
                        right: 10px;
                        top: 10px;
                        width: 15px;
                        height: 15px;
                        border-radius:7.5px;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        background-color: red;
                        i {
                            color: white;
                        }

                    }
                    .notif__day {
                        background: #f1eef5;
                        border-radius: 20px;
                        padding: 15px;
                        i {
                            color: var(--main-kenes-blue);
                        }
                        p:nth-child(1) {
                            margin-bottom: 5px;
                            color:  var(--main-kenes-blue);
                        }
                        p:nth-child(2) {
                            font-weight: bold;
                            color:  var(--main-kenes-blue);
                            font-size: 22px;
                        }
                    }
                    .notif__text {
                        .notif__title {
                            font-size: 20px;
                            margin-bottom: 10px;
                            color: #251a3b;
                        }

                        
                        .notif__phone {
                             i {
                                width: 10px;
                                height: 10px;
                                display: flex;
                                justify-content: center;
                                align-items: center;
                            }
                            text-decoration: none;
                            p,i {
                                color: gray;
                            }

                        }
                    }
                }
            }
        }
     
    
    }

       
       .notif__actions {
            position: fixed;
            bottom: 5px;
            .notif__action {
                cursor: pointer;
                width: 40px;
                height: 40px;
                display: flex;
                margin: 30px;
                justify-content: center;
                align-items: center;

                .notif__active {
                    color: var(--main-kenes-blue);
                }
                i {
                    color: gray;
                    margin: 30px;
                    font-size: 25px;
                }
            }
            .notif__add {
                box-shadow: 0px 0 10px rgba(0, 0, 0, 0.2);
                i {
                    color: white;
                }
                background-color: #fe92a1;

                border-radius: 3px;
            }
        }
    @media only screen and (max-width: 600px) {
        
    }
</style>
