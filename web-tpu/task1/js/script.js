document.addEventListener('DOMContentLoaded', () => {
    const input = document.getElementById('input');
    const button = document.getElementById('btn');

    const trueResult = document.getElementById('true');
    const falseResult = document.getElementById('false');

    // АЛГОРИТМ
    const isIsogram = (value) => {
        return !/(\w).*\1/i.test(value);
    }
    // 

    button.addEventListener('click', () => {
        if(isIsogram(input.value)) {
            falseResult.classList.remove('false');
            trueResult.classList.add('true');
        } else {
            trueResult.classList.remove('true');
            falseResult.classList.add('false');
        }
    })
})