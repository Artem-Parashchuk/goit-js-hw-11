const KEY_API = '43330022-ba36650dc11c5492edb18bb80'
const BASE_URL = 'https://pixabay.com'

export function fetchPhotoByPixaby(searchWord) {
    const searchParams = new URLSearchParams({
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
        key: KEY_API,
        q: searchWord
    })

    return fetch(`${BASE_URL}/api/?${searchParams}`).then(res => {
        if(!res.ok) {
            throw new Error(res.status)
        }

        return res.json()
    })
}