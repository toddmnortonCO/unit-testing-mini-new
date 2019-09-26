<img src="https://s3.amazonaws.com/devmountain/readme-logo.png" width="250" align="right">

# Project Summary

In this project, we'll learn how to unit test JavaScript files and React components using Jest. Jest is a unit testing framework that was developed by Facebook. create-react-app automatically adds jest to any project so you won't need to manually add it, but in any other project that you are spinning up from scratch you will want to install it.

<a href="https://jestjs.io/docs/en/getting-started.html">Jest download</a>

## Step 1

### Summary

In this step we will install React Testing Library which is a utility library that helps us to test our React components.

### Instructions

- Run `npm install --save-dev @testing-library/react`

## Step 2

### Summary

In this step, we will create the folder and files to hold our test.

### Instructions

- In the src folder create a folder called `__tests__`
  - Jest will automatically run all files in this folder
- Inside the newly created folder create two files; `Counter.test.js` and `functions.test.js`

## Step 3

### Summary

Now we will write our first unit tests! Let's start with our utility functions.

### Instructions

- In `functions.test.js`, import the `add` function
  - This function can be found in the `../utils/functions` file
- Create a test that checks whether `add` correctly adds 2 integers together
- Create a test that checks whether `add` will add a string and number together
- Lastly, create a test to check if `add` returns NaN if non numbers are passed
- Once complete, run `npm run test` to check if your unit tests work
  - Note, it will show that 1 has failed and 3 have passed. This is because our Counter file does not have any tests in it yet. We will fix this shortly

<details>

<summary> <code> functions.test.js </code> </summary>

```js
import { add } from '../utils/functions';

it('add returns the sum of two numbers', () => {
  expect(add(1, 2)).toBe(3);
});

it('add handles string inputs that are numbers', () => {
  expect(add('3', '4')).toBe(7);
});

it(`add returns NaN if non numbers are passed`, () => {
  expect(add('hello', 'world')).toBeNaN();
});
```

</details>

## Step 4

### Summary

Next, we will be testing our React components. There are many ways to test React components, but this will focus exclusively on testing with the Jest framework only.

### Instructions

- Open `Counter.test.js` in the `__tests__` folder
- Import `React`, `render`, `fireEvent` and `Counter`
  - `React` comes from the `react` package
  - `render` and `fireEvent` come from the `@testing-library/react` package
  - `Counter` is in the components folder
- Create a test for `Counter` that checks the starting text of the p tag
  - This counter will initialize at 0. Check the component for the jsx markup
- Create a second test for `Counter` that checks whether clicking the button actually increments the count
  - There will be two assertions in here. One that checks the text content before clicking and the second for after
  - Use the fireEvent method to simulate a button click
  - get the button using the returned method from `render`; `getByTestId` to retrieve the button and store to a variable

<details>

<summary> <code> Counter.test.js </code> </summary>

```js
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Counter from '../components/Counter';

it('Renders out starting text', () => {
  const { container } = render(<Counter />);
  expect(container.textContent).toContain(`You've clicked 0 times!`);
});

it('Clicking increments state count', () => {
  const { getByTestId, container } = render(<Counter />);
  const button = getByTestId('counter-button');
  expect(container.textContent).toContain(`You've clicked 0 times!`);
  fireEvent.click(button);
  expect(container.textContent).toContain(`You've clicked 1 times!`);
});
```

</details>

## Contributions

If you see a problem or a typo, please fork, make the necessary changes, and create a pull request so we can review your changes and merge them into the master repo and branch.

## Copyright

© DevMountain LLC, 2017. Unauthorized use and/or duplication of this material without express and written permission from DevMountain, LLC is strictly prohibited. Excerpts and links may be used, provided that full and clear credit is given to DevMountain with appropriate and specific direction to the original content.

<p align="center">
<img src="https://s3.amazonaws.com/devmountain/readme-logo.png" width="250">
</p>
