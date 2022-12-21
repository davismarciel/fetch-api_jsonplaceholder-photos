const url = "https://jsonplaceholder.typicode.com/photos";

let btn = document.querySelector('#btn')
let divContainer = document.querySelector('#photos-container');

const getPhotos = async () => {
    const response = await fetch(url)
    return response.json()
}

const addPhotosToDom =  async () => {
    const photosResponse = await getPhotos()

    const htmlPhotos = photosResponse.map((photos) => 
            `
            <div id="photos-container">
                <div>
                    <h3>${photos.id}</h3>
                    <p>${photos.title}</p>
                    <img src="${photos.thumbnailUrl}" alt="">
                </div>
            </div>
            `
        )
    
        console.log(photosResponse)
        console.log(htmlPhotos)

        divContainer.innerHTML += htmlPhotos
}

btn.addEventListener('click', addPhotosToDom)