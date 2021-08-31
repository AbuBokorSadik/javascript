const getButton = document.getElementById('get-button');
const sendButton = document.getElementById('send-button');

const getData = function () {
    const xhr = new XMLHttpRequest();
    const method = 'GET';
    const url = 'https://jsonplaceholder.typicode.com/todos/';
    // const url = 'https://google.com';
    xhr.open(method, url);
    xhr.send();

    // xhr.onreadystatechange = function () {
    //     if (this.readyState == 4 && this.status == 200) {
    //         document.getElementById("demo").innerHTML = this.responseText;
    //     }
    // };

    xhr.onload = function () {
        let text = '<table border=1><th>Id</th><th>User Id</th><th>Title</th>';
        const results = JSON.parse(xhr.response);
        for (let result of results) {
            text += '<tr><td>' + result.id + '</td><td>' + result.userId + '</td><td>' + result.title + '</td></tr>';
        }
        text += '</table>';
        // document.getElementById("demo").innerHTML = text;
        document.getElementById("demo").innerHTML = this.getAllResponseHeaders();
        // document.getElementById("demo").innerHTML = this.getResponseHeader("content-type");
        console.log(this.status);
        console.log(result);
        console.log(JSON.parse(result));
    };

    xhr.onerror = function () {
        console.log("An error occurred during the transaction  " + this.status);
        console.log(this.status);
    };
}

const sendData = function () {
    const xhr = new XMLHttpRequest();
    const method = 'POST';
    const url = 'https://jsonplaceholder.typicode.com/posts';
    const data = JSON.stringify({
        title: 'foo',
        body: 'bar',
        userId: 1,
      });
    xhr.open(method, url);
    xhr.send(data);

    xhr.onload = function () {
        const result = JSON.parse(xhr.response);
        console.log(this.status);
        console.log(result);
    };
}

getButton.addEventListener('click', getData);
sendButton.addEventListener('click', sendData);