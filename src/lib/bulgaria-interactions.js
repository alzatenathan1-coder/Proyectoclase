export function initBulgariaInteractions() {
const AUDIO_SOURCE = "/assets/images/bulgaria/folklore.mp3";

const img = (id, width = 1200, height = 900) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${width}&h=${height}&q=82`;

const wiki = (file, width = 1400) =>
  `https://commons.wikimedia.org/wiki/Special:FilePath/${encodeURIComponent(file)}?width=${width}`;

const realPhoto = {
  hero: "/assets/images/bulgaria/hero-bulgarian-feast.png",
  shopska: wiki("02021 0385 Shopska salad, Beskids.jpg", 1400),
  banitsa: wiki("Traditional homemade Bulgarian pastry banitsa.jpg", 1600),
  banitsaTable: wiki("Traditional Bulgarian cuisine with banitsa.jpg", 1600),
  tarator: wiki("Tarator (Bulgarian cold soup).jpg", 1400),
  kavarma: wiki("Kavarma.jpeg", 1500),
  kebapche: wiki("Kebapcheta.JPG", 1500),
  kyufte: wiki("Bulgarian cuisine meatballs (kyufte) (1).jpg", 1500),
  sarmi: wiki("Sarmi.jpg", 1400),
  sarmaYogurt: wiki("Sarma and yugourt.JPG", 1500),
  kapama: wiki("Pork with sauerkraut.JPG", 1500),
  patatnik: wiki("Patatnik.jpg", 1400),
  meshana: wiki("Bulgarian barbecue E1.jpg", 1500),
  bob: wiki("Bean with lutenitza.jpg", 1400),
  shkembe: wiki("Shkembe-chorba.jpg", 1400),
  gyuvech: wiki("Gjuvech 030.JPG", 1500),
  lukanka: wiki("Traditional Bulgarian pork sausages.jpg", 1500),
  sudzhuk: wiki("Bulgarian meat products.jpg", 1500),
  lyutenitsa: wiki("LyutenicaAjvarPindur.jpg", 1500),
  sirene: wiki("Traditional Bulgarian dish with local wine.jpg", 1500),
  chushki: wiki("Rhodope Mountains Bulgarian food 03.JPG", 1500),
  tikvenik: wiki("Baniza mit Apfelfüllung 20090407 004.JPG", 1500),
  klin: wiki("Rhodope Mountains Bulgarian food 04.JPG", 1500),
  cheverme: wiki("Cheverme ot Rodopite.JPG", 1500),
  kolednaPita: wiki("Bulgarian Christmas bread Pane di Natale Bulgaro (Koledna pita) 2010.jpg", 1500),
  kozunak: wiki("Bulgarian Easter bread Pane di Pasqua Bulgaro (Velikdenski Kozunak) 2013.jpg", 1400),
  garash: img("photo-1578985545062-69928b1d9587", 1000, 820),
  costume: wiki("Bulgarian folk costume.jpg", 1400),
  clothing: wiki("Traditional clothing of Bulgaria.jpg", 1400),
  folkDance: wiki("Bulgarian dance.jpg", 1400),
  mountainsFood: wiki("Rhodope Mountains Bulgarian food 05.JPG", 1500),
  wineDish: wiki("Traditional Bulgarian dish with local wine.jpg", 1500),
  mussels: wiki("Миди с пикантен доматен сос.jpg", 1500),
  sofiaCathedral: wiki("Alexander Nevsky Cathedral, Sofia (by Pudelek).JPG", 1800),
  kukeriReal: wiki("Kukeri E8.jpg", 1800),
  nestinariReal: wiki("Nestinar.bulgari.jpg", 1400),
  horoReal: wiki("Bulgarians dancing Horo in folk costumes.jpg", 1800),
  costumesReal: wiki("Bulgarian folklore costumes from Sofia region.jpg", 1800)
};

realPhoto.taratorLuxury = "/assets/images/bulgaria/tarator-luxury.png";
realPhoto.shopskaLuxury = "/assets/images/bulgaria/shopska-salata-luxury.png";
realPhoto.kebapcheLuxury = "/assets/images/bulgaria/kebapche-luxury.png";
realPhoto.kyufteLuxury = "/assets/images/bulgaria/kyufte-luxury.png";
realPhoto.meshanaLuxury = "/assets/images/bulgaria/meshana-skara-luxury.png";
realPhoto.sarmiLuxury = "/assets/images/bulgaria/sarmi-luxury.png";
realPhoto.kapamaLuxury = "/assets/images/bulgaria/kapama-luxury.png";
realPhoto.bobLuxury = "/assets/images/bulgaria/bob-chorba-luxury.png";
realPhoto.shkembeLuxury = "/assets/images/bulgaria/shkembe-chorba-luxury.png";
realPhoto.lyutenitsaLuxury = "/assets/images/bulgaria/lyutenitsa-luxury.png";
realPhoto.karnacheLuxury = "/assets/images/bulgaria/karnache-luxury.png";
realPhoto.shishchetaLuxury = "/assets/images/bulgaria/shishcheta-luxury.png";
realPhoto.kavarmaLuxury = "/assets/images/bulgaria/kavarma-luxury.png";
realPhoto.gyuvechLuxury = "/assets/images/bulgaria/gyuvech-luxury.png";
realPhoto.lukankaLuxury = "/assets/images/bulgaria/lukanka-luxury.png";
realPhoto.sudzhukLuxury = "/assets/images/bulgaria/sudzhuk-luxury.png";
realPhoto.chushkiLuxury = "/assets/images/bulgaria/chushki-burek-luxury.png";
realPhoto.chevermeLuxury = "/assets/images/bulgaria/cheverme-luxury.png";
realPhoto.banitsaLuxury = "/assets/images/bulgaria/banitsa-luxury.png";
realPhoto.tikvenikLuxury = "/assets/images/bulgaria/tikvenik-luxury.png";
realPhoto.baklavaLuxury = "/assets/images/bulgaria/baklava-luxury.png";
realPhoto.kozunakLuxury = "/assets/images/bulgaria/kozunak-luxury.png";
realPhoto.mekitsiLuxury = "/assets/images/bulgaria/mekitsi-luxury.png";
realPhoto.patatnikLuxury = "/assets/images/bulgaria/patatnik-luxury.png";
realPhoto.sireneShopskiLuxury = "/assets/images/bulgaria/sirene-po-shopski-luxury.png";
realPhoto.rhodopeKlinLuxury = "/assets/images/bulgaria/rhodope-klin-luxury.png";
realPhoto.garashLuxury = "/assets/images/bulgaria/garash-cake-luxury.png";
realPhoto.tortaBiscuitLuxury = "/assets/images/bulgaria/torta-biscuit-luxury.png";
realPhoto.revaneLuxury = "/assets/images/bulgaria/revane-luxury.png";
realPhoto.kremKaramelLuxury = "/assets/images/bulgaria/krem-karamel-luxury.png";
realPhoto.mlyakoOrizLuxury = "/assets/images/bulgaria/mlyako-s-oriz-luxury.png";
realPhoto.yogurtHoneyLuxury = "/assets/images/bulgaria/yogurt-honey-walnuts-luxury.png";
realPhoto.roseJamLuxury = "/assets/images/bulgaria/rose-jam-luxury.png";
realPhoto.vanillaPastriesLuxury = "/assets/images/bulgaria/vanilla-pastries-luxury.png";
realPhoto.palachinkiLuxury = "/assets/images/bulgaria/palachinki-luxury.png";
realPhoto.kurabiikiLuxury = "/assets/images/bulgaria/kurabiiki-luxury.png";
realPhoto.roseYogurtDessertLuxury = "/assets/images/bulgaria/rose-yogurt-dessert-luxury.png";
realPhoto.yogurtIcecreamRoseLuxury = "/assets/images/bulgaria/yogurt-icecream-rose-luxury.png";
realPhoto.parzholaLuxury = "/assets/images/bulgaria/parzhola-skara-luxury.png";

const historyItems = [
  {
    era: "Raíces tracias",
    text: "El vino oscuro, los rituales de mesa y el culto a la tierra recuerdan a los antiguos tracios, maestros de la vid y de los banquetes ceremoniales."
  },
  {
    era: "Herencia eslava",
    text: "La cocina campesina aportó sopas, panes, verduras, fermentos y ese sentido familiar de la comida compartida alrededor del fuego."
  },
  {
    era: "Herencia protobúlgara",
    text: "Los pueblos protobúlgaros trajeron memoria nómada, fuerza ganadera, lácteos, carnes y una relación directa con la montaña."
  },
  {
    era: "Primer y Segundo Imperio",
    text: "Preslav, Veliko Tarnovo, fortalezas y rutas comerciales hicieron de Bulgaria una tierra imperial entre Europa, el Mar Negro y Oriente."
  },
  {
    era: "Cultura balcánica",
    text: "Pan, vino, yogur y rosas se volvieron símbolos de hospitalidad, resistencia y belleza cotidiana en la gran mesa balcánica."
  }
];

const regions = [
  {
    id: "sofia",
    name: "Sofía y región occidental",
    x: 350,
    y: 340,
    zone: "M300 305 L410 280 L480 335 L436 420 L318 418 Z",
    image: realPhoto.sofiaCathedral,
    description: "El Shopluk búlgaro mira a la capital con una cocina directa, luminosa y orgullosa: verduras frescas, sirene y mesas urbanas con memoria rural.",
    ingredients: "tomate, pepino, pimiento, sirene, pan, perejil",
    dishes: "shopska salata, sirene po shopski, kyufte",
    history: "Sofía es cruce de imperios y caminos; su cocina resume la convivencia entre mercado, taberna, casa familiar y fiesta nacional."
  },
  {
    id: "rila",
    name: "Rila",
    x: 418,
    y: 454,
    zone: "M360 420 L462 406 L515 470 L475 552 L368 536 Z",
    image: wiki("Rila Monastery - Bulgaria - 5 May 2012.jpg", 1500),
    description: "Rila sabe a monasterio, montaña fría, miel de altura y platos pensados para recuperar el cuerpo tras el camino.",
    ingredients: "miel, hierbas de montaña, trucha, pan, yogur",
    dishes: "bob chorba, pan ritual, guisos de montaña",
    history: "El monasterio de Rila convirtió la comida sencilla en gesto espiritual: sopa caliente, pan y silencio de piedra."
  },
  {
    id: "pirin",
    name: "Pirin",
    x: 326,
    y: 518,
    zone: "M248 440 L360 426 L380 548 L286 590 L210 520 Z",
    image: wiki("Pirin-mountains-Bansko.jpg", 1500),
    description: "Pirin y Bansko conservan una cocina de invierno: lenta, poderosa, cocinada en barro y pensada para mesas largas.",
    ingredients: "col fermentada, arroz, carne, vino, laurel",
    dishes: "kapama, sarmi, carnes asadas",
    history: "En Bansko la olla sellada es casi arquitectura doméstica: el tiempo, la carne y el vino trabajan juntos."
  },
  {
    id: "rhodope",
    name: "Ródope",
    x: 544,
    y: 506,
    zone: "M480 420 L672 404 L765 486 L706 588 L510 570 Z",
    image: realPhoto.mountainsFood,
    description: "La región Ródope es humo, patata, cordero, canciones profundas y quesos que parecen nacidos de la niebla.",
    ingredients: "patata, cordero, mantequilla, sirene, hierbas",
    dishes: "patatnik, Rhodope klin, cheverme",
    history: "Sus recetas hablan de pastores, madera, nieve y una hospitalidad de montaña que se sirve sin prisa."
  },
  {
    id: "thrace",
    name: "Tracia",
    x: 632,
    y: 386,
    zone: "M530 318 L744 302 L826 392 L748 486 L618 420 Z",
    image: realPhoto.wineDish,
    description: "Tracia es el territorio del vino, del pimiento asado y de guisos intensos donde la carne se vuelve seda.",
    ingredients: "vino Mavrud, pimientos, tomates, cerdo, cebolla",
    dishes: "kavarma, gyuvech, lyutenitsa",
    history: "El eco tracio sigue en el vino y en la idea de que una comida importante necesita fuego, copa y conversación."
  },
  {
    id: "roses",
    name: "Valle de las Rosas",
    x: 574,
    y: 270,
    zone: "M484 242 L676 218 L748 292 L628 340 L508 314 Z",
    image: wiki("Roses pickers in roses vally, kazanlak, bulgaria.jpg", 1500),
    description: "Entre Kazanlak y los Balcanes, la rosa búlgara perfuma dulces, mieles, licores y una imaginación delicada.",
    ingredients: "rosas de Kazanlak, miel, nueces, yogur, frutas",
    dishes: "dulce de rosas, yogur con miel, postres florales",
    history: "La rosa es industria, rito, aroma y símbolo: Bulgaria transformó un pétalo en identidad cultural."
  },
  {
    id: "danube",
    name: "Danubio búlgaro",
    x: 504,
    y: 160,
    zone: "M196 110 L748 96 L840 190 L696 238 L488 218 L250 202 Z",
    image: wiki("Dunav VIdin.jpg", 1500),
    description: "El norte se abre al Danubio: pescado de río, trigo, verduras, sopas y memoria de frontera fluvial.",
    ingredients: "pescado de río, alubias, trigo, col, eneldo",
    dishes: "sarmi, bob chorba, pescado del Danubio",
    history: "El río trajo comercio y mezcla; cada puerto guardó una versión distinta de la sopa, el pan y el vino."
  },
  {
    id: "dobrudzha",
    name: "Dobrudzha",
    x: 846,
    y: 206,
    zone: "M742 112 L938 122 L998 256 L870 342 L750 280 Z",
    image: realPhoto.kolednaPita,
    description: "Dobrudzha es trigo, pan trenzado, campos abiertos y una abundancia seca y dorada que parece harina al sol.",
    ingredients: "trigo, huevos, yogur, mantequilla, queso",
    dishes: "Dobruzhanska pitka, banitsa, panes rituales",
    history: "La región granero de Bulgaria convirtió el pan en saludo, promesa y centro de la mesa."
  },
  {
    id: "blacksea",
    name: "Costa del Mar Negro",
    x: 924,
    y: 388,
    zone: "M840 260 L1016 236 L1034 504 L910 546 L828 430 Z",
    image: wiki("Nessebar, Bulgaria - panoramio (80).jpg", 1500),
    description: "La costa búlgara ofrece frescura marina: pescados, ensaladas frías, vino blanco, tarator y tardes de sal.",
    ingredients: "pescado, mejillones, pepino, yogur, eneldo",
    dishes: "tarator, pescado a la brasa, ensaladas costeras",
    history: "Del puerto a la taberna, el Mar Negro suaviza la cocina búlgara con acidez, hierbas y aire salino."
  },
  {
    id: "strandzha",
    name: "Strandzha",
    x: 828,
    y: 508,
    zone: "M724 460 L858 424 L942 530 L844 606 L720 570 Z",
    image: wiki("Strandzha mountain.jpg", 1500),
    description: "Strandzha une bosque, frontera y rito: miel, hierbas, carnes y tradiciones como los Nestinari.",
    ingredients: "miel, hierbas, cordero, setas, pan",
    dishes: "cordero, guisos de bosque, panes festivos",
    history: "Aquí la mesa se mezcla con fuego ritual y danza: la comida acompaña celebraciones que parecen antiguas brasas."
  },
  {
    id: "macedonia",
    name: "Macedonia búlgara",
    x: 230,
    y: 390,
    zone: "M160 288 L304 292 L318 430 L214 520 L120 432 Z",
    image: wiki("Melnik, Bulgaria.jpg", 1500),
    description: "El suroeste búlgaro es especiado, de horno familiar, verduras, parrilla y recetas compartidas con toda la memoria balcánica.",
    ingredients: "puerro, col, pimientos, carne picada, ajedrea",
    dishes: "chushki burek, kyufte, zelnik",
    history: "Las montañas y caminos del suroeste guardan una cocina de intercambio, fuerte en verduras rellenas y masa."
  }
];

const traditionalDishes = [
  {
    name: "Shopska salata",
    region: "Sofía y región occidental",
    image: realPhoto.shopskaLuxury,
    description: "Ensalada fresca de tomate, pepino y pimiento coronada con sirene rallado; blanca, verde y roja como un gesto nacional.",
    ingredients: "tomate, pepino, pimiento, cebolla, sirene, perejil",
    history: "Icono de la mesa veraniega búlgara y de la hospitalidad sencilla."
  },
  {
    name: "Banitsa",
    region: "Dobrudzha",
    image: realPhoto.banitsaLuxury,
    description: "Capas crujientes de masa filo abrazan sirene, huevos y yogur hasta formar un desayuno dorado y ceremonial.",
    ingredients: "masa filo, sirene, huevos, yogur, mantequilla",
    history: "Aparece en Año Nuevo con deseos escondidos, como si el futuro pudiera hornearse."
  },
  {
    name: "Tarator",
    region: "Costa del Mar Negro",
    image: realPhoto.taratorLuxury,
    description: "Sopa fría de yogur, pepino, ajo, eneldo y nueces: el verano servido en porcelana blanca.",
    ingredients: "yogur, pepino, ajo, eneldo, nueces, aceite",
    history: "Refresca las comidas de calor y revela la importancia del yogur búlgaro."
  },
  {
    name: "Kavarma",
    region: "Tracia",
    image: realPhoto.kavarmaLuxury,
    description: "Carne cocinada en barro con vino, cebolla y pimientos hasta volverse profunda, melosa y aromática.",
    ingredients: "cerdo o pollo, cebolla, tomate, pimiento, vino, ajedrea",
    history: "Plato de taberna y conversación larga, muy ligado al sur y al vino tracio."
  },
  {
    name: "Kebapche",
    region: "Tracia",
    image: realPhoto.kebapcheLuxury,
    description: "Carne especiada en forma alargada, asada a la parrilla y servida con pan, lyutenitsa y ensalada.",
    ingredients: "carne picada, comino, pimienta, sal, parrilla",
    history: "Es una de las estrellas populares de ferias, tabernas y celebraciones al aire libre."
  },
  {
    name: "Kyufte",
    region: "Macedonia búlgara",
    image: realPhoto.kyufteLuxury,
    description: "Albóndiga asada, jugosa y especiada, hermana redonda del kebapche y compañera natural del vino.",
    ingredients: "carne picada, cebolla, perejil, comino, pimienta",
    history: "La parrilla búlgara encuentra en el kyufte una forma humilde y poderosa."
  },
  {
    name: "Sarmi",
    region: "Danubio búlgaro",
    image: realPhoto.sarmiLuxury,
    description: "Hojas de col o vid envuelven arroz, carne y especias en pequeños paquetes de memoria familiar.",
    ingredients: "hojas de col o vid, arroz, carne, cebolla, yogur",
    history: "Se preparan para fiestas, invierno y reuniones donde cocinar también significa envolver afecto."
  },
  {
    name: "Kapama",
    region: "Pirin",
    image: realPhoto.kapamaLuxury,
    description: "Olla de Bansko con carnes, arroz, col fermentada y vino, sellada para que el tiempo haga su magia.",
    ingredients: "varias carnes, col fermentada, arroz, vino, laurel",
    history: "Cocina de invierno y montaña, robusta como una casa cerrada contra la nieve."
  },
  {
    name: "Patatnik",
    region: "Ródope",
    image: realPhoto.patatnikLuxury,
    description: "Pastel de patata rallada, mantequilla, hierbas y sirene, dorado por fuera y tierno por dentro.",
    ingredients: "patata, sirene, cebolla, hierbabuena, mantequilla",
    history: "Nace en las montañas Ródope, donde la patata se volvió reina de la cocina rural."
  },
  {
    name: "Meshana skara",
    region: "Sofía y región occidental",
    image: realPhoto.meshanaLuxury,
    description: "Parrillada mixta con kebapche, kyufte, carnes y embutidos: una mesa de brasas y abundancia.",
    ingredients: "cerdo, ternera, especias, embutidos, parrilla",
    history: "Representa la celebración popular de la carne asada en tabernas y fiestas."
  },
  {
    name: "Bob chorba",
    region: "Rila",
    image: realPhoto.bobLuxury,
    description: "Sopa de alubias lenta, con verduras y hierbas; humilde, nutritiva y casi monástica.",
    ingredients: "alubias, zanahoria, cebolla, tomate, hierbabuena",
    history: "Es comida de casa, monasterio y montaña: la sencillez como virtud."
  },
  {
    name: "Shkembe chorba",
    region: "Sofía y región occidental",
    image: realPhoto.shkembeLuxury,
    description: "Sopa intensa de callos con ajo, vinagre y pimentón, famosa por su carácter directo y nocturno.",
    ingredients: "callos, leche, ajo, vinagre, pimentón",
    history: "Una institución urbana, amada por quienes buscan fuerza, calor y tradición sin filtros."
  },
  {
    name: "Gyuvech",
    region: "Tracia",
    image: realPhoto.gyuvechLuxury,
    description: "Guiso de barro con verduras, carne y especias, cocinado lentamente hasta que todo se vuelve hogar.",
    ingredients: "carne, tomate, berenjena, pimiento, patata, ajedrea",
    history: "Toma su nombre del recipiente: en Bulgaria, el barro también cocina y cuenta."
  },
  {
    name: "Lukanka",
    region: "Tracia",
    image: realPhoto.lukankaLuxury,
    description: "Embutido curado, aromático y compacto, cortado fino para acompañar vino, queso y conversación.",
    ingredients: "carne curada, comino, pimienta, nuez moscada",
    history: "La charcutería búlgara conserva técnicas de clima, paciencia y especia."
  },
  {
    name: "Sudzhuk",
    region: "Dobrudzha",
    image: realPhoto.sudzhukLuxury,
    description: "Embutido seco en herradura, especiado y profundo, perfecto para parrilla o mesa fría.",
    ingredients: "ternera, pimienta, comino, sal, curación",
    history: "Su forma y sabor hablan de rutas balcánicas y conservación artesanal."
  },
  {
    name: "Lyutenitsa",
    region: "Tracia",
    image: realPhoto.lyutenitsaLuxury,
    description: "Crema de pimientos y tomates asados, dulce, ahumada y brillante como una puesta de sol en frasco.",
    ingredients: "pimiento rojo, tomate, berenjena, aceite, especias",
    history: "Cada familia defiende su receta; cada otoño huele a pimiento asado."
  },
  {
    name: "Sirene po shopski",
    region: "Sofía y región occidental",
    image: realPhoto.sireneShopskiLuxury,
    description: "Sirene horneado con tomate, pimiento, huevo y especias, servido en cazuela pequeña y humeante.",
    ingredients: "sirene, huevo, tomate, pimiento, ajedrea",
    history: "La cazuela individual convierte ingredientes sencillos en un pequeño rito caliente."
  },
  {
    name: "Chushki burek",
    region: "Macedonia búlgara",
    image: realPhoto.chushkiLuxury,
    description: "Pimientos rellenos de queso y huevo, empanados y dorados hasta lograr contraste entre crema y crujiente.",
    ingredients: "pimientos, sirene, huevo, pan rallado, aceite",
    history: "Una joya de verano que transforma el pimiento asado en bocado festivo."
  },
  {
    name: "Tikvenik",
    region: "Valle de las Rosas",
    image: realPhoto.tikvenikLuxury,
    description: "Pastel de filo con calabaza, nueces y canela; dulce, otoñal y perfumado.",
    ingredients: "masa filo, calabaza, nueces, azúcar, canela",
    history: "Muy querido en invierno y celebraciones familiares, especialmente cerca de Navidad."
  },
  {
    name: "Rhodope klin",
    region: "Ródope",
    image: realPhoto.rhodopeKlinLuxury,
    description: "Pastel de arroz, huevos y sirene entre capas finas, cocinado con calma de montaña.",
    ingredients: "arroz, masa, huevos, sirene, mantequilla",
    history: "En los Ródope, el klin es memoria de hogar y mesa generosa."
  }
];

const modernDishes = [
  {
    name: "Banitsa deconstruida con espuma de yogur búlgaro",
    region: "Dobrudzha",
    image: realPhoto.banitsaLuxury,
    description: "Láminas crujientes, crema de sirene y una nube ácida de yogur que transforma el desayuno en alta cocina."
  },
  {
    name: "Shopska salata gourmet con emulsión de sirene",
    region: "Sofía",
    image: realPhoto.shopskaLuxury,
    description: "Tomates maduros, pepino comprimido, aceite verde y sirene convertido en seda blanca."
  },
  {
    name: "Kavarma de cocción lenta con presentación Michelin",
    region: "Tracia",
    image: realPhoto.kavarmaLuxury,
    description: "Ragú concentrado, verduras glaseadas y jugo oscuro de vino Mavrud."
  },
  {
    name: "Tarator convertido en crema fría premium",
    region: "Mar Negro",
    image: realPhoto.taratorLuxury,
    description: "Crema de yogur, pepino, eneldo y nuez tostada con una frescura casi mineral."
  },
  {
    name: "Patatnik crujiente con hierbas de montaña",
    region: "Ródope",
    image: realPhoto.patatnikLuxury,
    description: "Capas finas de patata dorada, aceite de hierbabuena y crema salada de sirene."
  },
  {
    name: "Cordero de las Ródope con reducción de vino Mavrud",
    region: "Ródope",
    image: realPhoto.chevermeLuxury,
    description: "Cordero tierno, glaseado de miel de montaña y un fondo profundo de vino tracio."
  },
  {
    name: "Crema de pimientos asados con sirene ahumado",
    region: "Tracia",
    image: realPhoto.lyutenitsaLuxury,
    description: "Lyutenitsa convertida en crema noble, con humo suave y queso salino."
  },
  {
    name: "Postre de rosa búlgara, yogur, miel y nueces",
    region: "Valle de las Rosas",
    image: realPhoto.roseYogurtDessertLuxury,
    description: "Un plato floral, blanco y dorado que resume Kazanlak en una cucharada."
  },
  {
    name: "Gyuvech moderno servido en mini cazuela",
    region: "Tracia",
    image: realPhoto.gyuvechLuxury,
    description: "Verduras asadas y jugo especiado en una cazuela mínima, precisa y aromática."
  },
  {
    name: "Helado de yogur búlgaro con dulce de rosas",
    region: "Valle de las Rosas",
    image: realPhoto.yogurtIcecreamRoseLuxury,
    description: "Acidez láctica, pétalos confitados y nueces caramelizadas en clave contemporánea."
  }
];

const grillDishes = [
  {
    name: "Kebapche na skara",
    region: "Tracia y tabernas de todo el país",
    image: realPhoto.kebapcheLuxury,
    description: "Carne especiada en forma alargada, marcada sobre brasas hasta quedar jugosa, ahumada y profundamente popular.",
    ingredients: "carne picada, comino, pimienta negra, sal, pan caliente, lyutenitsa",
    history: "El kebapche es icono de feria, estadio, taberna y mesa familiar: una de las formas más reconocibles de la skara búlgara."
  },
  {
    name: "Kyufte a la parrilla",
    region: "Sofía, Macedonia búlgara y todo el país",
    image: realPhoto.kyufteLuxury,
    description: "Albóndiga plana, especiada y dorada al fuego, servida con ensalada, patatas y queso sirene.",
    ingredients: "carne picada, cebolla, perejil, comino, pimienta, parrilla",
    history: "Su forma redonda concentra la cocina cotidiana búlgara: directa, generosa y hecha para compartir."
  },
  {
    name: "Meshana skara",
    region: "Tabernas tradicionales",
    image: realPhoto.meshanaLuxury,
    description: "Parrillada mixta con kebapche, kyufte, chuletas, salchichas y carnes asadas, presentada como banquete de brasas.",
    ingredients: "kebapche, kyufte, cerdo, ternera, sudzhuk, karnache, especias",
    history: "La meshana skara es abundancia balcánica: un plato para mesas largas, vino, conversación y música."
  },
  {
    name: "Cheverme de las Ródope",
    region: "Ródope",
    image: realPhoto.chevermeLuxury,
    description: "Cordero entero girado lentamente sobre fuego de leña, con piel dorada y carne tierna de celebración.",
    ingredients: "cordero, sal, fuego de leña, hierbas de montaña, pan ritual",
    history: "Es plato ceremonial de montaña, bodas y fiestas; una de las imágenes más poderosas del fuego búlgaro."
  },
  {
    name: "Sudzhuk na skara",
    region: "Dobrudzha y norte de Bulgaria",
    image: realPhoto.sudzhukLuxury,
    description: "Embutido curado en forma de herradura, calentado a la parrilla hasta liberar grasa, especias y perfume ahumado.",
    ingredients: "sudzhuk, comino, pimienta, pan, mostaza o lyutenitsa",
    history: "La charcutería búlgara encuentra en la brasa una segunda vida: más intensa, más profunda, más festiva."
  },
  {
    name: "Karnache",
    region: "Bulgaría central",
    image: realPhoto.karnacheLuxury,
    description: "Salchicha fresca en espiral o tiras, especiada y asada lentamente para una textura crujiente y jugosa.",
    ingredients: "carne de cerdo, especias, tripa natural, parrilla, pan",
    history: "Aparece en mercados, fiestas y parrillas familiares, acompañada de ensalada y rakia."
  },
  {
    name: "Shishcheta búlgaros",
    region: "Costa, Tracia y celebraciones familiares",
    image: realPhoto.shishchetaLuxury,
    description: "Brochetas de carne marinada con pimientos y cebolla, asadas al fuego y servidas con hierbas.",
    ingredients: "cerdo o pollo, pimiento, cebolla, ajedrea, aceite, limón",
    history: "Las brochetas conectan la cocina búlgara con la gran cultura balcánica de cocinar al aire libre."
  },
  {
    name: "Pŭrzhola na skara",
    region: "Tabernas y casas familiares",
    image: realPhoto.parzholaLuxury,
    description: "Chuleta marinada y marcada sobre brasas, sencilla, potente y perfecta con shopska salata.",
    ingredients: "chuleta de cerdo, sal, pimienta, ajedrea, ajo, carbón",
    history: "La chuleta a la parrilla es la Bulgaria cotidiana del domingo: humo, pan, ensalada y comunidad."
  }
];

const desserts = [
  ["Banitsa dulce", "Capas finas con azúcar, queso suave o crema, servidas tibias como una bendición dulce.", "Fiestas familiares", realPhoto.banitsaLuxury],
  ["Tikvenik", "Calabaza, nueces y canela envueltas en filo crujiente, con brillo de azúcar y otoño.", "Navidad e invierno", realPhoto.tikvenikLuxury],
  ["Garash cake", "Tarta intensa de chocolate y nuez, elegante y urbana, nacida en la ciudad de Ruse.", "Pastelería clásica", realPhoto.garashLuxury],
  ["Torta biscuit búlgara", "Capas de galleta y crema que descansan hasta volverse suaves como memoria de infancia.", "Casa familiar", realPhoto.tortaBiscuitLuxury],
  ["Mekitsi con miel", "Masa frita, aireada y dorada, bañada con miel búlgara y azúcar fino.", "Desayuno festivo", realPhoto.mekitsiLuxury],
  ["Kozunak", "Pan dulce trenzado, perfumado con cítricos, suave como brioche ceremonial.", "Pascua", realPhoto.kozunakLuxury],
  ["Baklava búlgara", "Filo, nueces y almíbar brillante en un dulce balcánico de celebración.", "Mesa festiva", realPhoto.baklavaLuxury],
  ["Revane", "Bizcocho de sémola empapado en almíbar, ligero, húmedo y luminoso.", "Pastelería balcánica", realPhoto.revaneLuxury],
  ["Krem karamel", "Crema sedosa bajo caramelo ámbar, una dulzura de cuchara muy querida.", "Postre doméstico", realPhoto.kremKaramelLuxury],
  ["Mlyako s oriz", "Arroz con leche delicado, vainilla y canela, servido como calma blanca.", "Recuerdo de infancia", realPhoto.mlyakoOrizLuxury],
  ["Yogur búlgaro con miel y nueces", "La acidez del yogur se equilibra con miel de montaña y nuez tostada.", "Sencillez sagrada", realPhoto.yogurtHoneyLuxury],
  ["Dulce de rosas", "Pétalos convertidos en confitura perfumada, rubí transparente de Kazanlak.", "Valle de las Rosas", realPhoto.roseJamLuxury],
  ["Pasteles con crema de vainilla", "Hojaldre, crema y azúcar fino en vitrinas de pastelería clásica.", "Café urbano", realPhoto.vanillaPastriesLuxury],
  ["Palachinki búlgaras", "Crepes finos con mermelada, miel, chocolate o queso suave.", "Merienda familiar", realPhoto.palachinkiLuxury],
  ["Kurabiiki", "Galletas caseras de mantequilla, vainilla y nuez, pequeñas y generosas.", "Navidad y hogar", realPhoto.kurabiikiLuxury]
].map(([name, description, context, image]) => ({
  name,
  region: context,
  image,
  description,
  ingredients: "miel, crema, nueces, vainilla, yogur o frutas según la receta",
  history: "Dulce ligado a la casa, a la celebración y a la memoria cotidiana búlgara."
}));

const ingredients = [
  ["Yogur búlgaro", "Fermento vivo y orgullo nacional; su acidez limpia atraviesa sopas, postres y desayunos.", img("photo-1488477181946-6428a0291777")],
  ["Sirene", "Queso blanco salino, presente en ensaladas, banitsa y cazuelas calientes.", img("photo-1486297678162-eb2a19b0a32d")],
  ["Kashkaval", "Queso amarillo de mesa y horno, suave, fundente y profundamente balcánico.", img("photo-1452195100486-9cc805987862")],
  ["Pimientos asados", "El aroma del otoño búlgaro: piel tostada, dulzor rojo y humo familiar.", img("photo-1604909052743-94e838986d24")],
  ["Tomates", "Base jugosa de ensaladas, guisos y veranos largos.", img("photo-1546470427-e26264be0b0d")],
  ["Pepinos", "Frescura crujiente para tarator y shopska salata.", img("photo-1449300079323-02e209d9d3a6")],
  ["Miel búlgara", "Dorada, floral y de montaña; endulza panes, yogur y rituales.", img("photo-1587049352851-8d4e89133924")],
  ["Rosas de Kazanlak", "El perfume cultural de Bulgaria, presente en confituras, licores y dulces.", img("photo-1496062031456-07b8f162a322")],
  ["Vino Mavrud", "Tinto profundo que recuerda la raíz tracia y acompaña carnes lentas.", img("photo-1510812431401-41d2bd2722f3")],
  ["Rakia", "Espíritu de fruta, aperitivo de hospitalidad y conversación.", img("photo-1569529465841-dfecdab7503b")],
  ["Hierbas de montaña", "Ajedrea, hierbabuena, eneldo y tomillo como geografía aromática.", img("photo-1471193945509-9ad0617afabf")],
  ["Cordero", "Carne ceremonial de montaña, fuego lento y celebración.", img("photo-1544025162-d76694265947")],
  ["Pan ritual", "Trenzado, bendecido y compartido; el centro simbólico de la casa.", img("photo-1509440159596-0249088772ff")],
  ["Nueces", "Crujiente noble para baklava, Garash, tikvenik y miel.", img("photo-1508061253366-f7da158b6d46")],
  ["Calabaza", "Dulzor de invierno para tikvenik y panes perfumados.", img("photo-1506917728037-b6af01a7d403")],
  ["Cerámica tradicional", "Barro pintado que conserva calor y convierte servir en arte.", img("photo-1578749556568-bc2c40e68b61")]
].map(([name, description, image]) => ({ name, description, image }));

const traditions = [
  ["Bodas búlgaras", "Mesas largas, pan partido, vino, música y trajes donde la comunidad bendice el futuro.", img("photo-1519741497674-611481863552")],
  ["Comidas familiares", "La cocina se convierte en archivo afectivo: guisos, ensaladas, panes y conversación lenta.", img("photo-1528605248644-14dd04022da1")],
  ["Festivales folclóricos", "Danzas, bordados y comida regional celebran una identidad que se escucha y se prueba.", img("photo-1514525253161-7a46d19cd819")],
  ["Pan ritual", "El pan se decora, se bendice y se comparte como símbolo de casa abierta.", img("photo-1509440159596-0249088772ff")],
  ["Kukeri", "Máscaras, campanas y mesa de invierno para ahuyentar lo oscuro y llamar a la fertilidad.", realPhoto.kukeriReal],
  ["Nestinari", "Danza sobre brasas en Strandzha, un rito donde fuego, música y comunidad respiran juntos.", realPhoto.nestinariReal],
  ["Danzas tradicionales", "El horo une manos y pasos; alrededor, la comida sostiene el ritmo de la fiesta.", realPhoto.horoReal],
  ["Trajes regionales", "Bordados rojos, negros, blancos y dorados guardan historias de valle, montaña y familia.", realPhoto.costumesReal],
  ["Música y celebraciones", "Gaida, kaval, tambura y voces profundas acompañan la abundancia de la mesa.", img("photo-1507838153414-b4b713384a76")],
  ["Mesas con comunidad", "Vino, pan, ensalada, carnes y dulces convierten el tiempo común en patrimonio.", img("photo-1544025162-d76694265947")]
].map(([name, description, image]) => ({ name, description, image }));

const gallery = [
  ["premium", "Shopska salata de lujo", realPhoto.shopskaLuxury, "4 / 5"],
  ["premium", "Banitsa dorada", realPhoto.banitsaLuxury, "4 / 5"],
  ["premium", "Tarator servido como alta cocina", realPhoto.taratorLuxury, "4 / 5"],
  ["premium", "Kavarma en cazuela de barro", realPhoto.kavarmaLuxury, "4 / 5"],
  ["premium", "Sarmi con salsa de yogur", realPhoto.sarmiLuxury, "4 / 5"],
  ["premium", "Kapama de Bansko", realPhoto.kapamaLuxury, "4 / 5"],
  ["premium", "Bob chorba elegante", realPhoto.bobLuxury, "4 / 5"],
  ["premium", "Shkembe chorba refinada", realPhoto.shkembeLuxury, "4 / 5"],
  ["premium", "Gyuvech premium", realPhoto.gyuvechLuxury, "4 / 5"],
  ["premium", "Lukanka búlgara", realPhoto.lukankaLuxury, "4 / 5"],
  ["premium", "Sudzhuk curado", realPhoto.sudzhukLuxury, "4 / 5"],
  ["premium", "Lyutenitsa artesanal", realPhoto.lyutenitsaLuxury, "4 / 5"],
  ["premium", "Sirene po shopski", realPhoto.sireneShopskiLuxury, "4 / 5"],
  ["premium", "Chushki burek", realPhoto.chushkiLuxury, "4 / 5"],
  ["premium", "Patatnik de las Ródope", realPhoto.patatnikLuxury, "4 / 5"],
  ["premium", "Rhodope klin", realPhoto.rhodopeKlinLuxury, "4 / 5"],
  ["parrilla", "Kyufte na skara", realPhoto.kyufteLuxury, "4 / 5"],
  ["parrilla", "Cheverme de las Ródope", realPhoto.chevermeLuxury, "4 / 5"],
  ["parrilla", "Karnache a la parrilla", realPhoto.karnacheLuxury, "4 / 5"],
  ["parrilla", "Shishcheta búlgaros", realPhoto.shishchetaLuxury, "4 / 5"],
  ["postres", "Baklava búlgara", realPhoto.baklavaLuxury, "4 / 5"],
  ["postres", "Kozunak festivo", realPhoto.kozunakLuxury, "4 / 5"],
  ["postres", "Mekitsi con miel", realPhoto.mekitsiLuxury, "4 / 5"],
  ["postres", "Garash cake de Ruse", realPhoto.garashLuxury, "4 / 5"],
  ["postres", "Torta biscuit búlgara", realPhoto.tortaBiscuitLuxury, "4 / 5"],
  ["postres", "Revane con almíbar", realPhoto.revaneLuxury, "4 / 5"],
  ["postres", "Krem karamel", realPhoto.kremKaramelLuxury, "4 / 5"],
  ["postres", "Mlyako s oriz", realPhoto.mlyakoOrizLuxury, "4 / 5"],
  ["postres", "Yogur búlgaro con miel y nueces", realPhoto.yogurtHoneyLuxury, "4 / 5"],
  ["postres", "Dulce de rosas de Kazanlak", realPhoto.roseJamLuxury, "4 / 5"],
  ["postres", "Pasteles con crema de vainilla", realPhoto.vanillaPastriesLuxury, "4 / 5"],
  ["postres", "Palachinki búlgaras", realPhoto.palachinkiLuxury, "4 / 5"],
  ["postres", "Kurabiiki de vainilla y nuez", realPhoto.kurabiikiLuxury, "4 / 5"],
  ["premium", "Postre moderno de rosa y yogur", realPhoto.roseYogurtDessertLuxury, "4 / 5"],
  ["premium", "Helado de yogur búlgaro con rosas", realPhoto.yogurtIcecreamRoseLuxury, "4 / 5"],
  ["parrilla", "Pŭrzhola na skara", realPhoto.parzholaLuxury, "4 / 5"],
  ["capital", "Catedral de San Alejandro Nevski, Sofía", realPhoto.sofiaCathedral, "16 / 10"],
  ["tradicional", "Platos tradicionales en barro", traditionalDishes[3].image, "4 / 5"],
  ["parrilla", "Kebapche na skara de lujo", realPhoto.kebapcheLuxury, "4 / 5"],
  ["parrilla", "Meshana skara sobre brasas", realPhoto.meshanaLuxury, "16 / 10"],
  ["postres", "Dulces con miel y rosas", desserts[1].image, "1 / 1"],
  ["panes", "Panes rituales búlgaros", img("photo-1509440159596-0249088772ff"), "5 / 4"],
  ["mercados", "Mercados de tomate, pepino y queso", img("photo-1488459716781-31db52582fe9"), "4 / 5"],
  ["montañas", "Montañas Ródope al atardecer", img("photo-1500530855697-b586d89ba3ee"), "16 / 10"],
  ["trajes", "Bordados y trajes tradicionales", "/assets/images/bulgaria/hero-bulgarian-feast.png", "16 / 10"],
  ["festivales", "Fiesta folclórica y danza", traditions[2].image, "4 / 5"],
  ["mesas", "Mesa familiar con vino", img("photo-1528605248644-14dd04022da1"), "16 / 10"],
  ["vino", "Vino Mavrud y memoria tracia", ingredients[8].image, "4 / 5"],
  ["rosas", "Rosas de Kazanlak", ingredients[7].image, "1 / 1"],
  ["mar", "Mar Negro y cocina costera", regions.find((r) => r.id === "blacksea").image, "16 / 10"],
  ["ceramica", "Cerámica búlgara artesanal", ingredients[15].image, "4 / 5"]
];

const state = {
  selectedRegion: regions[0].id,
  traditionalFilter: "Todos",
  galleryFilter: "Todos",
  isMusicPlaying: false
};

const qs = (selector, parent = document) => parent.querySelector(selector);
const qsa = (selector, parent = document) => [...parent.querySelectorAll(selector)];

const particleCanvas = qs("#particleCanvas");
const cursorAura = qs("#cursorAura");
const scrollMeter = qs("#scrollMeter");
const navToggle = qs("#navToggle");
const navMenu = qs("#navMenu");
const backTop = qs("#backTop");
const historyTimeline = qs("#historyTimeline");
const bulgariaMap = qs("#bulgariaMap");
const regionFeature = qs("#regionFeature");
const traditionalFilters = qs("#traditionalFilters");
const traditionalGrid = qs("#traditionalGrid");
const grillGrid = qs("#grillGrid");
const modernGrid = qs("#modernGrid");
const dessertGrid = qs("#dessertGrid");
const ingredientStrip = qs("#ingredientStrip");
const traditionsGrid = qs("#traditionsGrid");
const galleryFilters = qs("#galleryFilters");
const galleryGrid = qs("#galleryGrid");
const lightbox = qs("#lightbox");
const lightboxImage = qs("#lightboxImage");
const lightboxCaption = qs("#lightboxCaption");
const lightboxClose = qs("#lightboxClose");
const playPause = qs("#playPause");
const floatingMusic = qs("#floatingMusic");
const heroMusicBtn = qs("#heroMusicBtn");
const footerPlayer = qs("#footerPlayer");
const volumeControl = qs("#volumeControl");
const waveCanvas = qs("#waveCanvas");

function setImageStyle(url) {
  return `--image: url("${url}")`;
}

function renderHistory() {
  historyTimeline.innerHTML = historyItems.map((item) => `
    <article class="timeline-item reveal">
      <strong>${item.era}</strong>
      <p>${item.text}</p>
    </article>
  `).join("");
}

function renderMap() {
  const zones = regions.map((region) => `
    <path class="region-zone ${region.id === state.selectedRegion ? "is-active" : ""}" data-region="${region.id}" d="${region.zone}"></path>
  `).join("");

  const points = regions.map((region) => `
    <g class="region-point" data-region="${region.id}" tabindex="0" role="button" aria-label="${region.name}" transform="translate(${region.x} ${region.y})">
      <circle r="18"></circle>
      <circle r="7"></circle>
      <text x="14" y="5">${region.name}</text>
    </g>
  `).join("");

  bulgariaMap.innerHTML = `
    <svg viewBox="0 0 1100 680" role="img" aria-label="Mapa gastronómico moderno de Bulgaria">
      <defs>
        <linearGradient id="mapFill" x1="0%" x2="100%">
          <stop offset="0%" stop-color="#123f31"></stop>
          <stop offset="50%" stop-color="#223f2f"></stop>
          <stop offset="100%" stop-color="#7f1d2e"></stop>
        </linearGradient>
      </defs>
      <path class="bg-outline" d="M145 294c80-120 228-170 392-169 150 1 219-47 337 5 90 39 153 122 166 222 16 127-69 224-202 248-104 19-178-30-280-22-122 10-220 73-324 4-99-66-158-188-89-288z"></path>
      ${zones}
      <path class="map-route" d="M164 396 C326 310 474 332 612 292 S824 222 996 306"></path>
      <path class="map-route route-two" d="M224 512 C384 448 500 460 646 490 S824 548 958 494"></path>
      ${points}
    </svg>
    <div class="region-tooltip" id="regionTooltip"></div>
  `;

  qsa("[data-region]", bulgariaMap).forEach((element) => {
    element.addEventListener("click", () => selectRegion(element.dataset.region));
    element.addEventListener("mouseenter", (event) => showRegionTooltip(event, element.dataset.region));
    element.addEventListener("mousemove", moveRegionTooltip);
    element.addEventListener("mouseleave", hideRegionTooltip);
    element.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        selectRegion(element.dataset.region);
      }
    });
  });
  updateRegionFeature();
}

