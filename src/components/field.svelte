<script context="module">
  import { createStore, createEvent } from 'effector';

  const input = createStore('');
  export const value = input.map(({ value }) => value);
  export const keyCode = input.map(({ keyCode }) => keyCode);

  export const keyPressed = createEvent('keyup');

  input.on(keyPressed, (_, { keyCode, target }) => ({ keyCode, value: target.value }));
</script>

<input type="number" {value} on:keyup={keyPressed} />
