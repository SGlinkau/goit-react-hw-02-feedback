import React, { Component } from 'react';
import { Section } from './feedbackApp/section.jsx';
import { FeedbackOptions } from './feedbackApp/options/options.jsx';

export class App extends Component {
  state = {
    Good: 0,
    Neutral: 0,
    Bad: 0,
  };

  feedbackIncrement = key => {
    this.setState(state => ({ [key]: state[key] + 1 }));
  };

  feedbackIncrementHandler = e => {
    this.feedbackIncrement(e.target.innerHTML);
  };

  render() {
    const { good, neutral, bad } = this.state;
    const btn = Object.keys(this.state);

    return (
      <Section title="Please leave feedback of this App:">
        <FeedbackOptions
          options={btn}
          onLeaveFeedback={this.feedbackIncrementHandler}
        />
      </Section>
    );
  }
}

export default App;
