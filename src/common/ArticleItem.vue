<template>
  <a-table :columns="columns" :dataSource="data" rowKey="articleId">
    <span slot="action" slot-scope="text, record">
      <a @click="deleteArticleItem(record.articleId)">删除</a>
    </span>
  </a-table>
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
    }
  },
  methods: {
    getdata(){
           this.$http.get('api/indexarticle',{params:{pageno:1,pagesize:100}}).then(response =>{
            this.data = response.data.data.list
           }).catch(error =>{
               console.log(error)
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
  created() {
    
  },
  mounted() {
    this.getdata()
  },
}
</script>
