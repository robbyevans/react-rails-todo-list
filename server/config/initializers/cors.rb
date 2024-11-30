# config/initializers/cors.rb
Rails.application.config.middleware.insert_before 0, Rack::Cors do
  allow do
    origins 'http://localhost:5173'  # Allow frontend (or specify your actual frontend domain)

    resource '*', 
      headers: :any,
      methods: [:get, :post, :put, :delete, :options, :head],
      credentials: true  # Allow cookies and credentials
  end
end
