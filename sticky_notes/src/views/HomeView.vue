<script setup>
import { useDefinePosts } from "../stores/counter"
const postsDefine = useDefinePosts()



</script>

<template>
<div class="wrapper">
    <div class="topStuff">
        <h1>Post-it!</h1>
        <input type="text" v-model="postsDefine.text">
        <button @click="postsDefine.submitPost()">Submit me!</button>
    </div>

    <div class="reminders">
        <div class="each" v-for="each in postsDefine.posts">
            <div class="remin">{{ each.text }}</div>
            <div class="ID">{{ each.id }}</div>
        </div>
    </div>
    
</div>
</template>


<style scoped>

.wrapper{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

}

.reminders{
    margin-top: 50px;
    width: 95vw;
    min-height: 80vh;
    background-color: rgba(0, 0, 0, 0.2);
    border-radius: 10px;
    display: flex;
    flex-direction: row-reverse;
    justify-content: flex-start;
    flex-wrap: wrap;
    justify-content: center;
    }

.each{
    margin: 15px;
    width: 250px;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 250px;
    
    background-color: rgba(238, 243, 114, 0.5);
}
.each > div{
    margin: 15px;
}
.ID{
    font-size: 10px;
    text-align: right;
}
.remin{
    font-size: 20px;
}
</style>