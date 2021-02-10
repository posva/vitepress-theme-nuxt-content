<template>
  <div class="pt-16">
    <!-- <AppHeader /> -->

    <main class="mx-auto px-4 lg:px-8">
      <div class="flex flex-wrap relative">
        <!-- <AppNav /> -->

        <div
          class="flex w-full lg:w-4/5"
          :class="{ 'lg:-mx-8': settings.layout === 'single' }"
        >
          <div
            class="w-full py-4 lg:pt-8 lg:pb-4 dark:border-gray-800"
            :class="{
              'lg:w-3/4': false /*!document.fullscreen*/,
              'lg:border-l lg:border-r': settings.layout !== 'single',
            }"
          >
            <article class="prose dark:prose-dark max-w-none lg:px-8">
              <h1 class="flex items-center justify-between">
                {{ $frontmatter.title }}
                <!-- <Badge v-if="document.badge">{{ document.badge }}</Badge> -->
              </h1>
              <div v-if="$frontmatter.subtitle" class="-mt-4">
                <p class="text-gray-600 dark:text-gray-400">
                  {{ $frontmatter.subtitle }}
                </p>
              </div>

              <Content class="nuxt-content" />
            </article>

            <!-- <AppPageBottom :document="document" />
            <AppPrevNext :prev="prev" :next="next" /> -->
          </div>
          <AppToc />
        </div>
      </div>
    </main>

    <!-- <AppFooter /> -->
  </div>

  <Debug />
</template>

<script>
import { onMounted } from 'vue'
import AppToc from './components/AppToc.vue'
import Debug from './components/Debug.vue'

export default {
  components: { AppToc, Debug },

  mounted() {
    window.vm = this
  },

  setup() {
    onMounted(() => {
      // TODO: remove hack
      document.body.parentElement.classList.add('dark-mode')
    })
  },
}
</script>

<style scoped></style>
