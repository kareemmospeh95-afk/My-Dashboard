
let repoesNum = document.getElementById('length');
let projects = document.getElementById('projN')
getRep();
//get repos function
function getRep() {

    fetch(`https://api.github.com/users/kareemmospeh95-afk/repos`)
        .then((res) => res.json())
        .then((repos) => {
            repoesNum.innerHTML = `${repos.length}`
            projects.innerHTML = `${repos.length}`
        }
        )
}


