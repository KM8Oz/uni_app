<template >
    <div class="drawer-sign">
     <div v-if="isSignIn === 0" class="sign_in">
           <q-input outlined rounded  v-model="email" class="q-my-xs "  />
      <q-input outlined rounded  v-model="password" class="q-my-xs " />
       <div class="row justify-around q-mb-lg">
      <q-btn outline rounded color="primary" label="sign" class="col-4 q-ma-xs" />
      <q-btn outline rounded color="primary" @click="isSignIn = 1" label="back" class="col-4 q-ma-xs"/>
      </div>
     </div>
     <div v-else-if="isSignIn === 1" class="sign_switch">
          <div class="self-center column justify-around q-mb-lg">
        <q-btn outline rounded  class=" q-ma-xs" color="primary" @click="isSignIn = 3" label="register" />
       <q-btn outline rounded  class=" q-ma-xs" color="primary" @click="isSignIn = 0" label="signIn" />
          </div>
     </div>
     <div v-else class="sign_up">
 <q-input outlined rounded v-model="username"  class="q-my-xs " />
      <q-input outlined rounded v-model="email" class="q-my-xs"  />
      <q-input outlined rounded v-model="password" class="q-my-xs" />
      <div class="row justify-around q-mb-lg">
      <q-btn outline rounded color="primary" label="register" class="col-4 q-ma-xs" />
      <q-btn outline rounded color="primary" @click="isSignIn = 1" label="back" class="col-4 q-ma-xs"/>
      </div>
     </div>
    </div>
</template>
<script>
import mapState from "vuex";
export default {
    props:{
        username: {
            type: String
        },
        password: {
            type: String
        },
        email: {
            type:String
        }
    },
    data:()=>({
       isSignIn:1
    }),
    watch:{
    },
    computed:function(){ 
          return{ 
              ...mapState(["uni"]) 
              }
    },
    methods:{
        verify:async function(){
            return true
        },
        sign_in: async function(){

        },
        sign_up:async function(){

        }
    }
    
}
</script>
<style >
    
</style>