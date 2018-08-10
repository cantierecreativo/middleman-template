require 'thor/group'

module Middleman
  class Generator < ::Thor::Group
    include ::Thor::Actions

    source_root File.expand_path(File.dirname(__FILE__))

    def ask_stuff
      @token = ask('Please insert your DatoCMS site read-only token:')
      @base_url = ask('What will be the base url of your site? (eg. https://www.mysite.com)')

      @origin = ask('What is the origin remote? (eg. git@gitlab.cantierecreativo.net:cantiere/patrickphelipon.git)')
      @production = ask('What is the production remote? (eg. git@gitlab.com:cantierecreativo/patrickphelipon.git)')
    end

    def copy_default_files
      directory 'template', '.', exclude_pattern: /\.DS_Store$/
    end

    def ask_about_datocms_params
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
      # SVG INJECT
      template 'optional/svg.sass', 'source/stylesheets/blocks/_svg.sass'
      template 'optional/svg/svg_icons.js', 'source/fonts/svg/svg_icons.js'
      template 'optional/svg/svg.pattern', 'source/fonts/svg/svg.pattern'
      template 'optional/svg/icons/panda.svg', 'source/fonts/svg/icons/sample.svg'
    end

    def setup_remotes
      template 'optional/README.md', 'README.md'

      run "git init"
      if @origin
        run "git remote add origin #{@origin}"
      end
      if @production
        run "git remote add production #{@production}"
      end
      run "git add ."
      run "git commit -m 'Boostrap project with template'"
    end
  end
end
