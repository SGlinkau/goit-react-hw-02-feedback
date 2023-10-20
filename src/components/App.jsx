import React, { Component } from 'react';
import Section from './FeedbackComponents/section.jsx';
import Options from './FeedbackComponents/options.jsx';
import Statistics from './FeedbackComponents/statistics.jsx';
import Notification from './FeedbackComponents/notification.jsx';
import CSS from './app.module.css';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  increment = key => {
    this.setState(state => ({ [key]: state[key] + 1 }));
  };

  incrementHandler = e => {
    this.increment(e.target.innerHTML);
  };

  totalFeedback = state => {
    return Object.values(state).reduce((prev, el) => prev + el, 0);
  };

  positiveFeedbackPercentage = (good, total) => {
    const positivePercentage = Math.round((good / total) * 100);
    return isNaN(positivePercentage) ? 0 : positivePercentage;
  };

  render() {
    const btn = Object.keys(this.state);
    const { good, neutral, bad } = this.state;
    const total = this.totalFeedback(this.state);
    const positive = this.positiveFeedbackPercentage(good, total);
    console.log(positive);
    return (
      <div className={CSS.App}>
        <Section title="Please leave feedback of this App:">
          <Options buttons={btn} click={this.incrementHandler} />
        </Section>

        <Section title="Statistics">
          {total !== 0 ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              positive={positive}
            />
          ) : (
            <Notification message="There is no feedback! :(" />
          )}
        </Section>
      </div>
    );
  }
}

export default App;
