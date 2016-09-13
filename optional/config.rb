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

set :url_root, 'www.the-office.com'

ignore "/templates/*"

# dato.articles.each do |article|
#   proxy(
#     "/articles/#{article.slug}.html",
#     "/templates/article.html",
#     locals: { article: article }
#   )
# end

# paginate(
#   dato.articles.sort_by(&:published_at).reverse,
#   "/articles",
#   "/templates/articles.html"
# )

configure :build do
  activate :minify_css
  activate :minify_javascript
end

helpers do
  def markdown(text)
    renderer = Redcarpet::Render::HTML.new
    Redcarpet::Markdown.new(renderer).render(text)
  end

  def image_or_missing(image)
    if image
      yield image
    else
      image_tag "/images/missing-image.png"
    end
  end
end

