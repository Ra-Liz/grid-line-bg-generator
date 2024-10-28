<template>
  <div class="container">
    <h1 id="t0">纯CSS电梯导航</h1>
    <div
      class="main-wrap"
      style="timeline-scope: --t1, --t2, --t3, --t4, --t5, --t6"
    >
      <a class="back" href="#t1"></a>
      <!--  important  -->
      <nav>
        <a href="#t1" style="--s: --t1">一、标题一</a>
        <a href="#t2" style="--s: --t2">二、标题二</a>
        <a href="#t3" style="--s: --t3">三、标题三</a>
        <a href="#t4" style="--s: --t4">四、标题四</a>
        <a href="#t5" style="--s: --t5">五、标题五</a>
        <a href="#t6" style="--s: --t6">六、标题六</a>
      </nav>

      <div class="content" style="--s: --t1">
        <h2 id="t1">一、标题一</h2>
        <section>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </section>
      </div>
      <div class="content" style="--s: --t2">
        <h2 id="t2">二、标题二</h2>
        <section>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </section>
      </div>
      <div class="content" style="--s: --t3">
        <h2 id="t3">三、标题三</h2>
        <section>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </section>
      </div>
      <div class="content" style="--s: --t4">
        <h2 id="t4">四、标题四</h2>
        <section>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </section>
      </div>
      <div class="content" style="--s: --t5">
        <h2 id="t5">五、标题五</h2>
        <section>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </section>
      </div>
      <div class="content" style="--s: --t6">
        <h2 id="t6">六、标题六</h2>
        <section>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </section>
      </div>      
    </div>
  </div>
</template>

<style scoped>
.container {
  width: 100%;
  height: 100%;
  display: flex;
  flex-flow: column nowrap;
  overflow: hidden;
  background: aliceblue;
}

/* 文字渐变 */
#t0 {
  width: fit-content;
  background-image: linear-gradient(#e4ccff, skyblue);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-left: 20px;
  position: relative;
}
#t0::before {
  content: "";
  position: absolute;
  left: 0;
  bottom: 0;
  height: 2px;
  width: 100%;
  background: #6f00ff85;
  transform: scaleX(0);
  transition: transform 0.5s;
  transform-origin: top right;
}
#t0:hover::before {
  transform: scaleX(1);
  transition: transform 0.5s;
  transform-origin: top left;
}

.main-wrap {
  width: 100%;
  flex: 1;
  overflow: auto;
  font-family: -apple-system, "BlinkMacSystemFont", sans-serif;
  scroll-behavior: smooth;
  padding: 20px;
}

h2 {
  margin: 0;
  padding: 0.8em 0;
  scroll-margin: 20px;
  /*  安全滚动间距  */
  scroll-margin: 6rem;
}

.content {
  /* important */
  view-timeline-name: var(--s);
  view-timeline-inset: 80% 20%;
}
nav {
  position: fixed;
  top: 20px;
  right: 20px;
  background: #fff;
  padding: 10px 0;
  border-radius: 4px;
  overflow: hidden;
}
nav > a {
  position: relative;
  display: block;
  line-height: 2;
  padding: 0 15px;
  font-size: 14px;
  color: #191919;
  text-decoration: none;
  /*  important  */
  animation: active;
  animation-timeline: var(--s);
  border-left: 4px solid transparent;
}
@keyframes active {
  0%,
  100% {
    color: #6f00ff;
    border-color: #6f00ff;
  }
}

nav > a:hover {
  background-color: #d5d5d54a;
}
section {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}
section span {
  width: 30%;
  height: 100px;
  border-radius: 4px;
  background-color: #e4ccff;
  /*  transition放置的位置在未出现变化时，可以增加一个渐退动画  */
  transition: filter 1s;
}
/* a drop-shadow test */
section span:hover {
  filter: drop-shadow(0 0 4px rgb(160, 0, 210, 0.5))
    drop-shadow(0 0 4px rgb(160, 0, 210, 0.5));
}

/* a back-navigation test */
.back {
  position: sticky;
  float: right;
  /*  sticky高度+自身高度  */
  top: -200px;
  /*  自身高度  */
  margin-top: -50px;
  border-radius: 50%;
  background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'%3E %3Cpath fill='%23ffffff' d='M177 159.7l136 136c9.4 9.4 9.4 24.6 0 33.9l-22.6 22.6c-9.4 9.4-24.6 9.4-33.9 0L160 255.9l-96.4 96.4c-9.4 9.4-24.6 9.4-33.9 0L7 329.7c-9.4-9.4-9.4-24.6 0-33.9l136-136c9.4-9.5 24.6-9.5 34-.1z'%3E%3C/path%3E %3C/svg%3E")
    center no-repeat skyblue;
  background-size: 50%;
  width: 50px;
  height: 50px;
  transform: translateY(calc(100vh + 50px));
}
.back:hover {
  filter: drop-shadow(0px 0px 2px skyblue);
  transition: filter 1s;
}
</style>
