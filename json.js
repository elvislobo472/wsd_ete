document.getElementById('fetchBtn').addEventListener('click', fetchData);

async function fetchData() {
    const url = 'https://elvislobo472.github.io/wsd_ete/display.json';
    
    try {
        const response = await fetch(url);
        const data = await response.json();
        
        document.getElementById('name').textContent = data.name;
        document.getElementById('image').src = data.url;
        document.getElementById('temperament').textContent = data.temperament;
        document.getElementById('origin').textContent = data.origin;
        document.getElementById('description').textContent = data.description;
        document.getElementById('lifeSpan').textContent = data.life_span;
    } catch (error) {
        console.error('Error fetching cat data:', error);
    }
}



// The element fetched using the id "fetchBtn" and on clicking the button function fetchData is called and using try and catch the image is displayed from the given api url
