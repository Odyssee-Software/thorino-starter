# Introduction

Ce projet est une application de bureau développée avec NeutralinoJS. L'application utilise un cadre personnalisé que j'ai inclus dans le projet. J'ai également mis en place un environnement permettant de compiler du JSX/TSX. L'application est un projet vide, vous pouvez l'étendre comme vous le souhaitez.

# Avantages de l'utilisation de NeutralinoJS

NeutralinoJS est un framework léger et rapide, ce qui le rend idéal pour le développement d'applications de bureau. Vous pouvez rapidement créer des interfaces utilisateur complexes et interactives sans avoir à vous soucier des performances.

NeutralinoJS est également un framework multiplateforme, ce qui signifie que vous pouvez créer des applications de bureau qui peuvent être exécutées sur Windows, macOS et Linux. Cela vous permet de développer une seule application qui peut être utilisée par un large éventail d'utilisateurs.

Enfin, NeutralinoJS est basé sur les technologies Web, ce qui signifie que vous pouvez utiliser des technologies Web telles que HTML, CSS et JavaScript pour créer vos interfaces utilisateur. Cela vous permet de tirer parti des nombreuses ressources disponibles pour le développement Web, telles que les bibliothèques et les frameworks.

# Environnement de compilation JSX/TSX

J'ai utilisé un compilateur JSX/TSX pour convertir le code JSX/TSX en code JavaScript. Cela me permet d'utiliser des fonctionnalités telles que l'état et les composants dans mon code JSX/TSX.

J'ai également utilisé un compilateur TypeScript pour convertir le code TypeScript en code JavaScript. Cela me permet d'utiliser des fonctionnalités telles que les types et les classes dans mon code TypeScript.

J'ai enfin utilisé un compilateur Webpack pour empaqueter mon code et mes ressources dans un seul fichier exécutable. Cela me permet de créer une application de bureau autonome qui peut être exécutée sans avoir besoin d'un environnement d'exécution.

# Installation , Développement , Production

### Installer les modules NodeJS

```shell
npm install
```

### Mettre à jour Neutralino

```shell
neu update
```


### Lancer Neutralino

```shell
neu run
```

### Construire l'application pour les différentes plateformes

```shell
neu build
```

```mermaid
erDiagram
    Thorium ||--|{ Thorium-Framework : contains
    Thorium-Framework ||--|{ Thorium-Core : contains
    Thorium-Framework ||--|{ Thorium-States : contains

    Thorium-CLI }|..|{ Webpack : has
    Webpack }|..|{ dev-server : serve-with
    Webpack }|..|{ babel : has
    babel ||--o{ thorium-transform-plugin : use

    Thorino-webview-app ||--|{ Thorium : has-module
    Thorino-webview-app ||--|{ Neutralino-lib : has-module
    Thorino-webview-app ||--o{ Thorium-CLI : build-with-in-public

    Thorino-Project ||--|{ Thorino-webview-app : has-webview-interface
    Thorino-Project ||--|{ NeutralinoJs : build-with
```

# Conclusion

Dans ce projet, j'ai utilisé NeutralinoJS pour développer une application de bureau. J'ai également mis en place un environnement permettant de compiler du JSX/TSX. J'ai trouvé que NeutralinoJS est un framework puissant et facile à utiliser qui est idéal pour le développement d'applications de bureau.