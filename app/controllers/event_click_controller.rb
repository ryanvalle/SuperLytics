class EventClickController < ApplicationController
	skip_before_filter  :verify_authenticity_token

	def create
		render json: params, status: "200"
	end
end
