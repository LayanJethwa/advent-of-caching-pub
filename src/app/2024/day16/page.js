'use client';
import PuzzlePage from '@/app/components/layouts/puzzlepage';

export default function Day16() {
  const challenge = {
    day: 16,
    title: "A Cracking Encryption!",
    description: `Today, one of the elves has encrypted the new password to Elf HQ!
However, he has forgotten how he encrypted it.

The elf has found, written down, some numbers. From what he can remember, a, c, m and seed are needed.
    a is the product of x and y
    c is the product of y and z
    m is the product of z and x
        where x, y and z are prime

    seed is the seed number for an LCG (linear congruential generator)
        The LCG works by doing ((x*seed)+y)%z to get the new seed.

The elf has encrypted the password in 8-bit binary, by converting each ASCII character to binary.
    Each binary bit is XORed with the corresponding bit in the keystream.
    The keystream is generated with the LCG, and each seed value is converted to binary.
        The initial seed value is not part of the keystream.

Can you work out the password?    

Here is your test input:`,
    example: {
      input: `a: 18676807
c: 77014207
m: 18410569
seed: 2531

10001000
11001100
10000111
10000111
01000001
01000110
00010000
11000011
00100110
00101111
10101101
01011010
10101110
00010100
10011100
10001001
00101011
00101111
00101000
00100011
11111011
`,
      output: "TEST",
    },
    expected: "",
  };

  return <PuzzlePage challenge={challenge} />;
}
