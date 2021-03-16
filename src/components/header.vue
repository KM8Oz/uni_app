<template>
    <div class="app-header">
       <q-toolbar class="toolbar">
        
          <q-btn flat @click="drawer = !drawer" rounded icon="menu" color="white" />
                  <q-input
        v-model="search"
        debounce="300"
        standout
        rounded
        input-class="text-white q-px-xs"
        placeholder="Search"
        class="fit q-ma-xs"
      >
        <template v-slot:append> 
          <q-icon name="search" color="white"/>
        </template>
          <template v-if="search" v-slot:prepend>
          <q-icon name="cancel" @click.stop="search = null" class="cursor-pointer" />
        </template>
      </q-input>
        </q-toolbar>
        <q-drawer
        v-model="drawer"
        :width="200"
        :breakpoint="400"
        class="header-drawer"
        content-class="header-drawer-content"
      >
        <q-scroll-area v-if="uni.usr.auth" style="height: calc(100% - 150px); margin-top: 150px; border-right: 1px solid #ddd">
          <q-list padding>
            <q-item clickable v-ripple>
              <q-item-section avatar>
                <q-icon name="inbox" />
              </q-item-section>

              <q-item-section>
                Inbox
              </q-item-section>
            </q-item>

            <q-item active clickable v-ripple>
              <q-item-section avatar>
                <q-icon name="star" />
              </q-item-section>

              <q-item-section>
                Star
              </q-item-section>
            </q-item>

            <q-item clickable v-ripple>
              <q-item-section avatar>
                <q-icon name="send" />
              </q-item-section>

              <q-item-section>
                Send
              </q-item-section>
            </q-item>

            <q-item clickable v-ripple>
              <q-item-section avatar>
                <q-icon name="drafts" />
              </q-item-section>

              <q-item-section>
                Drafts
              </q-item-section>
            </q-item>
          </q-list>
        </q-scroll-area>
        <div class="drawer-sign-wrapper">
         <m-sign type="sign" />
        </div>
        <q-img class="absolute-top header-wall" src="../assets/angryimg.png" style="height: 150px" @click="drawer = !drawer">
        </q-img>
          <div class="header-avatar bg-transparent">
            <q-avatar size="56px" class="q-mb-sm ">
              <img v-if="uni.usr.auth" :src="uni.usr.avatar">
              <q-icon name="add" color="black"/>
            </q-avatar>
            <div class="text-weight-bold">{{uni.usr.un}}</div>
            <div>{{uni.usr.nm}}</div>
          </div>
      </q-drawer>
        <q-expansion-item
      v-model="expanded"
      class="blured"
    >
          <q-carousel
      v-model="newsIndex"
      swipeable
      animated
      padding
      infinite
      ref="slider"
      navigation
      navigation-icon="radio_button_unchecked"
      class="header-carousel text-white "
      :autoplay="true"
       transition-prev="slide-right"
      transition-next="slide-left"
      @mouseenter="autoplay = false"
      @mouseleave="autoplay = true"
    >
    <q-carousel-slide v-for="i in news" :key="i" :name="i" class="text-center header-slider">
        <q-scroll-area class="fit" :bar-style="{display:'hidden'}" :thumb-style="{display:'none'}">
        <q-card dark bordered class="header-card">
      <q-card-section>
        <div class="text-h6">Our Changing Planet</div>
        <div class="text-subtitle2">by John Doe {{i}}</div>
      </q-card-section>

      <q-separator dark inset />

      <q-card-section>
        {{ lorem }}
      </q-card-section>
    </q-card>
    
        </q-scroll-area>
        
    </q-carousel-slide>
          </q-carousel>
        </q-expansion-item>
      </div>   
    
</template>
<script>
import { mapState } from "vuex";
export default {
    name:"header",
    data() {
        return {
             newsIndex:0,
             expanded:false,
             index:null,
             newsSlide:null,
            search:null,
            news:[1,2,3,4,5],
            drawer:false,
            lorem: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
        }
    },
    watch:{
      index:function(val){
        console.log(val);
      }
    },
    computed: {
        ...mapState(["uni"]),
    },
    mounted() {
        console.log(this.uni);
    },
    methods:{
      slide:function(e){
console.log(e);
      }
    }
}
</script>
<style lang="">
    
</style>