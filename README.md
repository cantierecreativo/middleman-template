# Middleman Template

The base Middleman application used at [Cantiere creativo][cantierecreativo],
ready to deploy to [Netlify].

[cantierecreativo]: https://cantierecreativo.net/
[Netlify]: https://www.netlify.com/

## Requirements

This project requires [node.js] (v9.3.0) with [yarn] and [ruby] (v2.6.2)

[node.js]: https://nodejs.org/
[yarn]: https://yarnpkg.com/
[ruby]: https://ruby-lang.org

## Usage

1. Install and select Ruby (2.6.2) with [rbenv]:

```sh
$ rbenv install 2.6.2
$ rbenv shell 2.6.2
```

[rbenv]: https://github.com/rbenv/rbenv

2. Install the Middleman gem:

```sh
$ gem install middleman
```

3. Install and select Node (9.3.0) with [nvm]:

```sh
$ nvm install 9.3.0
$ nvm use 9.3.0
```

[nvm]: https://github.com/nvm-sh/nvm

4. Then run:

```sh
$ middleman init {{project name}} -T=cantierecreativo/middleman-template
```

## Configuration

The template init scripts asks you for the following information:

- Languages string (it,en)
- DatoCMS read-only API token (from DatoCMS settings -> API Tokens)
- Base URL of site (e.g. "https://sitedomain.ext")
- Remote git repository to store ORIGIN
- Remote git repository to store PRODUCTION and Netlify buildable files

After these questions, the init script installs all dependencies and creates
the complete directory site.

You should change the default data in `data/config.json` and create the proxy
routing for the new site.

The final directory structure is:

```
project/
+-- .gitignore
+-- Gemfile
+-- Gemfile.lock
+-- config.rb
+-- package.json
+-- webpack.config.js
+-- yarn.lock
+-- config
|   +-- i18n-tasks.yml
+-- data
|   +-- config.json
+-- locales
|   +-- it.yml
|   +-- en.yml
+-- source
    +-- images/
    +-- fonts/
    +-- localizable/
    |   +-- index.html.slim
    +-- partials/
    +-- templates
    |   +-- browserconfig.xml.erb
    |   +-- redirects.txt.erb
    |   +-- site.webmanifest.erb
    |   +-- contact_page.html.slim
    +-- 404.html.slim
    +-- index.html.erb
    +-- javascripts
    ¦   +-- index.js
    +-- layouts
    ¦   +-- layout.slim
    +-- stylesheets
        +-- _application.sass
```

* To see the list of helpers in the system read [HELPERS.md](HELPERS.md)
* To see examples of code (JS and CSS) that the template exposes read
[EXAMPLE.md](EXAMPLE.md)

## Features and Tools

This template comes with the following features and tools:

- [middleman-dato]: An extension to connect with DatoCMS
- [middleman-svg]: An extension for inlining SVGs in your views
- [middleman-minify-html]: Minifies whitespace around HTML when the site is
  built
- [middleman-search_engine_sitemap]: An extension to manage sitemap
- [Sass]: CSS pre-processor
- [Slim]: Templating engine to reduce HTML syntax to the essential parts
- [lazyload]: Delay loading of images until the user scrolls to them
- [AOS]: Animate On Scroll Library
- [animeJS]: Anime.js is a lightweight JavaScript animation library with
  a simple, yet powerful API
- [fancybox]: JavaScript lightbox library for presenting various types of media

[middleman-dato]: https://github.com/datocms/middleman-dato
[middleman-svg]: https://github.com/cantierecreativo/middleman-svg
[middleman-minify-html]: https://github.com/middleman/middleman-minify-html
[middleman-search_engine_sitemap]: https://github.com/Aupajo/middleman-search_engine_sitemap
[Sass]: https://github.com/sass/sass
[Slim]: https://github.com/slim-template/slim
[lazyload]: https://appelsiini.net/projects/lazyload
[AOS]: http://michalsnik.github.io/aos/
[animeJS]: https://animejs.com/
[fancybox]: https://www.fancyapps.com/fancybox/3/

## Development

Build a project using a [local template][local middleman template]:

```sh
$ middleman init {{project name}} -T=file:///my/path/to/middleman-template
```

[local middleman template]: https://middlemanapp.com/advanced/project-templates/#local-template

## License

Copyright © 2019 Cantiere Creativo. This is free software, and may
be redistributed under the terms specified in the [LICENSE] file.

[license]: LICENSE.md
