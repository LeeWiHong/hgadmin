<template>
    <div>
        
    </div>
</template>

<script>
export default {
    name:'PublishHeader',

    data() {
        return {
            
        }
    },
    methods: {
        uploadArticle(info){
            this.info = info
            console.log(info)
        },
        publishBtnClick(){
            this.$emit('publishBtnClick',this.title,this.description,this.uploadimage)
        },

        // uploadImage(){
        //     this.$http.post('api/uploadimage',this.info,{
        //         headers: {
        //             'Content-Type': 'multipart/form-data',
        //             'charset':'utf-8'
        //             }
        //     }).then(response =>{
        //     this.data = response.data.data
        //    }).catch(error =>{
        //        console.log(error)
        //    })
        // }
    },
    mounted() {
        
    },
}
</script>

