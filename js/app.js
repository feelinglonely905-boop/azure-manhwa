const list = document.getElementById("comic-list");
const search = document.getElementById("search");

function render(data) {
  list.innerHTML = "";
  data.forEach((c, i) => {
    list.innerHTML += `
      <div class="card" onclick="openComic(${i})">
        <img src="${c.cover}">
        <h3>${c.title}</h3>
        <small>${c.genre} • ${c.chapters.length} Ch</small>
      </div>
    `;
  });
}

function openComic(i) {
  // buka chapter TERBARU
  const chapters = comics[i].chapters;
  const last = chapters[chapters.length - 1];
  window.open(last.drive, "_blank");
}

render(comics);

/* SEARCH */
search.addEventListener("input", () => {
  const v = search.value.toLowerCase();
  render(
    comics.filter(c => c.title.toLowerCase().includes(v))
  );
});
       
