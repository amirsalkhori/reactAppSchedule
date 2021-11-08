import { TextField } from '@material-ui/core';
import React, { useState } from 'react';
import DatePicker from 'react-date-picker';

const DatePick = () => {
  const [value, onChange] = useState(new Date());

  return (
    <div style={{ margin: 8 }}>
      <DatePicker
        onChange={onChange}
        value={value}
      />
    </div>
  );
}

export default DatePick;