page '/*.xml', layout: false
page '/*.json', layout: false
page '/*.txt', layout: false

set :url_root, ENV.fetch('BASE_URL')

ignore '/templates/*'

activate :asset_hash
activate :directory_indexes
activate :pagination
<%- if @token -%>
activate :dato, token: ENV.fetch('DATO_API_TOKEN'), live_reload: false
<%- end -%>

activate :external_pipeline,
  name: :webpack,
  command: build? ?
    "./node_modules/webpack/bin/webpack.js --bail -p" :
    "./node_modules/webpack/bin/webpack.js --watch -d --progress --color",
  source: ".tmp/dist",
  latency: 1

configure :build do
  activate :minify_html do |html|
    html.remove_input_attributes = false
  end
  activate :search_engine_sitemap,
    default_priority: 0.5,
    default_change_frequency: 'weekly'
end

configure :development do
  activate :livereload
end

proxy "/_redirects", "/templates/redirects.txt"

<%- if @token -%>
# dato.tap do |dato|
#   dato.articles.each do |article|
#     proxy(
#       '/articles/#{article.slug}.html',
#       '/templates/article.html',
#       locals: { article: article }
#     )
#   end

#   paginate(
#     dato.articles.sort_by(&:published_at).reverse,
#     '/articles',
#     '/templates/articles.html'
#   )

#   MULTILANG SAMPLES

#   [:en, :it].each do |locale|
#     I18n.with_locale(locale) do
#       dato.aritcles.each do |article|
#         I18n.locale = locale
#         proxy "/#{locale}/articles/#{article.slug}/index.html", "/templates/article_template.html", :locals => { article: article }, ignore: true, locale: locale
#       end
#     end
#   end

#   [:en, :it].each do |locale|
#     I18n.with_locale(locale) do
#       I18n.locale = locale
#       paginate dato.articles.select{|a| a.published == true}.sort_by(&:date).reverse, "/#{I18n.locale}/articles", "/templates/articles.html", locals: { locale: I18n.locale }
#     end
#   end
# end
<%- end -%>
