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
  title:'用户ID',
  dataIndex: 'userId',
  key: 'userId',
}, {
  title: '用户名称',
  dataIndex: 'userName',
  key: 'userName',
}, {
  title: '用户电话',
  dataIndex: 'userTelephone',
  key: 'userTelephone',
}, 
{
  title: '用户角色',
  dataIndex: 'userRole',
  key: 'userRole',
}, 
{
  title: '用户状态',
  dataIndex: 'userState',
  key: 'userState',
}, 
{
  title: '用户头像',
  dataIndex: 'headImage',
  key: 'headImage',
}, 
{
  title: '创建时间',
  dataIndex: 'createTime',
  key: 'createTime',
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
           this.$http.get('api/alluser',{params:{pageno:1,pagesize:100}}).then(response =>{
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
