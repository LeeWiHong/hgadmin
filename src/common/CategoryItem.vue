<template>
    <div>
      <a-table :columns="columns" :dataSource="data" rowKey="categoryId">
          <span slot="action" slot-scope="text, record">
          <a @click="deleteCategoryItem(record.categoryId)">删除</a>
          </span>
      </a-table>
        <a-pagination v-model="current" :total="total" @change="changeCurrent"></a-pagination>
    </div>
  
</template>
<script>
const columns = [{
  title:'分类ID',
  dataIndex: 'categoryId',
  key: 'categoryId',
}, {
  title: '分类名称',
  dataIndex: 'categoryName',
  key: 'categoryName',
}, {
  title: '分类图片',
  dataIndex: 'categoryImage',
  key: 'categoryImage',
}, 
{
  title: '分类类型',
  dataIndex: 'categoryType',
  key: 'categoryType',
}, 
{
  title: '分类描述',
  dataIndex: 'description',
  key: 'description',
}, {
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
           this.$http.get('api/allcategory',{params:{pageno:this.current,pagesize:10}}).then(response =>{
            this.data = response.data.data.list
            this.total = response.data.data.total
           }).catch(error =>{
               console.log(error)
           })
       },
    deleteCategoryItem(key){
      console.log("我是我十点"+key)
      this.$http.get('api/delcategory',{params:{
        catid:key
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
