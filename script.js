const books = [
  {
    id: "quijote",
    title: "Don Quijote de la Mancha",
    author: "Miguel de Cervantes",
    year: "1605",
    origin: "Espana",
    genre: "clasico",
    mood: "Idealismo, humor y aventura",
    cover: "cover-quixote",
    image: "assets/covers/quijote.jpg",
    art: "blade blade-a|blade blade-b",
    summary: "Una aventura luminosa sobre imaginacion, dignidad y el poder de mirar el mundo con otros ojos.",
    sample: "En una llanura encendida por la tarde, un lector descubre que todo camino puede convertirse en hazana cuando la imaginacion decide caminar delante. La realidad no desaparece: se vuelve mas amplia, mas peligrosa, mas humana."
  },
  {
    id: "pride",
    title: "Orgullo y prejuicio",
    author: "Jane Austen",
    year: "1813",
    origin: "Reino Unido",
    genre: "romance",
    mood: "Ingenio, clase y deseo",
    cover: "cover-pride",
    image: "assets/covers/pride.jpg",
    art: "art-moon",
    summary: "Una obra afilada y elegante sobre el amor, las apariencias y la inteligencia emocional.",
    sample: "La conversacion parecia un baile: cada respuesta avanzaba medio paso y cada silencio revelaba mas de lo que ocultaba. En aquella sala, el orgullo no era ruido, sino una forma delicada de defensa."
  },
  {
    id: "moby",
    title: "Moby-Dick",
    author: "Herman Melville",
    year: "1851",
    origin: "Estados Unidos",
    genre: "aventura",
    mood: "Oceano, obsesion y destino",
    cover: "cover-moby",
    image: "assets/covers/moby.jpg",
    art: "art-wave",
    summary: "Una travesia inmensa por el mar, la obsesion y las preguntas que no obedecen al hombre.",
    sample: "El barco crujia como si tambien recordara. Frente a la inmensidad azul, cada marinero llevaba una pregunta distinta, pero el capitan habia reducido el mundo entero a una sola sombra sobre el agua."
  },
  {
    id: "anna",
    title: "Anna Karenina",
    author: "Leon Tolstoi",
    year: "1877",
    origin: "Rusia",
    genre: "clasico",
    mood: "Pasion, sociedad y culpa",
    cover: "cover-anna",
    image: "assets/covers/anna.jpg",
    art: "art-rail",
    summary: "Una novela monumental sobre el deseo, la familia y la presion de las normas sociales.",
    sample: "El tren llego cubierto de nieve y murmullos. Entre abrigos oscuros y miradas educadas, una decision comenzo a formarse con la calma terrible de aquello que ya no puede deshacerse."
  },
  {
    id: "crime",
    title: "Crimen y castigo",
    author: "Fiodor Dostoievski",
    year: "1866",
    origin: "Rusia",
    genre: "existencial",
    mood: "Culpa, conciencia y redencion",
    cover: "cover-crime",
    image: "assets/covers/crime.jpg",
    art: "art-stairs",
    summary: "Un descenso psicologico a la culpa, la pobreza y la posibilidad de renacer.",
    sample: "La habitacion era estrecha, pero la idea ocupaba todos los rincones. Nadie perseguia todavia sus pasos, y aun asi cada escalon sonaba como una pregunta que exigia respuesta."
  },
  {
    id: "bovary",
    title: "Madame Bovary",
    author: "Gustave Flaubert",
    year: "1856",
    origin: "Francia",
    genre: "clasico",
    mood: "Deseo, belleza y desencanto",
    cover: "cover-bovary",
    image: "assets/covers/bovary.jpg",
    art: "art-flower",
    summary: "Una mirada precisa al deseo de vivir otra vida y al coste de confundir sueno con destino.",
    sample: "Las tardes caian con una elegancia insoportable. Cada objeto parecia prometer una vida mas intensa, y cada promesa, al tocarla, se convertia en el mismo silencio de siempre."
  },
  {
    id: "frank",
    title: "Frankenstein",
    author: "Mary Shelley",
    year: "1818",
    origin: "Reino Unido",
    genre: "existencial",
    mood: "Creacion, miedo y soledad",
    cover: "cover-frank",
    image: "assets/covers/frank.jpg",
    art: "art-bolt",
    summary: "Una vision adelantada sobre ciencia, responsabilidad y la necesidad de ser amado.",
    sample: "La chispa no ilumino solo la mesa: tambien revelo el rostro de una responsabilidad imposible. Crear vida era apenas el principio; mirarla a los ojos era la verdadera prueba."
  },
  {
    id: "jane",
    title: "Jane Eyre",
    author: "Charlotte Bronte",
    year: "1847",
    origin: "Reino Unido",
    genre: "romance",
    mood: "Independencia, misterio y fuego",
    cover: "cover-jane",
    image: "assets/covers/jane.jpg",
    art: "art-fire",
    summary: "Una historia intensa sobre autonomia, amor y la voz interior que se niega a apagarse.",
    sample: "La casa respiraba secretos por las paredes. Jane escucho el viento y supo que una vida digna no se mendiga: se afirma, incluso cuando el corazon tiembla."
  },
  {
    id: "gatsby",
    title: "El gran Gatsby",
    author: "F. Scott Fitzgerald",
    year: "1925",
    origin: "Estados Unidos",
    genre: "clasico",
    mood: "Lujo, nostalgia y espejismo",
    cover: "cover-gatsby",
    image: "assets/covers/gatsby.jpg",
    art: "art-eye",
    summary: "Una novela brillante sobre ambicion, amor idealizado y el resplandor fragil de una epoca.",
    sample: "La musica cruzaba el jardin como una promesa dorada. Bajo las luces, todos parecian haber llegado a algun lugar, salvo quien habia construido la fiesta para mirar hacia el pasado."
  },
  {
    id: "metamorphosis",
    title: "La metamorfosis",
    author: "Franz Kafka",
    year: "1915",
    origin: "Praga",
    genre: "existencial",
    mood: "Extrañeza, familia y absurdo",
    cover: "cover-metamorphosis",
    image: "assets/covers/metamorphosis.jpg",
    art: "art-shadow",
    summary: "Una pieza inolvidable sobre alienacion, identidad y la fragilidad del afecto familiar.",
    sample: "La mañana parecia normal solo desde fuera. Dentro de la habitacion, el cuerpo habia cambiado antes que la vida, y la vida tardaria muy poco en mostrar su verdadero rostro."
  },
  {
    id: "war",
    title: "Guerra y paz",
    author: "Leon Tolstoi",
    year: "1869",
    origin: "Rusia",
    genre: "clasico",
    mood: "Historia, familia y destino",
    cover: "cover-war",
    image: "assets/covers/war.jpg",
    art: "art-banner",
    summary: "Una panoramica inmensa sobre guerra, amor, sociedad y el movimiento secreto de la historia.",
    sample: "Los salones hablaban de honor mientras la nieve preparaba el campo de batalla. Nadie sabia todavia que la historia rara vez avanza como un ejercito: prefiere entrar por las casas."
  },
  {
    id: "solitude",
    title: "Cien anos de soledad",
    author: "Gabriel Garcia Marquez",
    year: "1967",
    origin: "Colombia",
    genre: "clasico",
    mood: "Memoria, familia y maravilla",
    cover: "cover-solitude",
    image: "assets/covers/solitude.jpg",
    art: "art-leaf",
    summary: "Una saga hipnotica donde la memoria familiar parece respirar con la misma fuerza que el clima.",
    sample: "El pueblo amanecia como si acabara de ser inventado. Los nombres volvian, los deseos volvian, y en cada casa la memoria trabajaba en silencio para confundir el principio con el regreso."
  }
];

