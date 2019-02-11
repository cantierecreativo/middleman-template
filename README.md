# Middleman Template

The base Middleman application used at [cantierecreativo], ready to deploy
to [Netlify].

[cantierecreativo]: https://cantierecreativo.net/
[Netlify]: https://www.netlify.com/

## Usage

1. Install or set Ruby (2.4.3) with RBENV:

    ```
    rbenv install/set 2.4.3
    ```

2. Install or use Middleman gem:

    ```
    gem install middleman
    ```

3. Then run:

    ```
    middleman init my_project -T=cantierecreativo/middleman-template
    ```

## Configuration

This template comes with the following features and tools:

- [middleman-dato]: An extension for connect with DatoCMS.
- [middleman-svg]: An extension for inlining SVGs in your views.
- [middleman-minify-html]: Minifies whitespace around HTML when the site is
  built.
- [middleman-search_engine_sitemap]: An extension to manage sitemap.
- [Sass]: CSS pre-processor.
- [Slim]: Templating engine to reduce the syntax to the essential parts.

## License

Copyright © 2019 CantiereCreativo. This is free software, and may
be redistributed under the terms specified in the [LICENSE] file.

[license]: LICENSE.md
