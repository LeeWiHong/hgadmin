<template>
  <div>
    <a-table :columns="columns" :dataSource="data" rowKey="userId" :pagination="false">
        <span slot="action" slot-scope="text, record">
        <a @click="deleteUserItem(record.userId)">删除</a>
        </span>
    </a-table>
    <a-pagination v-model="current" :total="total" @change="changeCurrent"></a-pagination>

</div>
  
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
           this.$http.get('api/alluser',{params:{pageno:this.current,pagesize:10}}).then(response =>{
            this.data = response.data.data.list
            this.total = response.data.data.total
           }).catch(error =>{
               console.log(error)
           })
       },
    deleteUserItem(key){
      this.$http.get('api/delUser',{params:{
        userid:key
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
