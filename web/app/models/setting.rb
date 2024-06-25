class Setting < ApplicationRecord
  enum product_snapshot_frequency: { daily: 'daily', weekly: 'weekly', monthly: 'monthly' }

end
