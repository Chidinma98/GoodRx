
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
    
   @message = @user.messages.create(message_params)

    render json: @message[:description]
    
    TwilioTextMessenger.new(@message[:description]).call
         
      
  # respond_to do |format|
  #   # if @message.save
  #   #   message = @message
  #   #   TwilioTextMessenger.new(message).call
  #   #   format.html { redirect_to @message, notice: 'Coffee roast was successfully created.' }
  #   #   format.json { render :show, status: :created, location: @coffee_roast }
  #   # else
  #   #   format.html { render :new }
  #   #   format.json { render json: @coffee_roast.errors, status: :unprocessable_entity }
  #   # end
  # end
    


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
