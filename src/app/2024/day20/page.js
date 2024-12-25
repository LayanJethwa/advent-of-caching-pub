'use client';
import PuzzlePage from '@/app/components/layouts/puzzlepage';

export default function Day20() {
  const challenge = {
    day: 20,
    title: "Snowball Fight!",
    description: `
Today, the elves are having a snowball fight!

All their shots are on target, but some of them are strategically intercepted.
Sometimes, an elf will throw a snowball to collide with another one, destroying them both!
    (collisions are between and destroying the snowballs, not the elves)

The elves have all written down their throws (your puzzle input), in this format:
    The initial coordinates of the elf are given as (x,y)
        The z coordinate to start the throw is always 0
    The polar angle is given, in degrees
        This is the angle between the velocity projection on the 2D plane and the z-axis (height)
    The azimuthal angle is given, in degrees
        This is the angle between the velocity projection on the 2D and the x-axis
    The initial velocity is given, in metres per second (m/s)

As the snowballs are represented here as particles, the collision has a radius of 10 metres
    That is, if the point-to-point distance between snowballs is less than or equal 10, a collision occurs
        If there are snowballs that start within the radius but at t=0.01s are not, then they DO NOT collide
            Collisions may only happen at a time of 0.01 seconds or greater, for the purposes of their simulation

You can take acceleration due to gravity as 9.81 m/s
The elves have determined that simulating time in increments of 0.01 seconds is sufficiently accurate

The effectiveness score of a throw is calculated by multiplying the final x and y coordinates
    This is only for snowballs that have landed (z coordinate less than or equal to 0)
    Round down the x and y values to the nearest integer before the calculation

What is the sum of the effectiveness scores for all the snowballs in your input?
Here is the test input:
`,
    example: {
      input: `
Thrown from coordinates (28,72) at a polar angle of 23° and azimuthal angle of 55°, with initial velocity: 26m/s
Thrown from coordinates (32,77) at a polar angle of 43° and azimuthal angle of 12°, with initial velocity: 18m/s
Thrown from coordinates (90,10) at a polar angle of 15° and azimuthal angle of 62°, with initial velocity: 30m/s
Thrown from coordinates (69,93) at a polar angle of 62° and azimuthal angle of 66°, with initial velocity: 30m/s
Thrown from coordinates (95,48) at a polar angle of 21° and azimuthal angle of 65°, with initial velocity: 12m/s
Thrown from coordinates (67,47) at a polar angle of 11° and azimuthal angle of 42°, with initial velocity: 22m/s
Thrown from coordinates (74,44) at a polar angle of 17° and azimuthal angle of 23°, with initial velocity: 27m/s
Thrown from coordinates (63,28) at a polar angle of 53° and azimuthal angle of 29°, with initial velocity: 20m/s
Thrown from coordinates (86,1) at a polar angle of 18° and azimuthal angle of 33°, with initial velocity: 16m/s
Thrown from coordinates (39,10) at a polar angle of 46° and azimuthal angle of 35°, with initial velocity: 17m/s
`,
      output: "27941",
    },
    expected: "",
  };

  return <PuzzlePage challenge={challenge} />;
}