function selectRegion(regionId) {
  state.selectedRegion = regionId;
  qsa("[data-region]", bulgariaMap).forEach((element) => {
    element.classList.toggle("is-active", element.dataset.region === regionId);
  });
  updateRegionFeature();
}

function updateRegionFeature() {
  const region = regions.find((item) => item.id === state.selectedRegion) || regions[0];
  regionFeature.innerHTML = `
    <div class="region-feature__image">
      <img src="${region.image}" alt="${region.name}" loading="lazy" onerror="this.onerror=null;this.src='${realPhoto.hero}'">
    </div>
    <div class="region-feature__body">
      <span class="panel-kicker">Región culinaria</span>
      <h3>${region.name}</h3>
      <p>${region.description}</p>
      <ul>
        <li><strong>Ingredientes típicos:</strong> ${region.ingredients}</li>
        <li><strong>Platos representativos:</strong> ${region.dishes}</li>
        <li><strong>Historia culinaria:</strong> ${region.history}</li>
      </ul>
    </div>
  `;
}

function showRegionTooltip(event, regionId) {
  const tooltip = qs("#regionTooltip");
  const region = regions.find((item) => item.id === regionId);
  if (!tooltip || !region) return;
  tooltip.innerHTML = `<strong>${region.name}</strong><span>${region.dishes}</span>`;
  tooltip.classList.add("is-visible");
  moveRegionTooltip(event);
}

