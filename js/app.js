const comicList = document.getElementById("comic-list");
const updateList = document.getElementById("update-list");
const newList = document.getElementById("new-list");
const search = document.getElementById("search");

function card(c) {
  return `
  <div class="card" onclick="openComic('${c.id}')">
    <img src="${c.cover}">
    <h3>${c.title}</h3>
    <small>${c.genre} • ${c.chapters.length} Ch</small>
  </div>
  `;
}

function openComic(id) {
  location.href = `reader.html?comic=${id}&chapter=1`;
}

/* SEMUA KOMIK */
function renderAll(data) {
  comicList.innerHTML = data.map(card).join("");
}

/* NEW MANHWA (URUT DARI PALING BARU) */
function renderNew() {
  const sorted = [...comics].sort((a,b)=> 
    new Date(b.update) - new Date(a.update)
  );
  newList.innerHTML = sorted.slice(0,6).map(card).join("");
}

/* NEW CHAPTER UPDATE */
function renderUpdate() {
  const sorted = [...comics].sort((a,b)=> 
    new Date(b.update) - new Date(a.update)
  );
  updateList.innerHTML = sorted.slice(0,6).map(card).join("");
}

renderAll(comics);
renderNew();
renderUpdate();

/* SEARCH */
search.addEventListener("input", () => {
  const v = search.value.toLowerCase();
  renderAll(
    comics.filter(c => c.title.toLowerCase().includes(v))
  );
});
