// Check if the Units field is not empty
const unitsFieldHasValue = value => value === null || value === undefined ? false : true;

// Check if the value in the Units field is between 0 and 500
const unitsFieldValueIsInRange = value => value !== null && value >= 0 && value <= 500 ? true : false;

// Check if the length of the Name is above 3 symbols
const isLengthAboveThree = value => {
    if (value === undefined) {
        return false;
    }
    return value.length > 3;
};

// Check if the selected date is between 1.1.1995 and 31.12.2022
const isDateBetweenRange = value => {
    const yearOfTheDate = new Date(value).getFullYear();

    return yearOfTheDate >= 1995 && yearOfTheDate <= 2022 ? true : false;
};

export {
    unitsFieldHasValue,
    unitsFieldValueIsInRange,
    isLengthAboveThree,
    isDateBetweenRange
};
