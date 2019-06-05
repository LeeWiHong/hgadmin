<template>
    <div>
        我是发布视图
        <mavon-editor v-model="value"/>
    </div>
</template>

<script>
export default {
    name:'PublishItem',
    data() {
        return {
            value:''
        }
    }
}
</script>