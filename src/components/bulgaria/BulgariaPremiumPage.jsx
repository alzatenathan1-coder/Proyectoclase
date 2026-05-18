'use client';

import { useEffect, useMemo, useState } from 'react';
import {
  ArrowUpRight,
  AtSign,
  CalendarDays,
  ChevronRight,
  Clock3,
  Mail,
  MapPinned,
  Menu,
  Sparkles,
  Utensils,
  Wine,
  X,
} from 'lucide-react';
import styles from './BulgariaPremiumPage.module.css';

const imageBase = '/assets/images/bulgaria/';

const images = {
  hero: `${imageBase}hero-bulgarian-feast.png`,
  mavrud: `${imageBase}mavrud-wine-luxury.png`,
  meshana: `${imageBase}meshana-skara-luxury.png`,
  kebapche: `${imageBase}kebapche-luxury.png`,
  kyufte: `${imageBase}kyufte-luxury.png`,
  cheverme: `${imageBase}cheverme-luxury.png`,
  shishcheta: `${imageBase}shishcheta-luxury.png`,
  ternera: `${imageBase}ternera-hierbas-balcanicas-luxury.png?v=2`,
  parzhola: `${imageBase}parzhola-skara-luxury.png`,
  costillas: `${imageBase}costillas-miel-luxury.png?v=2`,
  costillasBrasa: `${imageBase}costillas-brasa-luxury.png?v=1`,
  karnache: `${imageBase}karnache-luxury.png`,
  banitsa: `${imageBase}banitsa-luxury.png`,
  shopska: `${imageBase}shopska-salata-luxury.png`,
  kavarma: `${imageBase}kavarma-luxury.png`,
  gyuvech: `${imageBase}gyuvech-luxury.png`,
  sarmi: `${imageBase}sarmi-luxury.png`,
  tarator: `${imageBase}tarator-luxury.png`,
  patatnik: `${imageBase}patatnik-luxury.png`,
  kapama: `${imageBase}kapama-luxury.png`,
  lyutenitsa: `${imageBase}lyutenitsa-luxury.png`,
  sirene: `${imageBase}sirene-po-shopski-luxury.png`,
  garash: `${imageBase}garash-cake-luxury.png`,
  baklava: `${imageBase}baklava-luxury.png`,
  tikvenik: `${imageBase}tikvenik-luxury.png`,
  roseJam: `${imageBase}rose-jam-luxury.png`,
  torta: `${imageBase}torta-biscuit-luxury.png`,
  yogurtHoney: `${imageBase}yogurt-honey-walnuts-luxury.png`,
  roseDessert: `${imageBase}rose-yogurt-dessert-luxury.png`,
  yogurtIcecream: `${imageBase}yogurt-icecream-rose-luxury.png`,
};

const navItems = [
  ['Experiencia', '#experiencia'],
  ['Fuego', '#fuego'],
  ['Tradicion', '#tradicion'],
  ['Alta cocina', '#alta-cocina'],
  ['Postres', '#postres'],
  ['Mavrud', '#mavrud'],
  ['Mapa', '#mapa'],
  ['Reservas', '#reservas'],
];

