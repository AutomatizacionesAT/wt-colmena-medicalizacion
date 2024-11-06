import Calculadora from '@views/calculadora/calculadora.html' // CAMBIAR POR LA VISTA QUE VAYAN  A CREAR

export default () => {
    const subdocument = document.createElement('div') // *
    subdocument.className = 'hook' // * Puedes agregar otra clase sin eliminar esta 'hook'
    subdocument.innerHTML = Calculadora // *
    const stylesParentElemInHook = subdocument.querySelector('.chcontainer') // * nombre del elmento padre de la vista


    /** FUNCIONES INTERNAS DEL ELEMENTO**/

    const inputCalc = subdocument.querySelector("#input-calc");
    const borrar1 = subdocument.querySelector("#borrar1");

    borrar1.addEventListener("click", () => {
        inputCalc.value = inputCalc.value.slice(0, -1);
    })

    inputCalc.addEventListener("keydown", (event) => {
        const allowedKeys = [
            "0", "1", "2", "3", "4", "5", "6", "7", "8", "9",
            "+", "-", "*", "/", ".",
            "Backspace", "Enter", "ArrowLeft", "ArrowRight", "Delete",
        ];
        if (!allowedKeys.includes(event.key)) {
            event.preventDefault();
        }
        if (event.key === "." && inputCalc.value.endsWith(".")) {
            event.preventDefault();
        }
    });

    const isLastCharacterOperator = (input) => {
        const operators = ['+', '-', '*', '/'];
        return operators.includes(input.trim().slice(-1));
    };

    inputCalc.addEventListener("keydown", (event) => {
        const operators = ['+', '-', '*', '/'];
        const lastCharacter = inputCalc.value.trim().slice(-1);
        if (operators.includes(event.key) && operators.includes(lastCharacter)) {
            event.preventDefault();
        }
    });

    const numButtons = subdocument.querySelectorAll(".button-num");
    numButtons.forEach(button => {
        button.addEventListener("click", () => {
            inputCalc.value += button.innerText;
        });
    });

    const operButtons = subdocument.querySelectorAll(".oper");
    operButtons.forEach(button => {
        const operator = button.getAttribute("data-operator");

        button.addEventListener("click", () => {
            if (isLastCharacterOperator(inputCalc.value)) {
                return;
            }
            inputCalc.value += `${operator}`;
        });
    });

    const clearButton = subdocument.querySelector(".clear");
    clearButton.addEventListener("click", () => {
        inputCalc.value = "";
        inputCalc.classList.remove("errorMessage");
        inputCalc.classList.remove("errorMessage2");
    });

    const handleCalculation = () => {
        if (inputCalc.value.trim() === "") {
            return;
        }
        try {
            if (inputCalc.value.includes("/0")) {
                inputCalc.value = "No se puede dividir entre cero";
                inputCalc.classList.add("errorMessage");
                return;
            }
            let result = eval(inputCalc.value);
            if (result === Infinity || result === -Infinity) {
                inputCalc.value = "No se puede dividir entre cero";
                inputCalc.classList.add("errorMessage");
            } else {
                inputCalc.value = result;
                inputCalc.classList.remove("errorMessage");
            }
        } catch (error) {
            inputCalc.value = "Error";
            inputCalc.classList.remove("errorMessage");
            inputCalc.classList.add("errorMessage2");
        }
    };

    const equalButton = subdocument.querySelector(".equal");
    equalButton.addEventListener("click", () => {
        handleCalculation();
    });

    inputCalc.addEventListener("keydown", (event) => {
        if (event.key === "Enter") {
            event.preventDefault();
            handleCalculation();
        } else if (event.key === "Delete") {
            inputCalc.value = "";
            inputCalc.classList.remove("errorMessage");
            inputCalc.classList.remove("errorMessage2");
        }
    });

    const dotButton = subdocument.querySelector(".dot");
    dotButton.addEventListener("click", () => {
        const currentValue = inputCalc.value;
        const parts = currentValue.split(" ");
        const lastPart = parts[parts.length - 1];
        if (!lastPart.includes(".")) {
            inputCalc.value += ".";
        }
    });

    inputCalc.addEventListener("input", () => {
        if (inputCalc.value === "") {
            inputCalc.classList.remove("errorMessage");
            inputCalc.classList.remove("errorMessage2");
        }
    });

    /** **/

    // * funcion para ampliar hook
    subdocument.querySelectorAll('.hook__hook--btn').forEach((button) => {
        button.addEventListener('click', () => {
            switch (button.name) {
                case 'open':
                    subdocument.classList.add('active')
                    stylesParentElemInHook.classList.add('active')
                    break
                case 'close': {
                    subdocument.classList.remove('active')
                    stylesParentElemInHook.classList.remove('active')
                    break;
                }
            }
        })
    })
    return subdocument
}