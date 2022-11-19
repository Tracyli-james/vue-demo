<template>
  <div style="padding: 0 20px;" @click="toggleClick">
    <i :class="[isActive ? foldClass : activeClass]" style="color:#ccc;font-weight: 400;font-size: 22px;" />
  </div>
</template>

<script>
export default {
  name: 'Hamburger',
  props: {
    isActive: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      activeClass: 'el-icon-s-unfold',
      foldClass: 'el-icon-s-fold'
    }
  },
  methods: {
    toggleClick() {
      this.$emit('toggleClick')
    }
  }
}
</script>

<style scoped>
.hamburger {
  display: inline-block;
  vertical-align: middle;
  width: 20px;
  height: 20px;
}

.hamburger.is-active {
  transform: rotate(180deg);
}
</style>
