'use client';
import PuzzlePage from '@/app/components/layouts/puzzlepage';

export default function Day9() {
  const challenge = {
    day: 9,
    title: "Round and About",
    description: `The elf you helped yesterday has to go out and place his caches!
He has a path to go on, but he is not sure how long it will take.

Can you calculate the length of the path?

Here is your test input:`,
    example: {
      input: `0000.0....
...0..0..0
.0.0....0.
0..0.....0
0..00...0.
00..000.0.
0..0..0..0
.0.00.000.
..00....0.
00.0....00
`,
      output: "19",
    },
    expected: "",
  };

  return <PuzzlePage challenge={challenge} />;
}
