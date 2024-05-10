// Luhan Lingnau C22363 EESE316 Formative Assessment 2
// Javascript

// Delete function for calculator
function del()
{
    var value = document.getElementById('screen').value;
    document.getElementById('screen').value = value.substr(0, value.length - 1);
}

// Calculate function
function calculate()
{
    var expression = document.Calculator.text.value;
    var result;
    try{
        result = eval(expression);
        document.Calculator.text.value = result;
    }
    catch (error){
        document.Calculator.text.value = 'Error';
    }
}

document.getElementById('calculate').addEventListener('click', calculate);