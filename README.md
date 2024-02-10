

<div align="center">
<img src="logo.png" height="90px" width="auto" /> 
<h2>
    <em>Curriculum vitae</em> minimalist layout for web and pdf
</h2>
<p>
JSON CV Schema from <a href="https://jsonresume.org/schema/">jsonresume.org</a>
</p>


<p>
Based on design by <a href="https://github.com/BartoszJarocki/cv">Bartosz Jarocki</a>

</p>

</div>

<div align="center">
    <a href="#🚀-home">
        Begin
    </a>
    <span>&nbsp;✦&nbsp;</span>
    <a href="#🧞-commands">
        Commands
    </a>
    <span>&nbsp;✦&nbsp;</span>
    <a href="#🔑-license">
        License
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

<img src="cover.png"></img>

## 🛠️ Stack

- [**Astro**](https://astro.build/) - The new age web framework.
- [**Typescript**](https://www.typescriptlang.org/) - JavaScript with typing syntax.
- [**Ninja Keys**](https://github.com/ssleptsov/ninja-keys) - Dropdown menu with keyboard shortcuts created in pure Javascript.


## 🚀 Get started

### 1. Use this [repo](https://github.com/midudev/minimalist-portfolio-json) as a _template_ for an Astro project


- I use [pnpm](https://pnpm.io/installation) as a dependency manager and packager.

```bash
sudo npm install -g n
sudo n lts
sudo n latest
sudo n prune

sudo npm install -g npm@latest

brew install pnpm
brew install corepack

❯ node -v
v21.6.1
❯ yarn -v
1.22.21

yarn info yarn description

pnpm update
```

```bash
corepack enable pnpm
corepack prepare pnpm@latest --activate
pnpm install
```

### 2. Add your content:
Edit the `cv.json` file to create your own printable portfolio/CV.
### 3. Start the development server:

```bash
# Enjoy the result
pnpm dev
```


1. Open [**http://localhost:4321**](http://localhost:4321/) in your browser to see the result 🚀


## 🧞 Commands

| | Command | Action |
| :-- | :----------------------- | :----------------------------------------------- |
| ⚙️ | `dev` or `start` | Start a local development server at `localhost:4321`. |
| ⚙️ | `build` | Check for possible errors and create a production package in `./dist/`. |
| ⚙️ | `preview` | Preview on local `localhost:4321` |



## 🔑 License

[MIT](LICENSE.txt) - Created by [**midudev**](https://midu.dev).


### Firebase
https://docs.astro.build/en/guides/deploy/google-firebase/

pnpm exec firebase login
pnpm exec firebase experiments:enable webframeworks
pnpm exec firebase init hosting
=== Project Setup

First, let's associate this project directory with a Firebase project.
You can create multiple project aliases by running firebase use --add, 
but for now we'll just set up a default project.

? Please select an option: Use an existing project
? Select a default Firebase project for this directory: himanshujain-dev (himanshujain-dev)
i  Using project himanshujain-dev (himanshujain-dev)

=== Hosting Setup
? Detected an existing Astro codebase in the current directory, should we use this? Yes
? In which region would you like to host server-side content, if applicable? us-west1 (Oregon)
? Set up automatic builds and deploys with GitHub? No

i  Writing configuration info to firebase.json...
i  Writing project information to .firebaserc...

✔  Firebase initialization complete!

pnpm exec firebase deploy --only hosting
