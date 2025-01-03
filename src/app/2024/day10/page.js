'use client';
import PuzzlePage from '@/app/components/layouts/puzzlepage';

export default function Day10() {
  const challenge = {
    day: 10,
    title: "Keep on the Trail!",
    description: `Another elf wants to go and find some caches!
The trouble is, he doesn't know which ones are part of the trail he is doing.
The elf who placed them didn't number them in the title!

The elf has a list of caches, and which caches they are next to.
A relationship between caches is both ways.
How many caches are between the start and end cache, including both endpoints?

Here is your test input:`,
    example: {
      input: `lvh -> start
bbt -> end
zpy -> jql
yrl -> jif
zpy -> lvh
jql -> yrl
end -> puo
puo -> yrl
ebf -> zpy
uzm -> lvh
puo -> mug
`,
      output: "7",
    },
    expected: "",
  };

  return <PuzzlePage challenge={challenge} />;
}
