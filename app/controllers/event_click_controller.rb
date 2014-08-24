class EventClickController < ApplicationController
	skip_before_filter  :verify_authenticity_token

	def create
		case params["event"]
		when "CLICKS"
			params[:domclicked] = params["DOM"]
			params[:clicktime] = params["time"]
			@click = Eventclick.new(click_params)
			if @click.save
				render json: "{'success':'success'}", status: "200"
			else
				render json: "{'error':'Save failed'}", status: "400"
			end
		else
			render json: "{'error':'error'}", status: "406"
		end
	end

	private
		def click_params
			params.permit(:clicktime, :domclicked, :session_id)
		end
end
