// Adding event listeners to buttons for different actions
document.getElementById('getAllPosts').addEventListener('click', getAllPosts);
document.getElementById('getPost10').addEventListener('click', getPost10);
document.getElementById('createPost').addEventListener('click', createPost);
document.getElementById('replacePost12').addEventListener('click', replacePost12);
document.getElementById('updatePost12').addEventListener('click', updatePost12);
document.getElementById('deletePost12').addEventListener('click', deletePost12);

// Selecting the results div where the data will be displayed
const resultsDiv = document.getElementById('results');

// Function to clear the contents of the results div
function clearResults() {
  resultsDiv.innerHTML = '';
}

// Function to render the fetched data into the results div
function renderResults(data) {
  clearResults();
  const pre = document.createElement('pre');
  pre.textContent = JSON.stringify(data, null, 2);
  resultsDiv.appendChild(pre);
}

// Function to fetch and display all posts
async function getAllPosts() {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = await response.json();
  renderResults(data);
}

// Function to fetch and display a specific post with ID 10
async function getPost10() {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts/10');
  const data = await response.json();
  renderResults(data);
}

// Function to create a new post and display the result
async function createPost() {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      title: 'foo',
      body: 'bar',
      userId: 1,
    }),
  });
  const data = await response.json();
  renderResults(data);
}

// Function to replace the content of the post with ID 12 and display the result
async function replacePost12() {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts/12', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      id: 12,
      title: 'replaced title',
      body: 'replaced body',
      userId: 1,
    }),
  });
  const data = await response.json();
  renderResults(data);
}

// Function to update the title of the post with ID 12 and display the result
async function updatePost12() {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts/12', {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      title: 'updated title',
    }),
  });
  const data = await response.json();
  renderResults(data);
}

// Function to delete the post with ID 12 and display a confirmation message
async function deletePost12() {
  await fetch('https://jsonplaceholder.typicode.com/posts/12', {
    method: 'DELETE',
  });
  clearResults();
  resultsDiv.textContent = 'Post with ID 12 deleted successfully';
}

