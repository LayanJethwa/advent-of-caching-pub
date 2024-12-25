'use client';
import PuzzlePage from '@/app/components/layouts/puzzlepage';

export default function Day23() {
  const challenge = {
    day: 23,
    title: "The Scenic Route",
    description: `Today, the elves are out Geocaching again, in their last outing before Christmas!
They want to make the most out of today, and have decided to take a nice scenic hike.

They have the trail map (your input), and want to know how they can maximise the time spent walking.

The elves want to know the length of the longest path they can take from the start to the end
    The start is at (0,0) in the top-left
    The end is at (size,size) in the bottom-right, with size being the size of the map (it is square)

The '.' are places that are paths that the elves can walk on
The '#' are walls/obstacles that they cannot walk on

The elves can only visit each point on the map once - NO BACKTRACKING

How long is the longest path?


Here is your test input:
`,
    example: {
      input: `.........
.###.###.
.....#...
.#.#.#.#.
.#.#.....
.#.###.##
.#.#.....
.#.###.#.
.......#.
`,
      output: "41",
    },
    expected: "",
  };

  return <PuzzlePage challenge={challenge} />;
}
