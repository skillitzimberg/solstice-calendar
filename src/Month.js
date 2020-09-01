import React from 'react';
import Week from './Week';
import Day from './Day';

const days = [
  <Day name="Sunday" />,
  <Day name="Monday" />,
  <Day name="Tuesday" />,
  <Day name="Wednesday" />,
  <Day name="Thursday" />,
  <Day name="Friday" />,
  <Day name="Saturday" />,
];

const Month = props => {
  return (
    <section>
      <h1>{props.month}</h1>
      <Week />
      {days}
    </section>
  );
};

export default Month;
