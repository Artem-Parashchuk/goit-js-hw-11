export function fetchPhotoByPixaby(searchWord) {
    return fetch(`https://pixabay.com/api/?key=43330022-ba36650dc11c5492edb18bb80&image_type=photo&orientation=horizontal&safesearch=true&q=${searchWord}`).then(res => {
        if(!res.ok) {
            throw new Error(res.status)
        }

        return res.json()
    })
}