/* ============================================================
   Catálogo Navideño · Expressions by Pao
   Precios y características tomados del catálogo original.
   Para editar un producto: cambia nombre, descripción, incluye
   o precios. Los precios se muestran tal cual se escriban.
   ============================================================ */

const WHATSAPP = "593992960402";
const INSTAGRAM = "expressionsbypaorio";

const PRODUCTOS = [
  {
    id: "reno",
    nombre: "Reno",
    categoria: "velas",
    img: "assets/img/products/reno.jpg",
    ar: 1,
    desc: "Renos de cera con campanita dorada al cuello. Un detalle tierno para el árbol, la mesa o un recuerdo de Navidad.",
    incluye: ["Tarjeta personalizada", "Envoltura"],
    precios: [
      { etiqueta: "c/u", valor: "$3,75" },
      { etiqueta: "x Doc", valor: "$3,50", secundario: true }
    ]
  },
  {
    id: "arbol-navidad",
    nombre: "Árbol de navidad",
    categoria: "velas",
    img: "assets/img/products/arbol-navidad.jpg",
    ar: 0.8,
    desc: "Pino de cera en verde oliva y crema, sobre base de madera natural. Enciende con una luz cálida y un aroma suave.",
    incluye: ["Tarjeta personalizada", "Envoltura"],
    precios: [
      { etiqueta: "c/u", valor: "$2,75" },
      { etiqueta: "x Doc", valor: "$2,50", secundario: true }
    ]
  },
  {
    id: "arbol-navidad-torneado",
    nombre: "Árbol de navidad torneado",
    categoria: "velas",
    img: "assets/img/products/arbol-navidad-torneado.jpg",
    ar: 1,
    desc: "Árbol torneado con capas definidas y punta dorada. Disponible en rojo, verde y marfil para combinar en la mesa.",
    incluye: ["Tarjeta personalizada", "Envoltura"],
    precios: [
      { etiqueta: "c/u", valor: "$2,75" },
      { etiqueta: "x Doc", valor: "$2,50", secundario: true }
    ]
  },
  {
    id: "arbol-navidad-clasico",
    nombre: "Árbol de Navidad",
    categoria: "velas",
    img: "assets/img/products/arbol-navidad-clasico.jpg",
    ar: 1.5,
    desc: "Silueta redondeada y copa frondosa: la pieza perfecta para el centro de mesa. Disponible en verde, arena y marfil.",
    incluye: ["Tarjeta personalizada", "Envoltura"],
    precios: [
      { etiqueta: "c/u", valor: "$2,00" },
      { etiqueta: "x Doc", valor: "$2,25", secundario: true }
    ]
  },
  {
    id: "nomo",
    nombre: "Nomo",
    categoria: "velas",
    img: "assets/img/products/nomo.jpg",
    ar: 1.3333,
    desc: "Nomo navideño de cera con detalles dorados y barba trabajada. Un clásico de temporada en tamaño de bolsillo.",
    incluye: ["Tarjeta personalizada", "Envoltura"],
    precios: [
      { etiqueta: "c/u", valor: "$1,50" },
      { etiqueta: "x Doc", valor: "$1,25", secundario: true }
    ]
  },
  {
    id: "ositos",
    nombre: "Ositos",
    categoria: "velas",
    img: "assets/img/products/ositos.jpg",
    ar: 1.3333,
    desc: "Ositos de cera con moño rojo estampado. Dos tamaños para combinar como recuerdo o detalle de mesa.",
    incluye: ["Tarjeta personalizada", "Envoltura"],
    precios: [
      { grupo: "Oso grande", etiqueta: "c/u", valor: "$2,75" },
      { grupo: "Oso grande", etiqueta: "x Doc", valor: "$2,50", secundario: true },
      { grupo: "Oso pequeño", etiqueta: "c/u", valor: "$1,75" },
      { grupo: "Oso pequeño", etiqueta: "x Doc", valor: "$1,50", secundario: true }
    ]
  },
  {
    id: "casita",
    nombre: "Casita",
    categoria: "velas",
    img: "assets/img/products/casita.jpg",
    ar: 1,
    desc: "Casita de cera con techo a dos aguas y un muñeco de jengibre en relieve. Ilumina cualquier rincón de la casa.",
    incluye: ["Tarjeta personalizada", "Envoltura"],
    precios: [
      { etiqueta: "c/u", valor: "$3,75" },
      { etiqueta: "x Doc", valor: "$3,50", secundario: true }
    ]
  },
  {
    id: "sagrada-familia",
    nombre: "Sagrada Familia",
    categoria: "velas",
    img: "assets/img/products/sagrada-familia.jpg",
    ar: 0.8,
    desc: "Sagrada Familia tallada en tono arena, con textura artesanal. Un recordatorio sereno y elegante de la Navidad.",
    incluye: ["Tarjeta personalizada", "Envoltura"],
    precios: [
      { etiqueta: "c/u", valor: "$2,75" },
      { etiqueta: "x Doc", valor: "$2,50", secundario: true }
    ]
  },
  {
    id: "wax-sachets",
    nombre: "Wax Sachets",
    categoria: "velas",
    img: "assets/img/products/wax-sachets.jpg",
    ar: 1.2,
    desc: "Colgantes aromáticos de cera con moños, flores y figuras navideñas. Perfuman clósets y habitaciones sin encenderse.",
    incluye: ["Tarjeta personalizada", "Envoltura"],
    precios: [
      { etiqueta: "c/u", valor: "$2,75" },
      { etiqueta: "x Doc", valor: "$2,50", secundario: true }
    ]
  },
  {
    id: "flor-navidad",
    nombre: "Flor de Navidad",
    categoria: "velas",
    img: "assets/img/products/flor-navidad.jpg",
    ar: 2.3013,
    desc: "Flor de pascua vaciada en cera con centro de perlas doradas. Una pieza escultural en verde y vino.",
    incluye: ["Tarjeta personalizada", "Envoltura"],
    precios: [
      { etiqueta: "c/u", valor: "$2,00" },
      { etiqueta: "x Doc", valor: "$1,75", secundario: true }
    ]
  },
  {
    id: "copo-nieve",
    nombre: "Copo de nieve grande",
    categoria: "velas",
    img: "assets/img/products/copo-nieve.jpg",
    ar: 0.7992,
    desc: "Copos de cera con acabado escarchado. Se lucen solos o en grupo sobre la mesa o el árbol.",
    incluye: ["Tarjeta personalizada", "Envoltura"],
    precios: [
      { etiqueta: "c/u", valor: "$2,00" },
      { etiqueta: "x Doc", valor: "$1,75", secundario: true }
    ]
  },
  {
    id: "muneco-jengibre",
    nombre: "Muñeco de Jengibre",
    categoria: "velas",
    img: "assets/img/products/muneco-jengibre.jpg",
    ar: 1,
    desc: "Muñeco de jengibre de cera con botones y moño en relieve. Ternura en miniatura para recuerdos y detalles.",
    incluye: ["Tarjeta personalizada", "Envoltura"],
    precios: [
      { etiqueta: "c/u", valor: "$1,50" },
      { etiqueta: "x Doc", valor: "$1,25", secundario: true }
    ]
  },
  {
    id: "set-velas-deseos",
    nombre: "Set Velas de los Deseos",
    categoria: "velas",
    img: "assets/img/products/set-velas-deseos.jpg",
    ar: 0.8,
    desc: "Cuatro velas con palabras en relieve para pedir un deseo: amor, paz, familia, salud, gratitud, abundancia, Dios y felicidad.",
    incluye: [
      "4 velas a elección",
      "AMOR · PAZ · FAMILIA · SALUD · GRATITUD · ABUNDANCIA · DIOS · FELICIDAD",
      "Tarjeta personalizada",
      "Caja"
    ],
    precios: [
      { etiqueta: "x Set", valor: "$6,75" },
      { etiqueta: "c/u", valor: "$2,25", secundario: true }
    ]
  },
  {
    id: "mini-arbol-navideno",
    nombre: "Mini árbol navideño",
    categoria: "velas",
    img: "assets/img/products/mini-arbol-navideno.jpg",
    ar: 0.8,
    desc: "Mini árbol de cera en tonos verdes dentro de una copa dorada, con figuras navideñas en miniatura. Un regalo de escritorio.",
    incluye: ["Tarjeta personalizada más cinta", "Caja"],
    precios: [
      { etiqueta: "c/u", valor: "$5,00" },
      { etiqueta: "x Doc", valor: "$4,75", secundario: true }
    ]
  },
  {
    id: "dulce-aroma",
    nombre: "Dulce aroma",
    categoria: "velas",
    img: "assets/img/products/dulce-aroma.jpg",
    ar: 0.8,
    desc: "Ocho velas navideñas aromáticas en caja cilíndrica con tapa: para quemador o para encender. Incluye tarjeta personalizada.",
    incluye: [
      "8 velas navideñas para quemador o encender",
      "Caja cilíndrica con tapa",
      "Tarjeta personalizada"
    ],
    precios: [
      { etiqueta: "c/u", valor: "$15,00" },
      { etiqueta: "x mayor", valor: "$13,00", secundario: true }
    ]
  },
  {
    id: "margaritas-navidenas",
    nombre: "Adorno margaritas navideñas",
    categoria: "velas",
    img: "assets/img/products/margaritas-navidenas.jpg",
    ar: 0.8,
    desc: "Margarita de cera de soya sobre base de yeso, presentada en bolsa transparente con moño y tarjeta Feliz Navidad.",
    incluye: ["Base de yeso con cera de soya", "Margarita de cera de soya", "Envoltura"],
    precios: [
      { etiqueta: "c/u", valor: "$3,75" },
      { etiqueta: "x Doc", valor: "$3,50", secundario: true }
    ]
  },
  {
    id: "quemador-wax-melts",
    nombre: "Quemador con Wax melts",
    categoria: "velas",
    img: "assets/img/products/quemador-wax-melts.jpg",
    ar: 0.8,
    desc: "Quemador de cerámica con 200 g de figuras navideñas en cera de soya, aroma a elección. Incluye tarjeta, cinta y caja.",
    incluye: [
      "200 gr. de figuras navideñas en cera de soya",
      "Aroma a elección",
      "Tarjeta personalizada más cinta y caja"
    ],
    precios: [
      { etiqueta: "c/u", valor: "$7,50" },
      { etiqueta: "x Doc", valor: "$7,25", secundario: true }
    ]
  },
  {
    id: "pesebre-cera-granulada",
    nombre: "Pesebre con cera granulada",
    categoria: "velas",
    img: "assets/img/products/pesebre-cera-granulada.jpg",
    ar: 0.8,
    desc: "Pesebre sobre bandeja de porcelana con cera granulada efecto nieve, dos velas y diez mechas. Una pieza para mirar y encender.",
    incluye: [
      "2 velas navideñas",
      "Bandeja de porcelana",
      "Tarjeta personalizada",
      "Figuras de yeso",
      "10 mechas",
      "200 gr. de cera"
    ],
    precios: [
      { etiqueta: "c/u", valor: "$16,00" },
      { etiqueta: "x mayor", valor: "$15,00", secundario: true }
    ]
  },
  {
    id: "caja-wax-melts",
    nombre: "Caja Wax Melts Navideña",
    categoria: "velas",
    img: "assets/img/products/caja-wax-melts.jpg",
    ar: 0.9156,
    desc: "250 g de figuras navideñas de cera aromática en caja kraft con lazo. Elige tu aroma favorito.",
    incluye: [
      "250 g de figuras navideñas"
    ],
    precios: [
      { etiqueta: "c/u", valor: "$6,00" },
      { etiqueta: "al por mayor", valor: "$5,50", secundario: true }
    ]
  },
  {
    id: "tarjetas-con-vela",
    nombre: "Tarjetas con Vela",
    categoria: "velas",
    img: "assets/img/products/tarjetas-con-vela.jpg",
    ar: 0.8571,
    desc: "Tarjeta navideña con max melts altamente aromatizada, tarjeta personalizada y envoltura. Varias figuras a elección.",
    incluye: [
      "Max melts altamente aromatizada",
      "Tarjeta personalizada",
      "Envoltura"
    ],
    precios: [
      { etiqueta: "c/u", valor: "$1,75" },
      { etiqueta: "al por mayor", valor: "$1,50", secundario: true }
    ]
  },
  {
    id: "vela-navidad",
    nombre: "Vela Navideña",
    categoria: "velas",
    img: "assets/img/products/vela-navidad.jpg",
    ar: 0.6672,
    desc: "Vela decorada con diseños navideños sobre base de yeso, altamente aromatizada y con tarjeta personalizada.",
    incluye: [
      "Vela decorada con diseños navideños altamente aromatizada",
      "Base de yeso",
      "Tarjeta personalizada",
      "Envoltura"
    ],
    precios: [
      { etiqueta: "c/u", valor: "$5,00" },
      { etiqueta: "al por mayor", valor: "$4,50", secundario: true }
    ]
  },
  {
    id: "ancheta-grande",
    nombre: "Árbol Navideño grande",
    categoria: "vinos",
    img: "assets/img/products/ancheta-grande.jpg",
    ar: 0.8,
    desc: "Ancheta en caja de pino con vino, frutos secos, miel, galletas navideñas y Ferrero Rocher, decorada con follaje. El regalo completo.",
    incluye: [
      "Caja de pino",
      "Botella de vino",
      "Frasco de frutos secos",
      "Frasco de miel",
      "Galletas navideñas",
      "Tarjeta personalizada y follaje navideño",
      "Chocolates Ferrero Rocher",
      "Envoltura"
    ],
    precios: [
      { etiqueta: "c/u", valor: "$28,00" },
      { etiqueta: "al por mayor", valor: "$25,00", secundario: true }
    ]
  },
  {
    id: "ancheta-pequena",
    nombre: "Árbol Navideño pequeño",
    categoria: "vinos",
    img: "assets/img/products/ancheta-pequena.jpg",
    ar: 0.8,
    desc: "Ancheta en caja de pino con vino, caramelos, galletas navideñas y Ferrero Rocher, con follaje y tarjeta personalizada.",
    incluye: [
      "Caja de pino",
      "Botella de vino",
      "Caja de caramelos",
      "Galletas navideñas",
      "Tarjeta personalizada y follaje navideño",
      "Chocolates Ferrero Rocher",
      "Envoltura"
    ],
    precios: [
      { etiqueta: "c/u", valor: "$20,00" },
      { etiqueta: "al por mayor", valor: "$18,00", secundario: true }
    ]
  },
  {
    id: "pesebre-uno",
    nombre: "Pesebre navideño UNO",
    categoria: "vinos",
    img: "assets/img/products/pesebre-uno.jpg",
    ar: 0.8,
    desc: "Caja de madera con vino, frutos secos y un quemador de cera con 200 g de wax melts. Un regalo cálido para compartir.",
    incluye: [
      "Caja de madera",
      "Botella de vino",
      "Frasco de frutos secos",
      "Tarjeta personalizada",
      "Quemador de cera con 200 gr. de wax melts"
    ],
    precios: [
      { etiqueta: "c/u", valor: "$20,00" },
      { etiqueta: "al por mayor", valor: "$18,00", secundario: true }
    ]
  },
  {
    id: "pesebre-dos",
    nombre: "Pesebre navideño DOS",
    categoria: "vinos",
    img: "assets/img/products/pesebre-dos.jpg",
    ar: 0.8,
    desc: "Caja de madera con vino, frutos secos y tres Ferrero Rocher, presentada con tarjeta personalizada.",
    incluye: [
      "Caja de madera",
      "Botella de vino",
      "Frasco de frutos secos",
      "Chocolates Ferrero Rocher x 3 u",
      "Tarjeta personalizada"
    ],
    precios: [
      { etiqueta: "c/u", valor: "$15,00" },
      { etiqueta: "al por mayor", valor: "$13,75", secundario: true }
    ]
  },
  {
    id: "estrella-navidad",
    nombre: "Estrella de Navidad",
    categoria: "vinos",
    img: "assets/img/products/estrella-navidad.jpg",
    ar: 1,
    desc: "Caja de pino en forma de estrella con vino, frutos secos o miel, Ferrero Rocher y follaje. Nuestra estrella de la temporada.",
    incluye: [
      "Caja de pino",
      "Botella de vino",
      "Frasco de frutos secos o miel",
      "Chocolates Ferrero Rocher x 3 u",
      "Tarjeta personalizada",
      "Follaje navideño"
    ],
    precios: [
      { etiqueta: "c/u", valor: "$23,00" },
      { etiqueta: "al por mayor", valor: "$21,00", secundario: true }
    ]
  },
  {
    id: "estrella-navidad-dos",
    nombre: "Estrella de Navidad DOS",
    categoria: "vinos",
    img: "assets/img/products/estrella-navidad-dos.jpg",
    ar: 0.8,
    desc: "Caja de madera con vino, frutos secos, vela de la colección navideña y tres Ferrero Rocher, con follaje y tarjeta.",
    incluye: [
      "Caja de madera",
      "Botella de vino",
      "Frasco de frutos secos",
      "Tarjeta personalizada y follaje navideño",
      "Vela de la colección navideña",
      "Chocolates Ferrero Rocher x 3 u"
    ],
    precios: [
      { etiqueta: "c/u", valor: "$23,00" },
      { etiqueta: "al por mayor", valor: "$21,00", secundario: true }
    ]
  },
  {
    id: "caja-vino-delicias",
    nombre: "Caja Vino & Delicias",
    categoria: "vinos",
    img: "assets/img/products/caja-vino-delicias.jpg",
    ar: 0.8,
    desc: "Caja de pino con vino, galletas, chocolates y frutos secos, decorada con follaje navideño. Un regalo completo para compartir.",
    incluye: [
      "Caja de pino",
      "Vino de 500 ml",
      "Galletas",
      "Chocolates Ferrero x 3",
      "Frutos secos",
      "Follaje navideño",
      "Tarjeta personalizada"
    ],
    precios: [
      { etiqueta: "c/u", valor: "$18,00" },
      { etiqueta: "x Docena", valor: "$16,00", secundario: true }
    ]
  },
  {
    id: "kit-rodolfo",
    nombre: "Kit Navideño Rodolfo",
    categoria: "velas",
    img: "assets/img/products/kit-rodolfo.jpg",
    ar: 0.8867,
    desc: "Reno de cera y vela en frasco altamente aromatizada, presentados con envoltura y tarjeta personalizada.",
    incluye: [
      "Reno de cera",
      "Vela en frasco altamente aromatizada",
      "Envoltura",
      "Tarjeta personalizada"
    ],
    precios: [
      { etiqueta: "c/u", valor: "$10,00" },
      { etiqueta: "al por mayor", valor: "$9,00", secundario: true }
    ]
  },
  {
    id: "kit-anito-viejo",
    nombre: "Kit Añito Viejo 2026",
    categoria: "anoviejo",
    img: "assets/img/products/kit-anito-viejo.jpg",
    ar: 1.3333,
    desc: "Kit de Año Viejo con muñeco de plumón, billete de la abundancia y tarjeta de metas y objetivos 2027.",
    incluye: [
      "Muñeco de plumón",
      "Billete de la abundancia",
      "Tarjeta de Metas y Objetivos 2027"
    ],
    precios: [
      { etiqueta: "c/u", valor: "$10,00" },
      { etiqueta: "al por mayor", valor: "$9,00", secundario: true }
    ]
  },
  {
    id: "duo-reno-arbol",
    nombre: "Dúo Reno & Árbol",
    categoria: "velas",
    img: "assets/img/products/duo-reno-arbol.jpg",
    ar: 0.8152,
    desc: "Dos velas navideñas sobre base de yeso: un reno con campanita y un árbol de Navidad. Las figuras también se pueden vender por separado.",
    incluye: [
      "Vela reno",
      "Vela árbol de Navidad",
      "Base de yeso",
      "Envoltura",
      "Tarjeta personalizada"
    ],
    precios: [
      { etiqueta: "c/u", valor: "$10,00" },
      { etiqueta: "al por mayor", valor: "$9,50", secundario: true }
    ]
  },
  {
    id: "trio-velas-navidenas",
    nombre: "Trío de Velas Navideñas",
    categoria: "velas",
    img: "assets/img/products/trio-velas-navidenas.jpg",
    ar: 1.0297,
    desc: "Tres velas de cera —árbol, esfera y burbuja navideña— con follaje, envoltura y tarjeta. Aromas a escoger.",
    incluye: [
      "Vela árbol navideño",
      "Esfera de cera",
      "Burbuja de cera",
      "Envoltura",
      "Tarjeta personalizada",
      "Follaje navideño"
    ],
    precios: [
      { etiqueta: "c/u", valor: "$15,00" },
      { etiqueta: "al por mayor", valor: "$14,50", secundario: true }
    ]
  },
  {
    id: "piqueo-navideno",
    nombre: "Piqueo Navideño",
    categoria: "vinos",
    img: "assets/img/products/piqueo-navideno.jpg",
    ar: 1.0638,
    desc: "Piqueo individual con salami, quesos, jamón de pavo, frutillas, pasas y aceitunas. Listo para compartir.",
    incluye: [
      "Salami",
      "Queso maduro y queso mozzarella",
      "Jamón de pavo",
      "Frutillas",
      "Pasas",
      "Aceitunas",
      "Tarjeta personalizada y decoración"
    ],
    precios: [
      { etiqueta: "c/u", valor: "$3,50" },
      { etiqueta: "al por mayor", valor: "$3,00", secundario: true }
    ]
  },
  {
    id: "box-corporativa",
    nombre: "Box Corporativa Navideña",
    categoria: "corporativos",
    img: "assets/img/products/box-corporativa.jpg",
    ar: 0.8004,
    desc: "Box navideña corporativa con jarro personalizado, frasco de frutos secos y chocolates. Ideal para clientes y equipos.",
    incluye: [
      "Jarro personalizado",
      "Frasco de frutos secos",
      "Chocolates",
      "Envoltura",
      "Tarjeta personalizada"
    ],
    precios: [
      { etiqueta: "c/u", valor: "$10,00" },
      { etiqueta: "al por mayor", valor: "$9,00", secundario: true }
    ]
  },
  {
    id: "botella-vino-chocolate",
    nombre: "Botella Vino & Chocolate",
    categoria: "vinos",
    img: "assets/img/products/botella-vino-chocolate.jpg",
    ar: 0.75,
    desc: "Botella de vino con caja de chocolates, cinta navideña y tarjeta. Colores a elección y contenido de la caja a tu gusto.",
    incluye: [
      "Vino",
      "Caja de chocolates",
      "Tarjeta personalizada",
      "Cinta navideña"
    ],
    precios: [
      { etiqueta: "c/u", valor: "$10,00" },
      { etiqueta: "al por mayor", valor: "$9,50", secundario: true }
    ]
  },
  {
    id: "set-mini-vino",
    nombre: "Set Mini Vino & Ferrero",
    categoria: "vinos",
    img: "assets/img/products/set-mini-vino.jpg",
    ar: 1.8828,
    desc: "Vino pequeño, copa personalizada y cuatro Ferrero Rocher en caja de MDF con follaje navideño.",
    incluye: [
      "Vino pequeño",
      "Caja en MDF",
      "Copa personalizada",
      "Ferrero Rocher x 4",
      "Follaje navideño"
    ],
    precios: [
      { etiqueta: "c/u", valor: "$10,00" },
      { etiqueta: "al por mayor", valor: "$9,50", secundario: true }
    ]
  },
  {
    id: "kit-belleza-rudolph",
    nombre: "Kit Belleza Rudolph",
    categoria: "detalles",
    img: "assets/img/products/kit-belleza-rudolph.jpg",
    ar: 0.75,
    desc: "Tarjeta navideña con vincha rosada y detalles de temporada. Un detalle dulce para regalar.",
    incluye: ["Tarjeta personalizada", "Vincha", "Envoltura"],
    precios: [
      { etiqueta: "c/u", valor: "$2,00" },
      { etiqueta: "al por mayor", valor: "$1,75", secundario: true }
    ]
  },
  {
    id: "jarros-personalizados",
    nombre: "Jarros Personalizados",
    categoria: "corporativos",
    img: "assets/img/products/jarros-personalizados.jpg",
    ar: 1.7241,
    desc: "Jarro de 11 oz sublimado con diseño navideño o con la marca o nombre que elijas. Varios diseños disponibles.",
    incluye: ["Jarro de 11 oz", "Tarjeta personalizada"],
    precios: [
      { etiqueta: "c/u", valor: "$5,00" },
      { etiqueta: "al por mayor", valor: "$4,00", secundario: true }
    ]
  },
  {
    id: "joyero-personalizado",
    nombre: "Joyero Personalizado",
    categoria: "corporativos",
    img: "assets/img/products/joyero-personalizado.jpg",
    ar: 0.9184,
    desc: "Joyero personalizado con el nombre, cinta y envoltura. Un regalo útil y hecho a medida.",
    incluye: ["Joyero con el nombre", "Tarjeta personalizada con cinta", "Envoltura"],
    precios: [
      { etiqueta: "c/u", valor: "$6,00" },
      { etiqueta: "al por mayor", valor: "$5,00", secundario: true }
    ]
  },
  {
    id: "kit-belleza-estrella",
    nombre: "Kit Belleza Estrella",
    categoria: "detalles",
    img: "assets/img/products/kit-belleza-estrella.jpg",
    ar: 1.0458,
    desc: "Tarjeta navideña con vincha roja y aretes. Un set pequeño y festivo para sorprender.",
    incluye: ["Tarjeta personalizada", "Vincha", "Aretes", "Envoltura"],
    precios: [
      { etiqueta: "c/u", valor: "$2,25" },
      { etiqueta: "al por mayor", valor: "$2,00", secundario: true }
    ]
  },
  {
    id: "kit-novena-brillando",
    nombre: "Kit Novena Brillando",
    categoria: "corporativos",
    img: "assets/img/products/kit-novena-brillando.jpg",
    ar: 0.9184,
    desc: "Kit para las novenas: fosforera personalizada con tu marca o nombre, vela o chispeador, tarjeta y envoltura.",
    incluye: [
      "Fosforera personalizada con la marca o nombre",
      "Vela o chispeador",
      "Tarjeta personalizada",
      "Cinta",
      "Envoltura"
    ],
    precios: [
      { etiqueta: "c/u", valor: "$1,75" },
      { etiqueta: "al por mayor", valor: "$1,60", secundario: true }
    ]
  },
  {
    id: "set-pulsera-aretes",
    nombre: "Set Pulsera & Aretes",
    categoria: "detalles",
    img: "assets/img/products/set-pulsera-aretes.jpg",
    ar: 1.5544,
    desc: "Pulsera y aretes con diseño navideño, presentados con tarjeta y envoltura.",
    incluye: ["Tarjeta personalizada", "Envoltura", "Pulsera", "Aretes"],
    precios: [
      { etiqueta: "c/u", valor: "$2,25" },
      { etiqueta: "al por mayor", valor: "$2,00", secundario: true }
    ]
  }

];