function moveRegionTooltip(event) {
  const tooltip = qs("#regionTooltip");
  if (!tooltip) return;
  const rect = bulgariaMap.getBoundingClientRect();
  tooltip.style.left = `${event.clientX - rect.left + 18}px`;
  tooltip.style.top = `${event.clientY - rect.top + 18}px`;
}

function hideRegionTooltip() {
  qs("#regionTooltip")?.classList.remove("is-visible");
}

const filterLabels = {
  premium: "Colección premium",
  parrilla: "Parrilla",
  postres: "Postres",
  capital: "Sofía",
  tradicional: "Tradición",
  panes: "Panes",
  mercados: "Mercados",
  montañas: "Montañas",
  trajes: "Trajes",
  festivales: "Festivales",
  mesas: "Mesas",
  vino: "Vino",
  rosas: "Rosas",
  mar: "Mar Negro",
  ceramica: "Cerámica"
};

function filterLabel(value) {
  return filterLabels[value] || value;
}

function renderFilterBar(container, values, activeValue, type) {
  container.innerHTML = values.map((value) => `
    <button class="filter-btn ${value === activeValue ? "is-active" : ""}" type="button" data-filter-type="${type}" data-filter="${value}">
      ${filterLabel(value)}
    </button>
  `).join("");
}

