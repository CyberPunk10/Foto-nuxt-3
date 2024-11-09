<template>
  <div class="example-font" :class="props.dataFont ? '--has-params' : ''">
    <p
      class="example-font__content"
      :class="classes"
    >
      <slot />
    </p>

    <div v-if="props.dataFont" class="example-font__description">
      <div
        v-for="(item, index) in props.dataFont.params"
        :key="index"
      >
        {{ item }}
      </div>
    </div>

    <div class="example-font__controls">
      <BtnCopyStyle
        light-mode-btn
        :variant="props.variant"
        :text-for-clipboard="textForClipboard"
      />
    </div>
  </div>
</template>

<script setup>
import BtnCopyStyle from './BtnCopyStyle.vue'

const props = defineProps({
  variant: {
    type: String,
    default: null
  },
  dataFont: {
    type: Object,
    default: null,
  },
})
const textForClipboard = `@include ${props.variant}();`
const fontClasses = computed(() => `--${props.variant}`)
const classes = computed(() => `${fontClasses.value}`)

</script>

<style lang="scss">
.example-font {
  min-height: 10rem;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: var(--space-150);
  padding: var(--space-150) 0;

  &.--has-params {
    min-height: 21.6rem;

    .example-font__content {
      flex-basis: 60rem;
    }
  }

  &:not(:last-child) {
    border-bottom: 1px dashed #CACACA;
  }

  &__content {
    flex-basis: 30rem;

    &.--heading-h1-font {
      @include heading-h1-font(false);
    }
    &.--heading-h2-font {
      @include heading-h2-font(false);
    }
    &.--heading-h3-font {
      @include heading-h3-font(false);
    }
    &.--heading-h4-font {
      @include heading-h4-font(false);
    }
    &.--heading-display-font {
      @include heading-display-font(false);
    }

    &.--body-large-font {
      @include body-large-font(long);
    }
    &.--body-medium-font {
      @include body-medium-font(long);
    }
    &.--body-small-font {
      @include body-small-font(long);
    }

    &.--minor-font {
      @include minor-font(caption);
    }

  }

  &__description {
    @include body-large-font(long);
    color: #666666;
    flex-basis: 27.2rem;

    @media (max-width: 768px) {
      @include body-medium-font(long);
      display: none;
    }

    > div:not(:last-child) {
      margin-bottom: var(--space-100);
    }
  }

  &__controls {
    flex-basis: 30rem;
  }
}
</style>
