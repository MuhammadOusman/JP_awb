document.getElementById('searchBtn').addEventListener('click', function() {
    const username = document.getElementById('username').value;
    if (!username) {
        alert("Please enter a username");
        return;
    }

    const profileContainer = document.getElementById('profile');
    profileContainer.innerHTML = '<p class="text-center">Loading...</p>';

    // Fetch user data from GitHub API
    fetch(`https://api.github.com/users/${username}`)
        .then(response => {
            if (!response.ok) {
                throw new Error('User not found');
            }
            return response.json();
        })
        .then(data => {
            displayProfile(data);
        })
        .catch(error => {
            profileContainer.innerHTML = `<div class="alert alert-danger" role="alert">${error.message}</div>`;
        });
});

function displayProfile(user) {
    const profileContainer = document.getElementById('profile');
    profileContainer.innerHTML = `
        <div class="card">
            <div class="row g-0">
                <div class="col-md-4 text-center p-3">
                    <img src="${user.avatar_url}" class="img-fluid rounded-circle" alt="User Avatar" style="max-width: 150px;">
                </div>
                <div class="col-md-8">
                    <div class="card-body">
                        <h3 class="card-title">${user.name || user.login}</h3>
                        <p class="card-text">${user.bio || 'No bio available.'}</p>
                        <div class="d-flex justify-content-start text-center my-3">
                            <div class="me-4">
                                <h5 class="fw-bold">${user.followers}</h5>
                                <p class="text-muted">Followers</p>
                            </div>
                            <div class="me-4">
                                <h5 class="fw-bold">${user.following}</h5>
                                <p class="text-muted">Following</p>
                            </div>
                            <div>
                                <h5 class="fw-bold">${user.public_repos}</h5>
                                <p class="text-muted">Repositories</p>
                            </div>
                        </div>
                        <a href="${user.html_url}" class="btn btn-primary" target="_blank">View Profile on GitHub</a>
                    </div>
                </div>
            </div>
        </div>
    `;
}