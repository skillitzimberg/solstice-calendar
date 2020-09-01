import React from 'react';
import Month from './Month';

function App() {
  const now = new Date();

  console.log(now);
  return (
    <main className="App">
      <Month month="January" />
    </main>
  );
}

export default App;
