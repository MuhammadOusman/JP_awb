let showData = document.getElementById("showData");
let input = document.getElementById("inputData");
let loader = document.querySelector('.loader');

// Function to show the loader
const showLoader = () => {
    loader.style.display = 'flex'; // Show the loader
};

// Function to hide the loader
const hideLoader = () => {
    loader.style.display = 'none'; // Hide the loader
};

// Function to display default news articles
const displayDefaultNews = () => {
    const defaultArticles = [
        {
            title: "Default News Article 1",
            description: "This is a default news article description.",
            urlToImage: "https://via.placeholder.com/150",
            url: "#"
        },
        {
            title: "Default News Article 2",
            description: "This is another default news article description.",
            urlToImage: "https://via.placeholder.com/150",
            url: "#"
        },
        {
            title: "Default News Article 3",
            description: "This is yet another default news article description.",
            urlToImage: "https://via.placeholder.com/150",
            url: "#"
        }
    ];

    defaultArticles.forEach((e) => {
        showData.innerHTML += `
        <div class="card" style="width: 18rem;">
            <img src="${e.urlToImage}" class="card-img-top" alt="${e.title}">
            <div class="card-body">
                <h5 class="card-title">${e.title}</h5>
                <p class="card-text">${e.description}</p>
                <a href="${e.url}" class="btn btn-primary" target="_blank">Read more</a>
            </div>
        </div>`;
    });
};

// Fetch news articles
const getNews = () => {
    showLoader(); // Show loader
    let API_URL = `https://newsapi.org/v2/everything?q=${input.value}&from=2025-05-14&sortBy=publishedAt&apiKey=90906510e86d4fe3bfcd8cdd4d3f02d1`;

    fetch(API_URL)
        .then((res) => {
            if (!res.ok) {
                throw new Error('Network response was not ok ' + res.statusText);
            }
            return res.json();
        })
        .then((data) => {
            console.log(data.articles);
            showData.innerHTML = ''; // Clear previous results
            data.articles.forEach((e) => {
                showData.innerHTML += `
                <div class="card" style="width: 18rem;">
                    <img src="${e.urlToImage}" class="card-img-top" alt="${e.title}">
                    <div class="card-body">
                        <h5 class="card-title">${e.title}</h5>
                        <p class="card-text">${e.description}</p>
                        <a href="${e.url}" class="btn btn-primary" target="_blank">Read more</a>
                    </div>
                </div>`;
            });
        })
        .catch((error) => {
            console.error('There was a problem with the fetch operation:', error);
        })
        .finally(() => {
            hideLoader(); // Hide loader after fetching
        });
}

// Display default news on page load
window.onload = () => {
    displayDefaultNews();
};


