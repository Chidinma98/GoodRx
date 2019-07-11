require 'twilio-ruby'

account_sid = 'AC21c1c3fde31c36db6de4a3f3f4e8bd21'
auth_token = 'ec0f81e08bc52d72a711f28c3e9f317e'
client = Twilio::REST::Client.new(account_sid, auth_token)

from = '+17323147339' # Your Twilio number
to = '+19084942240' # Your mobile phone number

client.messages.create(
from: from,
to: to,
body: "Trial 1!"
)



class MessagesController < ApplicationController
  before_action :set_message, only: [:show, :update, :destroy]

  # GET /messages
  def index
    @messages = Message.all

    render json: @messages
  end

  # GET /messages/1
  def show
    render json: @message
  end

  # POST /messages
  def create
    @user = User.find(params[:user_id])
    
   @message = @user.messages << Message.new(message_params)

  render json: @message

  end

  # PATCH/PUT /messages/1
  def update
    if @message.update(message_params)
      render json: @message
    else
      render json: @message.errors, status: :unprocessable_entity
    end
  end

  # DELETE /messages/1
  def destroy
    @message.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_message
      @message = Message.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def message_params
      params.require(:message).permit(:doctor, :description)
    end
end
