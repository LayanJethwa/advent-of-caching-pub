'use client';
import PuzzlePage from '@/app/components/layouts/puzzlepage';

export default function Day12() {
  const challenge = {
    day: 12,
    title: "Image Corruption, again",
    description: `Today, one of the elves is doing some pixel art for his latest cache!
However, when he saved it, the image was corrupted.

The image was a square, and has saved with the side length on the first line.
All the other lines are the colour values of the pixels, from top left to bottom right.
The problem is that the colour was meant to be represented in RGB, but instead has been represented in decimal.

For example, if the hex code of the pixel is #2b6538, it would be represented as 2843960 instead of 4310156.

What is the image of? Answer in all caps.
    

Here is your test input:`,
    example: {
      input: `5
0
16711680
0
16711680
0
16711680
16729670
16729670
16711680
16711680
16711680
16729670
16711680
14548992
16711680
0
16711680
14548992
14548992
0
0
0
16711680
0
0
`,
      output: "HEART",
    },
    expected: "",
  };

  return <PuzzlePage challenge={challenge} />;
}
