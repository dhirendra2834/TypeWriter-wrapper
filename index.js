let title = document.querySelector('.main_heading');
        
let name = " Dhirendra Singh"

let index = 0;
const typewriter = () => {
    let new_title = name.slice(0, index);
    title.innerText = new_title;

    index > name.length ? index = 1 : index++;
  
    // index++;
    setTimeout(() => 
        typewriter(), 200
    )
}
typewriter();