# frozen_string_literal: true

module Api
  module V1
    class SnapshotSettingsController < ApplicationController
      before_action :set_snapshot_setting, only: %i[show edit update]

      def edit
        @frequency_options = SnapshotSetting.time_frequencies.keys
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
        params.require(:snapshot_setting).permit(:time_frequency)
      end
    end
  end
end
