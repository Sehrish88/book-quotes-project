class QuoteSerializer < ActiveModel::Serializer
  attributes :id, :content
  belongs_to :book
end
