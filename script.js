let meme = document.getElementById("meme");
let title = document.getElementById("title");
let getMemeBtn = document.getElementById("get-meme-btn");

//API URL
let url = "https://meme-api.com/gimme/";

//Array of subreddits of your choice
let subreddits = ["catmemes", "wholesomememes", "dogmemes", "me_irl"];

//Function To Get Random Meme
let getMeme = () => {
    //Choose a random subreddit from the subreddits array
    let randomSubreddit = subreddits[Math.floor(Math.random() * 3)]

    console.log(randomSubreddit);

    //Fetch data from the api 
    fetch(url + randomSubreddit)
        .then((resp) => resp.json())
            .then((data) =>{
                //Display meme image and title only after the image loads
                let memeImg = new Image();
                memeImg.onload = () =>{
                    meme.src = data.url;
                }
                memeImg.src = data.url;
    })
}

//Call the getMeme() on button click and on window load
getMemeBtn.addEventListener("click", getMeme);
window.addEventListener("load", getMeme);


