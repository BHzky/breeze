<template>
  <div id="app">
    <!-- 凡是在这个标签里面的都可以被缓存 -->
    <keep-alive>
      <router-view v-if="$route.meta.keepAlive"/>
    </keep-alive>
    <!-- 如果上面判断不成立，这边成立的话，就显示这边的 -->
    <router-view v-if="!$route.meta.keepAlive"/>
  </div>
</template>

<style>

</style>
