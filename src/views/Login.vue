<template>
     <!-- <el-row type="flex" justify="center" 
    align="middle" class="mb-4">
    <el-button type="primary" @onclick="onPrimary">Primary</el-button>
    <el-button type="success" @onclick="onSuccess">Success</el-button>
    <el-button type="info">Info</el-button>
    <el-button type="warning">Warning</el-button>
    <el-button type="danger">Danger</el-button>
  </el-row> -->
  <hello/>
  <!-- <router-view/> -->


</template>

<script>
import hello from '../components/HelloWorld.vue'
    export default{
        name:'hello',
        components:{
            hello
        },
    
    methods:{
        onPrimary:function(){
            this.$router.push('success');

        }
    }
 
}

</script>

<style lang="scss" scoped>


</style>