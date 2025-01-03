# useParams Hook Error Outside Route Component in React Router v6

This repository demonstrates a common error encountered when using the `useParams` hook in React Router v6.  The `useParams` hook is designed to be used *inside* a component rendered by a `<Route>`, not globally or outside of a route's context.  Attempting to use it outside this context will result in an error.

The `bug.js` file shows the erroneous code. The `bugSolution.js` demonstrates the correct usage of the hook within a Route component.
