<template>
  <div class="grid-container">
    <div
      v-for="item in 7"
      :key="item"
      class="grid-item"
      :style="{ gridColumn: `${item == 7 || item == 4 ? 'span 2' : ''}` }"
    >{{ item }}</div>
  </div>
</template>

<style scoped>
.grid-container {
  width: 80%;
  height: 100%;
  overflow: auto;
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 3fr));
  gap: 10px;
  padding: 10px;
  place-content: center;
}

.grid-item {
  background-color: #ddd;
  border: 1px solid #bbb;
  padding: 20px;
  border-radius: 4px;
  height: 200px;
  color: white;
}
</style>
