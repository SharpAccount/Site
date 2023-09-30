async function returnJSON() {
    return (await fetch('https://jsonplaceholder.typicode.com/posts')).json();
}

returnJSON().then(data => {
    data.forEach((element, index) => {
        let div = document.createElement('div');
        let headers = document.createElement('div');
        let content = document.createElement('div');
        let postId = document.createElement('h1');
        let userId = document.createElement('h1');
        let title = document.createElement('h1');
        let body = document.createElement('p')
        let wrapper = document.getElementById('wrapper');

        postId.textContent = 'Post id: ' + data[index]['id'];
        userId.textContent = 'User id: ' + data[index]['userId'];
        title.textContent = data[index]['title'];
        body.textContent = data[index]['body'];

        headers.className = 'Ids';
        div.className = 'requestBlock';
        content.className = 'postContent';
        title.className = 'title';
        body.className = 'postText';

        headers.append(postId);
        headers.append(userId);
        content.append(title);
        content.append(body);
        div.append(headers);
        div.append(content);
        wrapper.append(div);
        console.log(data[index]['id']);
    })
})