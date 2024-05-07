<script setup lang="ts">
import { API } from '@/api'

const list = [
  { name: 'font', path: '/pages/font/index' },
  { name: 'size', path: '/pages/size/index' },
  { name: 'shadow', path: '/pages/shadow/index' },
  { name: 'border', path: '/pages/border/index' },
  { name: 'spacing', path: '/pages/spacing/index' },
  { name: 'shortcuts', path: '/pages/shortcuts/index' },
  { name: ':class', path: '/pages/class/index' },
  { name: 'color', path: '/pages/color/index' },
  { name: 'attributify', path: '/pages/attributify-mode/index' },
  { name: 'animation', path: '/pages/animation/index' },
  { name: 'bg', path: '/pages/bg/index' },
  { name: 'first-last', path: '/pages/first-last/index' },
  { name: 'odd-even', path: '/pages/odd-even/index' },
  { name: 'space-x', path: '/pages/space/index' },
  { name: 'divide-x', path: '/pages/divide/index' },
  { name: 'apply', path: '/pages/apply/index' },
  { name: 'icon', path: '/pages/icon/index' },
]
API.home.page.request()
</script>

<template>
  <view class="img-bg content">
    <view class="grid grid-cols-3 justify-items-center">
      <view
        v-for="(item, index) in list" :key="index" class="rounded-md shadow-md center h-200 w-200"
      >
        {{ item.name }}
      </view>
    </view>
  </view>
</template>

<style>
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.logo {
  height: 200rpx;
  width: 200rpx;
  margin-top: 200rpx;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 50rpx;
}

.text-area {
  display: flex;
  justify-content: center;
}

.title {
  font-size: 36rpx;
  color: #8f8f94;
}
</style>
