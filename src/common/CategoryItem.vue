<template>
  <a-table :columns="columns" :dataSource="data">
    <!--
    <a slot="name" slot-scope="text" href="javascript:;">{{text}}</a>
    <span slot="customTitle"><a-icon type="smile-o" /> Name</span>
    <span slot="tags" slot-scope="tags">
      <a-tag v-for="tag in tags" color="blue" :key="tag">{{tag}}</a-tag>
    </span>
    <span slot="action" slot-scope="text, record">
      <a href="javascript:;">Invite 一 {{record.name}}</a>
      <a-divider type="vertical" />
      <a href="javascript:;">Delete</a>
      <a-divider type="vertical" />
      <a href="javascript:;" class="ant-dropdown-link">
        More actions <a-icon type="down" />
      </a>
    </span>
    -->
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
}, 
{
  title: 'Tags',
  key: 'tags',
  dataIndex: 'tags',
  scopedSlots: { customRender: 'tags' },
}, {
  title: '操作',
  key: 'action',
  scopedSlots: { customRender: 'action' },
}];

const data = [{
  key: '1',
  name: 'John Brown',
  age: 32,
  address: 'New York No. 1 Lake Park',
  tags: ['nice', 'developer'],
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
