import axios from 'axios';
import { Header } from '../../components/Header/header';
import { Button } from '../../components/Button';

import './requests.css';
import { useState } from 'react';
import { TextField } from '@mui/material';

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

export const Requests = () => {
  const [postRequestField, setPostRequestField] = useState('');
  const [postResponse, setPostResponse] = useState('');

  const textFieldChange =
    (handleChangeFn = () => {}) =>
    (e) => {
      handleChangeFn(e.target.value);
    };

  const handlePost =
    (data, setTextField = () => {}, setResponseData = () => {}) =>
    async () => {
      try {
        const response = await axios({
          method: 'post',
          url: EXAMPLES_URL,
          data,
          headers: {
            'Content-Type': 'application/json',
          },
        });
        setResponseData(response.data);
      } catch (error) {
        console.log('ERR');
        // console.error(error);
        setTextField('');
        setResponseData(error.message);
      }
    };

  return (
    <>
      <Header mountHeader={true} />
      <div className="requests-page">
        <section className="requests-page__section">
          <h1>Welcome to the requests page</h1>
        </section>
        <section>
          <h3>Send GET Request to /examples </h3>
          <Button text="Send" onClick={handleGet} />
        </section>
        <div className="requests-page__section">
          <h3>Send POST Request to /examples </h3>
          <TextField
            variant="standard"
            onChange={textFieldChange(setPostRequestField)}
            label="Input"
            value={postRequestField}
          />
          <Button
            text="Send"
            onClick={handlePost(
              postRequestField,
              setPostRequestField,
              setPostResponse,
            )}
          />
          <TextField
            variant="outlined"
            disabled={true}
            value={postResponse}
            label="API Response:"
            multiline={true}
          />
        </div>
      </div>
    </>
  );
};
