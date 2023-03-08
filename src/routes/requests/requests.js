import { Link } from 'react-router-dom';
import { Button } from '../../components/Button';

const handleClick = () => console.log('BEEF');

export const Requests = () => {
  return (
    <div>
      <Link to="/">
        <Button text="Back to homepage" />
      </Link>
      <section>
        <h1>Welcome to the requests page</h1>
      </section>
      <section>
        <h3>Send GET Request to api/example </h3>
        <Button text="Send" onClick={handleClick} />
      </section>
    </div>
  );
};
