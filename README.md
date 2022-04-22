# CodePath_Prework
CodePath Prework for FutureForce Pre-internship application

# Pre-work - *Memory Game*

**Memory Game** is a Light & Sound Memory game to apply for CodePath's SITE Program. 

Submitted by: **Matthew Kim**

Time spent: **30** hours spent in total

Link to project: https://glitch.com/edit/#!/scented-capable-iron

Live site: https://scented-capable-iron.glitch.me

## Required Functionality

The following **required** functionality is complete:

* [x] Game interface has a heading (h1 tag), a line of body text (p tag), and four buttons that match the demo app
* [x] "Start" button toggles between "Start" and "Stop" when clicked. 
* [x] Game buttons each light up and play a sound when clicked. 
* [x] Computer plays back sequence of clues including sound and visual cue for each button
* [x] Play progresses to the next turn (the user gets the next step in the pattern) after a correct guess. 
* [x] User wins the game after guessing a complete pattern
* [x] User loses the game after an incorrect guess

The following **optional** features are implemented:

* [x] Any HTML page elements (including game buttons) has been styled differently than in the tutorial
* [x] Buttons use a pitch (frequency) other than the ones in the tutorial
* [x] More than 4 functional game buttons
* [x] Playback speeds up on each turn
* [ ] Computer picks a different pattern each time the game is played
* [x] Player only loses after 3 mistakes (instead of on the first mistake)
* [ ] Game button appearance change goes beyond color (e.g. add an image)
* [ ] Game button sound is more complex than a single tone (e.g. an audio file, a chord, a sequence of multiple tones)
* [x] User has a limited amount of time to enter their guess on each turn

The following **additional** features are implemented:

- [x] Added the Pattern/Song that can be tested
- [x] Added difficulty to adjust game speed change
- [x] Added images labels for non-flat/sharp keys 

## Video Walkthrough (GIF)

If you recorded multiple GIFs for all the implemented features, you can add them here:
![x]![Piano_game3](https://user-images.githubusercontent.com/81335503/164590643-e98861a9-2bc1-4320-8549-b8649fbbe07e.gif)


## Reflection Questions
1. If you used any outside resources to help complete your submission (websites, books, people, etc) list them here. 
-   DevDocs
-   W3schools
-   Youtube coding instructors

2. What was a challenge you encountered in creating this submission (be specific)? How did you overcome it? (recommended 200 - 400 words) 
The biggest challenge I encountered with this assignment was aligning the different elements. My goal was to organize the buttons and boxes to resemble a piano, so that it feels like the user is actually learning musically from an instrument. However, I kept running into walls when I couldn’t align the buttons to a certain direction or unknown margins and paddings were getting in the way. For example, I was attempting to align the text and the piano itself to the middle, but the properties that I was using such as align did not budge. So I looked into several resources including DevDocs, MDN Web Docs, and also some Youtube coding instructors. I found that the flexbox layout is the most versatile method for adjusting the content and accommodating for a device, so I applied it to the body and the div holding the keys (gameButtonArea). For the body, I used the flex-direction property to align the items vertically, then used the align-items property to shift everything down the center. For the gameButtonArea, the keys began to shift when I pasted the images of the notes (C, D, A) on them. I had to use the flex property, and used fit-content to arrange everything evenly.

3. What questions about web development do you have after completing your submission? (recommended 100 - 300 words) 
I would love to understand more about animations and effects for web development. I’ve always been fascinated by the way certain mobile apps and websites functioned and interacted with the users. For example, everytime I view a product on the Apple website, I am blown away by how the iPhones and Macbooks are displayed as I scroll through the page. I realized that most often, the animation was what made the experience unique and separated the work from others. I would like to first solidify my general understanding of web development through HTML, CSS, JS, and React, and challenge myself deeper into website animation that can further appeal to its users.

4. If you had a few more hours to work on this project, what would you spend them doing (for example: refactoring certain functions, adding additional features, etc). Be specific. (recommended 100 - 300 words) 
If I was given more time, I would take the opportunity to make my project more musically in-depth and exciting. I would give the user the option to play different instruments by directing them to different pages through the click of a button. I would also include options to play chords by selecting a button that would allow the user to play several notes at the same time. I would also take more time to improve my functions’ readability by cleaning them up and documenting them. Due to focusing on learning a new and foreign language, I was unable to pay too much attention to how the code would read to a fellow coder.



## Interview Recording URL Link
[My 5-minute Interview Recording](your-link-here)
1) I would love to give opportunities to children in third world countries to break out of poverty through music. I was reading a book about musical geniuses a year ago, and it mentioned the story about Jose Antonio Abreu, who wanted to help underprivileged students achieve their full potential and acquire values for growth. It now teaches music to 300,000 of Venezuela’s poorest children while transforming their lives and the communities around them, which used to be plagued by crime and violence. Since instruments are very expensive, I would love to build software that gives people the opportunity to learn and play without having to pay for the instruments' costs.


## License

    Copyright [YOUR NAME]

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
