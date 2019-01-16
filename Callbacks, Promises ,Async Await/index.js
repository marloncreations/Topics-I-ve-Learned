// Callbacks -------------------------------

// const myPost = [
//     {title: "Post Number 1", author: "Marlon"},
//     {title: "Post Number 2", author: "Robert"},
// ]

// function getPostByNumber() {
//     setTimeout(() => {
//         let output = ""
//         myPost.forEach(function(post) {
//             output += `<li>${post.title}</li>`
//         })   
//         document.body.innerHTML = output;
//     }, 1000);
// }

// function addPost(post, callback) {
//     setTimeout(() => {
//         myPost.push(post);
//         callback();
//     }, 2000);
// }

// addPost({title: "Post Number 3", author: "Hilary"}, getPostByNumber);

// Promises -------------------------------

const myPost = [
    {title: "Post Number 1", author: "Marlon"},
    {title: "Post Number 2", author: "Robert"},
]

function getPostByNumber() {
    setTimeout(() => {
        let output = ""
        myPost.forEach(function(post) {
            output += `<li>${post.title}</li>`
        })   
        document.body.innerHTML = output;
    }, 1000);
}

function addPost(post) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            myPost.push(post);

            const error = false;

            if(!error) {
                resolve("It was succesfully completered");
            } else {
                reject("Error! Something Went Wrong");
            }
        }, 2000);
    });
}

// Async // Await -------------------------------

// async function init() {
//     await addPost({title: "Post Number 3", author: "Hilary"}, getPostByNumber);
//     getPostByNumber();
// }

// init();

async function fetchBreeds() {
    const breeds = await fetch("https://api.TheDogAPI.com/v1/breeds");

    const data = await breeds.json();
    
    console.log(data);
}

fetchBreeds();

// addPost({title: "Post Number 3", author: "Hilary"})
//     .then(getPostByNumber)
//     .catch(err => console.log(err));

// Promises.all() -------------------------------

// const promise1 = Promise.resolve("Hello I was Resolved");
// const promise2 = 10;
// const promise3 = new Promise((resolve, reject) => {
//     setTimeout(resolve, 1000 , "Goodbye");
// });

// const container = document.querySelector('.dog-cards-container');
// const button = document.querySelector('.button');

// button.addEventListener('click', getNewBreeds);

// let counter = 50;
// let promise4 = fetch("https://api.TheDogAPI.com/v1/breeds?limit=" + counter);

// function getNewBreeds() {
//     promise4 = fetch("https://api.TheDogAPI.com/v1/breeds?limit=" + counter);
//     counter += 50;
//     console.log(counter);
//     promise4
//         .then((data) => data.json())
//         .then(data => {
//             let information = ``;
//             data.forEach(function(item, index) {
//                 let bf = (item.bred_for === undefined) ? " " : item.bred_for;
//                 information += `
//                 <div class="dogCard">
//                     <h1 class="breed">${item.name}</h1>
//                     <p class="breed-for">${bf}</p>
//                     <p class="breed-for">${item.life_span}</p>
//                 </div>
//                 `
//                 container.innerHTML = information;
//             })
//             console.log(data);
//         });
// }

