class AdviceGenerator{
    constructor(button, textOutput, numberOutput){
        this.button = button;
        this.text = textOutput;
        this.number = numberOutput;
        this.button.addEventListener(('click'), this.getAdvice);
    }

    getAdvice = () => {
        fetch('https://api.adviceslip.com/advice', {cache: "no-store"})
            .then((response) => response.json())
            .then((data) => {
                this.changeQuote(data.slip.advice, data.slip.id);
            });
    }

    changeQuote = (text, id) => {
        this.text.innerText = `"${text}"`;
        this.number.innerText = `ADVICE #${id}`;
    }
}

const button = document.querySelector('[data-generator-role="trigger"]');
const textField = document.querySelector('[data-generator-role="output"]');
const quoteNumber = document.querySelector('[data-generator-role="counter"]');

const getAdvice = new AdviceGenerator(button, textField, quoteNumber);