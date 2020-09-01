<template>
    <div>{{orders}}</div>
</template>

<script>

export default {
    
   data() {
       return {
           orders: []
       }
   },

   mounted() {
       this.orders = JSON.parse(localStorage.getItem("order"));
   },

   methods: {

   }
}
</script>

<style>
 
</style>
