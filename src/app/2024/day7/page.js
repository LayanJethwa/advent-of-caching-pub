'use client';
import PuzzlePage from '@/app/components/layouts/puzzlepage';

export default function Day7() {
  const challenge = {
    day: 7,
    title: "Powertrails!",
    description: `After dropping some swag in caches yesterday, the elves want to go again!
This time, they have decided to hit some powertrails to get their numbers up.

Each elf has a target to reach, which is their previous record.
An elf can find caches at a maximum speed of 20 per hour!
However, they will have to rest for 20 minutes after this before going again.
    If they cache at 5 caches per hour, they will have to rest for 5 minutes.

The first cache in each hour is found after a short time.
    i.e., for 5 caches per hour, a cache will be found at minutes 12, 24, 36, 48 and 60 of that hour.

After an hour worth of caching, the elf must stop and take a break, even if they are still looking for a cache.
    They will take the break time, then start caching again as part of a new hour.

The elves have 7 hours they can be caching continuously for.
    That is, after 7 hours total have elapsed, they will stop.

Given their target, what is the most leisurely pace each elf can take to break their record?
An elf can only find an integer number of caches per hour, and at a constant speed.
Remember, the elves need to BREAK the record - they need to find a higher amount than previously!

What is the sum of the paces for all the elves?

Here is your test input:`,
    example: {
      input: `71 caches in a day
49 caches in a day
19 caches in a day
17 caches in a day
84 caches in a day
14 caches in a day
52 caches in a day
30 caches in a day
38 caches in a day
84 caches in a day
`,
      output: "81",
    },
    expected: "",
  };

  return <PuzzlePage challenge={challenge} />;
}
