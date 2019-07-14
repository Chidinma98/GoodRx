class PrescriptionsController < ApplicationController
  before_action :set_prescription, only: [:show, :update, :destroy]

  # GET /prescriptions
  def index
     @prescriptions = User.find(params[:user_id]).prescriptions

    render json: @prescriptions
  end

  # GET /prescriptions/1
  def show
    @user = User.find(params[:user_id])
    @prescriptions= @user.prescriptions
    @prescription = @prescriptions.find(params[:id])
    render json: { med: @prescription}
  end

  # POST /prescriptions
  def create
    @prescription = Prescription.new(prescription_params)

    if @prescription.save
      render json: @prescription, status: :created, location: @prescription
    else
      render json: @prescription.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /prescriptions/1
  def update
    if @prescription.update(prescription_params)
      render json: @prescription
    else
      render json: @prescription.errors, status: :unprocessable_entity
    end
  end

  # DELETE /prescriptions/1
  def destroy
    @prescription.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_prescription
      @prescription = Prescription.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def prescription_params
      params.require(:prescription).permit(:name, :dosage, :color, :medication_time, :description, :pharmacy, :references, :user_id, :doctor_id)
    end
end
