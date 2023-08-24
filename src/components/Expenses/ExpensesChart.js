import Chart from "../Chart/Chart";

const ExpensesChart = (props) => {
  const chartDataPoints = [
    { label: "Jan", value: 0 },
    { label: "Feb", value: 0 },
    { label: "Mar", value: 0 },
    { label: "Apr", value: 0 },
    { label: "May", value: 0 },
    { label: "Jun", value: 0 },
    { label: "Jul", value: 0 },
    { label: "Aug", value: 0 },
    { label: "Sep", value: 0 },
    { label: "Oct", value: 0 },
    { label: "Nov", value: 0 },
    { label: "Dec", value: 0 },
  ];

  for (const expense of props.expenses) {
    const expenseMonth = expense.date.getMonth(); // 0 - 11
    chartDataPoints[expenseMonth].value += expense.amount;
    // console.log(expense.date.getMonth());
    // console.log(expense.date.getMonth(), expense.amount);
    // console.log(expense.date.getMonth(), expense.amount, chartDataPoints[expense.date.getMonth()]);
    // console.log(expense.date.getMonth(), expense.amount, chartDataPoints[expense.date.getMonth()].value);
    // console.log(expense.date.getMonth(), expense.amount, chartDataPoints[expense.date.getMonth()].value += expense.amount);
  }
  return <Chart dataPoints={chartDataPoints} />;
};

export default ExpensesChart;
