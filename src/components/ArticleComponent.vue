<template>
    <div>
        我是ArticleComponent
    </div>
</template>

<script>
export default {
    name:'ArticleComponent',
    data() {
        return {
            data:[]
        }
    },
    methods: {
        getdata(){
            this.$http.get('')
        }
    },

    created() {
        this.getdata()
    },
}
</script>