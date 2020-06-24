<template>
<layout>
<div class="window">

        <div class="top">
          <v-smooth class="preview" 
                    :roundness="roundness"  
                    :color="color"
                    active=true
                    @svgUpdated="handleUpdate" ></v-smooth>
            <div class="grid">
              <v-icon :roundness="roundness" color="#E9F9F8" colorIcon="#53C1BA" d="M18,20H13V14.94A9,9,0,0,0,21,6a8.72,8.72,0,0,0-.67-3.39,1,1,0,0,0-.22-.32L20,2.21a.92.92,0,0,0-.21-.13A.94.94,0,0,0,19.51,2l-.1,0H4.59L4.5,2a.94.94,0,0,0-.29.06A2.12,2.12,0,0,0,4,2.2l-.12.09a1,1,0,0,0-.22.32A8.72,8.72,0,0,0,3,6a9,9,0,0,0,8,8.94V20H6a1,1,0,0,0,0,2H18a1,1,0,0,0,0-2ZM5,6a6.91,6.91,0,0,1,.29-2H18.71A6.91,6.91,0,0,1,19,6,7,7,0,0,1,5,6Z"></v-icon>
              <v-icon :roundness="roundness" color="#E9DEF7" colorIcon="#915CD6" d="M21.49,4.73,17,2.17a1,1,0,0,0-1,0L12,4.45,8,2.17a1,1,0,0,0-1,0L2.51,4.73A1,1,0,0,0,2,5.6v5.12a1,1,0,0,0,.51.87l4,2.27V18.4a1,1,0,0,0,.51.87l4.5,2.56a1,1,0,0,0,1,0L17,19.27a1,1,0,0,0,.51-.87V13.86l4-2.27a1,1,0,0,0,.51-.87V5.6A1,1,0,0,0,21.49,4.73ZM4,10.14v-4l3.5-2,3.5,2v4l-3.5,2Zm11.5,7.68-3.5,2-3.5-2v-4l3.5-2,3.5,2ZM20,10.14l-3.5,2-3.5-2v-4l3.5-2,3.5,2Z" ></v-icon>
              <v-icon :roundness="roundness" color="#D7EBFF" colorIcon="#399CFF" d="M16.5,5A4.86,4.86,0,0,0,14,5.69,6,6,0,0,0,2.5,8v4a6,6,0,0,0,5,5.91V21a1,1,0,0,0,2,0V17.91a6.08,6.08,0,0,0,2.78-1.26A5,5,0,0,0,15.5,18.9V21a1,1,0,0,0,2,0V18.9a5,5,0,0,0,4-4.9V10A5,5,0,0,0,16.5,5Zm-5,5v4a5.23,5.23,0,0,0,.06.57,4,4,0,0,1-2.06,1.3V13a1,1,0,0,0-2,0v2.86A4,4,0,0,1,4.5,12V8a4,4,0,0,1,6.83-2.84,3.94,3.94,0,0,1,1.06,2A5,5,0,0,0,11.5,10Zm8,4a3,3,0,0,1-2,2.82V13a1,1,0,0,0-2,0v3.82a3,3,0,0,1-2-2.82V10a3,3,0,0,1,6,0Z" ></v-icon>
              <v-icon :roundness="roundness" color="#FFF4D7" colorIcon="#F5B60B" d="M18,7h-.35A3.45,3.45,0,0,0,18,5.5a3.49,3.49,0,0,0-6-2.44A3.49,3.49,0,0,0,6,5.5,3.45,3.45,0,0,0,6.35,7H6a3,3,0,0,0-3,3v2a1,1,0,0,0,1,1H5v6a3,3,0,0,0,3,3h8a3,3,0,0,0,3-3V13h1a1,1,0,0,0,1-1V10A3,3,0,0,0,18,7ZM11,20H8a1,1,0,0,1-1-1V13h4Zm0-9H5V10A1,1,0,0,1,6,9h5Zm0-4H9.5A1.5,1.5,0,1,1,11,5.5Zm2-1.5A1.5,1.5,0,1,1,14.5,7H13ZM17,19a1,1,0,0,1-1,1H13V13h4Zm2-8H13V9h5a1,1,0,0,1,1,1Z" ></v-icon>
            </div>
        </div>

        <div class="bottom">

          <div class="side left desktop" @click="$refs.colorInput.focus()">
            <div class="color"  :style="{ 'background-color': computedColor }" ></div>
            <input type="text" ref="colorInput" name="color" v-model="color">
          </div>

          <div class="center">

            <div class="sliderIcon" >
                <span class="content">
                  <div class="square"></div>
                </span>
                <svg viewBox="0 0 266.577 266.577" >
                  <path  d="M83.289-50C-10.013-50-50-10.013-50,83.289h0c0,93.3,39.987,133.289,133.289,133.289h0c93.3,0,133.289-39.987,133.289-133.289h0C216.577-10.013,176.591-50,83.289-50Z" transform="translate(50 50)" fill="#FFFFFF"/>
                </svg>
            </div>

            <v-slider  min="0" max="1" step="0.01" v-model="roundness"></v-slider>

            <div class="sliderIcon" >
                <span class="content">
                  <div class="circle"></div>
                </span>
                <svg viewBox="0 0 266.577 266.577" >
                  <path  d="M83.289-50C-10.013-50-50-10.013-50,83.289h0c0,93.3,39.987,133.289,133.289,133.289h0c93.3,0,133.289-39.987,133.289-133.289h0C216.577-10.013,176.591-50,83.289-50Z" transform="translate(50 50)" fill="#FFFFFF"/>
                </svg>
            </div>

          </div>


          <button class="side right desktop" @click="chooseRandom()">
            <svg viewBox="0 0 24 24" ref="random"><path d="M19.91,15.51H15.38a1,1,0,0,0,0,2h2.4A8,8,0,0,1,4,12a1,1,0,0,0-2,0,10,10,0,0,0,16.88,7.23V21a1,1,0,0,0,2,0V16.5A1,1,0,0,0,19.91,15.51ZM12,2A10,10,0,0,0,5.12,4.77V3a1,1,0,0,0-2,0V7.5a1,1,0,0,0,1,1h4.5a1,1,0,0,0,0-2H6.22A8,8,0,0,1,20,12a1,1,0,0,0,2,0A10,10,0,0,0,12,2Z" /></svg>
            <div class="txt">Random</div>
          </button>

          <div class="container mobile">
            <div class="side left " @click="$refs.colorInput.focus()">
              <div class="color"  :style="{ 'background-color': computedColor }" ></div>
              <input type="text" ref="colorInput" name="color" v-model="color">
            </div>
            <button class="side right " @click="chooseRandom()">
              <svg viewBox="0 0 24 24" ref="random1"><path d="M19.91,15.51H15.38a1,1,0,0,0,0,2h2.4A8,8,0,0,1,4,12a1,1,0,0,0-2,0,10,10,0,0,0,16.88,7.23V21a1,1,0,0,0,2,0V16.5A1,1,0,0,0,19.91,15.51ZM12,2A10,10,0,0,0,5.12,4.77V3a1,1,0,0,0-2,0V7.5a1,1,0,0,0,1,1h4.5a1,1,0,0,0,0-2H6.22A8,8,0,0,1,20,12a1,1,0,0,0,2,0A10,10,0,0,0,12,2Z" /></svg>
              <div class="txt"></div>
            </button>

          </div>

        </div>

        <div class="over_bottom">
          <button class="button pulsing small" ref="copyCSS" @click="copyCSS" >Copy CSS</button>
          <a :href="exports.svgUrl" download="smooth.svg" class="button pulsing round" ref="download" >
              <svg xmlns="http://www.w3.org/2000/svg" width="19.981" height="19.987" viewBox="0 0 19.981 19.987">
                <path id="cloud-download" d="M14.29,17.29,13,18.59V13a1,1,0,0,0-2,0v5.59l-1.29-1.3a1,1,0,1,0-1.42,1.42l3,3a1,1,0,0,0,.33.21.94.94,0,0,0,.76,0,1,1,0,0,0,.33-.21l3-3a1,1,0,0,0-1.42-1.42ZM18.42,6.22A7,7,0,0,0,5.06,8.11,4,4,0,0,0,6,16a1,1,0,1,0,0-2,2,2,0,0,1,0-4A1,1,0,0,0,7,9a5,5,0,0,1,9.73-1.61,1,1,0,0,0,.78.67,3,3,0,0,1,.24,5.84,1,1,0,0,0,.5,1.94,5,5,0,0,0,.17-9.62Z" transform="translate(-1.991 -2.013)" fill="#fff"/>
              </svg>              
          </a>
          <button class="button pulsing small" ref="copySVG" @click="copySVG" >Copy SVG</button>
        </div>

    </div>



