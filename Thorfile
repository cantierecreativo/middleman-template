require 'thor/group'

module Middleman
  class Generator < ::Thor::Group
    include ::Thor::Actions

    source_root File.expand_path(File.dirname(__FILE__))

    def copy_default_files
      directory 'template', '.', exclude_pattern: /\.DS_Store$/
    end

    def ask_about_datocms_params
      @token = ask("Please insert your DatoCMS site read-only token:")
      @base_url = ask("What will be the base url of your site? (eg. https://www.mysite.com)")

      template 'optional/config.rb', 'config.rb'
    end

    def setup_bemo

    end
  end
end

