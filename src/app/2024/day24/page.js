'use client';
import PuzzlePage from '@/app/components/layouts/puzzlepage';

export default function Day24() {
  const challenge = {
    day: 24,
    title: "Santa's Little Helpers",
    description: `It's Christmas Eve, and the elves are planning the routes for Santa!

On his way to deliver presents, he can stop at either 1, 2 or 3 consecutive houses
There must be a gap after this (denoted by a '.') before another block of houses
    The gap can be any size (any number of '.'s)

The elves have planned the routes, but someone spilt hot chocolate over them!
Some of the data has been salvaged, but other characters, marked by '?', are unreadable.

The elves want to know how many distinct routes there are for each line of salvaged data
    A route where Santa visits no houses counts as 1
    Each question mark can be replaced with either a house or a gap

What is the sum of the number of possible routes for each line of the data?

Here is your test input:
`,
    example: {
      input: `?.🏠🏠?..
?🏠.?.?
?.🏠🏠🏠..
🏠?🏠??🏠?🏠?
?..??
.🏠.?.
🏠??.?.?
🏠...🏠??
????🏠.🏠🏠?
?🏠🏠?.🏠🏠?
`,
      output: "91",
    },
    expected: "",
  };

  return <PuzzlePage challenge={challenge} />;
}
