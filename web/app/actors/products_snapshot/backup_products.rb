# frozen_string_literal: true

# BackupProducts
class BackupProducts < ApplicationActor

  input :products_ids, type: 'Array'

  BACKUP_TYPE = ProductSnapshot.types[:backup]


  def call
    products_json = ProdcutsFacade.new(products_ids).to_json
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
