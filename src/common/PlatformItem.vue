<template>
  <a-table :columns="columns" :dataSource="data" rowKey="platformId">
    <span slot="action" slot-scope="text, record">
      <a @click="()=> deletePlatformItem(record.platformId)">删除</a>
    </span>
  </a-table>
</template>
<script>
const columns = [{
  title:'平台ID',
  dataIndex: 'platformId',
  key: 'platformId',
}, {
  title: '平台名称',
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
    name:'PlatformItem',
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
       },

      deletePlatformItem(key){
      console.log("我是我十点"+key)
      this.$http.get('api/delplatform',{params:{
        platid:key
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
