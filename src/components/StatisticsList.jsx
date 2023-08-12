export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <div>
      <p>Good: {good} &#x1F601; </p>
      <p>Neutral: {neutral} &#x1F916;</p>
      <p>Bad: {bad} &#x1F632; </p>
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
