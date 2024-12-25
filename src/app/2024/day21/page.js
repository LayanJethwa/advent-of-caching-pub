'use client';
import PuzzlePage from '@/app/components/layouts/puzzlepage';

export default function Day21() {
  const challenge = {
    day: 21,
    title: "Reindeer Cards!",
    description: `Today, the elves are watching the reindeer play a game of cards!

The game works similarly to UNO
    Each turn, a player can play one card onto the pile in the middle
    A card can be played on another of the same suit or rank
    There are 3 special cards
        The Jack (J) reverses the order of play
        The 7 blocks the next player, effectively skipping their turns
        The 2 forces the next player to pick up 2 cards, and they do not get a chance to play a card

The elves want to know who will win the game!
They know the cards of each reindeer, the starting face-up card, and the order of the rest of the deck.

When a reindeer has their turn, they will play the highest value card they can
    Special cards are valued the highest, with J > 7 > 2
    Then the rest of the cards are valued, from K highest to A lowest
    Within cards of the same rank, the order of the suits from high to low are:
        * (snowflakes), + (stars), J (stockings), O (baubles)
        That is, the 7 of snowflakes has a higher value than the 7 of baubles
    If they cannot play, they pick up a card from the front of the deck
        The first card in the deck is the first one drawn

When a card is played, it is added to the end of the deck
    That is, after the deck runs out, the next card drawn is the card that started face-up

The reindeer play clockwise, starting from the top reindeer (Blitzen)
In the actual input, 2 DECKS are in play, each of 52 cards (no jokers)
    There is only 1 deck in play in the test input

The winner is the first reindeer to get rid of all their cards
Their score is calculated by multiplying the total turns in the game by the sum of their card scores
    The card scores (NOT the values) are calculated by multiplying their rank by their suit
        The rank is just the number of the card (A1, J11, Q12, K13)
        The suit numbers as as follows: * (snowflakes) = 1, + (baubles) = 2, J (stockings) = 3, O (baubles) = 4
    Sum the scores of all the cards they have held during the game
        This includes any cards picked up and any cards placed
    Multiply this sum by the total number of turns in the game
        If 4 reindeer play and it goes back to the first one, 4 turns have elapsed, and they are on the 5th one
        If a reindeer is blocked from playing (7), that is NOT counted as a turn

What is the score of the winner?

Here is the test input:
`,
    example: {
      input: `

          Blitzen
             []
    
Donner []  [█][Q*]  [] Prancer

            []
          Dasher


Dasher: [8O][5+][6*]
Prancer: [10*][J+][KO]
Donner: [3J][K+][9O]
Blitzen: [7O][6O][K*]

Deck: [5O][JO][9+][9*][2O][8+][6+][4*][QJ][7+]
      [6J][A+][10O][4J][3*][2+][9J][3+][4+][2*]
      [AO][A*][JJ][7J][8J][4O][AJ][KJ][7*][5J]
      [QO][J*][10J][10+][Q+][3O][5*][2J][8*]
`,
      output: "520",
    },
    expected: "",
  };

  return <PuzzlePage challenge={challenge} />;
}
