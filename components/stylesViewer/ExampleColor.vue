<template>
  <div class="example-color">
    <div
      class="example-color__content"
      :class="classes"
      v-html="textForCard"
    />

    <div class="example-color__description">
      <slot />
    </div>

    <div class="example-color__controls">
      <BtnCopyStyle
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
  }
})
const textForClipboard = `var(--${props.variant});`

const colorClasses = computed(() => {
  return `--${props.variant}`
})

const textForCard = computed(() => {
  switch (props.variant) {
    case 'background':
      return '#24293D'
    case 'background-secondary':
      return '<span>#FFFFFF</span><span>opacity 2%</span>'
    case 'background-accent':
      return '#007FF4'
    case 'text-color':
      return '#D0D2D7'
    case 'text-primary-color':
      return '#FFFFFF'
    case 'text-secondary-color':
      return '#A1A3B4'
    case 'text-minor-color':
      return '#7E8195'
    case 'control-accent-color':
      return '#3CA3ED'
    case 'control-secondary-color':
      return '#697287'
    case 'control-primary-minor-color':
      return '#384157'
    case 'control-secondary-minor-color':
      return '#2F384B'
    default:
      return ''
  }
})

const classes = computed(() => `${colorClasses.value}`)
</script>

<style lang="scss">
.example-color {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  margin: var(--space-500) 0;
  gap: var(--space-100) var(--space-1000);

  &__content {
    flex-basis: 24rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: var(--space-100) var(--space-200);
    height: 5rem;
    color: #fff;
    border-radius: var(--control-radius);
    @include heading-h4-font(false);

    @media (min-width: 769px) {
      font: var(--tablet-heading-h4-font);
    }

    &.--background {
      background-color: var(--background);
      border: 1px solid #fff;
    }
    &.--background-secondary {
      background-color: var(--background-secondary);
    }
    &.--background-accent {
      background-color: var(--background-accent);
    }
    &.--text-color {
      background-color: var(--text-color);
      color: var(--background);
    }
    &.--text-primary-color {
      background-color: var(--text-primary-color);
      color: var(--background);
    }
    &.--text-secondary-color {
      background-color: var(--text-secondary-color);
    }
    &.--text-minor-color {
      background-color: var(--text-minor-color);
    }
    &.--control-accent-color {
      background-color: var(--control-accent-color);
    }
    &.--control-secondary-color {
      background-color: var(--control-secondary-color);
    }
    &.--control-primary-minor-color {
      background-color: var(--control-primary-minor-color);
    }
    &.--control-secondary-minor-color {
      background-color: var(--control-secondary-minor-color);
    }

  }

  &__description {
    @include body-large-font(long);
    flex-basis: 33rem;
    color: #666666;

    @media (max-width: 768px) {
      @include body-medium-font(long);
    }
  }

  &__controls {
    flex-basis: 30rem;
  }
}

.styles-section.--dark-theme {
  .example-color {
    &__description {
      color: var(--text-primary-color);
    }
  }
}
</style>
