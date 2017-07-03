const url = 'https://ws.audioscrobbler.com/2.0/?method=geo.gettopartists&country=spain&api_key=565ec2884c27112bb177c7ff63d5e2d8&format=json'

function getArtists(){
    return fetch(url)
        .then(res => res.json())
        .then( data => data.topartists.artist )
        .then( artists => artists.map(artist => {
            return {
                name : artist.name,
                image : artist.image[3]['#text'],
                comments : 200,
                likes : 150
            }
        }))
        .catch(err => { err })
}

export { getArtists } 