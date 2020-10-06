const numbers = [
    ['M', 1000],
    ['CM', 900],
    ['D', 500],
    ['CD', 400],
    ['C', 100],
    ['XC', 90],
    ['L', 50],
    ['XL', 40],
    ['X', 10],
    ['IX', 9],
    ['V', 5],
    ['IV', 4],
    ['I', 1]
  ];

const Converter = {
  toRoman: function(number) {
    if (number === 0) {
      return '';
    }
    for (var i = 0; i < numbers.length; i++) {        
      if (number >= numbers[i][1]) {
        return numbers[i][0] + this.toRoman(number - numbers[i][1]);
      }
    }
  },

  fromRoman: function(roman) {
    const map = new Map(numbers);

    return roman.split('').reduce((accumulator, _currentValue, index, arr) => {
      const current = map.get(arr[index]) || 0;
      const next = map.get(arr[index + 1]) || 0;
      if (current < next) {
        return accumulator - current;
      }
      return accumulator + current;
    }, 0);
  }
};

export default Converter;