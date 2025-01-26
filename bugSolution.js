```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Correct dependency array. 
    // The empty array ensures the effect runs only once after mount.
  }, []);

  return <div>Count: {count}</div>;
}
```