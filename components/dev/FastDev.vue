<template>
  <div ref="fastDevRef" class='fast-dev'>
    <!-- Change Theme -->
    <button
      class="button-round hidden md:block"
      type="button"
      @click="setColorTheme($colorMode.preference == 'dark' ? 'light' : 'dark')"
    >
      <svg
        v-if="$colorMode.value == 'dark'"
        xmlns="http://www.w3.org/2000/svg"
        class="h-6 w-6 text-gray-50"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
      </svg>
      <svg
        v-if="$colorMode.value == 'light'"
        xmlns="http://www.w3.org/2000/svg"
        class="h-6 w-6"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fill-rule="evenodd"
          d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
          clip-rule="evenodd"
        />
      </svg>
    </button>

    <!-- Страница разработчика -->
    <!-- v-tooltip="{ content: tooltipDevPage, delay: { show: 300 } }" -->
    <!-- :class="{'--disabled': !isSuperUser }" -->
    <nuxt-link
      class="button-round dev-page"
      to="/dev"
    >
      <!-- <svg-icon
        type="magic"
        :class="{'--active': isSuperUser }"
      /> -->
      D
    </nuxt-link>

    <nuxt-link
      class="button-round home-page"
      to="/"
    >
      <!-- <svg-icon
        type="magic"
        :class="{'--active': isSuperUser }"
      /> -->
      H
    </nuxt-link>

    <nuxt-link
      class="button-round home-page"
      to="/_styles"
    >
      <!-- <svg-icon
        type="magic"
        :class="{'--active': isSuperUser }"
      /> -->
      S
    </nuxt-link>

    <nuxt-link
      class="button-round home-page"
      to="/twitter/auth"
    >
      <!-- <svg-icon
        type="magic"
        :class="{'--active': isSuperUser }"
      /> -->
      T
    </nuxt-link>
  </div>
</template>

<script setup>
const setColorTheme = (newTheme) => {
  useColorMode().preference = newTheme
}
const fastDevRef = ref(null)

onMounted(() => {
  updateStyles();
});

function updateStyles() {
  setTimeout(() => {
    const countButtons = fastDevRef.value.childElementCount;

    const widthFastDev = (32 + 8 * 2) * countButtons + 6 * 2;
    fastDevRef.value.style = `
      width: ${widthFastDev}px;
    `;
  }, 100);
}
</script>

<style lang="scss">
.fast-dev {
  z-index: 3000;
  position: fixed;
  top: 0;
  height: 49px;
  border-top: 1px solid var(--control-primary-minor-color);
  border-right: 4px solid var(--control-primary-minor-color);
  border-bottom: 1px solid var(--control-primary-minor-color);
  background: var(--background);
  padding: 1px 6px 0;
  font-size: 16px;
  display: flex;
  align-items: center;
  transition: transform .2s;
  transform: translateX(calc(-100% + 4px));

  &:hover {
    transform: translateX(0);
  }

  .button-round {
    cursor: pointer;
    display: inline-block;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 32px;
    width: 32px;
    min-width: 32px;
    margin: 0 8px;
    border: 1px solid var(--control-primary-minor-color);
    user-select: none;
    color: var(--control-secondary-color);
    transition: background-color .2s;

    &:not(.--disabled):hover {
      background-color: var(--control-primary-minor-color);
    }

    img {
      width: 24px;
      height: 24px;
      border-radius: 50%;
    }

    &.color-status,
    &.super-user,
    &.dev-page {
      .--active{
        color: #ffc107;
      }
    }

    &.--no-photo-avatar,
    &.super-user {
      font-size: 24px;
    }

    &.master-extension {
      @include body-large-font(long);
      font-weight: bold;
      font-size: 14px;
    }

    &.--disabled {
      cursor: default;
      opacity: .5;
      filter: grayscale(25%);
    }
  }
}
</style>