const fireDishes = [
  {
    name: 'Parrillada mixta búlgara',
    region: 'Tabernas de Tracia y Sofía',
    image: images.meshana,
    description: 'Meshana skara con kebabche, kufte, chuletas y embutidos curados sobre brasa viva.',
    pairing: 'Mavrud joven con fruta negra y especias.',
  },
  {
    name: 'Costillas a la brasa',
    region: 'Ródope y Pirin',
    image: images.costillasBrasa,
    description: 'Costillas glaseadas con miel búlgara, ajedrea, humo de madera y pimienta negra.',
    pairing: 'Mavrud reserva con roble discreto.',
  },
  {
    name: 'Kufte',
    region: 'Suroeste búlgaro',
    image: images.kyufte,
    description: 'Albóndiga especiada, jugosa y marcada al fuego, servida con lyutenitsa y pan artesanal.',
    pairing: 'Rubin búlgaro fresco y mineral.',
  },
  {
    name: 'Kebabche',
    region: 'Tracia',
    image: images.kebapche,
    description: 'Kebabche tradicional a la brasa, especiado con comino y pimienta negra.',
    pairing: 'Mavrud de Plovdiv con tanino sedoso.',
  },
  {
    name: 'Cordero asado',
    region: 'Montañas Ródope',
    image: images.cheverme,
    description: 'Cordero lento, piel dorada, hierbas silvestres y jugos reducidos al borde del fuego.',
    pairing: 'Mavrud viejo con tierra, ciruela y cuero fino.',
  },
  {
    name: 'Ternera madurada',
    region: 'Sofía contemporánea',
    image: images.ternera,
    description: 'Cortes maduros con hierbas balcánicas, brasas limpias y mantequilla de ajedrea.',
    pairing: 'Melnik 55 con fruta madura.',
  },
  {
    name: 'Carnes de montaña',
    region: 'Pirin',
    image: images.karnache,
    description: 'Recetas regionales con embutidos, carne curada, pan caliente y pimientos asados.',
    pairing: 'Cabernet búlgaro de valle alto.',
  },
];

const traditionalDishes = [
  {
    name: 'Banitsa',
    region: 'Dobrudja',
    image: images.banitsa,
    origin: 'Masa filo, sirene, yogur y mantequilla.',
    description: 'Capas crujientes y doradas que convierten el desayuno familiar en ceremonia.',
  },
  {
    name: 'Shopska salata',
    region: 'Sofía y región occidental',
    image: images.shopska,
    origin: 'Tomate, pepino, pimiento, cebolla y sirene.',
    description: 'Fresca, mineral y luminosa, con el blanco del queso como firma nacional.',
  },
  {
    name: 'Zhatvarska salata',
    region: 'Campos de Dobrudja',
    image: images.lyutenitsa,
    origin: 'Verduras de cosecha, pimientos asados y hierbas.',
    description: 'Ensalada de campo inspirada en la cosecha, directa, vegetal y generosa.',
  },
  {
    name: 'Kavarma',
    region: 'Tracia',
    image: images.kavarma,
    origin: 'Carne, vino, cebolla, tomate y cazuela cerámica.',
    description: 'Guiso meloso de taberna, cocinado hasta que el vino abraza la carne.',
  },
  {
    name: 'Gyuvech',
    region: 'Bulgaria central',
    image: images.gyuvech,
    origin: 'Hortalizas, carne, especias y horno lento.',
    description: 'Un jardín de temporada servido en barro, con profundidad rural y perfume de horno.',
  },
  {
    name: 'Sarmi',
    region: 'Danubio búlgaro',
    image: images.sarmi,
    origin: 'Hojas de col o vid, arroz, carne y yogur.',
    description: 'Pequeños paquetes de invierno que guardan arroz, especias y memoria familiar.',
  },
  {
    name: 'Tarator',
    region: 'Costa del Mar Negro',
    image: images.tarator,
    origin: 'Yogur búlgaro, pepino, ajo, eneldo y nueces.',
    description: 'Sopa fría de verano: blanca, ácida, fresca y sutilmente cremosa.',
  },
  {
    name: 'Patatnik',
    region: 'Ródope',
    image: images.patatnik,
    origin: 'Patata, sirene, mantequilla y hierbas de montaña.',
    description: 'Pastel rústico de patata con borde dorado y corazón suave.',
  },
  {
    name: 'Kapama',
    region: 'Pirin',
    image: images.kapama,
    origin: 'Carnes, col fermentada, arroz, vino y laurel.',
    description: 'Olla sellada de Bansko, lenta y profunda como una noche de nieve.',
  },
  {
    name: 'Meshana skara',
    region: 'Todo el país',
    image: images.meshana,
    origin: 'Kebabche, kufte, karnache, chuletas y lyutenitsa.',
    description: 'La parrilla compartida como lenguaje de fiesta, mercado y taberna.',
  },
];

