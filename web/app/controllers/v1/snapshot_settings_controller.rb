# frozen_string_literal: true

module V1
  class SnapshotSettingsController < AuthenticatedController
    include ShopifyApp::AdminAPI::WithTokenRefetch

    before_action :set_snapshot_setting, only: %i[show edit update]
    before_action :set_session_id_token, only: %i[show edit update]

    def edit
      with_token_refetch(@session, @id_token) do
        @frequency_options = SnapshotSetting.time_frequencies.keys
        render json: { frequency_options: @frequency_options }
      end
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

    def set_session_id_token
      @session = session
      @id_token = id_token
    end

    def snapshot_setting_params
      params.require(:snapshot_setting).permit(:time_frequency)
    end
  end
end