const CATEGORIAS = {
  velas: "Velas & Aromas",
  vinos: "Vinos, Anchetas & Cajas",
  corporativos: "Corporativos & Personalizados",
  detalles: "Detalles & Belleza",
  anoviejo: "Año Viejo"
};

/* Esencias para velas: fragancias seleccionadas para personalizar
   velas y wax melts. La disponibilidad y el gramaje se consultan
   directamente por WhatsApp. */
const ESENCIAS = [
  {
    id: "raspberry",
    nombre: "Raspberry",
    img: "assets/img/esencias/raspberry.jpg",
    desc: "Frambuesa dulce y frutal, con un fondo suave que aporta calidez a velas y wax melts."
  },
  {
    id: "milky-caramel",
    nombre: "Milky Caramel",
    img: "assets/img/esencias/milky-caramel.jpg",
    desc: "Caramelo cremoso con notas de leche y vainilla; un aroma cálido, dulce y envolvente."
  },
  {
    id: "cookies-cream",
    nombre: "Cookies & Cream",
    img: "assets/img/esencias/cookies-cream.jpg",
    desc: "Galleta recién horneada con crema de vainilla; dulce, reconfortante y equilibrado."
  },
  {
    id: "cinnamon-cake",
    nombre: "Cinnamon Cake",
    img: "assets/img/esencias/cinnamon-cake.jpg",
    desc: "Bizcocho de canela con especias suaves y un final acaramelado."
  },
  {
    id: "frosty-pine",
    nombre: "Frosty Pine",
    img: "assets/img/esencias/frosty-pine.jpg",
    desc: "Pino fresco con notas heladas; evoca un bosque invernal y una sensación limpia."
  },
  {
    id: "apple-cinnamon",
    nombre: "Apple Cinnamon",
    img: "assets/img/esencias/apple-cinnamon.jpg",
    desc: "Manzana al horno con canela; frutal, especiado y hogareño."
  }
];
