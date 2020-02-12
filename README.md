# Tennis Game
This program stimulates a tennis game with below rules

* The running score of each game is described in a manner peculiar to tennis: scores from zero to three points are described as “love”, “fifteen”, “thirty”, and “forty” respectively.

* If at least three points have been scored by each player, and the scores are equal, the score is “deuce”.

* If at least three points have been scored by each side and a player has one more point than his opponent, the score of the game is “advantage” for the player in the lead.

* A game is won by the first player to have won at least four points in total and at least two points more than the opponent.


## Getting started

To get the application running locally:

-   Clone this repo and open in your favourite IDE

If you are using Yarn package manager follow the below commands in your terminal

### `yarn install`  

    Installs all required dependencies to the project

### `yarn start`

    Runs the app in the development mode.
    Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

    The page will reload if you make edits.
    You will also see any lint errors in the console.

### `yarn test`

    Runs the test runner and generates coverage report to the 'coverage' folder.
    Open the 'index.html' file in location '/coverage/lcov-report/' for generated coverage report.
    
### `stryker run`

    Runs the mutation test runner and generates test report to the 'reports' folder.
    Open the 'index.html' file in location '/reports/mutation/html/' for generated mutation test report.

### `yarn build`

    Builds the app for production to the `build` folder.
    It correctly bundles React in production mode and optimizes the build for the best performance.

    The build is minified and the filenames include the hashes.
    Your app is ready to be deployed!

If you are using npm package manager follow the below commands in your terminal

### `npm install`  

    Installs all required dependencies to the project

### `npm start`

    Runs the app in the development mode.
    Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

    The page will reload if you make edits.
    You will also see any lint errors in the console.

### `npm test`

    Runs the test runner and generates coverage report to the 'coverage' folder.
    Open the 'index.html' file in location '/coverage/lcov-report/' for generated coverage report.
    
### `stryker run`

    Runs the mutation test runner and generates test report to the 'reports' folder.
    Open the 'index.html' file in location '/reports/mutation/html/' for generated mutation test report.

### `npm build`

    Builds the app for production to the `build` folder.
    It correctly bundles React in production mode and optimizes the build for the best performance.

    The build is minified and the filenames include the hashes.
    Your app is ready to be deployed!

## Reports

### Test Coverage Report

    PASS  src/test/App.test.js
    PASS  src/test/Player.test.js
    PASS  src/test/Scorer.test.js
    PASS  src/test/TennisGame.test.js

|File            |  % Stmts | % Branch |  % Funcs |  % Lines | Uncovered Line #s |
|----------------|----------|----------|----------|----------|-------------------|
|All files       |      100 |      100 |      100 |      100 |                   |
| src            |      100 |      100 |      100 |      100 |                   |
|  App.js        |      100 |      100 |      100 |      100 |                   |
| src/component  |      100 |      100 |      100 |      100 |                   |
|  Player.js     |      100 |      100 |      100 |      100 |                   |
|  Scorer.js     |      100 |      100 |      100 |      100 |                   |
|  TennisGame.js |      100 |      100 |      100 |      100 |                   |
| src/constants  |      100 |      100 |      100 |      100 |                   |
|  Constants.js  |      100 |      100 |      100 |      100 |                   |


    Test Suites: 4 passed, 4 total
    Tests:       30 passed, 30 total
    Snapshots:   4 passed, 4 total
    Time:        4.781s, estimated 7s
    Ran all test suites.
    Done in 5.85s.

### Mutation Test Report

    01:10:28 (1532) INFO ConfigReader Using stryker.conf.js in the current working directory.
    01:10:30 (1532) INFO InputFileResolver Found 5 of 25 file(s) to be mutated.
    01:10:30 (1532) INFO InitialTestExecutor Starting initial test run. This may take a while.
    01:10:41 (1532) INFO InitialTestExecutor Initial test run succeeded. Ran 30 tests in 11 seconds (net 382 ms, overhead 10049 ms).
    01:10:41 (1532) INFO MutatorFacade 119 Mutant(s) generated
    01:10:41 (1532) INFO SandboxPool Creating 8 test runners (based on CPU count)
    Mutation testing  [==================] 100% (elapsed: ~1m, remaining: n/a) 119/119 tested (3 survived, 0 timed out)

    7. [Survived] ObjectLiteral
    D:\kata\tennis\src\component\Player.js:22:19
    -   Player.propTypes = {
    -       name: PropTypes.string.isRequired,
    -       onUpdateScore: PropTypes.func.isRequired,
    -       isGameOver: PropTypes.bool.isRequired
    -   }
    +   Player.propTypes = {}
    Ran all tests for this mutant.
    
    57. [Survived] EqualityOperator
    D:\kata\tennis\src\component\Scorer.js:54:15
    -           return this.props.player1Score > this.props.player2Score ? Constants.PLAYER1_NAME : Constants.PLAYER2_NAME;
    +           return this.props.player1Score >= this.props.player2Score ? Constants.PLAYER1_NAME : Constants.PLAYER2_NAME;
    Ran all tests for this mutant.
    
    83. [Survived] ObjectLiteral
    D:\kata\tennis\src\component\Scorer.js:84:19
    -   Scorer.propTypes = {
    -       player1Score: PropTypes.number.isRequired,
    -       player2Score: PropTypes.number.isRequired,
    -       onGameOver: PropTypes.func.isRequired
    -   }
    +   Scorer.propTypes = {}
    Ran all tests for this mutant.
    
Ran 25.96 tests per mutant on average.

|File            | % score | # killed | # timeout | # survived | # no cov | # error |
|----------------|---------|----------|-----------|------------|----------|---------|
|All files       |   97.48 |      116 |         0 |          3 |        0 |       0 |
| component      |   97.00 |       96 |         0 |          3 |        0 |       0 |
|  Player.js     |   85.71 |        6 |         0 |          1 |        0 |       0 |
|  Scorer.js     |   97.26 |       71 |         0 |          2 |        0 |       0 |
|  TennisGame.js |  100.00 |       20 |         0 |          0 |        0 |       0 |
| constants      |  100.00 |       18 |         0 |          0 |        0 |       0 |
|  Constants.js  |  100.00 |       18 |         0 |          0 |        0 |       0 |
| App.js         |  100.00 |        1 |         0 |          0 |        0 |       0 |


    01:12:25 (1532) INFO HtmlReporter Your report can be found at: `./reports/mutation/html/index.html`
    01:12:25 (1532) INFO Stryker Done in 1 minute 54 seconds.
    
 The Survived three mutations [7, 57, 83] can be ignored ,
 - As ObjectLiteral on PropsTypes is not valid [7,83]
 - As EqualityOperator on the Condition never can be recreated [57]
 
