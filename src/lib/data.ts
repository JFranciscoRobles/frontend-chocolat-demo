export type Product = {
  id: string;
  nombre: string;
  slug: string;
  descripcion: string;
  valor: number;
  moneda: string;
  categorias: string[];
  imagen: string;
  disponibilidad: boolean;
  href: string;
};

export const productsData: Product[] = [
  {
    id: 'a1b2c',
    nombre: 'Caja de Bombones de Chocolate Negro',
    slug: 'caja-de-bombones-de-chocolate-negro',
    descripcion: 'Esta caja de bombones de chocolate negro es perfecta para los amantes del chocolate intenso. Con un sabor profundo y rico, cada bombón está relleno de diferentes ingredientes gourmet, ideal para ocasiones especiales como aniversarios y San Valentín.',
    valor: 300,
    moneda: 'MXN',
    categorias: ['Gourmet', 'Clásico'],
    imagen: 'https://img.freepik.com/fotos-premium/caja-chocolates-fondo-negro-altos-detalles-imagen-caja-completa-transformada_532264-133.jpg',
    disponibilidad: false,
    href: '/chocolates/caja-de-bombones-de-chocolate-negro'
  },
  {
    id: 'd3e4f',
    nombre: 'Caja de Trufas de Chocolate Blanco',
    slug: 'caja-de-trufas-de-chocolate-blanco',
    descripcion: 'Estas elegantes trufas de chocolate blanco representan pureza y lujo. Con una textura suave y cremosa, son perfectas para regalar en bodas y eventos formales.',
    valor: 270,
    moneda: 'MXN',
    categorias: ['Elegante', 'Lujoso'],
    imagen: 'https://lamimigb.com/cdn/shop/articles/1_0be6c6f7-9a28-4e0d-ba63-9aa157c022de_1200x1200.jpg?v=1644345344',
    disponibilidad: true,
    href: '/chocolates/caja-de-trufas-de-chocolate-blanco'
  },
  {
    id: 'g5h6i',
    nombre: 'Caja de Chocolates con Frutas',
    slug: 'caja-de-chocolates-con-frutas',
    descripcion: 'Esta vibrante caja de chocolates con frutas es ideal para aquellos que disfrutan de una mezcla de sabores dulces y frescos. Perfecta para expresar afecto y cariño.',
    valor: 240,
    moneda: 'MXN',
    categorias: ['Afecto', 'Cariño'],
    imagen: 'https://cosasbucket.s3.amazonaws.com/wp-content/uploads/2022/02/11102631/chocolate.png',
    disponibilidad: true,
    href: '/chocolates/caja-de-chocolates-con-frutas'
  },
  {
    id: 'j7k8l',
    nombre: 'Caja de Chocolates con Nueces',
    slug: 'caja-de-chocolates-con-nueces',
    descripcion: 'Una caja de chocolates con nueces crujientes que simboliza alegría y energía. Perfecta para alegrar cualquier espacio y regalar a alguien especial.',
    valor: 330,
    moneda: 'MXN',
    categorias: ['Alegre', 'Energética'],
    imagen: 'https://img.freepik.com/fotos-premium/deliciosos-chocolates-plato-sobre-mesa_5095-3770.jpg',
    disponibilidad: true,
    href: '/chocolates/caja-de-chocolates-con-nueces'
  },
  {
    id: 'm9n0o',
    nombre: 'Caja de Bombones de Caramelo',
    slug: 'caja-de-bombones-de-caramelo',
    descripcion: 'Una caja sencilla y encantadora de bombones rellenos de caramelo, símbolo de dulzura y felicidad. Perfecta para transmitir amor sincero y amistoso en cualquier ocasión.',
    valor: 210,
    moneda: 'MXN',
    categorias: ['Encantadora', 'Dulce'],
    imagen: 'https://regalosdarwin.com/cdn/shop/files/Caja-LARGE-Open_87be57f2-6d54-4c92-94b6-5b96879aa4f9.jpg?v=1709915234&width=1445',
    disponibilidad: true,
    href: '/chocolates/caja-de-bombones-de-caramelo'
  },
  {
    id: 'p1q2r',
    nombre: 'Caja de Trufas de Chocolate Amargo',
    slug: 'caja-de-trufas-de-chocolate-amargo',
    descripcion: 'Esta caja de trufas de chocolate amargo exóticas es ideal para expresar admiración y respeto. Con sus sabores intensos y elegantes, aporta distinción a cualquier ambiente.',
    valor: 390,
    moneda: 'MXN',
    categorias: ['Exótica', 'Sofisticada'],
    imagen: 'https://i.pinimg.com/736x/68/9e/5d/689e5d67ebb1779ba8b68c7d56213314.jpg',
    disponibilidad: true,
    href: '/chocolates/caja-de-trufas-de-chocolate-amargo'
  },
  {
    id: 's3t4u',
    nombre: 'Caja de Chocolates con Licor',
    slug: 'caja-de-chocolates-con-licor',
    descripcion: 'Esta caja de chocolates con licor es símbolo de lujo y sofisticación. Sus sabores intensos y únicos añaden un toque de elegancia a cualquier celebración.',
    valor: 180,
    moneda: 'MXN',
    categorias: ['Resistente', 'Lujoso'],
    imagen: 'https://img.freepik.com/fotos-premium/caja-trufas-chocolate-oscuro-caja-marron-chocolates-al-costado_771703-5574.jpg',
    disponibilidad: true,
    href: '/chocolates/caja-de-chocolates-con-licor'
  },
  {
    id: 'v5w6x',
    nombre: 'Caja de Chocolates Artesanales',
    slug: 'caja-de-chocolates-artesanales',
    descripcion: 'Esta lujosa caja de chocolates artesanales es ideal para demostrar amor y aprecio. Sus ingredientes seleccionados y su cuidadosa elaboración son perfectos para eventos elegantes.',
    valor: 450,
    moneda: 'MXN',
    categorias: ['Lujosa', 'Romántica'],
    imagen: 'https://png.pngtree.com/background/20230519/original/pngtree-various-chocolates-in-a-heart-shaped-box-on-a-dark-background-picture-image_2652288.jpg',
    disponibilidad: true,
    href: '/chocolates/caja-de-chocolates-artesanales'
  },
  {
    id: 'y7z8a',
    nombre: 'Caja de Chocolates con Menta',
    slug: 'caja-de-chocolates-con-menta',
    descripcion: 'Esta caja de chocolates con menta pequeños y frescos es símbolo de frescura y pureza. Perfecta para expresar sentimientos sinceros con su sabor refrescante.',
    valor: 360,
    moneda: 'MXN',
    categorias: ['Perfumada', 'Fresca'],
    imagen: 'https://s2.best-wallpaper.net/wallpaper/2880x1800/1712/Love-hearts-candy-chocolate-box_2880x1800.jpg',
    disponibilidad: true,
    href: '/chocolates/caja-de-chocolates-con-menta'
  },
  {
    id: 'b9c0d',
    nombre: 'Caja de Chocolates con Café',
    slug: 'caja-de-chocolates-con-cafe',
    descripcion: 'Esta caja de chocolates con café es perfecta para expresar amor y energía. Sus sabores intensos y vibrantes son ideales para cualquier ocasión especial.',
    valor: 252,
    moneda: 'MXN',
    categorias: ['Versátil', 'Energética'],
    imagen: 'https://preview.free3d.com/img/2023/06/3191672774644991131/d3syc37c.jpg',
    disponibilidad: true,
    href: '/chocolates/caja-de-chocolates-con-cafe'
  },
  {
    id: 'e1f2g',
    nombre: 'Caja de Trufas de Chocolate con Frutas',
    slug: 'caja-de-trufas-de-chocolate-con-frutas',
    descripcion: 'Esta espectacular caja de trufas de chocolate con frutas es ideal para demostrar amor y aprecio. Sus combinaciones de sabores son perfectas para cualquier evento especial.',
    valor: 300,
    moneda: 'MXN',
    categorias: ['Ornamentada', 'Deliciosa'],
    imagen: 'https://us.123rf.com/450wm/funlovingvolvo/funlovingvolvo1605/funlovingvolvo160500180/56679055-chocolates-de-lujo-en-varias-formas-y-sabores-en-una-caja-de-regalo.jpg?ver=6',
    disponibilidad: true,
    href: '/chocolates/caja-de-trufas-de-chocolate-con-frutas'
  },
  {
    id: 'h3i4j',
    nombre: 'Caja de Chocolates Picantes',
    slug: 'caja-de-chocolates-picantes',
    descripcion: 'Esta caja de chocolates picantes es ideal para aquellos que buscan una experiencia única. Sus sabores intensos y especiados añaden un toque de aventura a cualquier ocasión.',
    valor: 282,
    moneda: 'MXN',
    categorias: ['Simbólica', 'Aventurera'],
    imagen: 'https://p4.wallpaperbetter.com/wallpaper/406/901/194/chocolate-candy-box-chocolate-wallpaper-preview.jpg',
    disponibilidad: true,
    href: '/chocolates/caja-de-chocolates-picantes'
  },
  {
    id: 'k5l6m',
    nombre: 'Caja de Chocolates con Naranja',
    slug: 'caja-de-chocolates-con-naranja',
    descripcion: 'Esta caja de chocolates con naranja es perfecta para expresar frescura y vitalidad. Sus sabores cítricos y dulces añaden un toque de alegría a cualquier evento.',
    valor: 198,
    moneda: 'MXN',
    categorias: ['Fragante', 'Vital'],
    imagen: 'https://static.vecteezy.com/system/resources/previews/029/291/937/non_2x/chocolates-and-chocolate-pralines-in-a-gift-box-as-a-luxury-holiday-present-generative-ai-photo.jpg',
    disponibilidad: true,
    href: '/chocolates/caja-de-chocolates-con-naranja'
  },
  {
    id: 'n7o8p',
    nombre: 'Caja de Chocolates con Coco',
    slug: 'caja-de-chocolates-con-coco',
    descripcion: 'Esta caja de chocolates con coco es símbolo de exotismo y dulzura. Perfecta para expresar amor puro y sincero en cualquier ocasión especial.',
    valor: 330,
    moneda: 'MXN',
    categorias: ['Pura', 'Dulce'],
    imagen: 'https://static.vecteezy.com/system/resources/previews/027/247/943/non_2x/beautiful-chocolate-box-full-of-chocolate-treats-free-photo.jpg',
    disponibilidad: true,
    href: '/chocolates/caja-de-chocolates-con-coco'
  },
  {
    id: 'q1r2s',
    nombre: 'Caja de Chocolates con Avellanas',
    slug: 'caja-de-chocolates-con-avellanas',
    descripcion: 'Esta exuberante caja de chocolates con avellanas es ideal para expresar amor y gratitud. Sus combinaciones de sabores y texturas son perfectas para cualquier celebración.',
    valor: 312,
    moneda: 'MXN',
    categorias: ['Exuberante', 'Gratitud'],
    imagen: 'https://st2.depositphotos.com/1177973/6137/i/450/depositphotos_61374471-stock-photo-delicious-chocolate-candies-in-gift.jpg',
    disponibilidad: true,
    href: '/chocolates/caja-de-chocolates-con-avellanas'
  }
]