const modernDishes = [
  {
    name: 'Cordero de montaña con reducción de Mavrud',
    image: images.cheverme,
    detail: 'Jugo oscuro, hierbas Ródope, raíz asada y sal ahumada.',
  },
  {
    name: 'Ternera madurada con hierbas balcánicas',
    image: images.ternera,
    detail: 'Corte limpio, mantequilla de ajedrea, pimiento quemado y fondo de vino.',
  },
  {
    name: 'Banitsa crujiente de autor',
    image: images.banitsa,
    detail: 'Filo ultrafino, sirene cremoso, miel de montaña y polvo de nuez.',
  },
  {
    name: 'Kavarma gourmet en cazuela cerámica',
    image: images.kavarma,
    detail: 'Cocción lenta, reducción brillante y vajilla artesanal de tonos tierra.',
  },
  {
    name: 'Shopska salata deconstruida',
    image: images.shopska,
    detail: 'Tomate maduro, espuma de sirene, pepino frío y aceite verde de perejil.',
  },
  {
    name: 'Costillas glaseadas con miel búlgara',
    image: images.costillas,
    detail: 'Especias dulces, humo suave, ajo negro y acabado de oro envejecido.',
  },
];

const desserts = [
  {
    name: 'Tarta Garash',
    image: images.garash,
    description: 'Chocolate, nuez y crema oscura en clave de salón europeo.',
  },
  {
    name: 'Baklava búlgara',
    image: images.baklava,
    description: 'Miel, nueces y capas finas de masa con brillo cálido.',
  },
  {
    name: 'Tikvenik',
    image: images.tikvenik,
    description: 'Calabaza, canela y filo dorado, como otoño envuelto en hojaldre.',
  },
  {
    name: 'Mermelada de rosas',
    image: images.roseJam,
    description: 'La rosa de Kazanlak convertida en perfume comestible.',
  },
  {
    name: 'Tartas artesanales modernas',
    image: images.torta,
    description: 'Pastelería contemporánea con nueces, cacao y yogur búlgaro.',
  },
  {
    name: 'Yogur, miel y nueces',
    image: images.yogurtHoney,
    description: 'Acidez láctea, miel de montaña y textura de nuez tostada.',
  },
  {
    name: 'Rosa de Kazanlak',
    image: images.roseDessert,
    description: 'Postre floral con yogur, fruta roja y pétalos delicados.',
  },
];

