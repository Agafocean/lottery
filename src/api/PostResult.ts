// для отправки результата используем json-server
// данные записываются в data/db.json

export async function PostResult(url: string, firstField: number[], secondField: number[], isTicketWon: boolean) {

    const fetchItPromise = new Promise(async (resolve, reject) => {
        await fetch(
            url,
            {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                method: "POST",
                body: JSON.stringify(
                    {
                        selectedNumber:
                            { firstField: firstField, secondField: secondField },
                        isTicketWon: isTicketWon
                    },
                )
            })
            .then((res) => resolve(res.status))
            .catch(error => reject(error.name));
    }
    )

    async function askServer() {
        return await fetchItPromise
            .then((response) => {
                if (response === 201) return response
                else { console.log('Ошибка: Ответ сервера: ', response); return response }
            })
            .catch(error => { console.log('Ошибка передачи данных на сервер: ', error); return 666 });
    }

    let fetchIt = await askServer();

    let numberOfFetch = 0;
    while (fetchIt !== 201 && numberOfFetch < 2) {
        numberOfFetch++;
        await new Promise(resolve => setTimeout(resolve, 2000));
        fetchIt = await askServer();
    }
}

