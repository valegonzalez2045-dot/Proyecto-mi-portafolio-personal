# Mi Portafolio

Portafolio personal construido con React + TypeScript y Vite.

## Cómo iniciar el proyecto

```bash
npm install
npm run dev
```

Luego abre en el navegador la URL que muestra la terminal (normalmente http://localhost:5173).

## Qué construí

Una página única con secciones semánticas:

- **Presentación**: nombre y descripción breve.
- **Contacto**: enlace `mailto:` con mi correo.
- **Tecnologías**: lista de lenguajes y herramientas (HTML, CSS, JavaScript, TypeScript, React, Vite).
- **Proyectos**: tarjetas con nombre, descripción y enlace.

## Cómo está organizado el código

- `tecnologias` y `proyectos` son arreglos definidos en `App.tsx`.
- Cada arreglo se muestra con `.map()`, que recorre los elementos y devuelve un elemento JSX por cada uno (así se generan los chips de tecnologías y las tarjetas de proyectos).
- La página usa HTML semántico (`header`, `main`, `section`, `article`, `footer`) y CSS con media queries para verse bien en celular y escritorio.