const state = {
  filter: "todos",
  query: "",
  favorites: new Set(JSON.parse(localStorage.getItem("auroraFavorites") || "[]")),
  readerSize: 27
};

const bookGrid = document.querySelector("#bookGrid");
const searchInput = document.querySelector("#searchInput");
const totalBooks = document.querySelector("#totalBooks");
const totalFavorites = document.querySelector("#totalFavorites");
const favoritesList = document.querySelector("#favoritesList");
const readerTitle = document.querySelector("#readerTitle");
const readerMeta = document.querySelector("#readerMeta");
const readerText = document.querySelector("#readerText");
const readerProgress = document.querySelector("#readerProgress");
const readerPanel = document.querySelector("#readerPanel");
const ambientCanvas = document.querySelector("#ambientCanvas");
const cursorGlow = document.querySelector("#cursorGlow");
const scrollMeter = document.querySelector("#scrollMeter");
const coverModal = document.querySelector("#coverModal");
const coverModalImage = document.querySelector("#coverModalImage");
const coverModalTitle = document.querySelector("#coverModalTitle");
const coverModalMeta = document.querySelector("#coverModalMeta");
const coverModalRead = document.querySelector("#coverModalRead");
const canvasContext = ambientCanvas.getContext("2d");
const particles = [];
let animationFrameId;
let activeCoverId = "quijote";

function normalizeText(value) {
  return value
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
}

function getVisibleBooks() {
  const query = normalizeText(state.query);
  return books.filter((book) => {
    const matchesFilter = state.filter === "todos" || book.genre === state.filter;
    const haystack = normalizeText(`${book.title} ${book.author} ${book.origin} ${book.mood}`);
    return matchesFilter && haystack.includes(query);
  });
}

function artMarkup(book) {
  if (!book.art) return "";
  return book.art
    .split("|")
    .map((className) => `<span class="${className}"></span>`)
    .join("");
}

