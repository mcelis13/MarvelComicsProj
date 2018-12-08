Rails.application.routes.draw do
  resources :comics
  resources :characters
  resources :trailers, only: [:index, :show]
  resources :characters_comics, only: [:index]

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
