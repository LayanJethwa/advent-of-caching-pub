'use client';
import PuzzlePage from '@/app/components/layouts/puzzlepage';

export default function Day24() {
  const challenge = {
    day: 25,
    title: "Merry Christmas!",
    description: `It's Christmas Day!
    
Thanks to your efforts and hard work, the elves have got everything running smoothly just in time for the big event.
Don't forget, they also had some fun geocaching!

As a thank you, they have given you a present!

If you have solved all 24 previous puzzles, the cache can be found by taking the sum of the bonus numbers.
The checker shouldn't be needed, but it's here anyway so you can get that green tick :D
Certitude will give you a hint as well (it wants exact coordinates, not just the big number)

Read the cache page for this one!


If you have managed to solve all the previous puzzles, a massive WELL DONE is in order - these are difficult puzzles spanning a broad range of topics, and your solving of every single one of them is a testament to your puzzle-solving abilities. I hope you have enjoyed them all, and that you have a very merry Christmas!
`,
    example: {
      input: `Merry Christmas!
`,
      output: "XMAS",
    },
    expected: "",
  };

  return <PuzzlePage challenge={challenge} />;
}
