// Luhan Lingnau C22363 EESE316 Formative Assessment 2
// Javascript

// Delete function for calculator
function del()
{
    // Get the value from the input field with ID 'screen'
    var value = document.getElementById('screen').value;
    // Remove the last character from the value
    document.getElementById('screen').value = value.substr(0, value.length - 1);
}

// Calculate function
function calculate()
{
    //Get the expression from the input field named 'text' in the form named 'Calculator'
    var expression = document.Calculator.text.value;
    var result;
    try{
        // Calculate using eval() function
        result = eval(expression);
        document.Calculator.text.value = result;
    }
    catch (error){
        document.Calculator.text.value = 'Error';
    }
}

// This is to add an event listener to the element with the id 'calculate'
// Ahen this element is clicked, the calcualte() function will be called
document.getElementById('calculate').addEventListener('click', calculate);