class TwilioTextMessenger
    attr_reader :message
  
    def initialize(message)
      @message = message
    end
  
    def call
      client = Twilio::REST::Client.new
      client.messages.create({
        from: '+17323147339',
        to: '19084942240',
        body: message
      })
    end
  end