function renderBooks() {
  const visibleBooks = getVisibleBooks();
  bookGrid.innerHTML = visibleBooks.map((book) => {
    const isFavorite = state.favorites.has(book.id);
    return `
      <article class="book-card" data-id="${book.id}">
        <div class="book-cover real-cover ${book.cover}" data-cover="${book.id}" role="button" tabindex="0" aria-label="Ver portada real de ${book.title}">
          <span class="shine"></span>
          <img src="${book.image}" alt="Portada de ${book.title}" loading="lazy">
        </div>
        <div class="book-info">
          <h3>${book.title}</h3>
          <p class="book-meta">${book.author} · ${book.year} · ${book.origin}</p>
          <p class="book-summary">${book.summary}</p>
        </div>
        <div class="card-actions">
          <button class="read-button" type="button" data-read="${book.id}">Leer</button>
          <button class="favorite-button ${isFavorite ? "is-favorite" : ""}" type="button" data-favorite="${book.id}" aria-label="Guardar favorito">${isFavorite ? "★" : "☆"}</button>
        </div>
      </article>
    `;
  }).join("");

  if (!visibleBooks.length) {
    bookGrid.innerHTML = `<p class="empty-state">No hay resultados para esa busqueda.</p>`;
  }

  observeRevealItems();
}

function renderFavorites() {
  const favoriteBooks = books.filter((book) => state.favorites.has(book.id));
  totalFavorites.textContent = favoriteBooks.length;
  favoritesList.innerHTML = favoriteBooks.length
    ? favoriteBooks.map((book) => `<button class="favorite-pill" type="button" data-read="${book.id}">★ ${book.title}</button>`).join("")
    : `<p class="empty-state">Aun no hay favoritos guardados.</p>`;
}

function saveFavorites() {
  localStorage.setItem("auroraFavorites", JSON.stringify([...state.favorites]));
}

function openBook(id) {
  const book = books.find((item) => item.id === id);
  if (!book) return;

  readerTitle.textContent = book.title;
  readerMeta.textContent = `${book.author} · ${book.year} · ${book.mood}`;
  readerText.textContent = book.sample;
  readerProgress.style.width = `${Math.max(28, Math.min(92, book.sample.length / 3.6))}%`;
  readerPanel.classList.remove("turning");
  window.requestAnimationFrame(() => {
    readerPanel.classList.add("turning");
  });
  document.querySelector("#lectura").scrollIntoView({ behavior: "smooth", block: "start" });
}

function openCoverModal(id) {
  const book = books.find((item) => item.id === id);
  if (!book) return;

  activeCoverId = id;
  coverModalImage.src = book.image;
  coverModalImage.alt = `Portada de ${book.title}`;
  coverModalTitle.textContent = book.title;
  coverModalMeta.textContent = `${book.author} · ${book.year} · ${book.origin}`;
  coverModal.classList.add("is-open");
  coverModal.setAttribute("aria-hidden", "false");
}

function closeCoverModal() {
  coverModal.classList.remove("is-open");
  coverModal.setAttribute("aria-hidden", "true");
}

function toggleFavorite(id) {
  if (state.favorites.has(id)) {
    state.favorites.delete(id);
  } else {
    state.favorites.add(id);
  }
  saveFavorites();
  if (state.favorites.has(id)) {
    createSparkles();
  }
  renderBooks();
  renderFavorites();
}

function setupAmbientCanvas() {
  const ratio = Math.min(window.devicePixelRatio || 1, 2);
  ambientCanvas.width = Math.floor(window.innerWidth * ratio);
  ambientCanvas.height = Math.floor(window.innerHeight * ratio);
  ambientCanvas.style.width = `${window.innerWidth}px`;
  ambientCanvas.style.height = `${window.innerHeight}px`;
  canvasContext.setTransform(ratio, 0, 0, ratio, 0, 0);

  particles.length = 0;
  const count = Math.min(58, Math.max(28, Math.floor(window.innerWidth / 24)));
  for (let index = 0; index < count; index += 1) {
    particles.push({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      radius: Math.random() * 2.4 + 0.6,
      speed: Math.random() * 0.32 + 0.08,
      alpha: Math.random() * 0.28 + 0.08
    });
  }
}

function drawAmbientCanvas() {
  canvasContext.clearRect(0, 0, window.innerWidth, window.innerHeight);
  particles.forEach((particle) => {
    particle.y -= particle.speed;
    particle.x += Math.sin((particle.y + particle.radius) / 42) * 0.18;

    if (particle.y < -12) {
      particle.y = window.innerHeight + 12;
      particle.x = Math.random() * window.innerWidth;
    }

    canvasContext.beginPath();
    canvasContext.fillStyle = `rgba(181, 131, 54, ${particle.alpha})`;
    canvasContext.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
    canvasContext.fill();
  });

  animationFrameId = window.requestAnimationFrame(drawAmbientCanvas);
}

