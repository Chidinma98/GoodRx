desc 'send text'
task send_text: :environment do
  # ... set options if any
  message = "Med Time!"
      TwilioTextMessenger.new(message).call
end