Robot Vacuum

Description:

The application is a simulation of a robot vacuum moving in an area of dimensions 5 units by 5 units.
There are no other obstructions in the area.
The robot is free to roam around the area but must be prevented from leaving the area.
Any movement that would result in the robot leaving the area must be prevented, however further valid movement commands must still be allowed.

Create a command line application that can read in commands of the following syntax:

PLACE X,Y,F
MOVE
LEFT
RIGHT
REPORT

PLACE will put the robot in the area at position X,Y and facing direction F (NORTH, SOUTH, EAST, or WEST).
The origin (0,0) can be considered to be the SOUTH WEST corner.
The first valid command to the robot is a PLACE command, after that, any sequence of commands may be issued, in any order, including another PLACE command. The application should discard all commands in the sequence until a valid PLACE command has been executed.
MOVE will move the robot one unit forward in the direction it is currently facing.
LEFT and RIGHT will rotate the robot 90 degrees in the specified direction without changing the position of the robot.
REPORT will announce the X,Y and F of the robot. This can be in any form, but standard output is sufficient.

A robot that is not already placed in the area should ignore the MOVE, LEFT, RIGHT and REPORT commands.
Input can be from a file, or from standard input, as the developer chooses.

Provide the ability to test the application.
Include instructions on how to run the application.
Either send a link to the source code on GitHub or instead email it in a Zip file.


Constraints:

The robot must not leave the area during movement. This includes the initial placement of the robot.  Any command that would cause the robot to leave the area must be ignored.

Example Input and Output:
a)
PLACE 0,0,NORTH
MOVE
REPORT
Output: 0,1,NORTH

b)
PLACE 0,0,NORTH
LEFT
REPORT
Output: 0,0,WEST

c)
PLACE 1,2,EAST
MOVE
MOVE
LEFT
MOVE
REPORT
Output: 3,3,NORTH


### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

