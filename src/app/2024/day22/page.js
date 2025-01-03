'use client';
import PuzzlePage from '@/app/components/layouts/puzzlepage';

export default function Day22() {
  const challenge = {
    day: 22,
    title: "Toy Manufacturing",
    description: `The elves are very busy in the workshop today, preparing for Christmas!
They need to make all the toys in time for Santa to deliver them, but the materials aren't here yet!

There are three types of shipment:
    Shipment A delivers 37 units of fuel, 13 units of plastic, and 29 units of wood
    Shipment B delivers 7 units of fuel, 17 units of plastic, and 37 units of wood
    Shipment C delivers 5 units of fuel, 3 units of plastic, and 2 units of wood

For each toy, the elves have told you exactly how much fuel, plastic, and wood is needed
    There is no space in the warehouse for excess materials, however, and they cannot share the shipments across toys as it is a logistical nightmare!
    The elves have near instant delivery times, but every microsecond counts, so they need to know how long it will take

The elves need to know which toys can be made, and how long they can be made in
    Shipment A takes 30 microseconds to arrive after ordering
    Shipment B takes 20 microseconds to arrive after ordering
    Shipment C takes 10 microseconds to arrive after ordering
    The shipments can be ordered simultaneously, but shipments of the same type must be consecutive
        That is, if a toy requires 2xA, 1xB and 1xC, A, B and C can be ordered at the same time, but the next shipment of A must be ordered after the first one
            This order will therefore take 60 microseconds for all the materials to arrive
        
The elves want to know how long each toy will take to be made, only if the materials can be made up exactly from the 3 shipments
    If the materials cannot be made exactly, then the elves will not make this toy, so you can disregard it from the total

What is the sum of the times for all the toys, in microseconds?

Here is your test input:
`,
    example: {
      input: `Fuel: 420, plastic: 408, wood: 32
Fuel: 297, plastic: 165, wood: 355
Fuel: 151, plastic: 127, wood: 274
Fuel: 56, plastic: 276, wood: 490
Fuel: 232, plastic: 106, wood: 198
Fuel: 4, plastic: 493, wood: 139
Fuel: 210, plastic: 80, wood: 155
Fuel: 254, plastic: 156, wood: 470
Fuel: 283, plastic: 153, wood: 301
Fuel: 496, plastic: 72, wood: 147
`,
      output: "790",
    },
    expected: "",
  };

  return <PuzzlePage challenge={challenge} />;
}
