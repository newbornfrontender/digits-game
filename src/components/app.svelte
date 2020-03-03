<script>
  import { createEvent, sample, createEffect } from 'effector';
  import MatchResult from './match-result';
  import MatchInfo from './match-info';
  import Field, { value } from './field';
  import Button from './button';
  import { splitStr, getMatchNums, getNotMatchNums, genRandStrOfNums } from '../helpers';

  const randNums = genRandStrOfNums();

  let result = [];
  let matching = [];
  let notMatching = [];
  let existing = [];

  const checkNumber = async () => {
    const req = await fetch('http://localhost:3000/api/game', {}, {
      mode: 'no-cors',
      method: 'get',
      url: `http://localhost:3000`,
      credentials: 'include'
    }).then(console.log);

    const randNumsArr = splitStr(randNums);
    const userNumsArr = splitStr($value);

    matching = [];
    result = [];
    existing = getMatchNums(randNumsArr, userNumsArr);

    for (let i = 0; i < randNumsArr.length; i++) {
      const number = userNumsArr[i];

      if (randNumsArr[i] === number) {
        matching = [...matching, number];
        result = [...result, number];
      } else {
        result = [...result, '*'];
      }
    }

    notMatching = getNotMatchNums(existing, matching);
  };

  const submitFx = createEffect({ handler: checkNumber });
  const submitForm = createEvent('submit form');

  const submitted = sample({
    source: value,
    clock: submitForm,
    fn: (value) => value,
    target: submitFx,
  });
</script>

<MatchResult result={result} nums={randNums} />

<MatchInfo text="numbers in their places" nums={matching} />
<MatchInfo text="matching numbers are out of place" nums={notMatching} />

<form on:submit|preventDefault={submitForm}>
  <Field />
  <Button />
</form>
