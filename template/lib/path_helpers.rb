module PathHelpers
  module_function

  def locale_path(path = "", locale: I18n.locale)
    File.join("", path_prefix(locale), path, "")
  end

  def active?(url)
    url == current_page.url
  end

  def active_link_to(name, url, options = {})
    url += "/" if !url.end_with?("/")

    options[:class] = options.fetch(:class, "") + " is-active" if active?(url)
    link_to name, url, options
  end

  def localized_paths_for(page)
    localized_paths =  locales.each.with_object({}) do |locale, acc|
      acc[locale] = locale_path("/", locale: locale)
    end

    sitemap.resources.each do |resource|
      next if !resource.is_a?(Middleman::Sitemap::ProxyResource)

      next if !page.respond_to?(:target_resource)
      next if !resource.respond_to?(:target_resource)
      next if resource.target_resource != page.target_resource
      next if resource.metadata[:locals] != page.metadata[:locals]

      locale = resource.metadata[:options][:locale]
      localized_paths[locale] = resource.url
    end

    localized_paths
  end

  private

  def path_prefix(locale)
    locale == locales[0] ? "" : "/#{locale}"
  end

  def locales
    if ENV['LANGS']
      ENV['LANGS'].split(",").map(&:to_sym)
    end
  end
end
