const API_KEY = 'YOUR_API_KEY'
const button = document.getElementById('submit-icon')
const inputEl = document.querySelector('input')
const imageSection = document.querySelector('.images-section')

const getImages = async () => {
    imageSection.innerHTML=''
    const API_ENDPOINT = "https://api.openai.com/v1/images/generations";

    const prompt = inputEl.value;
    
    const model = "image-alpha-001";
    const size = "1024x1024";

    const options ={
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${API_KEY}`
        },
        body: JSON.stringify({
            model: model,
            prompt: prompt,
            size: size,
            n: 4
        })
    }

    try {
        const response = await fetch(API_ENDPOINT, options)
        const data = await response.json()   

        data?.data.forEach(imageObject => {
            const ImageContainer = document.createElement('div')
            ImageContainer.classList.add('image-container')
            const imgEl = document.createElement('img')
            imgEl.setAttribute('src', imageObject.url)
            ImageContainer.appendChild(imgEl)
            imageSection.appendChild(ImageContainer)
        });
       
    } catch (e) {
        console.log(e)
    }
}

button.addEventListener('click', getImages)

