<template>
  <a-table :columns="columns" :dataSource="data">
    <span slot="action" slot-scope="text, record">
      <a href="javascript:;">删除</a>
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
       } 
  },
  created() {
    
  },
  mounted() {
    this.getdata()
  },
}
</script>
