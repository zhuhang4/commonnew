<template>
  <div class="SpriteInfo">
    <div class="title">位置与大小</div>
    <div class="infoPiece">
      <p>x:</p>
      <input v-if="info" type="number" v-model="info.left" />
    </div>
    <div class="infoPiece">
      <p>y:</p>
      <input v-if="info" type="number" v-model="info.top" />
    </div>
    <div class="infoPiece">
      <p>宽:</p>
      <input v-if="info" type="number" v-model="info.width" />
    </div>
    <div class="infoPiece">
      <p>高:</p>
      <input v-if="info" type="number" v-model="info.height" />
    </div>
    <div class="title">中心点</div>
    <div class="infoPiece">
      <p>x:（0.0-1.0）</p>
      <input v-if="info" type="number" v-model="info.pivot.x" />
    </div>
    <div class="infoPiece">
      <p>y:（0.0-1.0）</p>
      <input v-if="info" type="number" v-model="info.pivot.y" />
    </div>
    <!-- <div>{{ innerInfo }}</div> -->
  </div>
</template>
<script>
import EditHomeContoller from "@/vuepages/EditHomeContoller.js";
export default {
  data() {
    return {
      left: 0,
      top: 0,
      width: 0,
      height: 0,
      alpha: 0,
    };
  },
  props: {
    info: {
      type: Object,
      default: function () {
        return {};
      },
    },
  },
  //   computed: {
  //     innerInfo: {
  //       get() {
  //         if (this.info) {
  //           this.info = null;
  //         }
  //         // this.info ={x:0,y:0,width:0,height:0};
  //         this.info = Object.assign({}, this.$store.state.currentSprite);
  //         return this.info;
  //       },
  //       set(newMessage) {
  //         // console.log("newMessage");
  //       },
  //     },
  //   },
  watch: {
    info: {
      handler(new_value, old_value) {
        this.$emit("updateSpriteInfoFromSon", new_value);
      },
      deep: true,
    },
  },
  mounted() {},
  components: {},
  methods: {},
};
</script>
<style lang='scss' scoped>
@import "../style/mixin";
.SpriteInfo {
  width: 100%;
  background-color: black;
}

.title {
  color: white;
  font-size: 20px;
}
.infoPiece {
  color: white;
  font-size: $normal_size;
}
</style>