require 'thor/group'

module Middleman
  class Generator < ::Thor::Group
    include ::Thor::Actions

    source_root File.expand_path(File.dirname(__FILE__))

    def copy_default_files
      directory 'template', '.', exclude_pattern: /\.DS_Store$/
    end

    def ask_about_datocms_params
      if yes?('Do you want to configure DatoCMS?')
        @token = ask('Please insert your DatoCMS site read-only token:')
      end

      @base_url = ask('What will be the base url of your site? (eg. https://www.mysite.com)')

      template 'optional/config.rb', 'config.rb'
      template 'optional/env', '.env'
    end

    def setup_bemo
      run 'yarn install'
      run './node_modules/.bin/bemo-scaffold -s source/stylesheets/'
      run 'yarn webfonts'

      remove_file 'source/stylesheets/application.sass'
      template 'optional/application.sass', 'source/stylesheets/application.sass'
      remove_file 'source/stylesheets/functions/_urls.sass'
      template 'optional/urls.sass', 'source/stylesheets/functions/_urls.sass'
    end

    def setup_remotes
      @origin = ask('What is the origin remote? (eg. git@gitlab.cantierecreativo.net:cantiere/patrickphelipon.git)')
      @production = ask('What is the production remote? (eg. git@gitlab.com:cantierecreativo/patrickphelipon.git)')

      run "git remote add origin #{@origin}"
      run "git remote add production #{@production}"

      template 'optional/README.md', 'README.md'
    end
  end
end

