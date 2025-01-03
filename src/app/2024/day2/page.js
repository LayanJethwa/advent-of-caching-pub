'use client';
import PuzzlePage from '@/app/components/layouts/puzzlepage';

export default function Day2() {
  const challenge = {
    day: 2,
    title: "Code Overflow!",
    description: `Yesterday you helped the elves fix their own geocaching code system.
Unfortunately, they loved geocaching so much that they managed to place 999 already!
As a result, they have now run out of codes, so decided to just use the original geocaching system.

The system works like this:
    Every code must start with GC (case-sensitive)
    All the letters of the alphabet are used, except I,L,O,S and U
        The elves only want UPPERCASE letters in their codes
    All the digits (0-9) are used
        Thus, the full alphabet used is: 0123456789ABCDEFGHJKMNPQRTVWXYZ

    They have started with 5 characters after the GC code (GCxxxxx)
        However each code can have either 5, 6, or 7 characters after the code

Their computer has generated codes for them, but someone hasn't coded the rules properly!
Can you tell them the number of correct codes to train the computer?

They have provided you with a test input:`,
    example: {
      input: `GCKW9PQE
3qqH
GCBY8B5
jYO3KV
KkI0A3mEb
GCYQIM
GCBNSRDNMZ
GC76DVC3A
kLn6G2S42
GC8APN
`,
      output: "3",
    },
    expected: "",
  };

  return <PuzzlePage challenge={challenge} />;
}
