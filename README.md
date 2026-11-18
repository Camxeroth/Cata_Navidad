# Catálogo Navideño · Expressions by Pao

Sitio de catálogo estático (HTML, CSS y JavaScript, sin dependencias de compilación) armado a partir del PDF
*«Dorado Rojo y Blanco Elegante Catálogo Navideño Post para Instagram»* y de las fotos y precios enviados
posteriormente por la marca.

Se conservaron el diseño (rojo `#c44430`, dorado y tipografía script), las fotos, las características y los
precios originales. Se agregaron descripciones breves por producto y un botón de WhatsApp en cada ficha que
abre el chat con el pedido ya escrito. El fondo de mármol se sustituyó por una foto navideña suavizada con
una capa translúcida, para que los productos sigan siendo los protagonistas.

**Instagram:** [@expressionsbypaorio](https://www.instagram.com/expressionsbypaorio/)  
**Facebook:** [@expressionsbypaorio](https://www.facebook.com/expressionsbypaorio)  
**WhatsApp de pedidos:** configurado en `assets/js/productos.js` (el número no se muestra en el sitio).

---

## Ver el sitio

Abre `index.html` en el navegador (doble clic) o levanta un servidor local:

```bash
python -m http.server 8080
```

y visita `http://localhost:8080`.

---

## Estructura

```
index.html                  Página completa (hero, colecciones, contacto, modal)
assets/
  css/styles.css            Todos los estilos y la paleta
  js/productos.js           Datos: WhatsApp + 42 productos + 6 esencias
  js/main.js                Render de tarjetas, esencias, modal y enlaces de WhatsApp
  img/
    bg-navidad.jpg          Fondo navideño suavizado (foto enviada por la marca)
    bg-marble.jpg           Fondo de mármol anterior (sin uso)
    banner-velas.jpg        Foto editorial "Velas Navideñas"
    banner-anchetas.jpg     Foto del banner "Anchetas Navideñas"
    products/               Fotos de cada producto
    esencias/               Fotos circulares de las 6 esencias
    logo-expressions-by-pao.png       Logo circular en alta resolución
    logo-expressions-by-pao-192.png   Logo para header, footer y favicon
    decor/                  Estrella y esferas doradas (PNG con transparencia)
    favicon.svg             Ícono anterior (ya no se usa)
_tools/build_assets.py      Script que generó las imágenes desde el PDF
_tools/build_new_products.py  Procesa y optimiza las fotos numeradas de `agregado/`
_tools/build_esencias.py    Recorta en círculo las fotos de esencias
_tools/build_logo.py        Recorta el logo, elimina el teléfono impreso y genera el favicon
_tools/build_bg.py          Convierte la foto de fondo navideña a JPG optimizado
agregado/                   Fotos numeradas y `precios.txt` de la marca (no se publica)
_dev/                       Archivos de trabajo (no se publican)
```

---

## Editar productos

Todo el catálogo vive en `assets/js/productos.js`:

```js
{
  id: "reno",                       // identificador único
  nombre: "Reno",
  categoria: "velas",               // velas | dulce | anchetas | pesebres | cajas | detalles
  img: "assets/img/products/reno.jpg",
  ar: 1,                            // proporción de la foto (ancho / alto)
  desc: "Renos de cera con campanita dorada al cuello...",
  incluye: ["Tarjeta personalizada", "Envoltura"],
  precios: [
    { etiqueta: "c/u", valor: "$3,75" },
    { etiqueta: "x Doc", valor: "$3,50", secundario: true }
  ]
}
```

- **Cambiar el número de WhatsApp:** edita la constante `WHATSAPP` al inicio del archivo
  (formato internacional sin `+`, espacios ni guiones). El número no se imprime en la página.
- **Agregar un producto:** copia un bloque, cambia `id`, `categoria` y la ruta de la foto.
- **Precios:** se muestran tal cual se escriban en `valor`; `etiqueta` es la referencia (`c/u`, `x Doc`,
  `x mayor`, `al por mayor`, `x Set`). Usa `grupo` cuando un producto tenga dos presentaciones (ej. Ositos).
  Si la lista `precios` queda vacía, la ficha muestra **Precio a confirmar**.

### Esencias para velas

Las 6 fragancias viven en el arreglo `ESENCIAS` de `assets/js/productos.js`. Cada una tiene `id`, `nombre`,
`img` y una lista `precios` de pares `["gramaje", "valor"]`. Solo se incluyeron las fragancias marcadas en
verde en la imagen de la marca: **Raspberry, Milky Caramel, Cookies & Cream, Cinnamon Cake, Frosty Pine y
Apple Cinnamon**. Los precios son por gramaje y **no incluyen IVA**; el sitio lo indica en cada ficha y en
la nota final de la sección.

---

## Publicar en GitHub Pages (cuando lo apruebes)

1. Crea un repositorio en GitHub y sube el contenido de esta carpeta
   (no es necesario subir `_dev/` ni `_tools/`).
2. En el repositorio: **Settings → Pages**.
3. En *Build and deployment* elige **Deploy from a branch**, rama `main` y carpeta `/ (root)`.
4. Guarda y espera unos minutos: el sitio queda en `https://<usuario>.github.io/<repositorio>/`.

El sitio usa rutas relativas, así que funciona igual en la raíz de un dominio o en una subcarpeta.
Incluye `.nojekyll` para que GitHub Pages no procese los archivos con Jekyll.

---

## Notas sobre los datos

### Catálogo del PDF (24 productos)

- Los precios y las listas de "Incluye" son exactamente los del PDF.
- En el PDF, el **Árbol de Navidad** aparece con `$2.00 c/u` y `$2.25 x Doc` (el valor de docena es mayor
  que el unitario). Se respetó tal cual; conviene confirmarlo con la marca.
- La página 5 del PDF repite la lista de "Ositos" dentro de la ficha de **Wax Sachets**. En el sitio se
  mantuvieron sus precios (`$2,75 c/u` / `$2,50 x Doc`) y su descripción de colgantes aromáticos.
- "Muñeco de Genjibre" se escribió como **Muñeco de Jengibre** y los separadores decimales se unificaron
  con coma (`$2,00`). Los valores no cambiaron.
- Las fotos se extrajeron del PDF; se limpiaron marcas de agua y moldes que aparecían en el fondo de
  varias imágenes.

### Productos nuevos (18 productos)

- Se agregaron las fotos y los precios de la carpeta `agregado/` (21 fotos numeradas y `precios.txt`),
  distribuidos en **Cajas & Regalos** (9), **Detalles & Belleza** (6) y **Dulce aroma**
  (3 nuevos: caja de wax melts, tarjetas con vela y vela navideña).
- Los nombres de los productos nuevos son propuestos por el sitio, según lo solicitado.
- Donde la lista original decía **"Tarjeta"**, se muestra **"Tarjeta personalizada"**.
- **Fotos 14 y 15:** son el mismo producto (**Tarjetas con Vela**), con la misma descripción y precio;
  se muestran en una sola ficha. Se usó la foto 15 y se recortó la marca de agua inferior.
- **Fotos 17, 18 y 19:** también comparten nombre, descripción y precio en el txt, así que quedaron como
  una sola ficha de **Jarros Personalizados**. Se usó la foto 18, que muestra tres diseños.
- **Fotos 7, 8 y 9:** la numeración de estas tres no coincide con el orden del txt; se asignaron por
  contenido: foto 9 → **Box Corporativa**, foto 7 → **Kit Belleza Rudolph**, foto 8 → **Kit Belleza Estrella**.
- **Precios:** todos los productos nuevos tienen precio. **Tarjetas con Vela** quedó en `$1,75 c/u` /
  `$1,50 al por mayor` y **Vela Navideña** en `$5 c/u` / `$4,50 al por mayor`, según los valores enviados
  por la marca.
- Las fotos nuevas provienen de `agregado/` y son de mayor resolución que las capturas iniciales. La foto
  de la **Caja Wax Melts** es la de menor tamaño (358×391) y por eso se ve un poco más suave.

### Ajustes de marca e información de pedido

- El número de WhatsApp ya no se muestra como texto; los botones abren el chat directamente.
- Los botones de WhatsApp usan una paleta pastel (verde salvia) acorde al diseño.
- Instagram y Facebook apuntan a `@expressionsbypaorio` en el hero, la tarjeta de contacto, el bloque de
  información y el footer.
- Se incorporó el logo de la marca en el header, el footer y el favicon. El logo original traía impreso el
  número de teléfono; se retocó para retirarlo y mantener la regla de no mostrar el número en el sitio.
  El contacto sigue funcionando por los botones de WhatsApp.
- Se agregó el bloque **Métodos de pago** con Efectivo, Transferencia, Depósito y Tarjeta de Crédito a
  través de Payphone.
- Se agregó la nota visible **«Pedidos personalizados: se reciben con mínimo 4 días de antelación»** en la
  presentación y debajo de los métodos de pago/sociales.
- La presentación usa los dos textos enviados por la marca: **«Bienvenidos a nuestra Navidad»** como
  entrada y **«Una Navidad llena de detalles»** como título, con la lista de colecciones.
- El fondo del catálogo es la foto navideña enviada por la marca, con un velo crema translúcido para que
  los productos y los textos se lean con claridad.
