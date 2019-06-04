<template>
    <div>
        我是CategoryComponent
    </div>
</template>

<script>
export default {
    name:'CategoryComponent',
    data() {
        return {
            data:[]
        }
    },
    methods: {
       getdata(){
           console.log('我是dataf方法')
           this.$http.get('http://192.168.2.2:8080/api/allcategory').then(response =>{
               this.data = response.data
               console.log('我是数据'+response.data)
           }).catch(error =>{
               console.log(error)
           })
       } 
    },

    created() {
        console.log('我是create方法')
        this.getdata()
    },


}
</script>