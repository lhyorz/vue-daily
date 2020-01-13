<template>
<div class="editors-list">
  <header>
    <i class="icon iconfont icon-back" @click="back"></i>
    <span class="text">主编</span>
  </header>
  <ul class="list" ref="editorList">
    <li class="item" v-for="item in data" :key="item" @click="viewEditorProfile(item.id, item.name)">
      <div class="wrap">
        <img v-lazy.editorList="attachImageUrl(item.avatar)" alt="">
        <span class="name">{{item.name}}</span>
        <span class="bio">{{item.bio}}</span>
        <i class="icon iconfont icon-more"></i>
      </div>
    </li>
  </ul>
</div>
</template>
<script>
import axios from 'axios';
import router from '../router/index.js';

export default {
    data(){
        return {
            data: []
        }
    },
    created() {
        this.fetchData();
    },
    methods: {
        // 获取指定id主题下的编辑信息
        fetchData(){
            axios.get('api/theme/' + this.$route.params.id)
            .then(response=>{
                this.data = response.data.editors;
            });
        },
        // 返回上一级
        back(){
            router.go(-1);
        },
        
    },
}
</script>
<style lang="sass" scoped>
@import "../assets/sass/pages/EditorsList.sass";
</style>