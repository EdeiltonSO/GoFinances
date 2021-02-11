const formatValue = (value: number): string => {
  const floatValue = parseFloat(value.toString());

  const output = floatValue.toLocaleString('pt-br', {
    style: 'currency',
    currency: 'BRL',
  });
  return output;
};

export default formatValue;
