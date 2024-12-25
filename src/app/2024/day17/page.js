'use client';
import PuzzlePage from '@/app/components/layouts/puzzlepage';

export default function Day17() {
  const challenge = {
    day: 17,
    title: "GeoHash",
    description: `Today, the elves are trialling their new geocache database system, which has been in the works since day 3.
They want to move to a more efficient and robust hash-based system, called GeoHash.

However, someone has pressed the wrong button on the generator, and it has given some invalid hashes.

The GeoHash system works like so, in this order:
    Every hash begins with a hash ("#")
    The coordinates are then given, in the format DDMMSSSDDDMMSSS (2,2,3,3,2,3 digits)
        The latitude degrees (first two DD) must be 00-89 inclusive
        The longitude degrees (second three DDD) must be 000-179 inclusive
        Both sets of minutes (MM) must be 00-59 inclusive
        The seconds (SSS) can take any value 000-999 inclusive
    The found status is given as either a 1 or a 0
    The size is given as a number which is 0-4 inclusive
    The name is given in base64 encoding
    The difficulty and terrain are then given, in the format X.x
        They can be 1.0-5.0 inclusive, but only increments of 0.5 are allowed
    The name of the owner is given in base64 encoding
    A pipe ("|") is then given to separate the remaining data
    The number of favourite points is given as an integer 0-10000 inclusive
    The attributes are given in braces: {a,b,c etc.}
        They are formatted to two digits with no separator, such as {123459} (12,34,59)
        They must be 00-70 inclusive
    The hidden date is given in the format DDMMYY
        This must follow normal rules for dates (correct number of days in each month etc.)
        The year is 00-24 inclusive, it can't be in the future!

Can you tell them the number of correct GeoHashes?  

Here is your test input:`,
    example: {
      input: `#10948110109791717V2p2dmRocmpuaQ==1.52.5VWFteXpmemN2ZXJvams=|pqk{34148}370203
#83421220402204503WGd6dWJna3dw2.55.0V2ptaGdjZ3Zhdw==|2151{56213753}010223
#58653982502187001Tm1tenRrbWR5a3dqZHpy6.94.6Wnp2anViYmE=|qjlgw{907345107113}061907
#33479860423448615RGxlc2525.71.3SXl3Y3hxcW10bmE=|l{661286723467874727763}110204
#73429210521916212WG53eXB6cmZrYw==1.54.0UHBtZXZnc2xi|4525{0332270607341356}260202
#97123041272346216THJ5bWxmeWd4YXk=3.13.6SG54dXpvZmFyc2lwaA==|wsrp{13489565955108}121208
#77582510495107912U3ZscWxpc3Jxcg==2.53.0S3Z5d2VhZXBuag==|7507{1069286240615314}040205
#75855800480232401QW9ndWZidXF2Y2Zu4.86.4RG9yd3VidmI=|qfuk{10046122123}221923
#79517620383577611WHFxa3ZpZWRzaGd5cWZlbQ==2.01.0WXNkbHBxc2RiYg==|1473{1610471755}070222
#36275011734167811TXZ3YmhtdXpoa2E=1.02.0TXR2Y3Ruc3RieHhpcHQ=|8700{6249}180209
`,
      output: "5",
    },
    expected: "",
  };

  return <PuzzlePage challenge={challenge} />;
}
