require 'thor/group'

module Middleman
  class Generator < ::Thor::Group
    include ::Thor::Actions

    source_root File.expand_path(File.dirname(__FILE__))

    def ask_stuff
      @langs = ask('Please insert your site langs: (es. it,en)')
      @token = ask('Please insert your DatoCMS site read-only token:')
      @base_url = ask('What will be the base url of your site? (eg. https://www.mysite.com)')

      @origin = ask('What is the origin remote? (eg. git@gitlab.com:cantierecreativo/PROJECT.git)')
      @production = ask('What is the production remote? (eg. git@gitlab.com:cantierecreativo/PROJECT.git)')
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

      remove_file 'source/stylesheets/application.sass'
      template 'optional/_application.sass', 'source/stylesheets/_application.sass'
      remove_file 'source/stylesheets/functions/_urls.sass'
      template 'optional/urls.sass', 'source/stylesheets/functions/_urls.sass'
      run 'mkdir -p source/stylesheets/blocks/bemo/'
      run 'mv source/stylesheets/blocks/_* source/stylesheets/blocks/bemo/'
    end

    def add_slick_sass
      template 'optional/slick.sass', 'source/stylesheets/variables/_slick.sass'
      run 'mkdir -p source/stylesheets/blocks/slick/'
      directory 'optional/slick', 'source/stylesheets/blocks/slick', exclude_pattern: /\.DS_Store$/
    end

    def setup_addition_sass
      remove_file 'source/stylesheets/blocks/bemo/_canvas.sass'
      remove_file 'source/stylesheets/mixins/_canvas-layout.sass'
      template 'optional/canvas.sass', 'source/stylesheets/blocks/_canvas.sass'
      template 'optional/canvas-layout.sass', 'source/stylesheets/mixins/_canvas-layout.sass'
      template 'optional/site-nav.sass', 'source/stylesheets/blocks/_site-nav.sass'
      template 'optional/site-footer.sass', 'source/stylesheets/blocks/_site-footer.sass'
      template 'optional/aside-nav.sass', 'source/stylesheets/blocks/_aside-nav.sass'
      template 'optional/svg.sass', 'source/stylesheets/blocks/_svg.sass'
    end

    def setup_remotes
      template 'optional/README.md', 'README.md'

      run "git init"
      if @origin != ""
        run "git remote add origin #{@origin}"
      end
      if @production != ""
        run "git remote add production #{@production}"
      end
      run "git add ."
      run "git commit -m 'Boostrap project with template'"
    end
  end
end
