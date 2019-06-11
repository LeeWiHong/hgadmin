<template>
  <a-table :columns="columns" :dataSource="data" rowKey="adviceId">
    <span slot="action"  slot-scope="text, record">
      <!-- <a href="javascript:;">删除</a> -->
      <a  @click="()=> deleteAdviceItem(record.adviceId)">删除</a>
    </span>
  </a-table>
</template>
<script>
const columns = [{
  title:'建议ID',
  dataIndex: 'adviceId',
  key: 'adviceId',
}, {
  title: '建议标题',
  dataIndex: 'adviceTitle',
  key: 'adviceTitle',
}, {
  title: '建议内容',
  dataIndex: 'adviceBody',
  key: 'adviceBody',
}, 
{
  title: '联系人',
  dataIndex: 'adviceTelephone',
  key: 'adviceTelephone',
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
    name:'AdviceItem',
    data() {
    return {
      data:{},
      columns,
    }
  },
  methods: {
    getdata(){
           this.$http.get('api/alladvice').then(response =>{
            this.data = response.data.data.list
           }).catch(error =>{
               console.log(error)
           })
       },

    deleteAdviceItem(key){
      console.log("我是我十点"+key)
      this.$http.get('api/deladvice',{params:{
        adviceid:key
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
