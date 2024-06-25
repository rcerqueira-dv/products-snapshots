# frozen_string_literal: true

class SnapshotSetting < ApplicationRecord
  enum time_frequency: { daily: 'daily', weekly: 'weekly', monthly: 'monthly' }
end
