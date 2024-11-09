<template>
  <div class="styles-viewer-page">
    <!-- collors -->
    <StylesSection title="Colors" dark-theme>
      <ExampleColor variant="text-color">Text</ExampleColor>
      <ExampleColor variant="background">Background</ExampleColor>
      <ExampleColor variant="background-secondary">Background Secondary</ExampleColor>
      <ExampleColor variant="background-accent" class="mb-1000">Используется в свечениях с различной степенью прозрачности</ExampleColor>
      <ExampleColor variant="text-primary-color">Text/primary</ExampleColor>
      <ExampleColor variant="text-secondary-color">Text/secondary</ExampleColor>
      <ExampleColor variant="text-minor-color" class="mb-1000">Text/minor</ExampleColor>
      <ExampleColor variant="control-accent-color">Control/accent</ExampleColor>
      <ExampleColor variant="control-secondary-color">Control/secondary</ExampleColor>
      <ExampleColor variant="control-primary-minor-color">Control/primary minor</ExampleColor>
      <ExampleColor variant="control-secondary-minor-color">Control/secondary minor</ExampleColor>
    </StylesSection>

    <!-- fonts -->
    <StylesSection v-if="fontParams" title="Fonts" show-width>
      <p class="styles-srction__description">
        Эти шрифты подстраиваются под ширину экрана, меняя свой размер.<br>
        По умолчанию эти шрифты имеют margin-button. Его можно убрать, передав внурь <i>false</i>.
      </p>
      <ExampleFont variant="heading-h1-font" :data-font="fontParams.headingH1">H1 - Заголовок</ExampleFont>
      <ExampleFont variant="heading-h2-font" :data-font="fontParams.headingH2">H2 - Заголовок</ExampleFont>
      <ExampleFont variant="heading-h3-font" :data-font="fontParams.headingH3">H3 - Заголовок</ExampleFont>
      <ExampleFont variant="heading-h4-font" :data-font="fontParams.headingH4">H4 - Заголовок</ExampleFont>
      <ExampleFont variant="heading-display-font" :data-font="fontParams.headingDisplay">Title - Заголовок</ExampleFont>
    </StylesSection>
    <StylesSection title="Fonts not dinamic">
      <p class="styles-srction__description">
        Эти шрифты не подстраиваются под ширину экрана.<br>
        Внутрь миксина можно передать параметр меняющий начертание шрифта,
        например: long, accent, short..
      </p>
      <ExampleFont variant="body-large-font">Body large/long</ExampleFont>
      <ExampleFont variant="body-medium-font">Body medium/long</ExampleFont>
      <ExampleFont variant="body-small-font">Body small/long</ExampleFont>
      <ExampleFont variant="minor-font">Minor/caption</ExampleFont>
    </StylesSection>

    <!-- buttons -->
    <StylesSection class="section-buttons" title="Buttons" dark-theme>
      <ExampleButton variant="default" class="mt-500">
        <span class="secondary-text">default: size="medium" variant="primary"</span>
      </ExampleButton>
      <ExampleButton variant="round">
        <span class="secondary-text">props:</span> round
      </ExampleButton>
      <ExampleButton variant="outline">
        <span class="secondary-text">props:</span> variant="outline"
      </ExampleButton>
      <ExampleButton variant="small">
        <span class="secondary-text">props:</span> size="small"
      </ExampleButton>
      <ExampleButton variant="icon">
        <span class="secondary-text">props:</span> icon="check-dark"
      </ExampleButton>
    </StylesSection>
  </div>
</template>

<script setup>
import ExampleButton from '~/components/stylesViewer/ExampleButton.vue'
import ExampleFont from '~/components/stylesViewer/ExampleFont.vue'
import ExampleColor from '~/components/stylesViewer/ExampleColor.vue'
import StylesSection from '~/components/stylesViewer/StylesSection.vue'

definePageMeta({
  layout: 'styles-viewer'
})

// ~/content/api/...
const { data: fontParams } = await useAsyncData('json', () => {
  return queryContent('/api/font-params').findOne()
})

</script>

<style lang="scss">
.styles-viewer-page {
  overflow: auto;
  height: 100vh;

  .styles-srction__description {
    margin: var(--space-200) 0;
    @include body-large-font(long);

    @media (max-width: 768px) {
      @include body-medium-font(long);
    }
  }

  .mb-1000 {
    margin-bottom: var(--space-1000);
  }
  .mt-500 {
    margin-top: var(--space-500);
  }
  .secondary-text {
    color: var(--text-minor-color);
  }
}
</style>
