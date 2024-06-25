# frozen_string_literal: true

module Api
  module V1
    class ProductSnapshotsController < ApplicationController
      before_action :set_product_snapshot, only: %i[show update destroy]

      # GET /api/v1/product_snapshots
      def index
        @product_snapshots = ProductSnapshot.all
        render json: @product_snapshots
      end

      # GET /api/v1/product_snapshots/:id
      def show
        render json: @product_snapshot
      end

      # POST /api/v1/product_snapshots
      def create
        @product_snapshot = ProductSnapshot.new(product_snapshot_params)

        if @product_snapshot.save
          render json: @product_snapshot, status: :created
        else
          render json: @product_snapshot.errors, status: :unprocessable_entity
        end
      end

      # PATCH/PUT /api/v1/product_snapshots/:id
      def update
        if @product_snapshot.update(product_snapshot_params)
          render json: @product_snapshot
        else
          render json: @product_snapshot.errors, status: :unprocessable_entity
        end
      end

      # DELETE /api/v1/product_snapshots/:id
      def destroy
        @product_snapshot.destroy
      end

      private

      def set_product_snapshot
        @product_snapshot = ProductSnapshot.find(params[:id])
      end

      def product_snapshot_params
        params.require(:product_snapshot).permit(:name, :products, :create_date, :type, :last_restored)
      end
    end
  end
end
