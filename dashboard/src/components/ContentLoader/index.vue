<template lang="">
  <div :style="{
    width: computedWidth,
    height
  }"
  class="opacity-75 content-loader">

    <span :style="{ animationDuration }" class="content-loader--fx"></span>
    <slot/>
  </div>
</template>
<script>
import { computed } from 'vue'
export default {
  props: {
    maxWidth: {
      type: Number,
      default: 100
    },
    minWidth: {
      type: Number,
      default: 80
    },
    animationDuration: {
      type: String,
      default: '1.6s'
    },
    height: {
      default: '1rem',
      type: String
    },
    width: {
      default: '1rem',
      type: String
    }
  },

  setup (props) {
    const computedWidth = computed(() => {
      const value = Math.random() * (props.maxWidth - props.minWidth) + props.minWidth
      return props.width ?? `${Math.floor(value + props.minWidth)}%`
    })
    return { computedWidth }
  }
}
</script>

<style lang="postcss" scoped>

@keyframes shimmer {
  100% {
    transform: translateX(100%);
  }
}
  .content-loader {
    position: relative;
    vertical-align: middle;
    overflow: hidden;
    background: #f6f7f8;
  }
  .content-loader--fx {
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    transform: translate(-100%);
    background-image: linear-gradient(to right, #eeeeee 8%, #dddddd 18%, #eeeeee 33%);
    background-position: 0 0;
    background-size: 1000 100;
    animation: shimmer infinite alternate ease-in-out;
  }
</style>
