const express = require('express');

const app = express();

app.use(express.json());

app.post('/api/calculate', async (req, res) => {
    try {
        const {operation} = req.body;
        //console.log('operation:', operation);

        let operand;
        let result;
        for(let i = 0; i < operation.length; i++){
            if(operation.charAt(i) == '+' || operation.charAt(i) == '-' || operation.charAt(i) == '*' || operation.charAt(i) == '/'){
                operand = operation.charAt(i);
            }
        }

        let arr = operation.split(operand);
        switch (operand) {
            case '+':
                result = parseFloat(arr[0]) + parseFloat(arr[1]);
                break;
            case '-':
                result = parseFloat(arr[0]) - parseFloat(arr[1]);
                break;
            case '*':
                result = parseFloat(arr[0]) * parseFloat(arr[1]);
                break;
            case '/':
                result = parseFloat(arr[0]) / parseFloat(arr[1]);
                break;
            default:
                break;
        }

        res.json(result);
    } catch (err) {
        console.error(err.message);
    }
})

const port = 5000;

app.listen(port, () =>  console.log(`Server started on port ${port}`));