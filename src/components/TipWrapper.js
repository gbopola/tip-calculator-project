import React from 'react';
import { Bill } from '../components/Bill';
import { PeopleTotal } from '../components/PeopleTotal';
import { SelectTip } from '../components/SelectTip';
import { TipTotal } from '../components/TipTotal';

export const TipWrapper = () => {
  return (
    <div className="TipWrapper">
      <div className="left">
        <Bill />
        <SelectTip />
        <PeopleTotal />
      </div>
      <div className="right">
        <TipTotal />
      </div>
    </div>
  );
};
