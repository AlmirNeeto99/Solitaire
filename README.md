# Solitaire

VueJS is used by my current job so this project's goal is to improve my skills.

- [ ] Game
  - [ ] New Game
  - [ ] Save Game
  - [ ] Load Game
- [ ] Cards
  - [x] Card component
  - [ ] "Create" 52 cards
  - [ ] Shuffle
  - [ ] Dealing cards
  - [ ] Draggable face-up cards
  - [ ] Block face-down cards
  - [ ] Create the logic to put lower cards above higher ones
- [ ] Foundations
  - [x] Draw the cards' container
  - [ ] Handle dropped cards into container
  - [ ] Cards in the foundation should be same suit and ordered from ace to king, where ace is the base and king is the top
- [ ] Tableu
  - [x] Seven piles
  - [ ] Tableu dealing algorithm
  - [ ] If one tableu pile is empty, it can only be filled with a king
  - [ ] Lower cards can be put on top of higher ones (different suits)
  - [ ] Move a card from a faced down card, make it face up
- [ ] Stock
  - [x] Stock container
  - [ ] Remaining cards not dealt to tableu
- [x] Talon
  - [x] Since this game will have exactly 52 cards, there will be no waste

---

## Tableu dealing algorithm

One card face up on first pile, one card face down on each next piles. One card face up on second pile, one card face down on each next piles, Repeat. The last pile should have 6 card facing down and one facing up.
