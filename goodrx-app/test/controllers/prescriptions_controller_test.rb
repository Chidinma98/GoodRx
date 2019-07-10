require 'test_helper'

class PrescriptionsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @prescription = prescriptions(:one)
  end

  test "should get index" do
    get prescriptions_url, as: :json
    assert_response :success
  end

  test "should create prescription" do
    assert_difference('Prescription.count') do
      post prescriptions_url, params: { prescription: { color: @prescription.color, description: @prescription.description, doctor_id: @prescription.doctor_id, dosage: @prescription.dosage, medication_time: @prescription.medication_time, name: @prescription.name, pharmacy: @prescription.pharmacy, references: @prescription.references, user_id: @prescription.user_id } }, as: :json
    end

    assert_response 201
  end

  test "should show prescription" do
    get prescription_url(@prescription), as: :json
    assert_response :success
  end

  test "should update prescription" do
    patch prescription_url(@prescription), params: { prescription: { color: @prescription.color, description: @prescription.description, doctor_id: @prescription.doctor_id, dosage: @prescription.dosage, medication_time: @prescription.medication_time, name: @prescription.name, pharmacy: @prescription.pharmacy, references: @prescription.references, user_id: @prescription.user_id } }, as: :json
    assert_response 200
  end

  test "should destroy prescription" do
    assert_difference('Prescription.count', -1) do
      delete prescription_url(@prescription), as: :json
    end

    assert_response 204
  end
end
