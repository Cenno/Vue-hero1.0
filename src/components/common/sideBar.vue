<template>
  <div class="col-sm-3 col-md-2 sidebar">
    <ul class="nav nav-sidebar">
      <router-link tag="li" active-class="active" to="/heros">
        <a>英雄列表</a>
      </router-link>
      <router-link tag="li" active-class="active" to="/bar">
        <a>武器列表</a>
      </router-link>
      <router-link tag="li" active-class="active" to="/foo">
        <a>装备列表</a>
      </router-link>
    </ul>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>


