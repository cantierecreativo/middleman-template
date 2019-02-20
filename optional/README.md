## Setup

```
git clone <%= @origin %>
```

And then:

```
bundle install
yarn install
```

## Deploy Staging/Production

To deploy the project you need to create accessible remote for Netlify. The normal use is generate that into gitlab.com
After this you need generate new project inside Netlify and connect with GitLab repository.

*N.B.*
  If the project he needs multiple environments create many branch inside same repository whose name identifies the environments.
  Netlify question you what branch use to deploy.

Copy and create the ENV settings into Netlify to correct deploy.


## Default Settings

You can find the base config data inside `data/config.json` and another inside `.env`.

```json
{
  "google_analytics_key": "UA-XXXX-YY",
  "iubenda_site_id": "ZZZZZ",
  "browserconfig_title_color": "#000000",
  "webmanifest_theme_color": "#FFFFFF",
  "webmanifest_background_color": "#FFFFFF"
}
```

```env
DATO_API_TOKEN=XXXXXXXXXXXXXXXX
BASE_URL=https://XXX.XXX
NODE_ENV=development
BUILD_ENV=development
LANGS=yy
```

## Custom Helpers
The template use many custom helpers:

* `icon("name of svg", {class: "", id: "", data: {role: {}, title: {}}})` is used to generate icon from inline svg and not with the font
* `localized_path_for(current_page)` is used to generate link to witch languages
* `favicon_json_path("path of favicon image")` is used inside `source/templates/site.webmanifest.erb`
* `site_name_menu` is an array with all DatoCMS singleton item

## Related Resources

To manage DatoCMS Modular Content into page if you use many block into same page:

```slim
= partial "partials/modular-contents",
  locals: {page: page}
```

And create partials `source/partials/_modular-contents.html.slim` with:

```slim
- page.modular_contents.each do |modular_content|
  = partial "partials/modular-contents/#{modular_content.item_type.api_key}",
  locals: {content: modular_content}
```

After this you can create many partials into `source/partials/modular-contents/` with the name of `API_KEY` that you setup inside DatoCMS.

Es.
* In DatoCMS in the SINGLE INSTANCE model there is modular content block with name `modular_contents`.
* Inside this module there are many blocks: `text_image_module`, `gallery_module`, `video_module`.
* The partials in this case are: `source/partials/modular-contents/_text_image_module.html.slim`, `source/partials/modular-contents/_gallery_module.html.slim`, `source/partials/modular-contents/_video_module.html.slim`

