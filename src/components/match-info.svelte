<script>
  import { withComma } from '../helpers';

  export let text = '';
  export let nums = [];
</script>

<p>{text} - {nums.length} ({withComma(nums)})</p>
