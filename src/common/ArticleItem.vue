<template>
  <a-table :columns="columns" :dataSource="data">
    <span slot="action" slot-scope="text, record">
      <a href="javascript:;">修改</a>
      <a-divider type="vertical" />
      <a href="javascript:;">删除</a>
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
       } 
  },
  created() {
    
  },
  mounted() {
    this.getdata()
  },
}
</script>
