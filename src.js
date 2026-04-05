function get_match(seed, list, i){
    matches = shuffle(seed, list)
    return matches[i]
}


function assert_no_overlap(seed, list){
    rand_list = shuffle(seed, list)
    for(let i = 0; i < list.length; i++){
        if (rand_list[i] == list[i]){
            console.log("bad_list", i)
        }
    }
}

function shuffle(seed, list) {
  const ret = list.map(x => x); // clone list
  const rng = new Math.seedrandom(seed);

  for (let i = ret.length - 1; i > 0; i--) {
    const swap_idx = rand_int(i, rng)

    const temp = ret[i];
    ret[i] = ret[swap_idx];
    ret[swap_idx] = temp;
  }

  return ret;
}

function rand_int(max, myrng) {
    return Math.floor(myrng() * (max + 1));
}

function update_div(div_id, name, match) {
    div = document.getElementById(div_id)
    if(name == 'Avani') {
        name = 'Fat Whale'
    }
    div.innerHTML = `<h2>${name} your easter santa person is ${match}</h2>`
}

function get_current_val(){
    const select = document.getElementById("names");
    return select.value;
}

const seed = 'meep6'
const people = ['Austin', 'Logan', 'Moira', 'Tim', 'Avani']
function on_button_press(){
    const selected_idx = Number(get_current_val())
    console.log(selected_idx)
    const name = people[selected_idx]
    const match = get_match(seed, people, selected_idx)
    update_div('content', name, match)

}


