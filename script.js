// Async Await
// const fetchMe = async() => {
//     let url = 'https://jsonplaceholder.typicode.com/users'
//     let response = await fetch(url)
//     let convertedResponse = await response.json()
//     console.log(convertedResponse);
//     for (let index = 0; index < convertedResponse.length; index++) {
//         const element = convertedResponse[index];
//         console.log(element);

//     }
// }

// const fetchMe = () => {
//     let url = 'https://api.github.com/users'
//     fetch(url)
//     .then(response=>response.json())
//     .then((convertedResponse)=>{
//         console.log(convertedResponse);
//         convertedResponse.map((user)=>{
//             show.innerHTML += `
//                 <h3>${user.id}. ${user.login}</h3>
//                 <div>
//                     <img src= '${user.avatar_url}' alt="dp" width="300" />
//                 </div>
//             `
//         })
//     })
//     .catch((err)=>{
//         console.log(err);
//     })
// }

const fetchMe = () => {
    let url = 'https://musicapi-19wk.onrender.com/music/myAPI'
    fetch(url)
        .then(res => res.json())
        .then((conRes) => {
            console.log(conRes);
            conRes.map((song) => {
                show.innerHTML += `
                    <h3>${song.id}. ${song.albumName}</h3>
                    <div>
                        <img src= '${song.songImage}' alt="dp" width="300" />
                    </div>
                    <audio src='${song.songUrl}' controls/>
                    `
            })
        })
        .catch((err)=>{
            console.log(err);
        })
}