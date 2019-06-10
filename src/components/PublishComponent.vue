<template>
    <div>
        <div style="display:flex;flex-direction: row;">
            <a-input placeholder="请输入标题..." v-model:value='title' ></a-input>
           
           
            <a-tree-select
            style="width:450px"
            :dropdownStyle="{ maxHeight: '400px', overflow: 'auto' }"
    
            placeholder='请选择分类'
            treeDefaultExpandAll
            v-model="categoryName"
            >
            <a-tree-select-node v-for="(item, index) in CategorytreeData" :key="index" :value="item.categoryId" :title="item.categoryName"></a-tree-select-node>
            </a-tree-select>


            <a-textarea placeholder="请输入文章简要描述..." v-model:value='description' :autosize="{minRow:1,maxRows:6}"/>
            <a-textarea placeholder="请输入封面链接..." v-model:value='uploadimage' :autosize="{minRow:1,maxRows:6}"/>
            <a-button type="primary" @click="postArticle">发布</a-button>
        </div>
        <mavon-editor style="z-index:1" v-model:value='bodycontent'/>
    </div>
</template>

<script>

const CategorytreeData = [{
    categoryId: 1,
    categoryName: 'iOS',
    categoryImage: '/images/android.png',
    categoryType: 1,
    description: '安卓开发类'
},{
    categoryId: 2,
    categoryName: 'android',
    categoryImage: '/images/android.png',
    categoryType: 1,
    description: '安卓开发类'
}]
export default {
    name:'PublishComponent',
    data() {
        return {
            title:'',
            description:'',
            uploadimage:'',
            bodycontent:'',
            platform:'',
            category:'',
            categorylist:[24,25,34,67],
            platformlist:["baidu","juejin","tencent"],
            categoryName: '',
            CategorytreeData,
        }
    },

    methods: {
        postArticle(){
            this.$http.get('api/addarticle',
            {params:
            {title:""+this.title,
            description:""+this.description,
            uploadimage:""+this.uploadimage,
            bodycontent:""+this.bodycontent
            }}).then(response=>{
                console.log(response.data.data)
            }).catch(error=>{
                console.log(error)
            })
            console.log(this.title+this.description+this.uploadimage+this.bodycontent)
        },

        categoryHandleChange(value){
            console.log(value)
        }
    },
}
</script>