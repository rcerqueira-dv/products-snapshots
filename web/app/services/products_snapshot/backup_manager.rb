# frozen_string_literal: true

module ProductsSnapshot
  # BackupManager
  class BackupManager < ApplicationService
    def initialize(product_ids, **args)
      super(**args)
      @product_ids = product_ids
    end

    def call
      products_json = ProductsFacade.new(@product_ids).to_json

      backup_snapshot = ProductSnapshots.find_or_initialize_by(type: ProductSnapshots.types[:backup])
      backup_snapshot.update(backup_params(products_json))

    end

    private

    def backup_params(products_json)
      {
        type: ProductSnapshots.types[:backup],
        products: products_json,
        name: "Backup #{Time.zone.now}",
        created_date: Time.zone.now
      }
    end
  end
end