const regions = [
  {
    id: 'sofia',
    name: 'Sofía y región occidental',
    path: 'M102 206 L208 174 L262 224 L228 304 L124 308 Z',
    marker: [174, 246],
    dishes: 'Shopska salata, sirene po shopski, kufte',
    wines: 'Tintos ligeros y rakia artesanal',
    ingredients: 'Tomate, pepino, sirene, perejil, pan de taberna',
    specialty: 'Cocina urbana con memoria rural y producto de mercado.',
  },
  {
    id: 'plovdiv',
    name: 'Plovdiv y Tracia',
    path: 'M288 206 L468 176 L566 246 L498 340 L322 312 Z',
    marker: [418, 256],
    dishes: 'Mavrud, kavarma, cordero, gyuvech',
    wines: 'Mavrud, Rubin y tintos tracios',
    ingredients: 'Vino tinto, pimiento, tomate, cebolla, ajedrea',
    specialty: 'El corazón vinícola: fuego, cazuela y copa profunda.',
  },
  {
    id: 'rhodope',
    name: 'Rhodopes',
    path: 'M302 330 L520 328 L626 414 L540 486 L326 466 Z',
    marker: [458, 404],
    dishes: 'Patatnik, cheverme, Rhodope klin',
    wines: 'Tintos de montaña y rakia de ciruela',
    ingredients: 'Patata, cordero, mantequilla, hierbas silvestres',
    specialty: 'Cocina de nieve, humo, lácteos y hospitalidad de montaña.',
  },
  {
    id: 'pirin',
    name: 'Pirin',
    path: 'M116 322 L286 318 L320 456 L210 500 L90 420 Z',
    marker: [218, 406],
    dishes: 'Kapama, sarmi, carnes de invierno',
    wines: 'Melnik y tintos del suroeste',
    ingredients: 'Col fermentada, arroz, carne, laurel, vino',
    specialty: 'Ollas lentas, tabernas de Bansko y recetas de refugio.',
  },
  {
    id: 'rila',
    name: 'Rila',
    path: 'M206 306 L318 298 L354 374 L304 446 L220 412 Z',
    marker: [286, 362],
    dishes: 'Bob chorba, pan ritual, trucha de montaña',
    wines: 'Blancos frescos y rakia de miel',
    ingredients: 'Miel, yogur, trucha, hierbas, pan',
    specialty: 'Una mesa sobria y espiritual alrededor del monasterio.',
  },
  {
    id: 'varna',
    name: 'Varna y costa del Mar Negro',
    path: 'M642 136 L788 126 L836 260 L760 330 L622 250 Z',
    marker: [742, 220],
    dishes: 'Pescado a la brasa, tarator, mejillones',
    wines: 'Blancos del Mar Negro',
    ingredients: 'Pescado, pepino, yogur, eneldo, sal marina',
    specialty: 'Frescura costera, acidez limpia y tardes de puerto.',
  },
  {
    id: 'burgas',
    name: 'Burgas',
    path: 'M604 272 L756 330 L786 456 L636 468 L542 372 Z',
    marker: [674, 386],
    dishes: 'Mejillones, pescados, ensaladas frescas',
    wines: 'Blancos salinos y rosados',
    ingredients: 'Mejillones, tomate, hierbas, ajo, aceite',
    specialty: 'Cocina marina con un punto mediterráneo y balcánico.',
  },
  {
    id: 'tarnovo',
    name: 'Veliko Tarnovo',
    path: 'M292 116 L476 98 L548 170 L448 210 L284 184 Z',
    marker: [404, 154],
    dishes: 'Guisos, panes festivos, carnes asadas',
    wines: 'Tintos del centro norte',
    ingredients: 'Pan, cerdo, setas, cebolla, especias secas',
    specialty: 'Memoria imperial, fortalezas y mesas de celebración.',
  },
  {
    id: 'dobruja',
    name: 'Dobruja',
    path: 'M488 88 L674 92 L644 238 L548 234 L466 154 Z',
    marker: [574, 150],
    dishes: 'Banitsa, panes, platos rurales',
    wines: 'Blancos aromáticos y tintos jóvenes',
    ingredients: 'Trigo, queso, huevos, yogur, mantequilla',
    specialty: 'El granero búlgaro: harina, pan y abundancia dorada.',
  },
  {
    id: 'kazanlak',
    name: 'Kazanlak y Valle de las Rosas',
    path: 'M354 208 L502 206 L548 284 L450 326 L338 284 Z',
    marker: [452, 270],
    dishes: 'Mermelada de rosas, postres florales, yogur con miel',
    wines: 'Tintos tracios y licores de rosa',
    ingredients: 'Rosa búlgara, miel, nueces, fruta, yogur',
    specialty: 'La Bulgaria perfumada: pétalo, dulzor y memoria familiar.',
  },
];

const ingredients = [
  ['Yogur búlgaro', images.yogurtHoney],
  ['Queso sirene', images.sirene],
  ['Kashkaval', images.banitsa],
  ['Rosa búlgara', images.roseJam],
  ['Miel', images.yogurtHoney],
  ['Nueces', images.garash],
  ['Pimientos asados', images.lyutenitsa],
  ['Tomates', images.shopska],
  ['Hierbas silvestres', images.patatnik],
  ['Carne de cordero', images.cheverme],
  ['Vino Mavrud', images.mavrud],
];

