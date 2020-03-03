<script context="module">
  import { createStore, forward } from 'effector';
  import { value } from './field';

  const disabled = createStore(true);

  forward({
    from: value.map((state) => state.length === 0),
    to: disabled,
  });
</script>

<button type="submit" disabled={$disabled}>Check</button>