function dishCard(dish, extraClass = "") {
  return `
    <article class="card ${extraClass} reveal">
      <div class="card-media">
        <img src="${dish.image}" alt="${dish.name}" loading="lazy" onerror="this.onerror=null;this.src='${realPhoto.hero}'">
        <span><em>${dish.region}</em><em>Fotografía</em></span>
      </div>
      <div class="card-body">
        <span class="meta">${dish.region}</span>
        <h3>${dish.name}</h3>
        <p>${dish.description}</p>
        <dl>
          <div><dt>Ingredientes principales</dt><dd>${dish.ingredients}</dd></div>
          <div><dt>Nota histórica</dt><dd>${dish.history}</dd></div>
        </dl>
      </div>
    </article>
  `;
}

function renderTraditional() {
  const regionsForFilters = ["Todos", ...new Set(traditionalDishes.map((dish) => dish.region))];
  renderFilterBar(traditionalFilters, regionsForFilters, state.traditionalFilter, "traditional");
  const filtered = state.traditionalFilter === "Todos"
    ? traditionalDishes
    : traditionalDishes.filter((dish) => dish.region === state.traditionalFilter);
  traditionalGrid.innerHTML = filtered.map((dish) => dishCard(dish)).join("");
  observeReveals();
}

function renderModern() {
  modernGrid.innerHTML = modernDishes.map((dish) => `
    <article class="modern-card reveal">
      <img src="${dish.image}" alt="${dish.name}" loading="lazy" onerror="this.onerror=null;this.src='${realPhoto.hero}'">
      <div class="modern-info">
        <span>${dish.region}</span>
        <h3>${dish.name}</h3>
        <p>${dish.description}</p>
      </div>
    </article>
  `).join("");
}

