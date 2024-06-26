import getBudgetObject from './7-getBudgetObject.js';

export default function getFullBudgetObject(income, gdp, capita) {
  const budget = getBudgetObject(income, gdp, capita);
  const fullBudget = {
    ...budget,
    getIncomeInDollars(income) { // ES6 method property
      return `$${income}`;
    },
    getIncomeInEuros(income) { // ES6 method property
      return `${income} euros`;
    },
  };

  return fullBudget;
}
