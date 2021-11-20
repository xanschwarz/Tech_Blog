const createPostButton = document.querySelector('#create-post-button');
const createPostForm = document.querySelector('.create-post-form');

const createPost = async () => {
  createPostButton.style.display = 'none';
  createPostForm.style.display = 'block';
};

createPostButton.addEventListener('click', createPost);
