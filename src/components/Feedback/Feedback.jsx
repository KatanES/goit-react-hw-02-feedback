import { Component } from 'react';
// import { StatisticsList } from './StatisticsList';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div>
      {options.map(option => (
        <button key={option} onClick={() => onLeaveFeedback(option)}>
          {option}
        </button>
      ))}
    </div>
  );
};

// export class Feedback extends Component {
//   state = {
//     good: 0,
//     neutral: 0,
//     bad: 0,
//   };
//   handleClickGood = () => {
//     this.setState(prevState => {
//       return {
//         good: prevState.good + 1,
//       };
//     });
//   };
//   handleClickNeutral = () => {
//     this.setState(prevState => {
//       return {
//         neutral: prevState.neutral + 1,
//       };
//     });
//   };
//   handleClickBad = () => {
//     this.setState(prevState => {
//       return {
//         bad: prevState.bad + 1,
//       };
//     });
//   };

//   countTotalFeedback = () => {
//     const { good, neutral, bad } = this.state;
//     return good + neutral + bad;
//   };

//   countPositiveFeedbackPercentage = () => {
//     const { good } = this.state;
//     const totalFeedback = this.countTotalFeedback();
//     return totalFeedback === 0 ? 0 : Math.round((good / totalFeedback) * 100);
//   };

//   render() {
//     const totalFeedback = this.countTotalFeedback();
//     const positiveFeedbackPercentage = this.countPositiveFeedbackPercentage();

//     return (
//       <div>
//         <h1>Please leave feedback</h1>
//         <button onClick={this.handleClickGood}>Good</button>
//         <button onClick={this.handleClickNeutral}>Neutral</button>
//         <button onClick={this.handleClickBad}>Bad</button>
//         <StatisticsList
//           goodClicks={this.state.good}
//           neutralClicks={this.state.neutral}
//           badClicks={this.state.bad}
//           totalFeedback={totalFeedback}
//           positiveFeedbackPercentage={positiveFeedbackPercentage}
//         />
//       </div>
//     );
//   }
// }
