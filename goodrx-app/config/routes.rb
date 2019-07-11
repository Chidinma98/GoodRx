Rails.application.routes.draw do

  resources :messages
  # resources :prescriptions
  resources :doctors
  post '/auth/login', to: 'authentication#login'


  resources :users do
    resources :prescriptions

  end
  

  resources :users do
    resources :messages
  end
  # resources :users do
  # 
  # end
  
  
  
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
