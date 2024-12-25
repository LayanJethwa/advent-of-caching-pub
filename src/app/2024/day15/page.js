'use client';
import PuzzlePage from '@/app/components/layouts/puzzlepage';

export default function Day15() {
  const challenge = {
    day: 15,
    title: "Wrong Numbering!",
    description: `Today, the elves are going round a loop of caches, but the numbering has been messed up!
The elves are going the correct way, but they want to see how long it would have taken to follow the numbers.

They would have started from number 1, and then gone to the next number until they were back to 1 (the highest number loops back).

To the nearest integer, what is the total point-to-point distance that the elves would have covered?
    

Here is your test input:`,
    example: {
      input: `. . . . 18 . 11 . . .
. 25 15 12 . . . 4 28 .
. 5 . . . 26 . . 3 .
. 21 . . . . . . . 24
20 . . . . . . . . 13
. 1 . . . . . . 14 .
9 . . . . . . . . 23
16 . . 17 . . . . . 2
. 8 7 . . . 27 10 19 .
. . . . 6 22 . . . .
`,
      output: "152",
    },
    expected: "",
  };

  return <PuzzlePage challenge={challenge} />;
}
