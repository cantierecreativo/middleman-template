# Middleman Template

The base Middleman application used at [cantierecreativo], ready to deploy
to [Netlify].

[cantierecreativo]: https://cantierecreativo.net/
[Netlify]: https://www.netlify.com/

# Requirements

This project requires [Node.js](https://nodejs.org/) (v9.3.0) with
[yarn](https://yarnpkg.com/) and [Ruby](https://ruby-lang.org) (v2.6.2)

# Usage

1. Install or set Ruby (2.6.2) with ASDF:

```sh
$ asdf shell ruby 2.6.2
```

2. Install or use Middleman gem:

```sh
$ gem install middleman
```

3. Install or set Node (9.3.0):

4. Then run:

```sh
$ middleman init project -T=cantierecreativo/middleman-template
```

# Configuration

The template init scripts asks you for the following information:

- Languages string, this should be a comma-separated list of locales,
  e.g. "it,en",
- DatoCMS read-only API token (from DatoCMS settings -> API Tokens),
- Base URL of the site (e.g. `https://sitedomain.ext`),
- Git origin repository,
- Git repository that triggers builds (optional).

After these questions, the init script installs all dependencies and creates
the project directories.

Configuration is held in 3 files:

* `config.rb` - Middleman project cofig,
* `data/config.json` - global settings used in project templates,
*`.env` - environment variables and secrets.

The final directory structure is:

```
project/
+-- config/
|   +-- i18n-tasks.yml
+-- config.rb
+-- data/
|   +-- config.json
+-- .env                                - environment variables for development
+-- Gemfile
+-- Gemfile.lock
+-- .gitignore
+-- locales/
|   +-- it.yml
|   +-- en.yml
+-- package.json
+-- README.md
+-- source/
|   +-- 404.html.slim
|   +-- fonts/
|   +-- images/
|   +-- index.html.erb
|   +-- localizable/
|   |   +-- index.html.slim
|   +-- partials/
|   +-- javascripts/
|   ¦   +-- index.js
|   +-- layouts/
|   ¦   +-- layout.slim
|   +-- stylesheets/                    - a default BEMO2 setup
|   +-- templates/
|       +-- browserconfig.xml.erb
|       +-- redirects.txt.erb
|       +-- site.webmanifest.erb
|       +-- contact_page.html.slim
+-- webpack.config.js
+-- yarn.lock
```

* To see the list of helpers in the system check the files under `/lib`.

* To see examples of code (JS and CSS) that the template exposes read
[EXAMPLE.md](EXAMPLE.md)

# Development

Start the project in development mode as follows:

```sh
$ middleman
```

# Deployment

On Netlify, set up production environment variables - there should be
the same items that are present in `.env`.

# Features and Tools

This template comes with the following features and tools:

- [middleman-dato]: An extension for connect with DatoCMS.
- [middleman-svg]: An extension for inlining SVGs in your views.
- [middleman-minify-html]: Minifies whitespace around HTML when the site is
  built.
- [middleman-search_engine_sitemap]: An extension to manage sitemap.
- [Sass]: CSS pre-processor.
- [Slim]: Templating engine to reduce the syntax to the essential parts.
- [lazyload]: Delay loading of images until user scrolls to them
- [AOS]: Animate On Scroll Library
- [animeJS]: Anime.js is a lightweight JavaScript animation library with a simple, yet powerful API
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

## License

Copyright © 2019 CantiereCreativo. This is free software, and may
be redistributed under the terms specified in the [LICENSE] file.

[license]: LICENSE.md
