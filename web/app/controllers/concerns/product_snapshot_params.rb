# frozen_string_literal: true

# ProductSnapshotParams
module ProductSnapshotParams
  def product_snapshot_params
    params.require(:product_snapshot).permit(:name, :products, :create_date, :type, :last_restored)
  end

  def create_product_snapshot_params
    default_params.merge(**create_params)
  end

  def update_product_snapshot_params
    default_params
  end

  def default_params
    {
      name: params[:name].upcase,
      products: params[:products]
    }
  end

  def create_params
    {
      create_date: Date.now,
      type: ProductSnapshot.types['manual']
    }
  end
end
