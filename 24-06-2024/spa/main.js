function getMainHTML() {
  return `
        <main>
            <aside>Sidebar</aside>
            <section id="articles-section">Lista post</section>
        </main>
    `;
}

// Funzione per generare il contenuto degli articoli
function generateArticlesHTML(articles) {
  return articles
    .map(
      (article) => `
        <article>
            <h2>${article.title}</h2>
            <p>${article.body}</p>
        </article>
    `
    )
    .join("");
}

function loadArticles() {
  fetch("articlepost.json")
    .then((response) => response.json())
    .then((data) => {
      const articlesSection = document.getElementById("articles-section");
      articlesSection.innerHTML = generateArticlesHTML(data);
    })
    .catch((error) =>
      console.error("Errore nel caricamento degli articoli:", error)
    );
}

loadArticles();

export { getMainHTML };
