let num = 0;

const addOne = () => {
  num += 1;
  document.getElementById('number').innerHTML = num;
  if (num % 5 === 0) {
    document.getElementById('number').style.color = 'red';
  } else {
    document.getElementById('number').style.color = '#A9D2D5';
  }
};

const subOne = () => {
  if (num === 0) {
    alert(`We don't like negatives here, please count up`);
  } else {
    num -= 1;
    document.getElementById('number').innerHTML = num;
  }

  if (num % 5 === 0) {
    document.getElementById('number').style.color = 'red';
  } else {
    document.getElementById('number').style.color = '#A9D2D5';
  }
};
