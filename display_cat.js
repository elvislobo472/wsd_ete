// The element fetched using the id "fetch_img" and on clicking the button function fetchImage is called and using try and catch the image is displayed from the given api url

document.getElementById('fetch_img').addEventListener('click', fetchImage);

async function fetchImage() {
    const url = 'https://api.thecatapi.com/v1/images/search';
    
    try {
        const response = await fetch(url);
        const data = await response.json();
        const imageUrl = data[0].url;

        document.getElementById('ranImg').src = imageUrl;
    } catch (error) {
        console.error('Error fetching cat image:', error);
    }
}

