function calculateResult() {
    let expression = document.getElementById('display').innerText;

    try {
        let result = eval(expression);
        
        if (result === Infinity || result === -Infinity) {
            throw new Error("Error!");
        }

        document.getElementById('display').innerText = result;
    } catch (error) {
        document.getElementById('display').innerText = error.message;
    }
}
