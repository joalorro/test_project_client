import './Root.css';
import { Button } from '../../components/Button';

export function Root() {
  return (
    <div className="Root-App">
      <header className="Root-App-header">
        Welcome to Hello World World
        <Button text="Send Requests"/>
      </header>
    </div>
  );
}
