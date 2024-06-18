#GTODO

# app/services/shopify_service.rb
require 'shopify_api'

class ShopifyService
  def initialize
    @session = ShopifyAPI::Session.new(domain: 'your-shop-name.myshopify.com', token: 'your_access_token', api_version: '2023-04')
    ShopifyAPI::Base.activate_session(@session)
  end

  def fetch_all_products_with_variants
    products = ShopifyAPI::Product.find(:all)
    products.map do |product|
      {
        product_id: product.id,
        title: product.title,
        description: product.body_html,
        vendor: product.vendor,
        product_type: product.product_type,
        tags: product.tags,
        images: product.images.map { |image| { src: image.src } },
        created_at: product.created_at,
        updated_at: product.updated_at,
        variants: product.variants.map do |variant|
          {
            variant_id: variant.id,
            title: variant.title,
            sku: variant.sku,
            price: variant.price,
            inventory_quantity: variant.inventory_quantity,
            option1: variant.option1,
            option2: variant.option2,
            weight: variant.weight,
            barcode: variant.barcode
          }
        end
      }
    end
  end
end
