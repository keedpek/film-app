import FiltersSelect from 'components/Select';
import React from 'react';
import { setYear } from 'store/Slices/querySlice';

const Year = () => {
  let yearOptions = []
  const currentYear = new Date().getFullYear();
  for (let year = currentYear; year >= 1874; year--) {
    yearOptions.push(year + '')
  }

  return (
    <FiltersSelect 
      options={yearOptions}
      label='Year'
      placeholder='Select release year'
      storeParam='primary_release_year'
      action={setYear}
    />
  );
};

export default Year;
