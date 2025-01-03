'use client';
import PuzzlePage from '@/app/components/layouts/puzzlepage';

export default function Day18() {
  const challenge = {
    day: 18,
    title: "Packing Presents",
    description: `Today, the elves are getting ready for Christmas!
They need to pack some presents into sacks ready for Santa to take.

Each elf has a list of items to pack into sacks, with their weights listed.
The problem is, each sack has a maximum capacity of 100 units.

For each elf, calculate the minimum number of sacks needed.
What is the sum of the number of sacks needed per elf?

Here is your test input:`,
    example: {
      input: `Elf 1: 60, 16, 25, 24, 78, 32, 67, 42, 42, 87
Elf 2: 67, 37, 31, 87, 78, 30, 71, 73, 6, 35
Elf 3: 16, 19, 12, 26, 41, 21, 48, 63, 25, 100
Elf 4: 5, 1, 89, 28, 8, 69, 45, 80, 56, 57
Elf 5: 58, 38, 73, 21, 33, 56, 30, 22, 5, 96
Elf 6: 22, 28, 67, 27, 76, 81, 37, 71, 7, 8
Elf 7: 96, 10, 36, 47, 32, 78, 99, 72, 12, 24
Elf 8: 46, 29, 93, 30, 75, 10, 76, 19, 79, 5
Elf 9: 69, 49, 55, 37, 96, 29, 71, 31, 68, 65
Elf 10: 22, 2, 22, 36, 61, 1, 28, 59, 44, 2
`,
      output: "56",
    },
    expected: "",
  };

  return <PuzzlePage challenge={challenge} />;
}
