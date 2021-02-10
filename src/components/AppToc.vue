<template>
  <div v-if="$page.headers.length" class="w-full lg:w-1/4 block relative">
    <div
      class="lg:sticky lg:top-16 overflow-y-auto h-full lg:h-auto lg:max-h-(screen-16)"
    >
      <nav
        class="py-4 lg:py-8"
        :class="{
          'lg:pl-8 lg:pr-2': settings.layout !== 'single',
          'lg:px-8': settings.layout === 'single',
        }"
      >
        <p
          class="mb-3 lg:mb-2 text-gray-500 uppercase tracking-wider font-bold text-sm lg:text-xs"
        >
          On this page
        </p>
        <!-- TODO: <scrollactive highlight-first-item active-class="text-primary-500" :offset="0" tag="ul" > -->
        <ul>
          <li
            v-for="link of $page.headers"
            :key="link.slug"
            class="hover:text-gray-900 dark-hover:text-gray-100"
            :class="{
              'text-primary-500': route.path.endsWith('#' + link.slug),
              'border-t border-dashed dark:border-gray-800 first:border-t-0':
                link.level === 2,
            }"
          >
            <a
              :href="`#${link.slug}`"
              class="block text-sm scrollactive-item"
              :class="{
                'py-2': link.level === 2,
                'ml-2 pb-2': link.level === 3,
                'ml-3 pb-2': link.level === 4,
                'ml-4 pb-2': link.level === 5,
                'ml-5 pb-2': link.level === 6,
              }"
              >{{ link.title }}</a
            >
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<script>
import { computed } from 'vue'
import { useRoute } from 'vitepress'

export default {
  setup() {
    return { route: useRoute() }
  },
}
</script>
