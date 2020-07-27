 Rails.application.routes.draw do
  resources :quotes
  resources :books
    get '/test', to: 'application#test'
  end

