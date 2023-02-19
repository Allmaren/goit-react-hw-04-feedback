import PropTypes from 'prop-types';
import { Section, BtnVote } from './FeedbackOptions.styled.js';
// import Button from './Button';

export const Vote = ({ options, leaveVote }) => {
  const optionElement = options.map((item, index, style) => (
    <BtnVote key={index} type="button" onClick={() => leaveVote(`${item}`)}>
      {item}
    </BtnVote>
  ));
  return <Section>{optionElement}</Section>;
};

export default Vote;

Vote.propTypes = {
  options: PropTypes.array.isRequired,
  leaveVote: PropTypes.func.isRequired,
};
