Rails.application.routes.draw do

	root "site_registration#new"

  resources :site_registration, path: 'site_registration'
	  post '/site_registration/create' => 'site_registration#create', as: 'create_site_registration'

  resources :event_click, path: 'event_click'
		post '/event/create' => 'event_click#create', as: 'event_click_create'
		get '/event/create' => 'event_click#create', as: 'event_click_create_get'
end