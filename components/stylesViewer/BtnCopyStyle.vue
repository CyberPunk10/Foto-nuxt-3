<template>
  <app-button
    class="btn-copy-style"
    :light="props.lightModeBtn"
    type="button"
    variant="outline"
    @on-click="handlerCopy"
  >
    <!-- :icon="isCopied ? CheckDarkIcon : ClipboardIcon" -->
    {{ textForClipboard }}<br>
    isCopied: {{ isCopied }}
  </app-button>
</template>

<script setup>
import useStylesViewerStore from '~/stores/stylesViewer.ts'
// import ClipboardIcon from '@/assets/icons/clipboard.svg'
// import CheckDarkIcon from '@/assets/icons/check-dark.svg'

const props = defineProps({
  variant: {
    type: String,
    default: null
  },
  textForClipboard: {
    type: [String],
    default: ''
  },
  lightModeBtn: Boolean
})

const { copyText } = useCopyText()
const stylesViewerStore = useStylesViewerStore()
const isCopied = computed(() => stylesViewerStore.valueClipboard === props.textForClipboard)

function handlerCopy() {
  copyText(props.textForClipboard, (result) => {
    if (result) {
      stylesViewerStore.setValueClipboard(props.textForClipboard)
    }
  })
}
</script>
