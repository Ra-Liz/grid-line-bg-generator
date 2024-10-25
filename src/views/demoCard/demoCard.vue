<template>
  <div class="list">
    <div class="container">
      <DemoCard title="示例1" />
    </div>
    <div class="container">
      <DemoCard title="示例2" />
    </div>
    <div class="container">
      <DemoCard title="demo3">
        <template #content>
          <div style="width: 100%; height: 100%; background-color: antiquewhite">ceshi</div>
        </template>
      </DemoCard>
    </div>
    <div class="container">
      <DemoCard title="demo4" />
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
</style>
