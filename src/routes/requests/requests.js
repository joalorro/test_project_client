import axios from 'axios';
import { Link } from 'react-router-dom';
import { Button } from '../../components/Button';

const BASE_URL = 'http://localhost:3001';
const EXAMPLES_URL = `${BASE_URL}/examples`;

const handleGet = async () => {
  try {
    const response = await axios({
      url: EXAMPLES_URL,
      method: 'get',
    });
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
};

const handlePost = async () => {
  try {
    const data = [4, 5, 6];
    const response = await axios({
      method: 'post',
      url: EXAMPLES_URL,
      data,
      headers: {
        'Content-Type': 'application/json',
      },
    });
    console.log('RESPONSE:::', response.data);
  } catch (error) {
    console.error(error);
  }
};

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
        <h3>Send GET Request to /examples </h3>
        <Button text="Send" onClick={handleGet} />
      </section>
      <section>
        <h3>Send POST Request to /examples </h3>
        <Button text="Send" onClick={handlePost} />
      </section>
    </div>
  );
};