function updateScrollMeter() {
  const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
  const progress = maxScroll > 0 ? (window.scrollY / maxScroll) * 100 : 0;
  scrollMeter.style.width = `${progress}%`;
}

function createSparkles() {
  const centerX = window.innerWidth - 72;
  const centerY = 94;
  for (let index = 0; index < 14; index += 1) {
    const sparkle = document.createElement("span");
    const angle = (Math.PI * 2 * index) / 14;
    const distance = 34 + Math.random() * 36;
    sparkle.className = "sparkle";
    sparkle.style.left = `${centerX}px`;
    sparkle.style.top = `${centerY}px`;
    sparkle.style.setProperty("--spark-x", `${Math.cos(angle) * distance}px`);
    sparkle.style.setProperty("--spark-y", `${Math.sin(angle) * distance}px`);
    document.body.appendChild(sparkle);
    window.setTimeout(() => sparkle.remove(), 760);
  }
}

function observeRevealItems() {
  const revealItems = document.querySelectorAll(".book-card, .section-heading, .reader-layout, .favorites-list");
  revealItems.forEach((item) => item.classList.add("reveal"));

  if (!("IntersectionObserver" in window)) {
    revealItems.forEach((item) => item.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  revealItems.forEach((item) => observer.observe(item));
}

function setupCardTilt() {
  document.addEventListener("pointermove", (event) => {
    cursorGlow.style.opacity = "1";
    cursorGlow.style.transform = `translate3d(${event.clientX - 110}px, ${event.clientY - 110}px, 0)`;

    const card = event.target.closest(".book-card");
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    const rotateX = ((y / rect.height) - 0.5) * -8;
    const rotateY = ((x / rect.width) - 0.5) * 8;
    card.style.transform = `translateY(-6px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    card.style.setProperty("--spot-x", `${(x / rect.width) * 100}%`);
    card.style.setProperty("--spot-y", `${(y / rect.height) * 100}%`);
  });

  document.addEventListener("pointerleave", () => {
    cursorGlow.style.opacity = "0";
  });

  document.addEventListener("pointerout", (event) => {
    const card = event.target.closest(".book-card");
    if (card && !card.contains(event.relatedTarget)) {
      card.style.transform = "";
    }
  });
}

document.addEventListener("click", (event) => {
  const readButton = event.target.closest("[data-read]");
  const favoriteButton = event.target.closest("[data-favorite]");
  const filterButton = event.target.closest("[data-filter]");
  const coverButton = event.target.closest("[data-cover]");
  const closeCoverButton = event.target.closest("[data-close-cover]");

  if (readButton) {
    openBook(readButton.dataset.read);
  }

  if (coverButton && !favoriteButton && !readButton) {
    openCoverModal(coverButton.dataset.cover);
  }

  if (closeCoverButton) {
    closeCoverModal();
  }

  if (favoriteButton) {
    toggleFavorite(favoriteButton.dataset.favorite);
  }

  if (filterButton) {
    state.filter = filterButton.dataset.filter;
    document.querySelectorAll("[data-filter]").forEach((button) => {
      button.classList.toggle("is-active", button === filterButton);
    });
    renderBooks();
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && coverModal.classList.contains("is-open")) {
    closeCoverModal();
  }

  if ((event.key === "Enter" || event.key === " ") && event.target.matches("[data-cover]")) {
    event.preventDefault();
    openCoverModal(event.target.dataset.cover);
  }
});

coverModalRead.addEventListener("click", () => {
  closeCoverModal();
  openBook(activeCoverId);
});

searchInput.addEventListener("input", (event) => {
  state.query = event.target.value;
  renderBooks();
});

document.querySelector("#themeToggle").addEventListener("click", () => {
  document.body.classList.toggle("is-dark");
});

document.querySelector("#openFeatured").addEventListener("click", () => {
  openBook("quijote");
});

document.querySelectorAll(".size-control").forEach((button) => {
  button.addEventListener("click", () => {
    state.readerSize = Math.max(21, Math.min(34, state.readerSize + Number(button.dataset.size) * 2));
    readerPanel.style.setProperty("--reader-size", `${state.readerSize}px`);
  });
});

document.querySelector("#focusMode").addEventListener("click", () => {
  readerPanel.classList.toggle("is-focus");
});

window.addEventListener("resize", () => {
  window.cancelAnimationFrame(animationFrameId);
  setupAmbientCanvas();
  drawAmbientCanvas();
});

window.addEventListener("scroll", updateScrollMeter, { passive: true });

totalBooks.textContent = books.length;
setupAmbientCanvas();
drawAmbientCanvas();
setupCardTilt();
updateScrollMeter();
renderBooks();
renderFavorites();
