# Autoescuela Vialia — Propuesta de nueva web (mock)

Este repositorio contiene una **maqueta de diseño (mock/demo)**, no una web en producción. Es una propuesta visual para presentar a Autoescuela Vialia (Inca, Mallorca) como alternativa a su web actual, con el objetivo de modernizarla y ayudar a captar más alumnos.

## ¿Por qué existe esto?

La web actual (`www.autoescuelavialia.com`) está hecha con un editor de plantillas antiguo (IONOS "MyWebsite") y tiene varios problemas:

- El título de la pestaña muestra el nombre del dueño en vez del nombre del negocio.
- Fuerza un ancho de escritorio fijo, así que en el móvil se ve mal.
- Navegación pobre: solo Inicio, Test on-line, Horario, Ofertas y Contacto — sin tipos de carnet, precios, sección "sobre nosotros" ni preguntas frecuentes.
- Contador de visitas visible, textos duplicados y con erratas.
- Sin fotos reales aprovechables, sin testimonios, sin llamadas a la acción claras (solo invita a "pasar por la oficina").

Este mock resuelve esos problemas de estructura y diseño para poder enseñar una propuesta concreta, no solo hablar de ella.

## Qué contenido es real y cuál es de ejemplo

| Contenido | Origen |
|---|---|
| Nombre, dirección (C. D'Arta, nº 25, 07300 Inca), teléfono (971 093 492) | Real, tomado de la web actual |
| Promociones (matrícula gratis, devolución si apruebas la teórica en 30 días, test online incluido, atención 7 días/semana, trae a un amigo) | Reales, reescritas con más claridad |
| Tipos de carnet, precios, testimonios, horario detallado, equipo | **De ejemplo / orientativos** — no existían en la web actual ni se han inventado fotos reales. Hay que sustituirlos por los datos definitivos del centro antes de publicar nada. |

Los apartados de contenido de ejemplo están señalados en el propio código (ver comentario al principio de `index.html`) para que quede claro qué falta por completar.

## Estructura del proyecto

```
index.html   # Estructura y contenido de la página
styles.css   # Estilos, paleta de color, temas claro/oscuro y responsive
script.js    # Navegación entre secciones, menú móvil, acordeón FAQ,
             # contador animado y modo claro/oscuro
```

Es un sitio estático de varias "páginas" (Inicio, Carnets, Precios, Nosotros, FAQ, Contacto) simuladas dentro de una sola página HTML: la navegación cambia de sección con JavaScript en vez de recargar, pero se comporta como un sitio de varias páginas (cada sección tiene su propia URL con `#`, ej. `index.html#precios`).

No usa frameworks ni dependencias externas — solo HTML, CSS y JavaScript nativos, así que se puede abrir y modificar sin instalar nada. Los ficheros están en la raíz del repositorio (y no en una subcarpeta) para que GitHub Pages pueda servirlos directamente sin configuración adicional.

## Cómo verlo

**En local:** abre `index.html` directamente en el navegador (doble clic, o arrastrarlo a una pestaña). No requiere servidor ni instalación.

**Online (GitHub Pages):** una vez subido el repositorio a GitHub, hay que activar Pages una vez (no se puede hacer por línea de comandos, es un ajuste del repositorio en la web):

1. Entra en el repositorio en GitHub → **Settings** → **Pages** (menú lateral).
2. En "Build and deployment" → **Source**, elige **Deploy from a branch**.
3. Selecciona la rama **main** y la carpeta **/ (root)** → **Save**.
4. Espera uno o dos minutos; la web quedará publicada en `https://<tu-usuario>.github.io/autoescuela-vialia/`.

Cada vez que se haga `git push` a `main`, GitHub Pages actualiza la web automáticamente.

## Antes de usar esto como web real

- Sustituir precios, tipos de carnet, testimonios y horario por los datos reales del centro.
- Añadir fotografías reales del centro, los vehículos y el equipo (no hay ninguna en este mock).
- Conectar el formulario de contacto a un correo, WhatsApp o backend real (ahora mismo solo muestra un aviso de que es una maqueta).
- Revisar/confirmar los textos legales (aviso de privacidad, cookies) antes de publicar.
