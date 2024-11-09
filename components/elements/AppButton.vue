<template>
  <button
    v-if="!link"
    class="app-btn"
    :class="buttonClasses"
    :disabled="props.disabled"
    type="button"
    @click="handleClick"
  >
    <span v-if="$slots.default" class="app-btn__text">
      <slot />
    </span>

    <icon
      v-if="icon"
      class="app-btn__icon"
      :icon="icon"
    />
  </button>
  <a
    v-else-if="link.blank"
    class="app-btn --link"
    :class="buttonClasses"
    :href="link.url"
    target="_blank"
    rel="noopener noreferrer"
  >
    <span v-if="$slots.default" class="app-btn__text">
      <slot />
    </span>

    <icon
      v-if="icon"
      class="app-btn__icon"
      :icon="icon"
    />
  </a>
</template>

<script setup>
import Icon from '@/components/elements/Icon.vue'

const emits = defineEmits(['onClick'])

const props = defineProps({
  link: {
    type: [String, Object, Boolean], // link: { url: '...', 'blank': true }
    default: null,
  },
  disabled: {
    type: Boolean,
    default: false
  },
  icon: {
    type: String,
    default: null
  },
  light: Boolean,
  round: Boolean,
  size: {
    type: String,
    default: 'medium',
    validator(val) {
      return ['large', 'medium', 'small'].includes(val)
    }
  },
  variant: {
    type: String,
    default: 'primary',
    validator(val) {
      return ['primary', 'outline', 'pseudo'].includes(val)
    }
  }
})

const slots = useSlots()

const buttonClasses = computed(() => {
  const result = [`--${props.size}`]

  result.push(`--${props.variant}`)

  if (props.round) {
    result.push('--round')
  }

  if (props.light) {
    result.push('--light')
  }

  if (props.icon) {
    result.push('--icon')
  }

  if (!slots.default && props.icon) {
    result.push('--only-icon')
  }

  return result
})

function handleClick(event) {
  emits('onClick', event)
}

</script>

<style lang="scss">
.app-btn {
  @include body-small-font(accent);
  background-color: transparent;
  color: var(--text-primary-color);
  border-radius: var(--control-radius);
  border: 1px solid #888;
  text-align: left;
  padding: var(--space-100) var(--space-400);
  transition:
    color .1s ease-in-out,
    border .1s ease-in-out,
    box-shadow .1s ease-in-out,
    background-color .2s ease-in-out;
  display: inline-flex;
  align-items: center;

  &:hover {
    cursor: pointer;
  }

  &:active {
    background-color: rgba(60, 163, 237, .1);
  }

  &.--link {
    text-decoration: none;
  }

  &__text {
    @include body-small-font(short);
  }

  &__icon {
    @include body-medium-font(short);
    margin-left: var(--space-100);
  }

  &.--round {
    border-radius: 2rem !important;
  }

  &.--medium {
    min-height: 4rem;
    min-width: 4rem;
    padding: var(--space-100) var(--space-250);
  }
  &.--small {
    min-height: 3.2rem;
    min-width: 3.2rem;
    padding: var(--space-50) var(--space-250);
  }

  &.--primary {
    background: linear-gradient(273.16deg, #3CA3ED 0.21%, #007FF4 100%);
    border-color: transparent;
    color: var(--white-color);

    svg path {
      fill: var(--white-color);
    }

    &:hover {
      background-color: linear-gradient(273.16deg, #3CA3ED 0.21%, #007FF4 100%);
      box-shadow: 0px 0px 20px rgba(0, 127, 244, 0.8);
    }
  }
  &.--outline {
    background-color: transparent;
    border-color: var(--control-primary-minor-color);
    border-width: 2px;

    &:hover {
      border-color: var(--control-secondary-color);
      background-color: var(--control-primary-minor-color);
    }

    &.--light {
      border: 1px solid #eee;
      color: var(--control-primary-minor-color);

      &:hover {
        background-color: #eef7fe;
        border-color: #bbd7e9;
      }
    }
  }

  &.--pseudo {
    background-color: transparent;
    border-color: transparent;
  }

  &.--icon {
    &:not(.--light) {
      svg path {
        fill: var(--text-primary-color);
      }
    }
  }

  &.--only-icon {
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center;

    .app-btn__icon {
      margin: 0;
    }
  }
}
</style>
