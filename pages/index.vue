<template>
  <div class="container">
    <div v-for="item in blogs" :key="item.file">
      {{ item }}
      <nuxt-link :to="'/blog/' + item.file">{{ item.file }}</nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ app }) {
    const generate = await import(`~/md/generate.json`)
    const filesList = generate.default

    async function asyncImport(blogName) {
      const wholeMD = await import(`~/md/${blogName}`)
      return { file: blogName.replace(/\.md/g, ''), ...wholeMD.attributes }
    }

    return Promise.all(filesList.map((blog) => asyncImport(blog))).then(
      (res) => {
        return {
          blogs: res
        }
      }
    )
  }
}
</script>

<style></style>