function renderGrill() {
  grillGrid.innerHTML = grillDishes.map((dish) => dishCard(dish, "grill-card")).join("");
}

function renderDesserts() {
  dessertGrid.innerHTML = desserts.map((dessert) => dishCard(dessert, "dessert-card")).join("");
}

function renderIngredients() {
  ingredientStrip.innerHTML = ingredients.map((ingredient) => `
    <article class="ingredient-card reveal">
      <div class="ingredient-card__image">
        <img src="${ingredient.image}" alt="${ingredient.name}" loading="lazy" onerror="this.onerror=null;this.src='${realPhoto.hero}'">
      </div>
      <div class="ingredient-card__body">
        <span class="meta">Ingrediente sagrado</span>
        <h3>${ingredient.name}</h3>
        <p>${ingredient.description}</p>
      </div>
    </article>
  `).join("");
}

function renderTraditions() {
  traditionsGrid.innerHTML = traditions.map((tradition) => `
    <article class="tradition-card reveal">
      <div class="tradition-card__image">
        <img src="${tradition.image}" alt="${tradition.name}" loading="lazy" onerror="this.onerror=null;this.src='${realPhoto.hero}'">
      </div>
      <div class="tradition-card__body">
        <h3>${tradition.name}</h3>
        <p>${tradition.description}</p>
      </div>
    </article>
  `).join("");
}

