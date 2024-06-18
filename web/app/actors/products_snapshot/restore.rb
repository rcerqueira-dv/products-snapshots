# frozen_string_literal: true

# Restore
class Restore < ApplicationActor
  input :snapshot_id, type: 'String'
  input :products_ids, type: 'Array', allow_nil: true, default: []

  output :response

  play  ProductSnapshot::GetSnapshotProducts,
        ProductSnapshot::BackupProducts,
        ProductSnapshot::RestoreProducts
end
