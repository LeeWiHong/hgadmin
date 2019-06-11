<template>
    <div>
      <a-table :columns="columns" :dataSource="data" rowKey="platformId">
          <span slot="action" slot-scope="text, record">
           <a @click="()=> deletePlatformItem(record.platformId)">删除</a>
          </span>
      </a-table>
      
      <a-pagination v-model="current" :total="total" @change="changeCurrent"></a-pagination>

    </div>
  
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
           this.$http.get('api/allplatform',{params:{pageno:this.current,pagesize:10}}).then(response =>{
            this.data = response.data.data.list
            this.total = response.data.data.total
           }).catch(error =>{
               this.$message.error(response.data.data.msg, 3,
                 () => {}
               );
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
