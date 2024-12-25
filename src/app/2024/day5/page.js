'use client';
import PuzzlePage from '@/app/components/layouts/puzzlepage';

export default function Day5() {
  const challenge = {
    day: 5,
    title: "Christmas Crackers, part 2",
    description: `Yesterday, the elves were pulling crackers with each other and seeing who won.
However, they've now just received a shipment of new crackers!

These ones have prizes in them, specifically cache containers!

As before, each elf chooses what force they will pull the cracker with.
However, now the weight of the cracker also determines the winner.

As before, the winner is determined based on two simple rules, plus a new extra one:

If one elf pulls with over 500 units more than the other, the one with the smaller force wins.
    i.e. greater than or equals to
        if elf1 is 200 and elf2 is 700, elf1 wins
        if elf1 is 200 and elf2 is 800, elf1 wins
        if elf1 is 200 and elf2 is 699, elf2 wins

Else, the elf with the larger force wins.
Additionally, both the forces have to add up to greater than the resistance of the cracker, which is 10x the weight.
    If they do not, the cracker is a dud, and no one wins.


An elf wants to place a geoart, and needs your help to get the containers.
The elf wants bison tubes, which weigh between 20 and 40 (inclusive) grams.

What is the minimum optimal integer pulling force for the elf to win as many bison tubes as possible?
    The elf will pull each cracker in the list with exactly the same force.

Here is your test input:`,
    example: {
      input: `718 eJ >===37g===<
299 eJ >===30g===<
254 eJ >===94g===<
616 eJ >===83g===<
826 eJ >===17g===<
236 eJ >===99g===<
519 eJ >===68g===<
161 eJ >===32g===<
181 eJ >===14g===<
404 eJ >===32g===<
`,
      output: "405",
    },
    expected: "",
  };

  return <PuzzlePage challenge={challenge} />;
}
