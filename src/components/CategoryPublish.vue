<template>
    <div>
        <a-textarea v-model="categoryname" placeholder="请输入分类名称" autosize />
        <a-textarea v-model="imagepath" placeholder="请输入图片地址" autosize />
        <a-textarea v-model="description" placeholder="请输入分类描述" autosize />
        <a-button @click="CategoryPublishBtnClick" type="primary" block="">发布</a-button>
    </div>
</template>

<script>
export default {
    name:'CategoryPublish',
    data() {
        return {
            categoryname:'',
            imagepath:'',
            description:''
        }
    },
    methods: {
        CategoryPublishBtnClick(){
            this.$http.get('api/addcategory',{params:{
                categoryname:this.categoryname,
                imagepath:this.imagepath,
                description:this.description
            }}).then(response=>{
                this.$message.success(response.data.msg, 3,
                    () => {
                        this.$router.replace('/category')
                    }
                );
            }).catch(error=>{
                 this.$message.error(response.data.msg, 3,
                     () => {}
                 );
            })
        }
    },
}
</script>