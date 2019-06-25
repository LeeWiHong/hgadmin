<template>
<div>
<a-table :columns="columns" :dataSource="data" rowKey="articleId" :pagination="false" >
    <span slot="action" slot-scope="text, record">
      <a @click="deleteArticleItem(record.articleId)">删除</a>
      <a-divider type="vertical"></a-divider>
      <a @click="jump2ArticleDetail(record.articleId)">查看</a>
    </span>
  </a-table>
  <a-pagination v-model="current" :total="total" @change="changeCurrent"></a-pagination>
</div>
  
</template>
<script>
const columns = [{
  title:'文章ID',
  dataIndex: 'articleId',
  key: 'articleId',
}, {
  title: '文章标题',
  dataIndex: 'articleTitle',
  key: 'articleTitle',
}, {
  title: '文章链接',
  dataIndex: 'articleLink',
  key: 'articleLink',
}, 
{
  title: '文章分类',
  dataIndex: 'articleCategory',
  key: 'articleCategory',
}, 
{
  title: '文章封面',
  dataIndex: 'articleImage',
  key: 'articleImage',
},

{
  title: '操作',
  key: 'action',
  scopedSlots: { customRender: 'action' },
}];
export default {
    name:'CategoryItem',
    data() {
    return {
      data:{},
      columns,
      current:1,
      total:''
    }
  },
  methods: {
    changeCurrent(current){
      this.current = current
      this.getdata()
    },
    getdata(){
           this.$http.get('api/indexarticle',{params:{pageno:this.current,pagesize:10}}).then(response =>{
            this.data = response.data.data.list
            this.total = response.data.data.total
           }).catch(error =>{
               this.$message.error(response.data.msg, 3,
               () => {}
               );
           })
       },
    deleteArticleItem(key){
      console.log("我是我十点"+key)
      this.$http.get('api/delarticle',{params:{
        articleid:key
      }}).then(response=>{
        this.$message.success(response.data.msg, 3,
          () => {
            this.getdata()
          }
        );
      }).catch(error=>{
        this.$message.error(response.data.msg, 3,
          () => {}
        );
      })
    }
  },

  jump2ArticleDetail(articleId){
    
  },
  created() {
    
  },
  mounted() {
    this.getdata()
  },
}
</script>
