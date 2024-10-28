<template>
  <div class="demoArea">
    <div class="demoRibbon">
      <span class="demoTitle">{{ props.title }}</span>
    </div>
    <div class="demoContent">
      <slot name="content" />
    </div>
  </div>
</template>

<script setup>
import { defineProps } from "vue";
const props = defineProps({
  title: {
    type: String,
    default: "DEMO",
  },
});
</script>

<style scoped>
.demoArea {
  width: 100%;
  height: 100%;
  position: relative;
  margin: 20px 0;
  background-color: white;
  border: 1px solid #dadde1;
  border-radius: 4px;
  filter: drop-shadow(0 0 4px #dadde1);
}
.demoRibbon {
  height: 8rem;
  width: 8rem;
  overflow: hidden;
  position: absolute;
  z-index: 1;
  top: -0.5rem;
  right: -0.5rem;
}
.demoTitle {
  background-image: linear-gradient(to right, #6366f1, #63f1f1);
  color: #fff;
  padding: 0.5rem 0;
  position: absolute;
  text-transform: uppercase;
  text-align: center;
  width: 181px;
  display: block;
  letter-spacing: 0.15rem;
  transform: translate(-13px, 30px) rotate(45deg);
}
.demoRibbon::before,
.demoRibbon::after {
  border: 0.25rem solid #4338ca;
  border-top-color: transparent;
  border-right-color: transparent;
  content: "";
  position: absolute;
  z-index: -1;
}
.demoRibbon::before {
  top: 0;
  left: 0;
}
.demoRibbon::after {
  bottom: 0;
  right: 0;
}
.demoContent {
  height: 100%;
  width: 100%;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
}
</style>
