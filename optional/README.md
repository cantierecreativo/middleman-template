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

## Related Resources

