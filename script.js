const regions = [
  "Todas",
  "Ródopes",
  "Tracia",
  "Sofía / Shopluk",
  "Pirin / Bansko",
  "Dobrudzha",
  "Costa del Mar Negro",
  "Danubio",
  "Suroeste búlgaro"
];

const dishes = [
  {
    name: "Cheverme",
    bg: "Чеверме",
    region: "Ródopes",
    ingredients: "cordero, sal, fuego de leña, hierbas de montaña",
    photo: "image-cheverme",
    desc: "Cordero entero asado lentamente sobre brasas y girado durante horas. Festivo, ceremonial y profundamente ligado a los Ródopes.",
    history: "Tradicionalmente aparece en celebraciones, bodas y encuentros familiares donde el fuego es el centro del ritual.",
    traditional: "Asado entero, servido con pan, ensaladas y vino local.",
    modern: "Baja temperatura, miel de montaña, tomillo silvestre, yogur ahumado y reducción de vino búlgaro."
  },
  {
    name: "Patatnik",
    bg: "Пататник",
    region: "Ródopes",
    ingredients: "patata, queso sirene, cebolla, hierbabuena, mantequilla",
    photo: "image-patatnik",
    desc: "Pastel rústico de patata rallada, dorado por fuera y tierno por dentro.",
    history: "Nace en las montañas, donde la patata y las hierbas sostuvieron una cocina humilde y poderosa.",
    traditional: "Preparado en sartén o placa, con hierbabuena y queso.",
    modern: "Corte fino, crema de sirene, aceite de hierbas y polvo de cebolla tostada."
  },
  {
    name: "Smilyanski fasul",
    bg: "Смилянски фасул",
    region: "Ródopes",
    ingredients: "alubias de Smilyan, pimiento, tomate, hierbas, cebolla",
    photo: "image-beans",
    desc: "Alubias grandes y cremosas, símbolo gastronómico del pueblo de Smilyan.",
    history: "Un producto protegido por la memoria local y la cocina de montaña.",
    traditional: "Guiso lento con verduras, hierbas y pan de pueblo.",
    modern: "Crema sedosa de alubias, aceite verde, crujiente de pan y pimiento ahumado."
  },
  {
    name: "Banitsa",
    bg: "Баница",
    region: "Sofía / Shopluk",
    ingredients: "masa filo, queso sirene, huevos, yogur, mantequilla",
    photo: "image-banitsa",
    desc: "Capas doradas y crujientes de masa filo con queso sirene.",
    history: "Desayuno, celebración y hogar: una receta que aparece en Año Nuevo y reuniones familiares.",
    traditional: "Servida caliente con yogur búlgaro.",
    modern: "Espiral individual, crema de yogur salado y miel ligera."
  },
  {
    name: "Shopska salata",
    bg: "Шопска салата",
    region: "Sofía / Shopluk",
    ingredients: "tomate, pepino, pimiento, cebolla, sirene, perejil",
    photo: "image-salad",
    desc: "Ensalada fresca y colorida coronada con queso sirene rallado.",
    history: "Icono nacional: sencilla, luminosa y ligada a la mesa de verano.",
    traditional: "Cortada gruesa, con sirene abundante y aceite.",
    modern: "Tomate marinado, espuma de sirene, pepino encurtido y aceite de hierbas."
  },
  {
    name: "Kavarma",
    bg: "Кавърма",
    region: "Tracia",
    ingredients: "carne, cebolla, tomate, vino, pimiento, especias",
    photo: "image-kavarma",
    desc: "Carne tierna cocinada en cazuela de barro con vino y verduras.",
    history: "Cocina de taberna, de invierno y de conversación larga.",
    traditional: "Servida humeante en barro, con pan para recoger la salsa.",
    modern: "Ragú concentrado, verduras glaseadas y reducción de mavrud."
  },
  {
    name: "Kapama",
    bg: "Капама",
    region: "Pirin / Bansko",
    ingredients: "varias carnes, arroz, col fermentada, vino, laurel",
    photo: "image-kapama",
    desc: "Plato de Bansko cocinado lentamente con carnes, arroz y col fermentada.",
    history: "Una receta de invierno donde el tiempo hace el trabajo más importante.",
    traditional: "Olla de barro sellada, cocción lenta y mesa abundante.",
    modern: "Terrina tibia, jugo reducido, col crujiente y aire de vino especiado."
  },
  {
    name: "Sarmi",
    bg: "Сарми",
    region: "Danubio",
    ingredients: "hojas de col o vid, arroz, carne, especias, yogur",
    photo: "image-sarmi",
    desc: "Rollitos rellenos, delicados y familiares, envueltos en col o vid.",
    history: "Receta de celebración compartida por generaciones y regiones.",
    traditional: "Cocidos lentamente y servidos con yogur.",
    modern: "Mini sarmi con salsa de yogur ahumado y aceite de eneldo."
  },
  {
    name: "Tarator",
    bg: "Таратор",
    region: "Costa del Mar Negro",
    ingredients: "yogur, pepino, ajo, eneldo, nueces, aceite",
    photo: "image-tarator",
    desc: "Sopa fría de yogur, pepino, ajo, nueces y eneldo.",
    history: "El sabor del verano búlgaro: fresco, ácido y limpio.",
    traditional: "Servido muy frío, ligero y directo.",
    modern: "Granizado de tarator, pepino comprimido y nuez tostada."
  },
  {
    name: "Pescado del Mar Negro",
    bg: "Черноморска риба",
    region: "Costa del Mar Negro",
    ingredients: "pescado fresco, limón, hierbas, vino blanco, sal marina",
    photo: "image-sea",
    desc: "Pescado a la parrilla con hierbas, limón y aire costero.",
    history: "La cocina búlgara también mira al mar: puertos, vino blanco y parrilla.",
    traditional: "A la brasa, con limón y ensalada fresca.",
    modern: "Pescado curado, beurre blanc búlgaro y hierbas marinas."
  },
  {
    name: "Dobruzhanska pitka",
    bg: "Добруджанска питка",
    region: "Dobrudzha",
    ingredients: "harina, levadura, yogur, huevos, mantequilla",
    photo: "image-bread",
    desc: "Pan ceremonial de Dobrudzha, tierra de trigo y mesas generosas.",
    history: "El pan como bienvenida, promesa y celebración.",
    traditional: "Pan grande, trenzado, compartido al centro.",
    modern: "Pan de masa madre, mantequilla tostada y sal de hierbas."
  },
  {
    name: "Zelnik",
    bg: "Зелник",
    region: "Suroeste búlgaro",
    ingredients: "masa, col, puerro, queso, hierbas",
    photo: "image-zelnik",
    desc: "Pastel salado relleno de verduras, profundo y artesanal.",
    history: "Receta de temporada, de hornos familiares y cocina rural.",
    traditional: "Horneado entero, servido en porciones generosas.",
    modern: "Láminas crujientes, crema de col asada y aceite de puerro."
  }
];

