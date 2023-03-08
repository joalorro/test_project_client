import './Root.css';
import { Button } from '../../components/Button';
import { Link } from 'react-router-dom';

export function Root() {
  return (
    <div className="Root-App">
      <header className="Root-App-header">
        Welcome to Hello World World
        <Link to="requests">
          <Button text="Send Requests"/>
        </Link>
      </header>
    </div>
  );
}
