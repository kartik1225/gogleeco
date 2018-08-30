<template>
  <div>
    <v-navigation-drawer
          v-model="drawer"
          absolute
          temporary
          class='white'
        >

          <v-list class="pt-0" dense>
            <v-divider></v-divider>

            <v-list-tile
              v-for="btn in navBtnsHolder"
              @click="(drawer = false,inView(btn.id))"
            >

              <v-list-tile-content>
                <v-list-tile-title>{{ btn.name }}</v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
          </v-list>
        </v-navigation-drawer>

    <v-toolbar color='black' dark fixed >
      <v-toolbar-side-icon class="hidden-md-and-up" @click='drawer = !drawer'></v-toolbar-side-icon>
      <img role='button' @click='href(`/`)' src='/static/bigLOGO.png' style="height: 80%;" />
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <template v-for='btn in navBtnsHolder'>
            <v-btn flat @click='inView(btn.id)'>{{btn.name}}</v-btn>

          </template>
          <v-spacer></v-spacer>
      </v-toolbar-items>

          <v-chip small color='primary' @click='toggleLan'>
            {{lanBtnText}}
          </v-chip>
    </v-toolbar>
    <main>
      <router-view/>
    </main>

    <v-footer
       dark
       height="auto"
     >
       <v-card
         class="flex black"
         flat
         tile
       >
         <v-card-title >
           <img role='button' @click='inView(`About_us`)' src='/static/big_logo.png' style="width: 150px;" />
           <v-spacer></v-spacer>
           <v-btn
             v-for="icon in icons"
             class="mx-3"
             dark
             icon
           >
             <v-icon size="24px" @click='href(icon.link)'>{{ icon.name }}</v-icon>
           </v-btn>
         </v-card-title>

         <v-layout justify-end class="hidden-sm-and-down" >
          <div v-for='btn in navButtons'>
            <v-btn flat @click='inView(btn.id)'>{{btn.name}}</v-btn>
          </div>
         </v-layout>
       </v-card>
     </v-footer>

  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  
  data () {
    return {
      icons: [
        {name:'fab fa-facebook',link:'https://www.facebook.com/Goglee-Co-846650405521901/?ref=page_internal'},
        {name:'fab fa-twitter',link:'https://twitter.com/goglee_co'},
        {name:'fab fa-instagram',link:'https://www.instagram.com/goglee_co/'}
      ],
      drawer:false,
      navButtons:[],
      navBtnsHolder:[],
      navBtns:[
        {name:`About us`,id:'About_us'},
        {name:`Our values`,id:'Our_values'},
        {name:`Services`,id:'Services'},
        {name:`Contact us`,id:'Contact_us'}
      ],
      navBtnsAr:[
        {id:`About_us`,name:'من نحن'},
        {id:`Our_values`,name:'قيمنا الجوهرية'},
        {id:`Services`,name:'خدماتنا'},
        {id:`Contact_us`,name:'اتصل بنا'}
      ],
      lanBtnText:'العربية'
    }
  },
  watch:{
    "$route.fullPath"(){
      this.changeToAr();
      console.log(this.navBtnsHolder[0].name);
    }
  },
  methods:{
    inView(id){
      let elmnt = document.getElementById(id);
      elmnt.scrollIntoView({behavior:"smooth"});
    },
    href(str){
      window.location = str;
    },
    changeToAr(){
      if(this.$route.fullPath === '/ar'){
        // this.navBtnsHolder = this.navBtnsAr;
        this.navBtnsHolder = [];
        this.navBtnsHolder.push(... this.navBtnsAr);
      }else{
        this.navBtnsHolder = [];
        // this.navBtnsHolder = this.navBtns;
        this.navBtnsHolder.push(... this.navBtns);
      }
    },

    toggleLan(){
      if(this.$route.fullPath === '/ar'){
        this.$router.push('/');
        this.lanBtnText = 'العربية';
      }else{
        this.lanBtnText = 'English';
        this.$router.push('/ar');
      }
    }
  },
  created(){
    this.changeToAr();
  }
}
</script>

<style>
  body{
    font-family: Roboto;
  }
</style>

