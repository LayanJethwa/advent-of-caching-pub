'use client';
import PuzzlePage from '@/app/components/layouts/puzzlepage';

export default function Day3() {
  const challenge = {
    day: 3,
    title: "Cache Database",
    description: `Now the elves have got their code system working, thanks to your help!
Now they only have one thing left to do: sort out all the other data associated with each cache...
In hindsight, maybe it's not just one thing!

For a cache to be valid, all of these rules must be satisfied:
    Both the difficulty and terrain ratings have to have a star count between 1 and 5 inclusive
        That is, any of *, **, ***, ****, or *****

    The size has to be one of micro, small, regular, large or other
        Any fake ones, such as nano, are NOT ALLOWED!

    They are in the North Pole after all, so each cache must have the attributes {winter} and {snowmobiles}!
    They can have any other attribute, but not conflicting ones, such as {sdggs} and {no_sdggs}
        Each attribute {x} has two forms, {x} and {no_x}
    The {blank} attribute is a bug from testing, and is not allowed!

All the GC codes are fine, thanks to your work yesterday!

    
Can you tell them the sum of the cache numbers in their database that are correct?

They have provided you with a test input:`,
    example: {
      input: `1. GCVHNJHC: ['difficulty: *********', 'terrain: **********', 'size: xzruhx', "attributes: {'snowmobiles', 'aq', 'pspuh', 'mk', 'no_bumxgjnk', 'winter'}"]
2. GC6DG37DT: ['difficulty: *', 'terrain: **', 'size: other', "attributes: {'snowmobiles', 'gmvtfs', 'gqstykka', 'no_nko', 'kjxwwfo', 'winter'}"]
3. GC5C9CV: ['difficulty: ******', 'terrain: ******', 'size: regular', "attributes: {'lewbxc', 'no_ld', 'ld', 'wmqczlug', 'ajaxm'}"]
4. GCR69HC: ['difficulty: *****', 'terrain: ******', 'size: medium', "attributes: {'snowmobiles', 'no_winter', 'winter'}"]
5. GCFHEQ57P: ['difficulty: *****', 'terrain: ', 'size: small', "attributes: {'snowmobiles', 'ydmuup', 'no_xnz', 'mcsaqq', 'winter'}"]
6. GCXZAP2GQ: ['difficulty: *', 'terrain: ****', 'size: other', "attributes: {'snowmobiles', 'evliykaf', 'ajydihd', 'no_hxyypy', 'winter', 'nrze'}"]
7. GC9ED3C30: ['difficulty: **', 'terrain: *******', 'size: zm', "attributes: {'snowmobiles', 'adalo', 'no_vaiqjad', 'gcew', 'blank', 'winter'}"]
8. GCR84HTK3: ['difficulty: *', 'terrain: *', 'size: regular', "attributes: {'vdrudm', 'no_snowmobiles', 'winter'}"]
9. GCGCC5X9A: ['difficulty: ******', 'terrain: ***', 'size: small', "attributes: {'snowmobiles', 'no_ieglo', 'ieglo'}"]
10. GCEZQG3TH: ['difficulty: ', 'terrain: ****', 'size: regular', "attributes: {'snowmobiles', 'awzeab', 'no_winter', 'jfisn', 'blank', 'veut'}"]
`,
      output: "8",
    },
    expected: "",
  };

  return <PuzzlePage challenge={challenge} />;
}
