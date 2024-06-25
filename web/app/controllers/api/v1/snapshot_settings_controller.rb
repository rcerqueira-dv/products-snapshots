class Api::V1::SnapshotSettingsController < ApplicationController


  before_action :set_snapshot_setting, only: [:show, :edit, :update]

  def edit
    @frequency_options = SnapshotSetting.product_snapshot_frequencies.keys
  end

  # GET /snapshot_settings/:id
  def show
    render json: @snapshot_setting
  end

  # PATCH/PUT /snapshot_settings/:id
  def update
    if @snapshot_setting.update(snapshot_setting_params)
      render json: @snapshot_setting, status: :ok
    else
      render json: @snapshot_setting.errors, status: :unprocessable_entity
    end
  end

  private

  def set_snapshot_settings
    @snapshot_setting = SnapshotSetting.find(params[:id])
  end

  def snapshot_setting_params
    params.require(:snapshot_setting).permit(:product_snapshot_frequency)
  end
end