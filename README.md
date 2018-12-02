# Battleship
Stretch Project for Lighthouse Labs

## Goal
This project will consist of building a battleship game.

Again, there are intentionally no visuals and no assets provided with this project, and many aspects of the UI are left intentionally vague. We are leaving you freedom to get creative with the UI. We encourage you to make the game look presentable and even add extra flair with things like CSS transitions and animations.

## Battleship Rules
Each player has a 10x10 board on which the player is able to place 5 ships:
* A **Carrier**, which is **5** tiles long
* A **Battleship**, which is **4** tiles long
* A **Cruiser**, which is **3** tiles long
* A **Submarine**, which is **3** tiles long
* A **Destroyer**, which is **2** tiles long

Each ship can be placed either horizontally, or vertically on the board, and cannot be placed partially off the board.

Each tile is denoted by a coordinate, **A-J** for columns and **1-10** for rows
* I.e. the top-left corner would be at coordinate **A1**

Each player then takes turns picking a tile on the opposing player's grid, taking a shot at that tile.
* If the tile contain a ship, the shot is a **HIT**
* If the tile does not contain a ship, the shot is a **MISS**

A ship is sunk if all the tiles for that ship have been marked as a **HIT**

The game ends when one player has sunk all of the opposing player's ships.
