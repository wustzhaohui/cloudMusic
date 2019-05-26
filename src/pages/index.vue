<template>
  <div class="index">
    <h1>现在是北京时间</h1>
    <h2>{{time}}</h2>
  </div>
</template>

<script>
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
