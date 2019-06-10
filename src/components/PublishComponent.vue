<template>
    <div>
        <div style="display:flex;flex-direction: row;">
            <a-input placeholder="请输入标题..." v-model:value='title' ></a-input>
           
            <a-tree-select
            style="width:500px"
            :dropdownStyle="{ maxHeight: '400px', overflow: 'auto' }"
    
            placeholder='请选择分类'
            treeDefaultExpandAll
            v-model="categoryName"
            >
            <a-tree-select-node v-for="(item, index) in CategorytreeData" :key="index" :value="String(item.categoryId)" :title="item.categoryName"></a-tree-select-node>
            </a-tree-select>
        
        <a-tree-select
            style="width:500px"
            :dropdownStyle="{ maxHeight: '400px', overflow: 'auto' }"
            placeholder='请选择平台'
            treeDefaultExpandAll
            v-model="platformName"
            >
            <a-tree-select-node v-for="(item, index) in PlatformtreeData" :key="index" :value="String(item.platformId)" :title="item.platformName"></a-tree-select-node>
            </a-tree-select>

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
            bodycontent:'',
            platformName:'',
            platformId:'',
            PlatformtreeData:[],
            categoryName: '',
            categoryId:'',
            CategorytreeData:[]
            }
        },

    methods: {
        postArticle(){

            this.$http.get('api/addarticle',
            {params:
            {title:""+this.title,
            category:""+this.categoryName,
            platform:this.platformName,
            description:""+this.description,
            uploadimage:""+this.uploadimage,
            bodycontent:""+this.bodycontent
            }}).then(response=>{
                console.log(response.data.data)
                this.$message.success(response.data.msg, 3,
                    () => {
                        
                    }
                );
            }).catch(error=>{
                console.log(error)
            })
            console.log(this.title+this.description+this.uploadimage+this.bodycontent)
        },

        categoryHandleChange(value){
            console.log(value)
        },

        getAllCategoryData(){
            this.$http.get('api/allcategory').then(response=>{
                this.CategorytreeData = response.data.data
            }).catch(error =>{
                console.log(error)
            })
        },

        getAllPlatformData(){
            this.$http.get('api/allplatform').then(response =>{
                this.PlatformtreeData = response.data.data
            }).catch(error=>{
                console.log(error)
            })
        }
        
        

    },

    mounted() {
            this.getAllCategoryData()
            this.getAllPlatformData()
        },
}
</script>