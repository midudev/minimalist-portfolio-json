

<div align="center">
<img src="logo.png" height="90px" width="auto" /> 
<h2>
    <em>Résumé</em> minimalista maquetado para web y pdf
</h2>
<p>
Esquema del JSON de CV de <a href="https://jsonresume.org/schema/">jsonresume.org</a>
</p>


<p>
Basado en el diseño de <a href="https://github.com/BartoszJarocki/cv">Bartosz Jarocki</a>

</p>

</div>

<div align="center">
    <a href="#🚀-empezar">
        Empezar
    </a>
    <span>&nbsp;✦&nbsp;</span>
    <a href="#🧞-comandos">
        Comandos
    </a>
    <span>&nbsp;✦&nbsp;</span>
    <a href="#🔑-licencia">
        Licencia
    </a>
    <span>&nbsp;✦&nbsp;</span>
    <a href="https://midu.dev">
        Personal
    </a>
   
</div>

<p></p>

<div align="center">

![Astro Badge](https://img.shields.io/badge/Astro-BC52EE?logo=astro&logoColor=fff&style=flat)
![GitHub stars](https://img.shields.io/github/stars/midudev/minimalist-portfolio-json)
![GitHub issues](https://img.shields.io/github/issues/midudev/minimalist-portfolio-json)
![GitHub forks](https://img.shields.io/github/forks/midudev/minimalist-portfolio-json)
![GitHub PRs](https://img.shields.io/github/issues-pr/midudev/minimalist-portfolio-json)

</div>

<img src="portada.png"></img>

## 🛠️ Stack

- [**Astro**](https://astro.build/) - El framework web de la nueva época.
- [**Typescript**](https://www.typescriptlang.org/) - JavaScript con sintaxis de tipado.
- [**HotKeyPad**](https://github.com/jesubohr/hotkeypad) - Paleta de comandos con atajos de teclado hecha en puro JavaScript.


## 🚀 Empezar

### 1. Usa este [repo](https://github.com/midudev/minimalist-portfolio-json) como _template_ de un proyecto de Astro


- Necesitas [Node.js](https://nodejs.org/) 22.22 o superior.
- Yo uso [pnpm](https://pnpm.io/installation) como gestor de dependencias y empaquetador.

```bash
# Instala pnpm
npm install -g pnpm

# Inicializa el proyecto
pnpm create astro@latest -- --template midudev/minimalist-portfolio-json
```

### 2. Añade tu contenido:
Edita el archivo `cv.json` para crear tu propio Portafolio/CV imprimible.

#### Idiomas

El portafolio se genera en español en `/` y en inglés en `/en/` (a partir de `cv_english.json`). Los idiomas se configuran en `src/i18n/index.ts` y los textos de la interfaz en `src/i18n/ui.ts`:

- **Solo un idioma:** elimina `en` de `LANGUAGES` junto a su `import` y borra `cv_english.json`. El selector de idioma desaparece.
- **Añadir un idioma:** crea su JSON (por ejemplo `cv_french.json`), impórtalo en `LANGUAGES` y añade sus textos en `ui.ts`.
### 3. Lanza el servidor de desarrollo:

```bash
# Disfruta del resultado
pnpm dev
```


1. Abre [**http://localhost:4321**](http://localhost:4321/) en tu navegador para ver el resultado 🚀


## 🧞 Comandos

|     | Comando          | Acción                                        |
| :-- | :--------------- | :-------------------------------------------- |
| ⚙️  | `dev` o `start` | Lanza un servidor de desarrollo local en  `localhost:4321`.  |
| ⚙️  | `build`          | Comprueba posibles errores y hace un empaquetado de producción en `./dist/`.      |
| ⚙️  | `preview`        | Vista previa en local `localhost:4321` |



## 🔑 Licencia

[MIT](LICENSE.txt) - Creado por [**midudev**](https://midu.dev).



