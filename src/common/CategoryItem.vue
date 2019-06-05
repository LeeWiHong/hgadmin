<template>
  <a-table :columns="columns" :dataSource="data">
    <!--
    <a slot="name" slot-scope="text" href="javascript:;">{{text}}</a>
    <span slot="customTitle"><a-icon type="smile-o" /> Name</span>
    <span slot="tags" slot-scope="tags">
      <a-tag v-for="tag in tags" color="blue" :key="tag">{{tag}}</a-tag>
    </span>
    -->
    <span slot="action" slot-scope="text, record">
      <a href="javascript:;">修改</a>
      <a-divider type="vertical" />
      <a href="javascript:;">删除</a>
    </span>
  </a-table>
</template>
<script>
const columns = [{
  title:'分类ID',
  dataIndex: 'categoryid',
  key: 'categoryid',
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

const data = [{
  categoryid: '1',
  categoryName: '安卓',
  categoryImage:'/images/123.png',
  categoryType:'2',
  description:'安卓开发类型',
},
{
  categoryid: '2',
  categoryName: '安卓',
  categoryImage:'/images/123.png',
  categoryType:'2',
  description:'安卓开发类型',
},
{
  categoryid: '3',
  categoryName: '安卓',
  categoryImage:'/images/123.png',
  categoryType:'2',
  description:'安卓开发类型',
},
{
  categoryid: '4',
  categoryName: '安卓',
  categoryImage:'/images/123.png',
  categoryType:'2',
  description:'安卓开发类型',
},
{
  categoryid: '5',
  categoryName: '安卓',
  categoryImage:'/images/123.png',
  categoryType:'2',
  description:'安卓开发类型',
},
{
  categoryid: '6',
  categoryName: '安卓',
  categoryImage:'/images/123.png',
  categoryType:'2',
  description:'安卓开发类型',
}
,
{
  categoryid: '6',
  categoryName: '安卓',
  categoryImage:'/images/123.png',
  categoryType:'2',
  description:'安卓开发类型',
},
{
  categoryid: '6',
  categoryName: '安卓',
  categoryImage:'/images/123.png',
  categoryType:'2',
  description:'安卓开发类型',
},
{
  categoryid: '6',
  categoryName: '安卓',
  categoryImage:'/images/123.png',
  categoryType:'2',
  description:'安卓开发类型',
},
{
  categoryid: '6',
  categoryName: '安卓',
  categoryImage:'/images/123.png',
  categoryType:'2',
  description:'安卓开发类型',
},
{
  categoryid: '6',
  categoryName: '安卓',
  categoryImage:'/images/123.png',
  categoryType:'2',
  description:'安卓开发类型',
},
{
  categoryid: '6',
  categoryName: '安卓',
  categoryImage:'/images/123.png',
  categoryType:'2',
  description:'安卓开发类型',
},
{
  categoryid: '6',
  categoryName: '安卓',
  categoryImage:'/images/123.png',
  categoryType:'2',
  description:'安卓开发类型',
},
{
  categoryid: '6',
  categoryName: '安卓',
  categoryImage:'/images/123.png',
  categoryType:'2',
  description:'安卓开发类型',
}
];

export default {
    
    name:'CategoryItem',
    data() {
    return {
      data,
      columns,
    }
  }
}
</script>
