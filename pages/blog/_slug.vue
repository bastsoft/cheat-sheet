<template>
  <div>
    <DynamicMarkdown
      :render-func="renderFunc"
      :static-render-funcs="staticRenderFuncs"
      :extra-component="extraComponent"
    />
  </div>
</template>

<script lang="js">
import DynamicMarkdown from "~/components/DynamicMarkdown.vue"


export default {
        components: { DynamicMarkdown},

     async asyncData ({params, app}) {
          const fileContent = await import(`~/md/${params.slug}.md`);
          const attr = fileContent.attributes;

          return{
                renderFunc: `(${fileContent.vue.render})`,
                staticRenderFuncs: `[${fileContent.vue.staticRenderFns}]`,
                extraComponent: attr.extraComponent,
          }
     }
}
</script>
