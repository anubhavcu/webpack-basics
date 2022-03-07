class AlertService {
  constructor() {
    this.errorBox = document.getElementById('error');
  }
  handleAdditionError = (inputs, numbers) => {
    const fullMessage = inputs.reduce((msg, str, index) => {
      if (inputsAreValid(numbers[index])) {
        return (msg += '');
      } else {
        return msg + `${str} is not a number`;
      }
    }, 'Please enter two valid numbers!');
    this.errorBox.classList.remove('invisible');
    this.errorBox.innerText = fullMessage;
  };
  hideErrors = () => {
    this.errorBox.classList.add('invisible');
  };
}
