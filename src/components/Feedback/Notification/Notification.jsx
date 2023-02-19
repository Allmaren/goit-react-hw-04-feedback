import PropTypes from 'prop-types';
import styled from './notification.module.scss';
import { CgSmileSad } from 'react-icons/cg';

const Notification = ({ tittle }) => {
  return (
    <h4 className={styled.message}>
      {tittle} <CgSmileSad />
    </h4>
  );
};

export default Notification;

Notification.propTypes = {
  tittle: PropTypes.string.isRequired,
};
