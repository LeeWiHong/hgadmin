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
  title:'平台ID',
  dataIndex: 'platformId',
  key: 'platformId',
}, {
  title: '凭他名称',
  dataIndex: 'platformName',
  key: 'platformName',
}, {
  title: '平台链接',
  dataIndex: 'platformLink',
  key: 'platformLink',
}, 
{
  title: '平台描述',
  dataIndex: 'platformDescript',
  key: 'platformDescript',
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
           this.$http.get('api/allplatform').then(response =>{
            this.data = response.data.data
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
