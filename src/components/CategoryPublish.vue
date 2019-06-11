<template>
    <div>
        <a-textarea placeholder="请输入分类名称" autosize />
        <a-textarea placeholder="请输入图片地址" autosize />
        <a-textarea placeholder="请输入分类类型" autosize />
        <a-textarea placeholder="请输入分类描述" autosize />
        <a-button type="primary" block="">发布</a-button>
    </div>
</template>

<script>
export default {
    name:'CategoryPublish'
}
</script>