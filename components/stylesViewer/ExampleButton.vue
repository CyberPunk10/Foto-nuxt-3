<template>
  <div class="example-button">
    <div class="example-button__content">
      <app-button v-if="props.variant === 'default'">
        Button default
      </app-button>
      <app-button v-if="props.variant === 'round'" round>
        Button round
      </app-button>
      <app-button v-if="props.variant === 'outline'" variant="outline">
        Button outline
      </app-button>
      <app-button v-if="props.variant === 'small'" size="small">
        Button small
      </app-button>
      <!-- <app-button v-if="props.variant === 'icon'" :icon="CheckDarkIcon">
        Button icon
      </app-button> -->
    </div>

    <div class="example-button__description">
      <slot />
    </div>

    <div class="example-button__controls">
      <BtnCopyStyle
        :variant="props.variant"
        :text-for-clipboard="textForClipboard"
      />
    </div>
  </div>
</template>

<script setup>
// import CheckDarkIcon from '@/assets/icons/check-dark.svg'
import BtnCopyStyle from './BtnCopyStyle.vue'

const props = defineProps({
  variant: {
    type: String,
    default: null
  }
})

const textForClipboard = computed(() => {
  switch (props.variant) {
    case 'round':
      return '<app-button round></app-button>'
    case 'outline':
      return '<app-button variant="outline"></app-button>'
    case 'small':
      return '<app-button size="small"></app-button>'
    case 'icon':
      return '<app-button :icon="PASTE IMPORT SVG"></app-button>'
    default:
      return '<app-button></app-button>'
  }
})

</script>

<style lang="scss">
.example-button {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  margin: var(--space-350) 0;
  gap: var(--space-100) var(--space-1000);

  &__content {
    flex-basis: 24rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 5rem;
    color: #fff;
    border-radius: var(--control-radius);
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
  .example-button {
    &__description {
      color: var(--text-primary-color);
    }
  }
}
</style>
