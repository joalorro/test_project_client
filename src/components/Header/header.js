import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Button } from '../Button';

import './header.css';

export const Header = (props) => {
  const header = (
    <header className="header">
      <Link to="/">
        <Button text="Back to homepage" />
      </Link>
    </header>
  );
  return props.mountHeader ? header : <></>;
};

Header.propTypes = {
  mountHeader: PropTypes.bool.isRequired,
};
