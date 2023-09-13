export function currencyMask(inputElement, setPrice, setPrefix) {
  let value = inputElement.value
  value = value.replace(/\D/g, "")
  let SQLvalue = value.replace(/(\d)(\d{2})$/, "$1.$2")
  value = value.replace(/(\d)(\d{2})$/, "$1,$2")
  value = value.replace(/(?=(\d{3})+(\D))\B/g, ".")

  setPrefix('R$')

  inputElement.value = value

  setPrice(SQLvalue)
}