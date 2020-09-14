<template>
  <button class="button is-danger" @click="increment">
    Increment {{ count }}
  </button>
  <div>
    <div ref="scriptHolder"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      count: 0,
      html: null,
    };
  },
  mounted() {
    setTimeout(() => {
      const scriptEl = document.createElement('script');
      scriptEl.setAttribute(
        'src',
        'https://emgithub.com/embed.js?target=https%3A%2F%2Fgithub.com%2Fxereda%2Fvite-compositon-api%2Fblob%2Fmaster%2Fsrc%2Fexamples%2Ftodo-list%2Fcomposition-api.vue&style=github&showBorder=on&showLineNumbers=on&showFileMeta=on',
      );
      this.$refs.scriptHolder.appendChild(scriptEl);
      console.log(this.$refs.scriptHolder.appendChild);
    }, 1000);
  },
  methods: {
    increment() {
      this.count++;
    },
  },
};
</script>
