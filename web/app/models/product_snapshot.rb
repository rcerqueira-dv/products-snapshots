class ProductSnapshot < ApplicationRecord
  enum type: { manual: 'manual', automatic: 'automatic', backup: 'backup' }

  validates :name, presence: true
  validates :products, presence: true
  validates :create_date, presence: true
  validates :type, presence: true
  validates :last_restored, inclusion: { in: [true, false] }

end
