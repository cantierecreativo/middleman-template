require_relative "middleman_template_helpers/path_helpers"
require_relative "middleman_template_helpers/image_helpers"

module MiddlemanTemplateHelpers
  include PathHelpers
  include ImageHelpers
end
