class BMICalculator {
    constructor(unit, height, weight) {
        this.unit = unit;
        this.height = height;
        this.weight = weight;
    }

    calculate() {
        let total = this.weight / this.height;
        return (total / this.height).toFixed(2);
    }
}

const calculateBmi = () => {
    const unit   = document.getElementById('unit').value;
    const height = document.getElementById('height').value;
    const weight = document.getElementById('weight').value;
    const output = document.getElementById('output');

    if (unit && height && weight) {
        const bmi = new BMICalculator(unit, height, weight);
        output.innerHTML = bmi.calculate();
    } else {
        output.innerHTML = 'Enter all fields.';
    }
};


document.getElementById('calculate').onclick = calculateBmi;