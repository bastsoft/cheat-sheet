<script lang="js">
export default {
  props: ["renderFunc", "staticRenderFuncs", "extraComponent"],
  computed: {
    extraComponentLoader () {
      if (!this.extraComponent) {
        return null
      }
      return () => import(`~/md/${this.extraComponent}.vue`)
    }
  },
    created () {
      console.log("renderFunc : ", this.renderFunc);
      // eslint-disable-next-line no-eval
      this.templateRender = eval(this.renderFunc)
      // eslint-disable-next-line no-eval
      this.$options.staticRenderFns = eval(this.staticRenderFuncs)
    },
    render (createElement) {
      return this.templateRender ? this.templateRender() : createElement("div", "Rendering");
    }
}
</script>
