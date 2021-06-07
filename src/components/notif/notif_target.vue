<!-- template -->
<template>


        <div class="notif__target notif__column notif__ac notif__js">


                <div class="notif__row notif__ac notif__jb notif__header notif__mb__s">
                    <div class="notif__column">
                        <p class="notif__salem">{{user.name}}</p>
                        <p class="notif__name">{{user.surname}}</p>
                    </div>

                    <i class="fas fa-sign-out-alt" @click="signOut"></i>
                    <!-- <i class="fas fa-user-circle"></i> -->
                </div>
               <div class="notif__sort notif__row notif__ac notif__mb__s">
                    <div class="notif__type notif__row notif__ac notif__mr__l notif__type__active" @click="openAdd()" >
                        <i class="fas fa-plus"></i>
                        <p>Жаңа мақсат</p> 
                    </div>
                </div>
                <div class="notif__column notif__ac notif__plans">
              
                    <div class="notif__plan" v-for="(target,index) in plans" :key="index">
                        <div class="notif__pl notif__row notif__ac  notif__jb" style="width: 85%;">
                            <div class="notif__column notif__text notif__ac">
                                <div class="notif__target__title"  @click="openTarget(target.id)">
                                    {{target.title}}
                                </div>
                            </div>
                            <div class="notif__row notif__ac">
                                <i class="fas fa-edit notif__mr__l" @click="editModal(target.id)"></i>
                                <i class="fas fa-trash-alt"  @click="deleteModal(target.id)"></i>
                            </div>
                        </div>
                    </div>
                </div>


                <div class="notif__modal" v-if="openModal">
                    <form class="notif__column notif__modal__form  notif__fs notif__ac" v-if="modal_type==1"  style="margin-top: 20px" @submit.prevent="createTarget">
                            <p class="notif__title2 notif__mb__s">Мақсат тіркеу</p>


                            <div class="notif__column notif__phar__input notif__mb__s">
                                <p class="notif__label notif__mb__xs">Мақсат атауы</p>
                                <input class="notif__modal__input" type="text" v-model="title" required>
                            </div>
                    
                            <button class="notif__submit notif__mb__xs" type="submit">Сақтау</button>
                            <a  class="notif__mb__s" @click="closeModal">Жабу</a>
                    </form> 

                    <form class="notif__column notif__modal__form  notif__fs notif__ac" v-if="modal_type==2"  style="margin-top: 20px" @submit.prevent="editTarget">
                            <p class="notif__title2 notif__mb__s">Мақсатты өзгерту</p>


                            <div class="notif__column notif__phar__input notif__mb__s">
                                <p class="notif__label notif__mb__xs">Мақсат атауы</p>
                                <input class="notif__modal__input" type="text" v-model="title" required>
                            </div>
                    
                            <button class="notif__submit notif__mb__xs" type="submit">Сақтау</button>
                            <a  class="notif__mb__s" @click="openModal=false">Жабу</a>
                    </form> 

                    <div class="notif__column notif__modal__form  notif__fs notif__ac"  v-if="modal_type==3"  style="margin-top: 20px">
                            <p class="notif__title2 notif__mb__s">Жазбаны өшіру</p>

                            <div class="notif__row notif__ac">
                                <button class="notif__submit notif__mb__xs" @click="deletePlan()">Ия</button>
                                <button class="notif__submit notif__mb__xs" @click="openModal=false">Жоқ</button>
                            </div>
                     
                    </div>
                </div>
    
        </div>                   
</template>

<!-- scripts -->
<script>
    export default {
      data() {
          return {
            title: '',
            target_id: '',
            token: [],
            openModal: false,
            login: '',
            password: '',
            user: {
                role: ''
            },
            plans: [
            
            ],
            modal_type: 1,
            user: {
                name: '',
                surname: '',
                role: ''
            }
          }
      },
      mounted() {
            this.token = localStorage.getItem("access_token");
            this.getTargets();
            this.get_profile();
      },
      methods: {
        signOut() {
            localStorage.removeItem("access_token");
            this.$router.push("/");
        },
        get_profile() {
                
                this.$http.post('user/me', 
                {
            
                }, {
                    headers: {
                        'Authorization': `Bearer ${this.token}` 
                    }
                }
                )
                .then(res => { 
                   
                    this.user.role = res.data.roles[0].id;
                    this.user.name = res.data.name;
                    this.user.surname = res.data.surname;
                    if(!this.user.role) {
                        this.$router.push("/");
                    }
                  
                });
        
        },
        editModal(id) {
            this.target_id = id;
            this.openModal = true;
            this.modal_type =2;

            this.getTarget();
        },
        deleteModal(id) {
            this.target_id = id;
            this.openModal = true;
            this.modal_type =3;
        },
        closeModal() {
            this.openModal = false;
        },
        openAdd() {
            this.openModal = true;
            this.modal_type =1;
        },
        openTarget(index) {
            this.$router.push("/notif?target="+index);
        },
        login_sign() {

        },
        signAsGuest() {
            this.$router.push("/");
        },

        createTarget() {
            let data = {
                title: this.title
            };
            const config = {
                headers: { 'Authorization': `Bearer ${this.token}` }
            };
            this.$http.post('/notif/create/target', data, config)
            .then(res => {
                this.$fire({
                    title: res.data.message,
                    text: "",
                    type: "success",
                    timer: 3000
                });
                this.openModal = false;
                this.getTargets();
            });
        },
        getTargets() {
            const config = {
                headers: { 'Authorization': `Bearer ${this.token}` }
            };
            this.$http.get('/notif/get/targets',  config)
            .then(res => {
                this.plans = res.data;

              
            });
        },
        deletePlan() {
            const config = {
                headers: { 'Authorization': `Bearer ${this.token}` }
            };
            this.$http.get('/notif/delete/target?id='+this.target_id,  config)
            .then(res => {
                this.plans = res.data;
                this.getTargets();
                this.openModal = false;
            });
        },
        editTarget() {
            let data = {
                title: this.title,
                id: this.target_id
            };
            const config = {
                headers: { 'Authorization': `Bearer ${this.token}` }
            };
            this.$http.post('/notif/update/target', data, config)
            .then(res => {
                this.$fire({
                    title: res.data.message,
                    text: "",
                    type: "success",
                    timer: 3000
                });
                this.openModal = false;
                this.getTargets();
            });
        },
        getTarget() {
         
            const config = {
                headers: { 'Authorization': `Bearer ${this.token}` }
            };
            this.$http.get('/notif/get/target?id='+this.target_id, config)
            .then(res => {
                this.title = res.data.title;
            });
        }
      }
    };
</script>

<style scoped lang="scss"> 
   
</style>