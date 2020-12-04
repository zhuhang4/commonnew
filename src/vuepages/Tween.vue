<template>
  <div class="Tween">
    <div>
      <div class="title">Tween基础参数</div>
      <div class="info">
        <p class="infodescripe">easeType:</p>
        <el-select
          class="infoContent"
          v-model="value"
          size="mini"
          placeholder="请选择"
        >
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          >
          </el-option>
        </el-select>
      </div>
      <div class="info">
        <p class="infodescripe">时间(time):</p>
        <el-input-number
          class="infoContent"
          v-model="time"
          size="mini"
          :min="0"
          :max="99"
          label="缓动动画的时间"
        ></el-input-number>
      </div>
      <div class="info">
        <p class="infodescripe">延迟(delay):</p>
        <el-input-number
          class="infoContent"
          v-model="delay"
          size="mini"
          :min="0"
          :max="99"
          label="延迟"
        ></el-input-number>
      </div>
      <div class="info">
        <p class="infodescripe">repeatDelay:</p>
        <el-input-number
          class="infoContent"
          v-model="repeatDelay"
          size="mini"
          :min="0"
          :max="99"
          label="重复间的延迟"
          @change=""
        ></el-input-number>
      </div>
      <div class="info">
        <p class="infodescripe">循环次数:</p>
        <el-input-number
          class="infoContent"
          v-model="repeat"
          size="mini"
          :min="-1"
          :max="99"
          :precision="0"
          :step="1"
          label="循环次数"
          @change="loopChangeHandler"
        ></el-input-number>
      </div>
      <div class="info">
        <p class="infodescripe">yoyo:</p>
        <el-switch
          class="infoContent"
          v-model="yoyo"
          active-text="是"
          inactive-text="否"
        >
        </el-switch>
      </div>
    </div>
    <div>
      <div class="title">终点状态</div>
      <div class="info">
        <div class="positon_con">
          <el-input placeholder="x" size="mini" v-model="stat.x" >
            <template slot="prepend" style="width:20px">x:</template>
          </el-input>
        </div>
        <div class="positon_con">
          <el-input placeholder="y" size="mini" v-model="stat.y" >
            <template slot="prepend" style="width:20px">y:</template>
          </el-input>
        </div>
      </div>
      <div class="info">
        <div class="positon_con">
          <el-input placeholder="y" size="mini" v-model="stat.scaleX" >
            <template slot="prepend" style="width:20px">scaleX:</template>
          </el-input>
        </div>
        <div class="positon_con">
          <el-input placeholder="y" size="mini" v-model="stat.scaleY" >
            <template slot="prepend" style="width:20px">scaleY:</template>
          </el-input>
        </div>
      </div>
      <div class="info">
        <p class="infodescripe">透明度(alpha):</p>
        <el-input-number
          class="infoContent"
          v-model="stat.alpha"
          size="mini"
          :min="0"
          :max="1"
          :step="0.1"
        ></el-input-number>
      </div>
    </div>
    <button @click="collectDate">测试</button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      id: 0,
      time: 0,
      delay: 0,
      repeatDelay: 0,
      repeat: 0,
      yoyo: false,
      value: "",
      options: [
        {
          label: "Linear.easeNone",
          value: "Linear.easeNone",
        },
        {
          label: "Back.easeIn",
          value: "Back.easeIn",
        },
        {
          label: "Back.easeOut",
          value: "Back.easeOut",
        },

        {
          label: "Back.easeInOut",
          value: "Back.easeInOut",
        },
        {
          label: "Cubic.easeIn",
          value: "Cubic.easeIn",
        },
        {
          label: "Cubic.easeOut",
          value: "Cubic.easeOut",
        },
        {
          label: "Cubic.easeInOut",
          value: "Cubic.easeInOut",
        },
      ],
      stat:{
          x:0,
          y:0,
          scaleX:1,
          scaleY:1,
          alpha:1
      },
      tweenResource:{},
    };
  },
  mounted() {

  },
  components: {},
  methods: {
    timeChangeHandler() {},
    delayChangeHandler() {},
    repeatdelayChangeHandler() {},
    loopChangeHandler() {},
    collectDate(){
        this.tweenResource.time=this.time;
        this.tweenResource.delay=this.delay;
        this.tweenResource.repeat=this.repeat;
        this.tweenResource.repeatDelay=this.repeatDelay;
        this.tweenResource.yoyo=this.yoyo;
        this.tweenResource.stat=this.stat;
        console.log(this.tweenResource)
    }
  },
};
</script>
<style lang='scss' scoped>
@import "../style/mixin";
.Tween {
  width: 100%;
  background-color: rgb(194, 194, 194);
}
.title {
  color: black;
  font-weight: bold;
  font-size: $sub_title;
  padding: 2px;
  border-bottom: 1px solid grey;
}
.info {
  color: black;
  //   width: 100%;
  margin: 5px;
  font-size: $normal_size;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.infodescripe {
  flex: 0 1 100px;
}
.infodescripeSmall {
  flex: 0 1 70px;
}
.infoContent {
  flex: 0 1 100px;
}
.positon_con {
  display: flex;
  align-items: center;
  width: 45%;
}
::v-deep .el-input-group__prepend {
    // background-color: rgb(100, 26, 26);
    padding:0;
    width: 45px;
    text-align: center;
    color: black;
  }
</style>