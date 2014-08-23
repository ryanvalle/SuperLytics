class SiteRegistrationController < ApplicationController
	def new
		@site_new = Site.new
	end

	def create
		o = [('a'..'z'), ('A'..'Z')].map { |i| i.to_a }.flatten
		string = (0...20).map { o[rand(o.length)] }.join

		params[:site][:key] = string

		@site_create = Site.new(params_create)

		if @site_create.save
			redirect_to new_site_registration_path(anchor: "success")
		else
			redirect_to new_site_registration_path(anchor: "error")
		end

	end

	private
		def params_create
			params.require(:site).permit(:url, :key)
		end

end
