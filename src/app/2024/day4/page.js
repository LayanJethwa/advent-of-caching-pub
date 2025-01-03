'use client';
import PuzzlePage from '@/app/components/layouts/puzzlepage';

export default function Day4() {
  const challenge = {
    day: 4,
    title: "Christmas Crackers!",
    description: `The elves have set up their geocaching system, thanks to your help!
To celebrate, they have decided to pull some Christmas crackers!

Each elf chooses what force they will pull the cracker with.
The force is measured in the unit elfJoules, or eJ.
The winner is determined based on two simple rules:

If one elf pulls with over 500 units more than the other, the one with the smaller force wins.
    i.e. greater than or equals to
        if elf1 is 200 and elf2 is 700, elf1 wins
        if elf1 is 200 and elf2 is 800, elf1 wins
        if elf1 is 200 and elf2 is 699, elf2 wins

Else, the elf with the larger force wins.
If the elves draw, neither one wins.

    
Can you calculate the sum of all the odd numbered elves that win games?

They have provided you with a test input:`,
    example: {
      input: `Elf 640: 692 eJ >====< Elf 1556: 127 eJ
Elf 71: 96 eJ >====< Elf 1325: 608 eJ
Elf 310: 790 eJ >====< Elf 1478: 150 eJ
Elf 844: 281 eJ >====< Elf 1111: 488 eJ
Elf 278: 886 eJ >====< Elf 1852: 708 eJ
Elf 252: 713 eJ >====< Elf 1420: 842 eJ
Elf 780: 272 eJ >====< Elf 1866: 624 eJ
Elf 299: 42 eJ >====< Elf 1706: 996 eJ
Elf 145: 964 eJ >====< Elf 1758: 169 eJ
Elf 452: 441 eJ >====< Elf 1558: 139 eJ
`,
      output: "1481",
    },
    expected: "",
  };

  return <PuzzlePage challenge={challenge} />;
}
