//Initial song list
let songs = [{
  band: "Parkway Drive",
  song: "Wishing Wells",
  isLiked: false,
}, {
  band: "MASTER",
  song: "God save our wrath",
  isLiked: true,
}, {
  band: "Ghost",
  song: "Square Hammer",
  isLiked: true,
}, {
  band: "In Flames",
  song: "Stay with me",
  isLiked: false,
}, {
  band: "Iron Maiden",
  song: "Fear of the dark",
  isLiked: false,
}, {
  band: "MASTER",
  song: "Beware",
  isLiked: true,
}, {
  band: "Ghost",
  song: "Dance Macabre",
  isLiked: false,
}, {
  band: "SOAD",
  song: "Aerials",
  isLiked: false,
}, {
  band: "Ghost",
  song: "If you have ghosts",
  isLiked: true,
}];
//buttons
function createButton(action, func) {
  let input = document.createElement("input");
  input.className = `button ${action === "Delete" ? action.toLowerCase() : "like"}`;
  input.setAttribute("type", "button");
  input.setAttribute("value", action);
  input.addEventListener("click", func);
  return input;
}
//delete a LI
function deleteSong(event) {
  if (event.target) {
    let parentLi = event.target.closest('li');
    let index = songs.findIndex(function (elem, index) {
      if (parentLi.textContent.includes(elem.song && elem.band)) {
        songs.slice(index, 1);
        parentLi.remove();
      }
    });
  }
  songsCounter();
}
//add a heart - toggle
function addHeart(event) {
  if (event.target) {
    if (event.target.value === "Like") {
      createImage(event.target.parentNode);
      event.target.value = "Unlike";
      for (let key of songs) {
        if ((event.target.parentNode.textContent).includes(key.band && key.song)) {
          key.isLiked = true;
        }
      }
    } else {
      event.target.parentNode.removeChild(event.target.parentNode.lastChild);
      event.target.value = "Like";
      for (let key of songs) {
        if ((event.target.parentNode.textContent).includes(key.band && key.song)) {
          key.isLiked = false;
        }
      }
    }
  }
}
//image - like
function createImage(parent) {
  let img = document.createElement("img");
  img.setAttribute("src", "/images/like.svg");
  img.className = "like-icon";
  parent.append(img);
  return img;
}
//list of songs on the page
function createSongsList(obj) {
  let songsList = document.querySelector(".songs");
  let li = document.createElement("li");
  songsList.append(li);
  li.className = "item";
  li.textContent = `${obj.band} - ${obj.song}`;
  li.append(createButton("Delete", deleteSong));
  if (obj.isLiked) {
    li.append(createButton("Unlike", addHeart));
    createImage(li);
  } else {
    li.append(createButton("Like", addHeart));
  }
}
//songs counter
function songsCounter() {
  let counter = document.querySelectorAll(".songs > li").length;
  return document.querySelector(".count").textContent = counter
}
//value of input - band
function bandName() {
  let band = document.querySelector(".band");
  return band.addEventListener('input', function (event) {
    return event.target.value;
  });
}
//value of input - song
function trackName() {
  let track = document.querySelector(".song");
  return track.addEventListener('input', function (event) {
    return event.target.value;
  });
}
//add a new song
document.querySelector(".add").addEventListener("click", function (event) {
  bandName;
  trackName;
  if (event.target) {
    const song = {
      band: document.querySelector(".band").value,
      song: document.querySelector(".song").value,
      isLiked: false,
    }
    songs.push(song);
    createSongsList(song);
    document.querySelector(".song").value = "";
    document.querySelector(".band").value = "";
  }
  songsCounter();
});

window.addEventListener('load', function () {
  for (let key of songs) {
    createSongsList(key);
  }
  songsCounter()

});