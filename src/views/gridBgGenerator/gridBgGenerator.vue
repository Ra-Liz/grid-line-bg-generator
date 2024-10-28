<template>
  <div class="container">
    <div class="left-wrap">
      <div class="show">
        <div
          :class="['grid-container', hasMask ? 'mask' : '']"
          :style="{
            backgroundImage,
            backgroundSize,
            ...maskStyle,
          }"
        ></div>
      </div>

      <!-- 代码生成 -->
      <div class="result">
        <VCodeBlock :code="code" highlightjs lang="css" theme="default" />
      </div>
    </div>

    <div class="control-wrap">
      <h4>网格样式</h4>
      <el-radio-group v-model="mode" size="large">
        <el-radio-button label="线状" :value="1" />
        <el-radio-button label="点状" :value="2" />
      </el-radio-group>
      <h4>线条宽度</h4>
      <el-slider
        v-model="lineWidth"
        :min="1"
        :max="10"
        show-tooltip
        :marks="{ 1: '1px', 10: '10px' }"
      />
      <h4>网格大小</h4>
      <el-slider
        v-model="gridSize"
        :min="1"
        :max="100"
        show-tooltip
        :marks="{ 1: '1px', 100: '100px' }"
      />
      <h4 style="position: relative">
        线条颜色
        <div class="tmp">{{ selColor }}</div>
      </h4>

      <el-radio-group v-model="selColor">
        <el-radio v-for="(color, idx) in colors" :key="idx" :label="color">
          <div
            class="color-item"
            :style="{ backgroundColor: color }"
            :title="color"
          ></div>
        </el-radio>
      </el-radio-group>
      <h4>是否显示边缘遮罩</h4>
      <el-switch v-model="hasMask" />
      <h4 v-show="hasMask">渐变半径</h4>
      <el-slider
        v-show="hasMask"
        v-model="maskRadius"
        :min="10"
        :max="200"
        show-tooltip
        :marks="{ 10: '10px', 200: '200px' }"
      />
    </div>
  </div>
  <a href="https://spacexcode.com/blog/pure-css-grid-line" class="about"
    >参照实现: https://spacexcode.com/blog/pure-css-grid-line/</a
  >
</template>

<script setup>
import { computed, ref } from "vue";

// 颜色配置项
const colors = [
  "#cbd5e1",
  "#ff924c",
  "#a0c4ff",
  "#ff595e",
  "#3fc95d",
  "#409EFF",
  "#909399",
  "#212529",
];
const selColor = ref("#cbd5e1"); // 选中颜色
const hasMask = ref(true); // 是否模糊遮罩
const maskRadius = ref(50); // 边缘遮罩半径
const mode = ref(1); // 模式
const lineWidth = ref(1); // 线条宽度
const gridSize = ref(20); // 网格大小

// 边缘遮罩样式
const maskStyle = computed(() => {
  if (!hasMask.value) {
    return {};
  } else {
    return {
      "-webkit-mask-image": `linear-gradient(
        to bottom,
        transparent,
        #fff ${maskRadius.value}px calc(100% - ${maskRadius.value}px),
        transparent
      ),linear-gradient(
        to right,
        transparent,
        #fff ${maskRadius.value}px calc(100% - ${maskRadius.value}px),
        transparent
      )`,
      "mask-image": `linear-gradient(
        to bottom,
        transparent,
        #fff ${maskRadius.value}px calc(100% - ${maskRadius.value}px),
        transparent
      ),linear-gradient(
        to right,
        transparent,
        #fff ${maskRadius.value}px calc(100% - ${maskRadius.value}px),
        transparent
      )`,
    };
  }
});
// 网格样式
const backgroundImage = computed(() => {
  return mode.value !== 1
    ? `radial-gradient(circle, ${selColor.value} ${lineWidth.value}px, #fff ${lineWidth.value}px)`
    : `linear-gradient(to right, ${selColor.value} ${lineWidth.value}px, transparent ${lineWidth.value}px),
    linear-gradient(to bottom, ${selColor.value} ${lineWidth.value}px, transparent ${lineWidth.value}px)`;
});
// 网格大小
const backgroundSize = computed(() => {
  return `${gridSize.value}px ${gridSize.value}px`;
});
// 生成代码
const code = computed(() => {
  const modeStr =
    mode.value !== 1
      ? `radial-gradient(circle, ${selColor.value} ${lineWidth.value}px, #fff ${lineWidth.value}px)`
      : `linear-gradient(to right, ${selColor.value} ${lineWidth.value}px, transparent ${lineWidth.value}px), linear-gradient(to bottom, ${selColor.value} ${lineWidth.value}px, transparent ${lineWidth.value}px)`;
  if (!hasMask.value) {
    return `
  {
    background-size: ${gridSize.value}px ${gridSize.value}px;
    background-position: center center;
    background-image: ${modeStr};
  }`;
  }
  return `
  {
    background-size: ${gridSize.value}px ${gridSize.value}px;
    background-position: center center;
    background-image: ${modeStr};
    -webkit-mask-image: linear-gradient(to bottom, transparent, #fff ${maskRadius.value}px calc(100% - ${maskRadius.value}px), transparent), linear-gradient(to right, transparent, #fff ${maskRadius.value}px calc(100% - ${maskRadius.value}px), transparent);
    mask-image: linear-gradient(to bottom, transparent, #fff ${maskRadius.value}px calc(100% - ${maskRadius.value}px), transparent), linear-gradient(to right, transparent, #fff ${maskRadius.value}px calc(100% - ${maskRadius.value}px), transparent);
    mask-composite: intersect;
    -webkit-mask-composite: source-in, xor;
  }`;
});
</script>

<style scoped>
.container {
  width: 50%;
  height: 90%;
  margin: auto;
  display: grid;
  grid-template-columns: 4fr 3fr;
  grid-template-rows: 1fr;
  gap: 20px;
  padding: 10px;
}
.left-wrap {
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  gap: 20px;
  overflow: hidden;
}
.show {
  width: 100%;
  aspect-ratio: 1;
  background-color: white;
  border-radius: 10px;
  overflow: hidden;
  padding: 10px;
  filter: drop-shadow(0 0 4px #0000001a);
}
.grid-container {
  height: 100%;
  width: 100%;
  background-position: center center;
}
.mask {
  mask-composite: intersect;
  -webkit-mask-composite: source-in, xor;
}

.result {
  width: 100%;
  border-radius: 10px;
  background-color: white;
  overflow: auto;
  padding: 10px;
  filter: drop-shadow(0 0 4px #0000001a);
}

.control-wrap {
  border-radius: 10px;
  background-color: white;
  padding: 0 20px;
  display: flex;
  flex-flow: column nowrap;
  gap: 10px;
  height: fit-content;
  padding-bottom: 60px;
  filter: drop-shadow(0 0 4px #0000001a);
}
h4 {
  margin-top: 20px;
  user-select: none;
}
.tmp {
  position: absolute;
  left: 80px;
  bottom: 0;
  font-size: 12px;
  font-weight: 300;
  color: gray;
  user-select: text;
}
.color-item {
  width: 20px;
  height: 20px;
  border-radius: 2px;
}
::v-deep .el-slider {
  width: 80%;
  margin-left: 10px;
}

.about {
  position: absolute;
  bottom: 10px;
  text-align: center;
  font-size: 12px;
  font-weight: 300;
  color: gray;
}

::target-text {
  background-color: rebeccapurple;
  color: white;
}
</style>
