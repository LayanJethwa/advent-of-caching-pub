'use client';
import PuzzlePage from '@/app/components/layouts/puzzlepage';

export default function Day8() {
  const challenge = {
    day: 8,
    title: "Image Corruption!",
    description: `Today, the elves are placing some more caches.
One elf has written some notes down, but the computer has saved them as an image!
Furthermore, the image has been corrupted!

The image is represented as 9 different grids, each grid denoting a layer of the binary.
The pixel in each position on the grids has a binary code read from the top grid to the bottom.
If the checksum of the pixel is correct, it is a black pixel, else it is a white pixel.
    The checksum is calculated using parity bits. Each binary byte needs to have an even number of 1s.
    This is equivalent to calculating the bitwise XOR of each bit.
    The parity bit is the bit in the bottom (9th) grid.


What does the image say (all caps, no spaces)?

Here is your test input:`,
    example: {
      input: `00100111011
10010100000
10111011110
01001110101

11011010000
01111010110
10100111001
00111011000

11110111110
10011101010
01011011011
01110010010

11111001111
00011011011
10111000001
11011110110

00111010011
01011100111
10010010000
00010101110

10010010010
00001111001
10001101011
01000011100

11010100100
11100111100
01111111101
11110001001

10010101011
01111010101
00101001110
00010001110

00001011100
11110011011
10100011110
00111110100
`,
      output: "AOC",
    },
    expected: "",
  };

  return <PuzzlePage challenge={challenge} />;
}
