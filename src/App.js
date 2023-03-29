import Expenses from "./components/Expenses";

function App() {
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
      title: 'Car Insurance',
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
      <h1>Let's Make A Budget 🪙</h1>
      <Expenses items={expenses} />
    </div>
  );
}

export default App;