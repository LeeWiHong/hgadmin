<template>
    <div>
        <div style="display:flex;flex-direction: row;">
             <a-input placeholder="请输入标题..."></a-input>
            <a-input placeholder="转载链接..."></a-input>
            <a-button type="primary">发布</a-button>
        </div>
        
        <a-input-group compact style="margin:10px"> 

            <a-select style="z-index:300;width:80px" defaultValue="Option1-1">
                <a-select-option v-for="(item, index) in items" :key="index" value="Option1-1">{{item}}</a-select-option>
            </a-select>
            <a-select  style="z-index:300;width:80px" defaultValue="Option2-2">
                <a-select-option v-for="(item, index) in items" :key="index" value="Option2-2">{{item}}</a-select-option>
            </a-select>

            <a-upload name="file" :multiple="true" action="https://www.mocky.io/v2/5cc8019d300000980a055e76" :headers="headers" @change="handleChange">
            <a-button>
                <a-icon type="upload" /> 点击上传封面图片
            </a-button>
            </a-upload>
            <a-textarea placeholder="请输入文章简要描述..." :autosize="{minRow:1,maxRows:6}"/>
        </a-input-group>
    </div>
</template>

<script>
export default {
    name:'PublishHeader',
    data() {
        return {
            items:[22,33,44,55]
        }
    },
}
</script>

<style scoped>

</style>
