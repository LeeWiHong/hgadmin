<template>
    <div>
        <div style="display:flex;flex-direction: row;">
             <a-input placeholder="请输入标题..." v-model="title" ></a-input>
             <a-textarea placeholder="请输入文章简要描述..." v-model="description" :autosize="{minRow:1,maxRows:6}"/>
            <a-upload name="file" :customRequest="uploadImage" :multiple="true" @change="uploadArticle">
            <a-button>
                <a-icon type="upload" /> 点击上传封面图片
            </a-button>
            </a-upload>
            <a-button type="primary">发布</a-button>
        </div>
    </div>
</template>

<script>
export default {
    name:'PublishHeader',
    data() {
        return {
            title:'',
            description:'',
            body:'',
        }
    },
    methods: {
        uploadArticle(){
            console.log("fffdaf")
        },
        uploadImage(){
            this.$http.post('api/uploadimage',{
                headers: {
                    'Content-Type': 'multipart/form-data',
                    'charset':'utf-8'
                    }
            }).then(response =>{
            this.data = response.data.data
           }).catch(error =>{
               console.log(error)
           })
        }
    },
    mounted() {
        
    },
}
</script>

