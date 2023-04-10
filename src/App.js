import Expenses from "./components/Expense/Expenses";
import NewExpense from "./components/AddNewExpense/NewExpense";

const App = () => {
  const expenses = [
    {
      id: 'a1',
      title: 'Internet',
      amount: 94.12,
      date: new Date(2023, 0, 14),
    },
    {
      id: 'a2',
      title: 'New TV',
      amount: 1799.49,
      date: new Date(2023, 0, 12)
    },
    {
      id: 'a3',
      title: 'Car Payment',
      amount: 294.67,
      date: new Date(2023, 1, 28),
    },
    {
      id: 'a4',
      title: 'New Desk',
      amount: 476.36,
      date: new Date(2023, 2, 12),
    },
  ];

  return (
    <div>
      <NewExpense />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;