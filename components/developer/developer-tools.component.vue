<template>
  <section class="developer-tools">
    <header class="developer-tools__header">
      <p class="developer-tools__text developer-tools__text--terminal">
        Terminal:
      </p>
      <ul class="developer-tools__tabs">
        <li class="developer-tools__tab developer-tools__tab--selected">
          Local
        </li>
      </ul>
    </header>
    <main class="developer-tools__content scroll" @click="$refs.input.focus()">
      <div class="developer-tools__commands-history" v-html="commandsHistory" />
      <div class="developer-tools__input-container">
        <input
          type="text"
          class="developer-tools__input"
          ref="input"
          v-model="commandInput"
          :style="{ width: `${!!commandInput ? commandInput.length : 0}ch` }"
          @keyup.enter="(event) => executeCommand(event.target.value)"
        />
        <span class="developer-tools__input-cursor"></span>
      </div>
    </main>
  </section>
</template>

<script lang="ts">
export default {
  name: 'developer-tools',
  computed: {
    commandsHistory() {
      return this.commands
        .map(
          (command: string) =>
            `<p class="developer-tools__command">adrianarenal$ ${command}</p>`
        )
        .join('')
    }
  },
  data() {
    return {
      commands: [],
      commandInput: undefined
    }
  },
  methods: {
    executeCommand(command: string): void {
      this.commands.push(command)
      this.commandInput = undefined
    }
  }
}
</script>

<style lang="scss" scoped>
@import 'assets/scss/developer/styles';
.developer-tools {
  $component-class: &;
  display: flex;
  flex-direction: column;

  &__header {
    display: flex;
    align-items: center;
  }
  &__text {
    &--terminal {
      margin-right: rem(15px);
    }
  }

  &__tabs {
    display: flex;
    flex-grow: 1;
    margin: 0;
    padding-left: 0;
    list-style-type: none;
  }
  &__tab {
    position: relative;
    padding: rem(5px) rem(10px);

    &--selected {
      &::after {
        position: absolute;
        content: '';
        left: 0;
        bottom: 0;
        width: 100%;
        height: rem(3px);
        background-color: $grey--0;
      }
    }
  }

  &__content {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    background-color: $grey--9;
  }

  &__input-container {
    display: flex;
  }
  &__input {
    padding: 0;
    caret-color: transparent;
    -webkit-appearance: none;
    background: none;
    border: none;
    outline: none;
    color: $primary-color;
    font-size: $font-size--extra-small;

    &:focus + #{$component-class}__input-cursor {
      border: none;
      animation: blinkingCursor $transitions-duration--long infinite;
    }
  }

  &__input-cursor {
    width: rem(5px);
    height: 100%;
    margin-right: rem(-5px);
    border: 0.5px solid $primary-color;
  }
  @keyframes blinkingCursor {
    0% {
      background-color: transparent;
    }
    50% {
      background-color: $primary-color;
    }
  }
}
</style>
