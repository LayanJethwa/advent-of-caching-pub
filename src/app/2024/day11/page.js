'use client';
import PuzzlePage from '@/app/components/layouts/puzzlepage';

export default function Day11() {
  const challenge = {
    day: 11,
    title: "Computer Problems!",
    description: `Today, the elves are having some computer issues.
They have tried turning it off and on again, but it didn't work, so it must be serious.
Can you help them?

The computer works like this:

An initial value is input into the "input" module, and it is then passed around through different modules.
Each path it takes is one-way.
Sometimes a module has a logical operation which it applies to the inputs, and sends the result of to the output.
If there is no operation, the input is just sent to all outputs.

There are 6 types of operation:
    Bitwise and (AND) - performs the operation "logical and" on each bit of the inputs when converted to binary.
    Bitwise or (OR) - performs the operation "logical or" on each bit of the inputs when converted to binary.
    Negation (NEG) - changes the sign of the number (53 -> -53, -29 -> 29)
    Adder (ADD) - adds the two inputs together.
    Splitter (SPL) - rounds the number down to the closest even number, then sends the number divided by 2 to each output.
        If the number is 27, 13 will be sent to each of the two outputs.
    Multiplier (MUL) - multiplies the two inputs together.

For both the bitwise operators, twos complement binary is used.
If the output module has more than one input, it acts as an ADD module.

IF A VALUE OUTPUT FROM A MODULE IS 0, IT IS CHANGED TO THE INITIAL INPUT VALUE.

At the bottom of your input is the test value to be fed into the input module.
What is the output with this value?
    

Here is your test input:`,
    example: {
      input: `yzo (SPL) -> vat
yzo (SPL) -> tkw
wee (OR) -> output
ftc (SPL) -> wee
ftc (SPL) -> ncf
vat -> ftc
qec -> zah
input (SPL) -> sti
input (SPL) -> igv
zah (NEG) -> xbd
xbd -> yzo
ncf (OR) -> output
qrz (ADD) -> qec
tkw (SPL) -> wee
tkw (SPL) -> ncf
sti (NEG) -> qrz
igv (NEG) -> qrz
3147
`,
      output: "1572",
    },
    expected: "",
  };

  return <PuzzlePage challenge={challenge} />;
}
