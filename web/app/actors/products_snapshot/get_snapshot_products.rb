# frozen_string_literal: true

# GetSnapshotProducts
class GetSnapshotProducts < ApplicationActor
  input :snapshot_id, type: 'String'
  input :products_ids, type: 'Array', allow_nil: true, default: []

  output :snapshot_products_ids

  def call
    self.snapshot_products_ids = if products_ids.empty?
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
