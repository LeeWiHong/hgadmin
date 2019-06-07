<template>
    <div>
        <div style="display:flex;flex-direction: row;">
            <a-input placeholder="请输入标题..." v-model:value='title' ></a-input>
            <a-textarea placeholder="请输入文章简要描述..." v-model:value='description' :autosize="{minRow:1,maxRows:6}"/>
            <a-textarea placeholder="请输入封面链接..." v-model:value='uploadimage' :autosize="{minRow:1,maxRows:6}"/>
            <a-button type="primary" @click="postArticle">发布</a-button>
        </div>
        <mavon-editor style="z-index:1" v-model:value='bodycontent'/>
    </div>
</template>

<script>
export default {
    name:'PublishComponent',
    data() {
        return {
            title:'',
            description:'',
            uploadimage:'',
            bodycontent:''
        }
    },

    methods: {
        postArticle(){
            console.log(this.title+this.description+this.uploadimage+this.bodycontent)
        }
    },
}
</script>