function renderGallery() {
  const categories = ["Todos", ...new Set(gallery.map(([category]) => category))];
  renderFilterBar(galleryFilters, categories, state.galleryFilter, "gallery");
  const items = state.galleryFilter === "Todos" ? gallery : gallery.filter(([category]) => category === state.galleryFilter);
  galleryGrid.innerHTML = items.map(([category, caption, src, ratio]) => `
    <figure class="gallery-item reveal" data-category="${category}" data-src="${src}" data-caption="${caption}">
      <img src="${src}" alt="${caption}" loading="lazy" style="--ratio: ${ratio}" onerror="this.onerror=null;this.src='${realPhoto.hero}'">
      <figcaption>${caption}</figcaption>
    </figure>
  `).join("");
  qsa(".gallery-item", galleryGrid).forEach((item) => {
    item.addEventListener("click", () => openLightbox(item.dataset.src, item.dataset.caption));
  });
  observeReveals();
}

function openLightbox(src, caption) {
  lightboxImage.src = src;
  lightboxImage.alt = caption;
  lightboxCaption.textContent = caption;
  lightbox.classList.add("is-open");
  document.body.style.overflow = "hidden";
}

function closeLightbox() {
  lightbox.classList.remove("is-open");
  document.body.style.overflow = "";
  lightboxImage.src = "";
}