const tastingMenu = [
  ['Aperitivo', 'Banitsa mini crujiente con queso sirene'],
  ['Entrada', 'Shopska salata reinterpretada con aceite verde'],
  ['Plato de fuego', 'Kebabche y kufte premium a la brasa'],
  ['Principal', 'Cordero con reducción de Mavrud'],
  ['Segundo principal', 'Kavarma gourmet en cazuela de autor'],
  ['Prepostre', 'Mermelada de rosas con yogur búlgaro'],
  ['Postre', 'Tarta Garash con nueces y chocolate'],
  ['Maridaje', 'Selección de vinos búlgaros con protagonista Mavrud'],
];

function DishCard({ dish, mode = 'default' }) {
  return (
    <article className={`${styles.dishCard} ${mode === 'wide' ? styles.dishCardWide : ''}`} data-reveal>
      <figure>
        <img src={dish.image} alt={dish.name} loading="lazy" />
      </figure>
      <div className={styles.dishCardBody}>
        <span>{dish.region}</span>
        <h3>{dish.name}</h3>
        <p>{dish.description}</p>
        {dish.origin ? <small>{dish.origin}</small> : null}
        {dish.pairing ? (
          <div className={styles.pairing}>
            <Wine aria-hidden="true" size={16} />
            <strong>{dish.pairing}</strong>
          </div>
        ) : null}
      </div>
    </article>
  );
}

