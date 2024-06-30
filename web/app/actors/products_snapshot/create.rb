# frozen_string_literal: true

# Create
class Create < ApplicationActor
  input :products_ids, type: 'Array', allow_nil: true, default: []
  input :type, type: 'String', in: ProductSnapshot.types.keys

  output :product_snapshot_id

  def call
    self.product_snapshot_id = if products_ids.empty?
                                   all_products_ids
                                 else
                                   filtered_products_ids
                                 end
  rescue ServiceActor::Failure => e
    raise e
  rescue StandardError => e
    error!(ex: e, error: 'internal_error')
  end



  private

  def all_products_ids
    # TODO
    # ProductSnapshot.find(snapshot_id).products_ids
  end

  def filtered_products_ids
    products_ids & all_products_ids
  end
end
