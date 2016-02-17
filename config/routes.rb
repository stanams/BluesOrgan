Rails.application.routes.draw do

  root 'static_pages#index'


  namespace :api do
    resources :tracks
  end

end
