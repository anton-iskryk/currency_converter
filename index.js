const valueInputNode = document.querySelector('.js-value-input');
const currencySelectoreNode = document.querySelector('.js-currency-selector');
const valueOutputNode = document.querySelector('.js-output');

const getInput = () => ({
  uah: Number(valueInputNode.value),
  currency: currencySelectoreNode.value,
});

const render = (result) => (
  valueOutputNode.innerText = result
);

valueInputNode.addEventListener('input', () => {
  const result = convert(getInput());

  render(result);
});

currencySelectoreNode.addEventListener('change', () => {
  const result = convert(getInput());

  render(result);
});