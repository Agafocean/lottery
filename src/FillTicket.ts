// используется для определения выйгрышных номеров, а также для автозаполнения

export function FillTicket() {
    let fieldOneNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19];
    const fieldOneWinNumbers: number[] = [];
    const fieldTwoWinNumbers: number[] = [Math.floor(Math.random() * 2 + 1)];

    for (let i = 0; i < 8; i++) {
        const ind = Math.floor(Math.random() * (19 - i));
        fieldOneWinNumbers.push(fieldOneNumbers[ind]);
        fieldOneNumbers.splice(ind, 1);
    }

    return { fieldOneWinNumbers, fieldTwoWinNumbers }
}
