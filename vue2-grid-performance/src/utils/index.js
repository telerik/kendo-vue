import { changeNegative, changePositive, negative, positive, strongNegative, strongPositive } from '../DataService/local-data/trends';

export function debounce(func, wait) {
    let timeoutID;

    // conversion through any necessary as it wont satisfy criteria otherwise
    return function (...args) {
        clearTimeout(timeoutID);
        const context = this;

        timeoutID = window.setTimeout(function () {
            func.apply(context, args);
        }, wait);
    };
}

export const trends = (dataItem) => {
    return {
        changeNegative: changeNegative(dataItem),
        changePositive: changePositive(dataItem),
        negative: negative(dataItem),
        positive: positive(dataItem),
        strongNegative: strongNegative(dataItem),
        strongPositive: strongPositive(dataItem)
    };
};