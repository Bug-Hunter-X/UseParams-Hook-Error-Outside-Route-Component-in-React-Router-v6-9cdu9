The correct way to use `useParams` is within a component that is rendered as a child of a `<Route>` element.  For example:

```javascript
import { useParams } from 'react-router-dom';

function MyComponent() {
  const params = useParams();
  return (
    <div>
      <h1>Product Details</h1>
      <p>ID: {params.id}</p> {/* params.id will be defined here */}
    </div>
  );
}

export default function App() {
  return (
    <Routes>
      <Route path="/products/:id" element={<MyComponent />}>
      </Route>
    </Routes>
  );
}
```

In this corrected example, `MyComponent` receives the `params` object correctly because it's within a route with the dynamic segment `:id`.  The `params` object will only be available *inside* this `<Route>` component.
