<template>
    <div>
        <a-textarea v-model:value='platname' placeholder="请输入平台名称" autosize />
        <a-textarea v-model:value='platlink' placeholder="请输入平台连接" autosize />
        <a-textarea v-model:value='platdescription' placeholder="请输入平台描述" autosize />
        <a-button @click="PlatformPublishBtnClick" type="primary" block>发布</a-button>
    </div>
</template>

<script>
export default {
    name:'PlatformPublish',
    data() {
        return {
            platname:'',
            platlink:'',
            platdescription:''
        }
    },
    methods: {
        PlatformPublishBtnClick(){
            this.$http.get('api/addplatform',{params:{
                platname:this.platname,
                platlink:this.platlink,
                platdescription:this.platdescription
            }}).then(response=>{
                this.$message.success(response.data.msg, 3,
                    () => {
                        this.$router.replace('/platform')
                    }
                );
            }).catch(error=>{
                 this.$message.error(response.data.msg, 3,
                     () => {}
                 );
            })
        }
    },
}
</script>