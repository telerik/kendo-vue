import {
  changeNegative,
  changePositive,
  negative,
  positive,
  strongNegative,
  strongPositive,
} from './trends';


export const trends = (dataItem) => {
  return {
    changeNegative: changeNegative(dataItem),
    changePositive: changePositive(dataItem),
    negative: negative(dataItem),
    positive: positive(dataItem),
    strongNegative: strongNegative(dataItem),
    strongPositive: strongPositive(dataItem),
  };
};