const state = { region: "Todas" };

const regionTabs = document.querySelector("#regionTabs");
const dishGrid = document.querySelector("#dishGrid");
const modernList = document.querySelector("#modernList");
const scrollLine = document.querySelector("#scrollLine");
const cursorLight = document.querySelector("#cursorLight");
const emberCanvas = document.querySelector("#emberCanvas");
const ctx = emberCanvas.getContext("2d");
const embers = [];

function renderTabs() {
  regionTabs.innerHTML = regions.map((region) => `
    <button class="region-tab ${region === state.region ? "is-active" : ""}" type="button" data-region="${region}">
      ${region}
    </button>
  `).join("");
}

function renderDishes() {
  const filtered = state.region === "Todas" ? dishes : dishes.filter((dish) => dish.region === state.region);
  dishGrid.innerHTML = filtered.map((dish) => `
    <article class="dish-card reveal">
      <div class="dish-photo ${dish.photo}">
        <span>${dish.region}</span>
      </div>
      <div class="dish-body">
        <p class="dish-region">${dish.region}</p>
        <h3>${dish.name}</h3>
        <strong>${dish.bg}</strong>
        <p>${dish.desc}</p>
        <dl>
          <div><dt>Ingredientes</dt><dd>${dish.ingredients}</dd></div>
          <div><dt>Historia</dt><dd>${dish.history}</dd></div>
          <div><dt>Tradicional</dt><dd>${dish.traditional}</dd></div>
          <div><dt>Moderna</dt><dd>${dish.modern}</dd></div>
        </dl>
      </div>
    </article>
  `).join("");
  observeReveals();
}

function renderModern() {
  modernList.innerHTML = dishes.slice(0, 8).map((dish, index) => `
    <article class="modern-row reveal">
      <span>${String(index + 1).padStart(2, "0")}</span>
      <div>
        <h3>${dish.name}</h3>
        <p>${dish.modern}</p>
      </div>
      <em>${dish.region}</em>
    </article>
  `).join("");
}

function observeReveals() {
  const items = document.querySelectorAll(".reveal");
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.14 });
  items.forEach((item) => observer.observe(item));
}

function setupCanvas() {
  const ratio = Math.min(window.devicePixelRatio || 1, 2);
  emberCanvas.width = window.innerWidth * ratio;
  emberCanvas.height = window.innerHeight * ratio;
  emberCanvas.style.width = `${window.innerWidth}px`;
  emberCanvas.style.height = `${window.innerHeight}px`;
  ctx.setTransform(ratio, 0, 0, ratio, 0, 0);
  embers.length = 0;
  for (let i = 0; i < 46; i += 1) {
    embers.push({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      r: Math.random() * 2 + 0.8,
      s: Math.random() * 0.45 + 0.12,
      a: Math.random() * 0.48 + 0.12
    });
  }
}

function drawEmbers() {
  ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
  embers.forEach((ember) => {
    ember.y -= ember.s;
    ember.x += Math.sin(ember.y / 45) * 0.16;
    if (ember.y < -10) {
      ember.y = window.innerHeight + 10;
      ember.x = Math.random() * window.innerWidth;
    }
    ctx.beginPath();
    ctx.fillStyle = `rgba(214, 132, 45, ${ember.a})`;
    ctx.arc(ember.x, ember.y, ember.r, 0, Math.PI * 2);
    ctx.fill();
  });
  requestAnimationFrame(drawEmbers);
}

function updateScroll() {
  const max = document.documentElement.scrollHeight - window.innerHeight;
  scrollLine.style.width = `${max > 0 ? (window.scrollY / max) * 100 : 0}%`;
}

document.addEventListener("click", (event) => {
  const tab = event.target.closest("[data-region]");
  if (!tab) return;
  state.region = tab.dataset.region;
  renderTabs();
  renderDishes();
});

document.addEventListener("pointermove", (event) => {
  cursorLight.style.opacity = "1";
  cursorLight.style.transform = `translate3d(${event.clientX - 160}px, ${event.clientY - 160}px, 0)`;
});

window.addEventListener("scroll", updateScroll, { passive: true });
window.addEventListener("resize", setupCanvas);

renderTabs();
renderDishes();
renderModern();
observeReveals();
setupCanvas();
drawEmbers();
updateScroll();
