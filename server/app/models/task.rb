class Task < ApplicationRecord
  belongs_to :user

  validates :title, presence: true

  # Set default value for completed
  attribute :completed, :boolean, default: false
end
