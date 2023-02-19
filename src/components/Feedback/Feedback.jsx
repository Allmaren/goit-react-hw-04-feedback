import { useState } from 'react';
import Statistic from './Statistic/Statistic';
import Section from './Section/Section';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Notification from './Notification/Notification';

import { Card } from './Section/Section.styled.js';

export const Feedback = () => {
  const [votes, setVotes] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const leaveVote = name => {
    setVotes(prevState => {
      const value = prevState[name];
      return { ...prevState, [name]: value + 1 };
    });
  };

  const total = votes.good + votes.neutral + votes.bad;

  const countPositiveFeedbackPercentage = propName => {
    if (!total) {
      return 0;
    }
    const value = votes[propName];
    const result = ((value / total) * 100).toFixed(0);
    return Number(result);
  };

  const { good, neutral, bad } = votes;
  const PositiveFeedbackPercentage = countPositiveFeedbackPercentage('good');

  return (
    <Card>
      <Section title="Please leave feedback">
        <FeedbackOptions leaveVote={leaveVote} options={Object.keys(votes)} />
      </Section>
      <Section title="Statistics" />
      {total ? (
        <Statistic
          good={good}
          neutral={neutral}
          bad={bad}
          total={total}
          positivePercentage={PositiveFeedbackPercentage}
        />
      ) : (
        <Notification tittle={'There is no feedback'} />
      )}
    </Card>
  );
};

/*
export class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  leaveVote = name => {
    this.setState(prevState => {
      return {
        [name]: prevState[name] + 1,
      };
    });
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage(propName) {
    const total = this.countTotalFeedback();
    if (!total) {
      return 0;
    }
    const value = this.state[propName];
    const result = ((value / total) * 100).toFixed(0);
    return Number(result);
  }

  render() {
    const { good, neutral, bad } = this.state;
    const countPositiveFeedbackPercentage =
      this.countPositiveFeedbackPercentage('good');
    const totalFeedback = this.countTotalFeedback();

    return (
      <Card>
        <Section title="Please leave feedback">
          <FeedbackOptions
            leaveVote={this.leaveVote}
            options={Object.keys(this.state)}
          />
        </Section>
        <Section title="Statistics" />
        {totalFeedback ? (
          <Statistic
            good={good}
            neutral={neutral}
            bad={bad}
            total={totalFeedback}
            positivePercentage={countPositiveFeedbackPercentage}
          />
        ) : (
          <Notification tittle={'There is no feedback'} />
        )}
      </Card>
    );
  }
}
*/
