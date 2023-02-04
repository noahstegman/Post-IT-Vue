import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useDefinePosts = defineStore({
  id: "PostMaster",
  state: () => ({
    post: {},
    text: "",
    posts: [],
    id: 1
  }),
  actions: {
    submitPost() {
      if(this.text){
        this.post = {
          text: this.text,
          id: this.id
        }
        this.id++
        this.posts = [this.post, ...this.posts]
        this.text = ""
      }else{
        alert("Need value!!")
        return
      }
    }
  }

})