# config/routes.rb
Rails.application.routes.draw do
  # Other routes

  # Define the tasks resource to handle all CRUD operations
  resources :tasks, only: [:index, :create, :update, :destroy]

  # Optional: Add routes for authentication, if necessary
  post '/auth/login', to: 'auth#login'
  post '/auth/signup', to: 'auth#signup'
  # Other routes...
end
