In React Router Dom v6, attempting to access the 
`useParams()` hook outside of a component using the `<Route>` element will result in an error.  This is because `useParams` is designed to work within the route component's lifecycle.  For example, this will throw an error:

```javascript
import { useParams } from 'react-router-dom';

const myVar = useParams(); // Error!  useParams() must be within a Route component

function MyComponent() {
  return (
    <div>{myVar.id}</div> //Error! myVar is undefined
  );
}
```
