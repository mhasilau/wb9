const db_url = 'https://wb9-2023-default-rtdb.firebaseio.com'

function getSmthng() {
    fetch(`${db_url}/flash-card.json`,
    {
      method: 'GET',
      headers: {
          'Content-Type': 'application/json'
      },
    })
    .then( response => response.json())
    .then( result => {
        const cards = Object.keys(result).map(key => result[key])
        console.log(cards);
    })
    .catch( error => {
        console.log(error);
    });
}
getSmthng()