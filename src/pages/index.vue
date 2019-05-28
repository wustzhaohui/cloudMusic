<template>
  <div class="index">
    <van-button type="primary">现在是北京时间</van-button>
    <h2>{{time}}</h2>
  </div>
</template>

<script>
import Vue from 'vue';
import { Button } from 'vant';
Vue.use(Button);
export default {
    data() {
        return {
            time: this.$moment().format('YYYY-MM-DD HH:mm:ss')
        };
    },
    methods: {
        updateTime() {
            this.time = this.$moment().format('YYYY-MM-DD HH:mm:ss');
            setTimeout(() => {
                this.updateTime();
            }, 1000);
        }
    },
    mounted() {
        this.updateTime();
    }
};
</script>
