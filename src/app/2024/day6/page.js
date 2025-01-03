'use client';
import PuzzlePage from '@/app/components/layouts/puzzlepage';

export default function Day6() {
  const challenge = {
    day: 6,
    title: "SWAG Bags",
    description: `Today, the elves are out geocaching!
They are busy finding caches, and putting swag in them!

The problem is, the elves each want to put a different amount of swag in the caches.
They all have different amounts in their bag, so they each want to know how many ways there are to distribute it.
Order does not matter for this problem.

There is however another caveat: elves with a prime number are fussy!
They won't pick any items with a weight below 30g (30g is allowed).

You are given a list of item weights, and a number of items to pick.
What is the sum of all the ways to pick the items for all the elves?

Here is your test input:`,
    example: {
      input: `Elf 1: Weights = [79, 18, 21, 57], Items = 2
Elf 2: Weights = [96, 33, 77, 97, 25, 43, 30, 4], Items = 4
Elf 3: Weights = [59, 82, 94], Items = 2
Elf 4: Weights = [31, 35, 61, 23, 95, 32, 58, 95, 34, 91, 67, 20], Items = 9
Elf 5: Weights = [62, 31, 76, 61, 89, 31, 97, 44, 29], Items = 8
Elf 6: Weights = [63, 34, 55, 73, 20, 39], Items = 4
Elf 7: Weights = [97, 50, 85, 40, 33, 86, 77, 96, 58, 50, 78, 60], Items = 10
Elf 8: Weights = [82, 75, 67, 75, 31, 76, 8], Items = 6
Elf 9: Weights = [48, 90, 35, 61, 5, 23, 78, 54], Items = 3
Elf 10: Weights = [52, 67, 21, 17, 31, 94, 62], Items = 6
`,
      output: "396",
    },
    expected: "",
  };

  return <PuzzlePage challenge={challenge} />;
}
