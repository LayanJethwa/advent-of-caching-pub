'use client';
import PuzzlePage from '@/app/components/layouts/puzzlepage';

export default function Day14() {
  const challenge = {
    day: 14,
    title: "Struggling Elf",
    description: `Today, one of the elves is out caching (yet again!)
However there are a lot of hills in the area.

The elf needs to get from the top left of the grid (marked 0) to the bottom right.
He can only move down or right.
Each hill on the way has a cost associated with it.

What is the lowest cost that the elf can have on his journey?
    

Here is your test input:`,
    example: {
      input: `0,7,2,1,7,8,4,1,5,2
9,4,4,7,7,10,8,8,8,1
2,1,9,2,5,4,4,1,10,2
4,3,3,10,10,8,7,5,3,8
7,6,10,3,6,3,7,4,4,8
10,4,9,9,9,4,8,9,2,10
2,8,4,4,3,10,2,9,2,5
7,5,2,9,6,10,7,6,8,4
1,5,3,1,5,10,7,9,2,9
2,5,1,7,7,4,2,3,4,0
`,
      output: "63",
    },
    expected: "",
  };

  return <PuzzlePage challenge={challenge} />;
}
