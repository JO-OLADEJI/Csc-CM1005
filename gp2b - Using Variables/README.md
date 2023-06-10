### The Game Project 2b - Using variables

It's time to introduce some variables to your code. You won't notice
much difference in your graphics just yet, but this powerful technique will
be essential for later stages in the game project.

1. Inspect the code [0 marks]

2. Moveable game character [2 marks]
	- Copy the code for the front-facing character from part 2a a into
	the draw function of this code
	- In `mousePressed`, write code using `mouseX` and `mouseY` to change the value of gameChar_x & gameChar_y so that the character appears where you click the mouse

3. Place the tree [2 marks]
	- Copy the code for the tree from part 1 into the draw function of this code.
	- Now adapt your code so that treePos_x and treePos_y control the position of the tree.
		HINT 1: You will need to use treePos_x and treePos_y to control position in each of your shape commands for the tree.
		HINT 2: You can test this by changing the values of treePos_x and treePos_y and seeing if the whole tree moves intact.
	- In `setup` initialise treePos_x and treePos_y so that the tree sits on the green ground
	- Check that the game character appears in front of the tree. The game character must be drawn after the tree is drawn.
	- Make sure your tree is anchored correctly

4. Canyon [2 marks]
	- In `setup`, initialise the variable `canyon` with this object `{x_pos: 0, width: 100}`
	- Copy the code for the canyon from part 1 into the draw function of this code
	- Modify the code so that the property `x_pos` controls where the canyon is on the x-axis
	- Modify the code so that the property `width` controls how wide the canyon is
	- Adjust `x_pos` to place the canyon where you want it. Check that it moves intact when you adjust `x_pos`
	- Make sure your collectable item is anchored correctly about its top left hand corner
	

5. Collectable item [2 marks]
	- In `setup`, initialise the variable `collectable` with this object `{x_pos: 100, y_pos: 100, size: 50}`
	- Copy the code for the collectable item in part 1 into the draw function.
	- As in stage 4 for adapt the code to use `x_pos`, `y_pos`, and `size` to control the positions and dimensions of the collectable item
	- Make sure that the collectable item appears infront of everything but the game character.
	- Make sure your collectable item is anchored correctly about its center

6. Mountain & cloud [2 marks]
	- As with stage 4 initialise new objects for `mountain` and `cloud`
	- Copy the code for the mountain and clouds in part 1 into the draw function.
	- Add appropriate properties to each object to control the position and dimensions of the mountain and cloud
	- Adjust the drawing code so that these properties control the positions and dimensions of the mountain and the cloud
	- Make sure that the mountain appears behind the tree
	- Make sure your mountains and clouds are anchored correctly
