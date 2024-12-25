'use client';
import PuzzlePage from '@/app/components/layouts/puzzlepage';

export default function Day19() {
  const challenge = {
    day: 19,
    title: "Fish-Watching!",
    description: `Today, the elves are out fish-watching! (It's a bit like bird-watching)
They are watching a special fish in a tank, and want to see how it moves.
This species of fish is special because it can duplicate itself!

After some observation, they have concluded that their movement is predictable.
Here are their discoveries:

The fish will swim in the direction they face until they hit an obstacle or a wall
    Fish can go through each other
When they hit a wall, they turn round and go back the way they came
    This takes up one move (they don't change position in this move)
If, when they move, they would hit an obstacle (marked with a "#"), they will split
    They spawn two new fish on either side of the obstacle, facing 90 degrees left and right
    e.g. if a fish faces right and hits an obstacle, it will spawn two more:
        One above the obstacle, facing up, and one below, facing down
    This splitting happens in one move (two new spawned, and the old one deleted)
    If a fish tries to spawn on an obstacle, it fails and is not spawned

Collision logic happens after all the fish have been moved
    Update all the positions first, then check if multiple are occupying the same space
After moving and spawning, if multiple on fish are in the same space, a collision happens
    A collision spawns 4 fish around the space facing outwards
    It deletes all the fish involved in the collision on the original space
    If there is already a fish where a new one would be spawned, the old fish is deleted
        Collisions cannot cause more collisions
    As before, if a fish tries to spawn on an obstacle, it fails and is not spawned

The elves have a map of a tank with obstacles in place, and want to know how many fish there will be.

The fish starts facing right, denoted by the ">" symbol.
Each iteration, the fish will swim one space.

The elves want to know the score of the positions of all the fish
    This is calculated by multiplying their x and y coordinates (starting with 0,0 in the top left)

Can you compute the score of the fish after 60 iterations?

Here is your test input (this is only for 15 iterations):`,
    example: {
      input: `...#.
.....
#.>#.
...#.
...#.
`,
      output: "25",
    },
    expected: "",
  };

  return <PuzzlePage challenge={challenge} />;
}
