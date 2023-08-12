export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <div>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <p>Total Feedback: {total}</p>
      <p>Positive Feedback Percentage: {positivePercentage}%</p>
    </div>
  );
};

// export const StatisticsList = ({
//   goodClicks,
//   neutralClicks,
//   badClicks,
//   totalFeedback,
//   positiveFeedbackPercentage,
// }) => {
//   return (
//     <div>
//       <h2>Statistics</h2>
//       <ul>
//         <li>Good: {goodClicks}</li>
//         <li>Neutral: {neutralClicks}</li>
//         <li>Bad: {badClicks}</li>
//         <li>Total Feedback: {totalFeedback}</li>
//         <li>Positive Feedback Percentage: {positiveFeedbackPercentage}%</li>
//       </ul>
//     </div>
//   );
// };
