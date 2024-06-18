# frozen_string_literal: true

# ApplicationActor
class ApplicationActor < Actor
   def error!(params)
    Rails.logger.error params[:ex].message if params.key?(:ex)
    Rails.logger.error params[:ex].backtrace.join("\n") if params.key?(:ex)
    raise Error, params
  end
end
