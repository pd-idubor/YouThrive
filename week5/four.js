// Fetch posts via api and displays them in front end element 'select
const fetchPosts = async() => {
    const results = document.getElementById("results");
    let postList;
    
    try {
	const url = 'https://jsonplaceholder.typicode.com/posts';
	const response = await fetch(url, {
		method: 'GET',
	});

	postList = await response.json();
    } catch (error) {
	console.error(error);
    }
	postList.forEach((post) => {
	results.innerHTML += `
	<div class="post">
	<h4 class="title">${results.childElementCount-1}. ${post.title}</h4>
	<p class="content">${post.body}</p>
	</div>
	`;
	})
};
fetchPosts();
