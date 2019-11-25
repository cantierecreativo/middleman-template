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

To deploy the project you need to create remote access for Netlify. This is commonly done using a gitlab.com repository. You then need to generate a new project with Netlify and connect it to the repository.

*N.B.*
  If the project needs multiple environments, you should create multiple branches within the repository whose name identifies the environments.
  Netlify will ask you which branch to use for deployment.

Copy the ENV settings into Netlify to ensure correct deployment.


## Default Settings

You can find the base config data in `data/config.json` and `.env`.

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
The template uses various custom helpers:

* `icon("name of svg", {class: "", id: "", data: {role: {}, title: {}}})` is used to generate an icon from inline svg and not with the font
* `localized_path_for(current_page)` is used to generate a link to switch between languages
* `favicon_json_path("path of favicon image")` is used in `source/templates/site.webmanifest.erb`
* `site_name_menu` is an array with all DatoCMS singleton items

```
image_lazy(IMAGE_DATO_FIELD, IMGIX_HASH_URL_OPTIONS, ARRAY_SIZES, BASE_IMAGE_TAG_ATTRIBUTES)

# Example
= image_lazy(dato.model.image_field, {w: 1920}, [[960, 480], [1080, 720], [1536, 1024], [1920, 1536]], {alt: "custom alt"})
```

## Related Resources

If you use multiple blocks in the same page, you can manage DatoCMS Modular Content with:

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

After this you can create partials in `source/partials/modular-contents/` using the `API_KEY` that you set up in DatoCMS.

Ex.
* In DatoCMS there is a modular content block called `modular_contents` in the single instance model.
* Inside this module there are multiple blocks: `text_image_module`, `gallery_module` and `video_module`.
* The partials in this case are: `source/partials/modular-contents/_text_image_module.html.slim`, `source/partials/modular-contents/_gallery_module.html.slim`, and `source/partials/modular-contents/_video_module.html.slim`
