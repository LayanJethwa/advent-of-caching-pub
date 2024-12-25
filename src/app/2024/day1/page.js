'use client';
import PuzzlePage from '@/app/components/layouts/puzzlepage';

export default function Day1() {
  const challenge = {
    day: 1,
    title: "Geocaching Elves!",
    description: `The elves have heard about geocaching, and want to set up their own! 
They have created a system with codes that are a maximum of 3 digits long (ie. 1-999). 
Their system randomly allocates codes, but it has broken! 
The elves need to identify all the correct codes, whilst removing the incorrect ones.

Can you help them? Add up all the correct codes for your answer.

They have provided you with a test input:`,
    example: {
      input: `1878
259
1308
1801
244
1927
1418
1196
555
456
`,
      output: "1514",
    },
    expected: "",
  };

  return <PuzzlePage challenge={challenge} />;
}
