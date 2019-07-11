# Be sure to restart your server when you modify this file.

# Avoid CORS issues when API is called from the frontend app.
# Handle Cross-Origin Resource Sharing (CORS) in order to accept cross-origin AJAX requests.

# Read more: https://github.com/cyu/rack-cors

Rails.application.config.middleware.insert_before 0, Rack::Cors do
  allow do
    origins '*'

    resource '*',
      headers: :any,
      methods: [:get, :post, :put, :patch, :delete, :options, :head]
  end
end

Twilio.configure do |config|
  config.account_sid = "AC21c1c3fde31c36db6de4a3f3f4e8bd21"
  config.auth_token = "ec0f81e08bc52d72a711f28c3e9f317e"
end