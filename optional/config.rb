page '/*.xml', layout: false
page '/*.json', layout: false
page '/*.txt', layout: false

configure :development do
  activate :livereload
end

activate :directory_indexes
activate :pagination
activate :dato,
  token: '<%= @token %>',
  base_url: '<%= @base_url %>'

set :url_root, '<%= @base_url %>'

ignore '/templates/*'

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

configure :build do
  activate :minify_css
  activate :minify_javascript
  activate :minify_html
  activate :search_engine_sitemap,
    default_priority: 0.5,
    default_change_frequency: 'weekly'
end
