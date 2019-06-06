<template>
    <div>
        <mavon-editor style="z-index:1" v-model="value"/>
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