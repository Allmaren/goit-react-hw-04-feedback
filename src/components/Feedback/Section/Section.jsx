import PropTypes from 'prop-types';
import { Title } from './Section.styled.js';

const Section = ({ children, title }) => {
  return (
    <>
      <Title>{title}</Title>
      {children}
    </>
  );
};

export default Section;

Section.protoType = {
  title: PropTypes.string.isRequired,
  children: PropTypes.array.isRequired,
};