function observeReveals() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
  qsa(".reveal:not(.is-visible)").forEach((item) => observer.observe(item));
}

function setupTilt() {
  document.addEventListener("pointermove", (event) => {
    if (event.pointerType === "touch") return;
    cursorAura.style.opacity = "1";
    cursorAura.style.transform = `translate3d(${event.clientX - 130}px, ${event.clientY - 130}px, 0)`;

    const card = event.target.closest(".card");
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;
    card.style.setProperty("--tilt-y", `${x * 5}deg`);
    card.style.setProperty("--tilt-x", `${y * -5}deg`);
  });

  document.addEventListener("pointerleave", () => {
    cursorAura.style.opacity = "0";
  });
}

function setupScrollEffects() {
  const links = qsa(".nav-menu a");
  const sections = links.map((link) => qs(link.getAttribute("href"))).filter(Boolean);

  function update() {
    const max = document.documentElement.scrollHeight - window.innerHeight;
    scrollMeter.style.width = `${max > 0 ? (window.scrollY / max) * 100 : 0}%`;
    backTop.classList.toggle("is-visible", window.scrollY > 720);

    qsa("[data-parallax]").forEach((element) => {
      const rect = element.getBoundingClientRect();
      const strength = Number(element.dataset.parallax || 0.08);
      element.style.setProperty("--parallax-y", `${rect.top * -strength}px`);
    });

    const current = sections
      .filter((section) => section.getBoundingClientRect().top <= 140)
      .pop();
    if (current) {
      links.forEach((link) => link.classList.toggle("is-active", link.getAttribute("href") === `#${current.id}`));
    }
  }

  window.addEventListener("scroll", update, { passive: true });
  window.addEventListener("resize", update);
  update();
}

function setupParticles() {
  const ctx = particleCanvas.getContext("2d");
  const particles = [];

  function resize() {
    const ratio = Math.min(window.devicePixelRatio || 1, 2);
    particleCanvas.width = window.innerWidth * ratio;
    particleCanvas.height = window.innerHeight * ratio;
    particleCanvas.style.width = `${window.innerWidth}px`;
    particleCanvas.style.height = `${window.innerHeight}px`;
    ctx.setTransform(ratio, 0, 0, ratio, 0, 0);
    particles.length = 0;
    const count = Math.min(90, Math.max(42, Math.floor(window.innerWidth / 18)));
    for (let i = 0; i < count; i += 1) {
      particles.push({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        r: Math.random() * 2.4 + 0.6,
        s: Math.random() * 0.35 + 0.12,
        a: Math.random() * 0.42 + 0.1,
        hue: Math.random() > 0.35 ? "217, 179, 95" : "246, 237, 220"
      });
    }
  }

  function draw() {
    ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
    particles.forEach((particle) => {
      particle.y -= particle.s;
      particle.x += Math.sin((particle.y + particle.r) / 42) * 0.18;
      if (particle.y < -8) {
        particle.y = window.innerHeight + 8;
        particle.x = Math.random() * window.innerWidth;
      }
      ctx.beginPath();
      ctx.fillStyle = `rgba(${particle.hue}, ${particle.a})`;
      ctx.arc(particle.x, particle.y, particle.r, 0, Math.PI * 2);
      ctx.fill();
    });
    requestAnimationFrame(draw);
  }

  resize();
  draw();
  window.addEventListener("resize", resize);
}

