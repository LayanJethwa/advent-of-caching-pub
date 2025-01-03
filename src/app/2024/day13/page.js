'use client';
import PuzzlePage from '@/app/components/layouts/puzzlepage';

export default function Day13() {
  const challenge = {
    day: 13,
    title: "Lost Elves",
    description: `Today, the elves are out caching again. Unfortunately they have become lost!
They all started in the same place, and are going around a loop of caches.

The start points for each elf are numbered s1, s2 etc.
In the actual input, there are 10 elves that have got lost.
If all the elves go to the next cache in their loop at exactly the same time, how long will it take for them all to find each other?
    

Here is your test input:`,
    example: {
      input: `sgt -> bsa
lrn -> ugu
nbs -> sgt
ugu -> s2
qml -> s1
hyj -> vew
mop -> knv
s2 -> wrk
ghz -> qml
pzl -> jut
jut -> ghz
knv -> uzc
vew -> nbs
bsa -> lrn
uzc -> pzl
wrk -> hyj
s1 -> mop
`,
      output: "72",
    },
    expected: "",
  };

  return <PuzzlePage challenge={challenge} />;
}
