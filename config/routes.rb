Rails.application.routes.draw do

  resources :site_registration, path: 'site_registration'
    post '/site_registration/create', via: 'site_registration#create', as: 'create_site_registration'
end