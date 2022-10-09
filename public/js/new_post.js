const createPostButton = document.querySelector('#create-post-button');
const createPostForm = document.querySelector('.create-post-form');
// const createButton = document.querySelector('#create-button');

const createPost = async () => {
  createPostButton.style.display = 'none';
  createPostForm.style.display = 'block';
};

createPostFormHandler = async (event) => {
  event.preventDefault();

  const title = document.querySelector('#title').value.trim();
  const content = document.querySelector('#content').value.trim();

  if (title && content) {
    const response = await fetch('/dashboard', {
      method: 'POST',
      body: JSON.stringify({ title, content }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert('Failed to create post');
    }
  }
};

createPostButton.addEventListener('click', createPost);
createPostForm.addEventListener('submit', createPostFormHandler);
