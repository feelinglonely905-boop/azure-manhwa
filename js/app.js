const list = document.getElementById("comic-list");
const search = document.getElementById("search");

function render(data) {
  list.innerHTML = "";
  data.forEach(c => {
    list.innerHTML += `
      <div class="card">
        <img src="${c.cover}">
        <h3>${c.title}</h3>
      </div>
      function openComic(id) {
  window.location.href = `reader.html?comic=${id}&chapter=1`;
               }
    `;
  });
}

render(comics);

// SEARCH
search.addEventListener("input", () => {
  const val = search.value.toLowerCase();
  render(comics.filter(c => c.title.toLowerCase().includes(val)));
});

// FILTER
function filterGenre(g) {
  if (g === "All") return render(comics);
  render(comics.filter(c => c.genre === g));
                        }
function openComic(id) {
  window.location.href = `reader.html?comic=${id}&chapter=1`;
  }
  
