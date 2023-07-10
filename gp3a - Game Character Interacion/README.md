### The Game Project 3 – Game Character interaction

Now to add some proper interaction to your game.

1. Inspect the code [0 marks]

2. Create variables for interaction [1 marks]
	- Declare four variables: `isLeft`, `isRight`, `isFalling` and `isPlummeting`
	- Initialise each of them to `false`. These variables will be used to animate your game
	 character.

3. Implement left and right for keyPressed [1 marks]
	- Inside the function keyPressed write two if statements to make isLeft = true when the 'a' key is pressed and isRight = true when the 'd' key is pressed.
	- Test your conditional statements  using `console.log()` to see the values of isLeft and isRight
		- HINT: look up the difference between keyCode and key to help you decide which variable you need to use.

4. Implement left and right for keyReleased [1 marks]
	- Inside the function keyReleased write two if statements to make isLeft = false when the 'a' key is released and isRight = false when the 'd' key is released, 
	- Test your conditional statements using console.log() to see the values of isLeft and isRight

5. Add game character [1 marks]
	- Add your game character code from part 2 to this sketch.
	- You need to place each block of character code within the appropriate `if` statement so that when the character is animated the correct image will be drawn.

6. Make the game character move left and right [2 marks]
	- In the draw function add two if statements to make the character move left when isLeft is true and move right when isRight is true
	- Test that your character moves left, right, and stops correctly when the a and s keys are pressed and released.
        - HINT: you need to use the isLeft, isRight, and gameChar_x variables.

7. Make the game character jump [2 marks]
	- Add another if statement within keyPressed that checks when the 'w' key is pressed.
	- When 'w' is pressed subtract 100 from gameChar_y . This will make the character jump up in the air (don't worry about it falling just yet)

8. Add gravity [2 marks]
    - Now it's time to make our game character fall down to the ground again
    - Add an if statement within the draw function to detect when the character is  jumping above the ground. 
        - HINT: gameChar_y is less than floorPos_y when this is happening.
    - As the action of the if statement you should make the character fall towards the ground. 
    - Do this by incrementing gameChar_y
    - At the same time set isFalling to true so that the falling image of the character appears
    - Finally add an else action to your conditional statement which sets isFalling to false. This will stop the falling image from appearing when your character is touching the ground again

9. Prevent double jumps [1 marks]
    - Now adjust the code inside keyPressed tp prevent the character from jumping when it already in the air.
        - HINT: isFalling is useful here 

Help it's not working !
    - Okay this is not a time to hack your way out of the problem. 
    - Instead go back through the instructions one stage at a time and check that you've done exactly what each stage tells you to.
    - Try commenting out the code from the later stages and testing the earlier stages to make sure that they run correctly.
