import { useState } from 'react';
import './styles.css'
function useToggle(initialValue = false) {
  const [value, setValue] = useState(initialValue);
  const onToggle = () => setValue(prev => !prev);
  return [value, onToggle];
}

export default function App() {
  const [isOn, toggle] = useToggle(false);

  return (
    <button data-testid="toggle-button" onClick={toggle}>
    {isOn?"ON":"OFF"}
    </button>
  );
}
