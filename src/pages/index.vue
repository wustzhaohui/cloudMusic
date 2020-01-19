<template>
  <div class="index">
    <van-search placeholder="请输入搜索关键词"
                v-model="value" />
    <div class="img-wiper m-t-8 m-b-8 p-l-3 p-r-3"
         @change="swiperChange">
      <van-swipe class="van-swiper">
        <van-swipe-item layout="row"
                        layout-align="center center">1</van-swipe-item>
        <div class="custom-indicator"
             slot="indicator">
          {{ banner.current + 1 }}/4
        </div>
      </van-swipe>
    </div>
    <m-icon link="iconset"
            class="fs16"></m-icon>
  </div>
</template>

<script>
import Vue from 'vue';
import { Search, Swipe, SwipeItem } from 'vant';
Vue.use(Search);
Vue.use(Swipe).use(SwipeItem);
// api
import api_index from '@/service/index';
export default {
    data() {
        return {
            banner: {
                list: [],
                current: 1
            },
            value: ''
        };
    },
    methods: {
        swiperChange(index) {
            this.banner.current = index;
        },
        loadData() {
            api_index.index().then(
                msg => {
                    console.log(msg);
                },
                msg => {}
            );
        }
    },
    mounted() {
        this.loadData();
    }
};
</script>
<style lang="less">
.index {
    .img-wiper {
        height: 270px;
        position: relative;
        overflow: hidden;
        .van-swiper {
            height: 100%;
        }
    }
    .color- {
        &black {
            color: #000;
        }
    }
}
</style>
