// Make a request to the AWS Lambda endpoint
fetch('https://your-lambda-endpoint-url')
    .then(response => response.json())
    .then(data => {
        // Handle the response data
        injectData(data);
        // Do something with the data
    })
    .catch(error => {
        // Handle any errors that occurred during the request
        console.error(error);
    });



function injectData(dataToInject) {
    // Retrieve the HTML element by its ID
    const element = document.getElementById('yourElementId');
    // Inject value into the element
    element.innerText = dataToInject.toString();

}
