let num = 0;

const addOne = () => {
  num += 1;
  document.getElementById('number').innerHTML = num;
};

const subOne = () => {
  if (num === 0) {
    alert(`We don't like negatives here, please count up`);
  } else {
    num -= 1;
    document.getElementById('number').innerHTML = num;
  }
};