let audioContext;
let masterGain;
let droneOsc;
let harmonyOsc;
let pulseOsc;
let pulseGain;
let noiseSource;
let noiseGain;
let audioElement;
let analyser;
let sourceNode;
const waveCtx = waveCanvas.getContext("2d");

async function setupAudio() {
  if (audioContext) return;
  audioContext = new (window.AudioContext || window.webkitAudioContext)();
  masterGain = audioContext.createGain();
  masterGain.gain.value = Number(volumeControl.value);
  analyser = audioContext.createAnalyser();
  analyser.fftSize = 1024;
  analyser.smoothingTimeConstant = 0.86;
  masterGain.connect(analyser);
  analyser.connect(audioContext.destination);

  const hasMp3 = await fetch(AUDIO_SOURCE, { method: "HEAD" }).then((response) => response.ok).catch(() => false);
  if (hasMp3) {
    audioElement = new Audio(AUDIO_SOURCE);
    audioElement.loop = true;
    sourceNode = audioContext.createMediaElementSource(audioElement);
    sourceNode.connect(masterGain);
    qs("#trackName").textContent = "Folklore búlgaro · archivo propio";
    return;
  }

  droneOsc = audioContext.createOscillator();
  harmonyOsc = audioContext.createOscillator();
  pulseOsc = audioContext.createOscillator();
  pulseGain = audioContext.createGain();
  noiseGain = audioContext.createGain();

  droneOsc.type = "sawtooth";
  harmonyOsc.type = "triangle";
  pulseOsc.type = "square";
  droneOsc.frequency.value = 146.83;
  harmonyOsc.frequency.value = 220;
  pulseOsc.frequency.value = 73.42;
  pulseGain.gain.value = 0.05;
  noiseGain.gain.value = 0.025;

  const lowpass = audioContext.createBiquadFilter();
  lowpass.type = "lowpass";
  lowpass.frequency.value = 900;
  lowpass.Q.value = 0.9;

  const buffer = audioContext.createBuffer(1, audioContext.sampleRate * 2, audioContext.sampleRate);
  const data = buffer.getChannelData(0);
  for (let i = 0; i < data.length; i += 1) {
    data[i] = (Math.random() * 2 - 1) * Math.exp(-i / data.length);
  }
  noiseSource = audioContext.createBufferSource();
  noiseSource.buffer = buffer;
  noiseSource.loop = true;

  droneOsc.connect(lowpass);
  harmonyOsc.connect(lowpass);
  pulseOsc.connect(pulseGain);
  pulseGain.connect(lowpass);
  noiseSource.connect(noiseGain);
  noiseGain.connect(lowpass);
  lowpass.connect(masterGain);

  masterGain.gain.value = 0;
  droneOsc.start();
  harmonyOsc.start();
  pulseOsc.start();
  noiseSource.start();
}

async function toggleMusic() {
  await setupAudio();
  if (audioContext.state === "suspended") {
    await audioContext.resume();
  }

  state.isMusicPlaying = !state.isMusicPlaying;
  if (audioElement) {
    if (state.isMusicPlaying) {
      await audioElement.play();
    } else {
      audioElement.pause();
    }
  } else {
    const target = state.isMusicPlaying ? Number(volumeControl.value) : 0;
    masterGain.gain.cancelScheduledValues(audioContext.currentTime);
    masterGain.gain.linearRampToValueAtTime(target, audioContext.currentTime + 0.35);
  }
  updateMusicUI();
}

function updateMusicUI() {
  playPause.textContent = state.isMusicPlaying ? "Ⅱ" : "▶";
  floatingMusic.classList.toggle("is-playing", state.isMusicPlaying);
  qs(".floating-music__state", floatingMusic).textContent = state.isMusicPlaying ? "On" : "Off";
}

function setupWaveform() {
  const data = new Uint8Array(512);
  function draw(time = 0) {
    const width = waveCanvas.width;
    const height = waveCanvas.height;
    waveCtx.clearRect(0, 0, width, height);
    const gradient = waveCtx.createLinearGradient(0, 0, width, 0);
    gradient.addColorStop(0, "#2f6d52");
    gradient.addColorStop(0.48, "#d9b35f");
    gradient.addColorStop(1, "#7f1d2e");
    waveCtx.strokeStyle = gradient;
    waveCtx.lineWidth = 3;
    waveCtx.beginPath();

    if (analyser && state.isMusicPlaying) {
      analyser.getByteTimeDomainData(data);
    }

    for (let i = 0; i < data.length; i += 1) {
      const x = (i / (data.length - 1)) * width;
      const base = analyser && state.isMusicPlaying
        ? (data[i] - 128) / 128
        : Math.sin(i * 0.18 + time * 0.002) * 0.18 + Math.sin(i * 0.05 + time * 0.001) * 0.09;
      const y = height / 2 + base * height * 0.34;
      if (i === 0) waveCtx.moveTo(x, y);
      else waveCtx.lineTo(x, y);
    }
    waveCtx.stroke();

    waveCtx.fillStyle = "rgba(217, 179, 95, 0.18)";
    for (let i = 0; i < 34; i += 1) {
      const x = (i / 33) * width;
      const amp = 20 + Math.sin(time * 0.004 + i) * 16;
      waveCtx.fillRect(x, height - amp, 3, amp);
    }
    requestAnimationFrame(draw);
  }
  draw();
}

function setupEvents() {
  navToggle.addEventListener("click", () => {
    const isOpen = !navMenu.classList.contains("is-open");
    navMenu.classList.toggle("is-open", isOpen);
    navToggle.classList.toggle("is-open", isOpen);
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });

  qsa(".nav-menu a").forEach((link) => {
    link.addEventListener("click", (event) => {
      const href = link.getAttribute("href");
      if (!href || !href.startsWith("#")) return;
      const target = qs(href);
      if (target) {
        event.preventDefault();
        target.scrollIntoView({ block: "start", behavior: "smooth" });
        history.pushState(null, "", href);
      }
      navMenu.classList.remove("is-open");
      navToggle.classList.remove("is-open");
      navToggle.setAttribute("aria-expanded", "false");
    });
  });

  document.addEventListener("click", (event) => {
    const filterButton = event.target.closest("[data-filter-type]");
    if (!filterButton) return;
    const { filterType, filter } = filterButton.dataset;
    if (filterType === "traditional") {
      state.traditionalFilter = filter;
      renderTraditional();
    }
    if (filterType === "gallery") {
      state.galleryFilter = filter;
      renderGallery();
    }
  });

  backTop.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
  lightboxClose.addEventListener("click", closeLightbox);
  lightbox.addEventListener("click", (event) => {
    if (event.target === lightbox) closeLightbox();
  });
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && lightbox.classList.contains("is-open")) closeLightbox();
  });

  [playPause, floatingMusic, heroMusicBtn, footerPlayer].forEach((button) => {
    button.addEventListener("click", toggleMusic);
  });

  volumeControl.addEventListener("input", () => {
    if (!masterGain) return;
    masterGain.gain.value = state.isMusicPlaying ? Number(volumeControl.value) : 0;
  });
}

function init() {
  renderHistory();
  renderMap();
  renderTraditional();
  renderGrill();
  renderModern();
  renderDesserts();
  renderIngredients();
  renderTraditions();
  renderGallery();
  setupEvents();
  setupTilt();
  setupScrollEffects();
  setupParticles();
  setupWaveform();
  observeReveals();
  updateMusicUI();
  if (window.location.hash) {
    requestAnimationFrame(() => {
      qs(window.location.hash)?.scrollIntoView({ block: "start" });
    });
  }
}

init();

  return () => {};
}
