const db = 'https://jsonplaceholder.typicode.com/posts';

const listElement = document.querySelector('.posts');
const postTemplate = document.getElementById('single-post');
const form = document.querySelector('#new-post form');
const fetchButton = document.querySelector('#available-posts button');
const postList = document.querySelector('ul');

function sendHttpRequest(method, url, data) {
  // const promise = new Promise((reslove, reject) => {
  // const xhr = new XMLHttpRequest();

  // xhr.open(method, url);

  // xhr.responseType = 'json';

  // xhr.onload = function () {
  //   if (xhr.status >= 200 && xhr < 300) {
  //     reslove(xhr.response);
  //   } else {
  //     reject(new Error('Something went wrong'));
  //   }
  // };

  // xhr.onerror = function () {
  //   reject(new Error('Failed to send request'));
  // };

  // xhr.send(JSON.stringify(data));
  // });

  return fetch(url, {
    method: method,
    // body: JSON.stringify(data),
    body: data
    // headers: {
    //   'Content-Type': 'application/json'
    // }
  })
    .then((response) => {
      if (response.status >= 200 && response.status < 300) {
        return response.json();
      } else {
        return response.json().then((errData) => {
          console.log(errData);
          throw new Error('Something went wrong - server-side.');
        });
      }
    })
    .catch((error) => {
      console.log(error);
      throw new Error('Something went wrong!');
    });
}

async function fetchPosts() {
  try {
    const responseData = await sendHttpRequest('GET', db);
    // const listofPosts = JSON.parse(xhr.response);
    const listofPosts = responseData;
    for (post of listofPosts) {
      const postEl = document.importNode(postTemplate.content, true);
      postEl.querySelector('h2').textContent = post.title.toUpperCase();
      postEl.querySelector('p').textContent = post.body;
      postEl.querySelector('li').id = post.id;
      listElement.append(postEl);
    }
  } catch (error) {
    console.log(error.message);
  }
}

async function createPost(title, content) {
  const userId = Math.random();
  const post = {
    title: title,
    body: content,
    userId: userId
  };

  const fd = new FormData(form);
  // fd.append('title', title);
  // fd.append('body', content);
  fd.append('userId', userId);

  await sendHttpRequest('POST', db, fd);
}

fetchButton.addEventListener('click', () => {
  listElement.textContent = '';
  fetchPosts();
});
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const enteredTitle = e.currentTarget.querySelector('#title').value;
  const enteredContent = e.currentTarget.querySelector('#content').value;
  createPost(enteredTitle, enteredContent);
});

postList.addEventListener('click', (event) => {
  if (event.target.tagName === 'BUTTON') {
    const postId = event.target.closest('li').id;
    sendHttpRequest('Delete', `${db}/${postId}`);
  }
});
