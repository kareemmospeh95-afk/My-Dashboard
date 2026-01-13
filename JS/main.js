
let repoesNum = document.getElementById('length');

getRep();
//get repos function
function getRep() {

    fetch(`https://api.github.com/users/kareemmospeh95-afk/repos`)
        .then((res) => res.json())
        .then((repos) => {
            repoesNum.innerHTML = `${repos.length}`
            console.log(repos)
        }
        )
}


