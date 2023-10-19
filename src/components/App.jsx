import React, { Component } from 'react';
import Section from './FeedbackComponents/section.jsx';
import Options from './FeedbackComponents/options.jsx';

export class App extends Component {
  state = {
    Good: 0,
    Neutral: 0,
    Bad: 0,
  };

  render() {
    const btn = Object.keys(this.state);
    return (
      <>
        <Section title="Please leave feedback of this App:">
          <Options buttons={btn} />
        </Section>
      </>
    );
  }
}

export default App;
