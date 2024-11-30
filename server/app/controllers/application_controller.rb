class ApplicationController < ActionController::API
  before_action :authorize_request

  # Define current_user method to make @current_user accessible in controllers
  def current_user
    @current_user
  end

  def authorize_request
    header = request.headers['Authorization']
    token = header.split(' ').last if header
    decoded = JsonWebToken.decode(token)
    @current_user = User.find(decoded[:user_id]) if decoded
  rescue
    render json: { error: 'Unauthorized access' }, status: :unauthorized
  end
end
