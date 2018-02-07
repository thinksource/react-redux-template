import React from 'react';
import PropTypes from 'prop-types';
import "./index.js";
import 'bootstrap/dist/css/bootstrap.css';
import { Button } from 'reactstrap';

const Content = ({ message }) => (
  <div className="ttt">
    <p>
      Hello from {message} !!
    </p>
    <p className='text-warning'>
      Etiam porta sem malesuada magna mollis euismod.
    </p>
    <Button color="danger">Danger!</Button>
  </div>
);

Content.propTypes = {
  message: PropTypes.string.isRequired,
};

export default Content;
