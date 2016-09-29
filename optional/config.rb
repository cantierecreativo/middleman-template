page '/*.xml', layout: false
page '/*.json', layout: false
page '/*.txt', layout: false

set :url_root, '<%= @base_url %>'

ignore '/templates/*'

activate :directory_indexes
activate :pagination
<%- if @token -%>
activate :dato,
  token: '<%= @token %>',
  base_url: '<%= @base_url %>'
<%- end -%>

activate :external_pipeline,
  name: :webpack,
  command: build? ?
    "./node_modules/webpack/bin/webpack.js --bail -p" :
    "./node_modules/webpack/bin/webpack.js --watch -d --progress --color",
  source: ".tmp/dist",
  latency: 1

configure :build do
  activate :minify_css
  activate :minify_javascript
  activate :minify_html
  activate :search_engine_sitemap,
    default_priority: 0.5,
    default_change_frequency: 'weekly'
end

configure :development do
  activate :livereload
end

<%- if @token -%>
# dato.articles.each do |article|
#   proxy(
#     '/articles/#{article.slug}.html',
#     '/templates/article.html',
#     locals: { article: article }
#   )
# end

# paginate(
#   dato.articles.sort_by(&:published_at).reverse,
#   '/articles',
#   '/templates/articles.html'
# )
<%- end -%>
