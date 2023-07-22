export class Form {
  constructor(formsSelector) {
    this.formsSelector = document.querySelectorAll(formsSelector);
    this.inputs = document.querySelectorAll('input');
    this.message = {
      loading: 'Loading...',
      success: 'Thanks! We will contact you soon',
      failure: 'Something went wrong...',
    };
    this.path = '../../assets/question.php';
  }

  clearInputs() {
    this.inputs.forEach(item => {
      item.value = '';
    });
  }

  checkMailInputs() {
    const mailInputs = document.querySelectorAll('[type="email"]');

    mailInputs.forEach((mailInput) => {
      mailInput.addEventListener('keypress', function(event) {
        if (event.key.match(/[^a-z 0-9 @ \.]/ig)) {
          event.preventDefault();
        }
      })
    });
  }

  initMask() {
    let setCursorPosition = (position, element) => {
        element.focus();

        if (element.setSelectionRange) {
            element.setSelectionRange(position, position);
        } else if (element.createTextRange) {
            const range = element.createTextRange();

            range.collapse(true);
            range.moveEnd('character', position);
            range.moveStart('character', position);
            range.select();
        }
    };

    function createMask(event) {
        const matrix = '+1 (___) ___-____';
        let iterator = 0;
        const def = matrix.replace(/\D/g, '');
        let value = this.value.replace(/\D/g, '');

        if (def.length >= value.length) {
          value = def;
        }

        this.value = matrix.replace(/./g, function(matrixSymbol) {
            return /[_\d]/.test(matrixSymbol) && iterator < value.length ? value.charAt(iterator++) : iterator >= value.length ? '' : matrixSymbol;
        });

        if (event.type === 'blur') {
            if (this.value.length == 2) {
                this.value = '';
            }
        } else {
            setCursorPosition(this.value.length, this);
        }
    }

    const inputs = document.querySelectorAll('[name="phone"]');

    inputs.forEach(input => {
        input.addEventListener('input', createMask);
        input.addEventListener('focus', createMask);
        input.addEventListener('blur', createMask);
    });
  }

  async postData(url, data) {
    let result = await fetch(url, {
      method: 'POST',
      body: data
    });

    return await result.text();
  }

  init() {
    this.checkMailInputs();
    this.initMask();
    this.formsSelector.forEach(formSelector => {
      formSelector.addEventListener('submit', (event) => {
        event.preventDefault();

        const statusMessage = document.createElement('div');
        statusMessage.style.cssText = `
          margin-top: 15px;
          font-size: 18px;
          color: white;
        `;
        formSelector.parentNode.append(statusMessage);
        statusMessage.textContent = this.message.loading;

        const formData = new FormData(formSelector);

        this.postData(this.path, formData)
              .then(result => {
                console.log(result);
                statusMessage.textContent = this.message.success;
              })
              .catch(() => {
                statusMessage.textContent = this.message.failure;
              })
              .finally(() => {
                this.clearInputs();
                setTimeout(() => {
                  statusMessage.remove();
                }, 6000);
              });
      });
    });
  }
}