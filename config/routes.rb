Rails.application.routes.draw do
  mount_devise_token_auth_for 'User', at: 'api/auth'

  namespace :api do
    resources :profiles, only: [:index, :show, :update]
    get 'my_profiles', to: 'profiles#my_profiles'
    resources :users do
          resources :posts
        end
  end
  # namespace :api do
  #   
  # end 
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
