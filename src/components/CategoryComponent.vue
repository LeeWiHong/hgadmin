<template>
    <div>
        <CategoryItem></CategoryItem>
    </div>
</template>

<script>
import CategoryItem from '../common/CategoryItem'

export default {
    name:'CategoryComponent',
    components:{
        CategoryItem
    },
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
        // console.log('我是create方法')
        // this.getdata()
    },


}
</script>