export default function BulgariaPremiumPage() {
  const [activeRegion, setActiveRegion] = useState(regions[1]);
  const [menuOpen, setMenuOpen] = useState(false);

  const schema = useMemo(
    () => ({
      '@context': 'https://schema.org',
      '@type': 'Restaurant',
      name: 'Sabor de Bulgaria',
      servesCuisine: ['Bulgarian', 'Balkan', 'Modern European'],
      description:
        'Experiencia premium de gastronomia bulgara tradicional y moderna con vino Mavrud, parrilla, postres y mapa gastronomico de Bulgaria.',
      url: '/paises/bulgaria',
      image: images.hero,
      menu: '/paises/bulgaria#menu-degustacion',
      acceptsReservations: true,
      priceRange: '$$$$',
    }),
    [],
  );

  useEffect(() => {
    const revealNodes = Array.from(document.querySelectorAll('[data-reveal]'));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.setAttribute('data-visible', 'true');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.14, rootMargin: '0px 0px -8% 0px' },
    );

    revealNodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, []);

  return (
    <main className={styles.page}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <header className={styles.header}>
        <a className={styles.brand} href="/" aria-label="Volver a Comidas del Mundo">
          <span className={styles.brandMark}>SB</span>
          <span>
            <strong>Sabor de Bulgaria</strong>
            <small>Raíces & Fuego</small>
          </span>
        </a>

        <nav className={`${styles.nav} ${menuOpen ? styles.navOpen : ''}`} aria-label="Navegación principal">
          {navItems.map(([label, href]) => (
            <a key={href} href={href} onClick={() => setMenuOpen(false)}>
              {label}
            </a>
          ))}
        </nav>

        <a className={styles.reserveButton} href="#reservas">
          <CalendarDays aria-hidden="true" size={18} />
          <span>Reservar</span>
        </a>

        <button
          className={styles.menuButton}
          type="button"
          aria-label={menuOpen ? 'Cerrar navegación' : 'Abrir navegación'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((current) => !current)}
        >
          {menuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </button>
      </header>

      <section className={styles.hero} id="inicio">
        <img className={styles.heroImage} src={images.hero} alt="Mesa contemporánea de gastronomía búlgara con parrilla, vino, pan y ensaladas" />
        <div className={styles.heroShade} aria-hidden="true" />
        <div className={styles.heroInner} data-reveal>
          <p className={styles.eyebrow}>Bulgarian Gastronomy Experience</p>
          <h1>Gastronomía búlgara elevada al arte</h1>
          <p>
            Una experiencia entre tradición, fuego, montaña, vino y cocina moderna.
          </p>
          <div className={styles.heroActions}>
            <a className={styles.primaryCta} href="#fuego">
              <Utensils aria-hidden="true" size={19} />
              <span>Explorar el menú</span>
            </a>
            <a className={styles.secondaryCta} href="#mapa">
              <MapPinned aria-hidden="true" size={19} />
              <span>Descubrir el mapa gastronómico</span>
            </a>
          </div>
        </div>
        <aside className={styles.heroNote} data-reveal>
          <Wine aria-hidden="true" size={20} />
          <span>Mavrud, sirene, brasas y rosa búlgara en una mesa de alta gama.</span>
        </aside>
      </section>

      <section className={`${styles.section} ${styles.introSection}`} id="experiencia">
        <div className={styles.introGrid}>
          <div className={styles.sectionHeading} data-reveal>
            <p className={styles.eyebrow}>Tradición balcánica, mirada contemporánea</p>
            <h2>Una cocina de producto, fuego, hierbas, lácteos, carnes y vino.</h2>
          </div>
          <div className={styles.introCopy} data-reveal>
            <p>
              La cocina búlgara nace en un cruce de influencias balcánicas, tracias, otomanas, mediterráneas y de montaña. Su carácter se reconoce en el pan recién abierto, en el yogur vivo, en el queso sirene, en el pimiento asado y en las brasas que perfuman la mesa.
            </p>
            <p>
              Esta propuesta presenta Bulgaria como una gastronomía de alta gama: recetas familiares reinterpretadas con estética editorial, vajilla artesanal, vinos profundos y una emoción cálida que une campo, monasterio, valle, costa y ciudad.
            </p>
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.fireSection}`} id="fuego">
        <div className={styles.sectionHeading} data-reveal>
          <p className={styles.eyebrow}>Cocina al fuego</p>
          <h2>Brasas búlgaras, humo noble y vinos de carácter.</h2>
          <p>
            Una galería de parrilla premium donde cada plato combina región, textura, aroma y maridaje.
          </p>
        </div>
        <div className={styles.fireGrid}>
          {fireDishes.map((dish) => (
            <DishCard key={dish.name} dish={dish} />
          ))}
        </div>
      </section>

      <section className={`${styles.section} ${styles.traditionSection}`} id="tradicion">
        <div className={styles.sectionHeading} data-reveal>
          <p className={styles.eyebrow}>Tradición búlgara</p>
          <h2>Platos que cuentan territorio, familia y estación.</h2>
          <p>
            Banitsa, shopska salata, kavarma, gyuvech, sarmi, tarator, patatnik, kapama y meshana skara como experiencia cultural completa.
          </p>
        </div>
        <div className={styles.traditionGrid}>
          {traditionalDishes.map((dish) => (
            <DishCard key={dish.name} dish={dish} mode="wide" />
          ))}
        </div>
      </section>

      <section className={`${styles.section} ${styles.modernSection}`} id="alta-cocina">
        <div className={styles.modernIntro} data-reveal>
          <p className={styles.eyebrow}>Alta cocina búlgara</p>
          <h2>La memoria se afina, no desaparece.</h2>
          <p>
            Emplatados artísticos, fondos oscuros, detalles dorados y luz suave para convertir la tradición en una carta de restaurante de lujo.
          </p>
        </div>
        <div className={styles.modernGrid}>
          {modernDishes.map((dish, index) => (
            <article className={styles.modernTile} key={dish.name} data-reveal>
              <img src={dish.image} alt={dish.name} loading="lazy" />
              <div>
                <span>0{index + 1}</span>
                <h3>{dish.name}</h3>
                <p>{dish.detail}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className={`${styles.section} ${styles.dessertSection}`} id="postres">
        <div className={styles.sectionHeading} data-reveal>
          <p className={styles.eyebrow}>Postres búlgaros</p>
          <h2>Rosa, nuez, miel, cacao, calabaza y yogur.</h2>
          <p>
            Una colección dulce inspirada en la rosa búlgara, las nueces, la miel, el cacao, la calabaza y la tradición familiar.
          </p>
        </div>
        <div className={styles.dessertGrid}>
          {desserts.map((dessert) => (
            <article className={styles.dessertCard} key={dessert.name} data-reveal>
              <img src={dessert.image} alt={dessert.name} loading="lazy" />
              <div>
                <h3>{dessert.name}</h3>
                <p>{dessert.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className={`${styles.section} ${styles.mavrudSection}`} id="mavrud">
        <div className={styles.mavrudMedia} data-reveal>
          <img src={images.mavrud} alt="Copa de vino tinto Mavrud sobre mesa oscura" loading="lazy" />
        </div>
        <div className={styles.mavrudCopy} data-reveal>
          <p className={styles.eyebrow}>Vino Mavrud</p>
          <h2>Mavrud, el alma tinta de Bulgaria.</h2>
          <p>
            Un vino poderoso, profundo y ancestral, perfecto para acompañar carnes a la brasa y platos tradicionales de montaña.
          </p>
          <div className={styles.tastingNotes}>
            {['Origen tracio', 'Rojo profundo', 'Frutos negros', 'Especias', 'Roble', 'Tierra húmeda'].map((note) => (
              <span key={note}>{note}</span>
            ))}
          </div>
          <p>
            Su estructura acompaña cordero, ternera, costillas, kavarma y quesos curados. En la web funciona como eje emocional: copa oscura, mesa de carbón, luz baja y una sensación de tiempo antiguo.
          </p>
        </div>
      </section>

      <section className={`${styles.section} ${styles.mapSection}`} id="mapa">
        <div className={styles.sectionHeading} data-reveal>
          <p className={styles.eyebrow}>Mapa gastronómico de Bulgaria</p>
          <h2>Regiones, vinos, ingredientes y especialidades locales.</h2>
        </div>
        <div className={styles.mapLayout}>
          <div className={styles.mapPanel} data-reveal>
            <svg viewBox="0 0 900 520" role="img" aria-label="Mapa interactivo gastronómico de Bulgaria">
              <path
                className={styles.mapSilhouette}
                d="M78 238 C118 126 244 78 422 82 C550 86 640 70 764 118 C844 148 862 250 818 344 C760 470 650 498 514 484 C398 470 322 512 194 462 C96 424 44 336 78 238 Z"
              />
              {regions.map((region) => (
                <path
                  key={region.id}
                  className={`${styles.regionPath} ${activeRegion.id === region.id ? styles.regionActive : ''}`}
                  d={region.path}
                  tabIndex={0}
                  role="button"
                  aria-label={region.name}
                  onClick={() => setActiveRegion(region)}
                  onMouseEnter={() => setActiveRegion(region)}
                  onKeyDown={(event) => {
                    if (event.key === 'Enter' || event.key === ' ') {
                      event.preventDefault();
                      setActiveRegion(region);
                    }
                  }}
                />
              ))}
              {regions.map((region) => (
                <g key={`${region.id}-label`} className={styles.regionMarker}>
                  <circle cx={region.marker[0]} cy={region.marker[1]} r="5" />
                  <text x={region.marker[0] + 12} y={region.marker[1] + 5}>
                    {region.name.split(' ')[0]}
                  </text>
                </g>
              ))}
            </svg>
          </div>
          <article className={styles.regionCard} data-reveal>
            <span>Región activa</span>
            <h3>{activeRegion.name}</h3>
            <dl>
              <div>
                <dt>Platos</dt>
                <dd>{activeRegion.dishes}</dd>
              </div>
              <div>
                <dt>Vinos</dt>
                <dd>{activeRegion.wines}</dd>
              </div>
              <div>
                <dt>Ingredientes</dt>
                <dd>{activeRegion.ingredients}</dd>
              </div>
              <div>
                <dt>Especialidad</dt>
                <dd>{activeRegion.specialty}</dd>
              </div>
            </dl>
          </article>
        </div>
        <div className={styles.regionButtons} data-reveal>
          {regions.map((region) => (
            <button
              key={region.id}
              type="button"
              className={activeRegion.id === region.id ? styles.regionButtonActive : ''}
              aria-pressed={activeRegion.id === region.id}
              onClick={() => setActiveRegion(region)}
            >
              {region.name}
            </button>
          ))}
        </div>
      </section>

      <section className={`${styles.section} ${styles.ingredientsSection}`} id="ingredientes">
        <div className={styles.sectionHeading} data-reveal>
          <p className={styles.eyebrow}>Ingredientes de Bulgaria</p>
          <h2>La despensa que da identidad a la mesa.</h2>
        </div>
        <div className={styles.ingredientsGrid}>
          {ingredients.map(([name, image]) => (
            <article className={styles.ingredientCard} key={name} data-reveal>
              <img src={image} alt={name} loading="lazy" />
              <span>{name}</span>
            </article>
          ))}
        </div>
      </section>

      <section className={`${styles.section} ${styles.menuSection}`} id="menu-degustacion">
        <div className={styles.menuHeader} data-reveal>
          <p className={styles.eyebrow}>Menú degustación premium</p>
          <h2>Raíces & Fuego</h2>
          <p>
            Un recorrido ficticio de alta gama para convertir la tradición búlgara en una noche completa de maridaje.
          </p>
        </div>
        <ol className={styles.tastingMenu}>
          {tastingMenu.map(([course, plate], index) => (
            <li key={course} data-reveal>
              <span>{String(index + 1).padStart(2, '0')}</span>
              <div>
                <strong>{course}</strong>
                <p>{plate}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section className={styles.reservationSection} id="reservas">
        <div className={styles.reservationInner} data-reveal>
          <p className={styles.eyebrow}>Reserva</p>
          <h2>Reserva una experiencia gastronómica búlgara inolvidable</h2>
          <p>
            Una mesa de carbón, vino Mavrud, cerámica artesanal y recetas que unen tradición, fuego y cocina moderna.
          </p>
          <div className={styles.reservationActions}>
            <a className={styles.primaryCta} href="mailto:reservas@sabordebulgaria.com">
              <CalendarDays aria-hidden="true" size={19} />
              <span>Reservar mesa</span>
            </a>
            <a className={styles.secondaryCta} href="#menu-degustacion">
              <Sparkles aria-hidden="true" size={19} />
              <span>Ver menú degustación</span>
            </a>
            <a className={styles.secondaryCta} href="#mapa">
              <MapPinned aria-hidden="true" size={19} />
              <span>Explorar regiones</span>
            </a>
          </div>
        </div>
      </section>

      <footer className={styles.footer}>
        <div className={styles.footerBrand}>
          <span className={styles.brandMark}>SB</span>
          <div>
            <strong>Sabor de Bulgaria</strong>
            <p>Bulgaria se descubre con fuego, vino y memoria.</p>
          </div>
        </div>
        <nav className={styles.footerNav} aria-label="Navegación de pie">
          {navItems.slice(0, 7).map(([label, href]) => (
            <a key={href} href={href}>
              {label}
            </a>
          ))}
        </nav>
        <div className={styles.footerInfo}>
          <p>
            <Mail aria-hidden="true" size={17} />
            reservas@sabordebulgaria.com
          </p>
          <p>
            <Clock3 aria-hidden="true" size={17} />
            Mar - Dom · 19:00 - 00:30
          </p>
          <p>
            <AtSign aria-hidden="true" size={17} />
            @sabordebulgaria
          </p>
        </div>
        <form className={styles.newsletter} onSubmit={(event) => event.preventDefault()}>
          <label htmlFor="newsletter-email">Newsletter</label>
          <div>
            <input id="newsletter-email" type="email" placeholder="tu@email.com" />
            <button type="submit" aria-label="Enviar email">
              <ArrowUpRight aria-hidden="true" />
            </button>
          </div>
        </form>
      </footer>

      <a className={styles.backTop} href="#inicio" aria-label="Volver arriba">
        <ChevronRight aria-hidden="true" />
      </a>
    </main>
  );
}
