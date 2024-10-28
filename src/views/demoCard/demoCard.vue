<template>
  <div class="list">
    <div class="container">
      <DemoCard title="示例1">
        <template #content>
          <img src="@/assets/logo.png" />
        </template>
      </DemoCard>
    </div>
    <div class="container">
      <DemoCard title="示例2">
        <template #content>
          <div
            style="
              width: 100%;
              height: 100%;
              display: flex;
              flex-direction: column;
              align-items: center;
            "
          >
            <h4>展示类型</h4>
            <ul>
              <li>图片、视频</li>
              <li>网页</li>
              <li>代码块</li>
              <li>图表</li>
              <li>……</li>
            </ul>
          </div>
        </template>
      </DemoCard>
    </div>
    <div class="container">
      <DemoCard title="demo3">
        <template #content>
          <iframe
            src="https://spacexcode.com/blog/demo-area-component/"
            width="100%"
            height="100%"
            frameborder="0"
          ></iframe>
        </template>
      </DemoCard>
    </div>
    <div class="container">
      <DemoCard title="demo4">
        <template #content>
          <div
            style="
              width: 100%;
              height: 100%;
              overflow: hidden;
              background-color: antiquewhite;
              text-align: center;
            "
          >
            <svg
              width="200"
              height="250"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="10"
                y="10"
                width="30"
                height="30"
                stroke="black"
                fill="transparent"
                stroke-width="5"
              />
              <rect
                x="60"
                y="10"
                rx="10"
                ry="10"
                width="30"
                height="30"
                stroke="black"
                fill="transparent"
                stroke-width="5"
              />
              <circle
                cx="120"
                cy="24"
                r="20"
                stroke="red"
                fill="transparent"
                stroke-width="5"
              />
              <ellipse
                cx="170"
                cy="24"
                rx="20"
                ry="5"
                stroke="red"
                fill="transparent"
                stroke-width="5"
              />
              <line
                x1="10"
                x2="50"
                y1="110"
                y2="150"
                stroke="orange"
                stroke-width="5"
              />
              <polyline
                points="60 110 65 120 70 115 75 130 80 125 85 140 90 135 95 150 100 145"
                stroke="orange"
                fill="transparent"
                stroke-width="5"
              />
              <!-- svg真。。。复杂 -->
              <!-- <polygon
                points="50 160 55 180 70 180 60 190 65 205 50 195 35 205 40 190 30 180 45 180"
                stroke="green"
                fill="transparent"
                stroke-width="5"
              />
              <path
                d="M20,230 Q40,205 50,230 T90,230"
                fill="none"
                stroke="blue"
                stroke-width="5"
              /> -->
            </svg>
          </div>
        </template>
      </DemoCard>
    </div>
  </div>
</template>

<script setup>
import DemoCard from "@/components/DemoCard.vue";
</script>

<style scoped>
.list {
  width: 80%;
  height: 90%;
  margin: auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 20px;
}
.container {
  width: 80%;
  height: 60%;
  place-content: center;
}
/* svg-test */
svg {
  position: absolute;
  top: 10%;
  left: 20%;
}
</style>
