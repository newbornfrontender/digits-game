<script>
  import { hideNum } from '../helpers';

  export let result = [];
  export let nums = [];
</script>

<p>{result[0] ? result.join('') : hideNum(nums)}</p>
