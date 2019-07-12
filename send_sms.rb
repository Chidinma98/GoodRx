# require 'twilio-ruby'

# account_sid = 'AC21c1c3fde31c36db6de4a3f3f4e8bd21'
# auth_token = 'ec0f81e08bc52d72a711f28c3e9f317e'
# client = Twilio::REST::Client.new(account_sid, auth_token)

# from = '+17323147339' # Your Twilio number
# to = '+19084942240' # Your mobile phone number

# client.messages.create(
# from: from,
# to: to,
# body: "Trial 1!"
# )

# client = Twilio::REST::Client.new
# client.messages.create({
#   from: '+17323147339',
#   to: '+19084942240',
#   body: 'Whats up doc'
# })