let searchValue = "";
let mainDiv = document.getElementById("mainDiv");
let inputVal = document.getElementById("inputVal");
let button = document.getElementById("button");
let images = document.getElementById("images");

        fetch( ` https://api.unsplash.com/photos?page=1&client_id=LtQ63f0ynGxyqeQOz4XZkuaFHIBnf7FHRZ8awvt_hYo&per_page=15`,
            {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
            }
        )
        .then((res) => {
            return res.json();
        })
        .then((result) => {
            console.log(result)
            onload(result);
        })
        .catch((err) => console.log(err));

inputVal.addEventListener("change", (e) => {
    searchValue = e.target.value;
    images.innerHTML = "";
        fetch( ` https://api.unsplash.com/search/photos?page=1&query=${searchValue || "sun"}&client_id=LtQ63f0ynGxyqeQOz4XZkuaFHIBnf7FHRZ8awvt_hYo&per_page=15`,
            {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
            }
        )
            .then((res) => {
                return res.json();
            })
            .then((result) => {
                inputSearch(result);
                document.getElementById("img1").src = result.results[0].urls.regular;
            })
             .catch((err) => console.log(err));

});
  
// default
function onload(result) {
  for (let i = 0; i < result.length; i++) {
    let span = document.createElement("span");
        span.classList.add("imgParent");
    let imageTag = document.createElement("img");
        imageTag.classList.add("img");
        imageTag.src = result[i].urls.regular;
        span.appendChild(imageTag);
    let images = document.getElementById("images");
         images.appendChild(span);
  }
}
// on search
function inputSearch(result) {
  for (let i = 0; i < result.results.length; i++) {
    let span = document.createElement("span");
    span.classList.add("imgParent");
    let imageTag = document.createElement("img");
    imageTag.classList.add("img");
    imageTag.src = result.results[i].urls.regular;
    span.appendChild(imageTag);
    let images = document.getElementById("images");
    images.appendChild(span);
  }
}