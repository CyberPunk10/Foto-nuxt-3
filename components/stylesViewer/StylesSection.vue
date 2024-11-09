<template>
  <div class="styles-section" :class="props.darkTheme ? '--dark-theme' : ''">
    <div class="title-section">
      <div class="title-section-text">
        {{ props.title }}
      </div>
      <div v-if="props.showWidth" class="window-width-wrap">
        <span class="window-width --desktop">desktop</span>
        <span class="window-width --tablet">tablet</span>
        <span class="window-width --mobile">mobile</span>
      </div>
    </div>

    <slot />
  </div>
</template>

<script setup>
const props = defineProps({
  title: {
    type: String,
    default: ''
  },
  showWidth: {
    type: Boolean,
    default: false
  },
  darkTheme: Boolean
})
</script>

<style lang="scss">
.styles-section {
  background-color: var(--white-color);
  padding: var(--space-600) var(--space-600) var(--space-1000);

  @media (max-width: 768px) {
    padding: var(--space-500) var(--space-500);
  }

  @media (max-width: 540px) {
    padding: var(--space-400) var(--space-400);
  }

  &.--dark-theme {
    background-color: var(--background);
  }
}

.title-section {
  border-bottom: 1px solid #3CA3ED;
  color: #3CA3ED;
  display: flex;
  text-transform: uppercase;
  justify-content: space-between;
  @include heading-h2-font(false);

  .window-width {
    &.--desktop,
    &.--tablet,
    &.--mobile {
      display: none;
    }

    @media (min-width: 769px) {
      &.--desktop {
        display: block;
      }
    }

    @media (max-width: 768px) and (min-width: 541px) {
      &.--tablet {
        display: block;
      }
    }

    @media (max-width: 540px) {
      &.--mobile {
        display: block;
      }
    }
  }
}
</style>