</layout>
    

</template>

<script>
import smooth from '@/components/smooth'
import slider from '@/components/slider'
import icons from '@/components/icons'
import Color from 'color'

import {TweenLite} from 'gsap'
import {copy} from '@/js/clipboard' 

export default {
  name: 'app',
  components : {
    'v-smooth' : smooth,
    'v-slider' : slider,
    'v-icon' : icons
  },
  data () {
    return {
      roundness :  0.5,
      color : "#495057",
      exports : {
        css : '',
        svg : '',
        svgUrl : '',
      }
    }
  },
  methods : {
    chooseRandom(){
      TweenLite.to(this.$data, 0.5, { roundness: Math.random() });
      TweenLite.fromTo([this.$refs.random,this.$refs.random1], 0.3, { 
        rotation:  0
      },{
        rotation: -360
      });
    },
    copySVG(){
      copy(this.exports.svg,(succes) => {
        let el = this.$refs.copySVG
        el.innerText = 'Copied !'
        setTimeout(() => {
          el.innerText = 'Copy SVG'
        }, 1000);
      },()=> {

      });
    },
    copyCSS(){
      copy(this.exports.css,(succes) => {
        let el = this.$refs.copyCSS
        el.innerText = 'Copied !'
        setTimeout(() => {
          el.innerText = 'Copy CSS'
        }, 1000);
      },()=> {

      });
    },
    handleUpdate(e){
      if(e.css) this.exports.css = e.css
      if(e.svg) this.exports.svg = e.svg
      if(e.svgUrl) this.exports.svgUrl = e.svgUrl
    }
  },
  computed : {
    computedColor(){
      try{
          return Color(this.color).rgb()
      }catch(e){
          return 'rgb(0,0,0)'
      }
    },
  }
}

</script>

<style lang="scss" >


</style>