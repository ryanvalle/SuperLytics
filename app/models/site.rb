# == Schema Information
#
# Table name: sites
#
#  id         :integer          not null, primary key
#  url        :text
#  key        :string(255)
#  created_at :datetime
#  updated_at :datetime
#

class Site < ActiveRecord::Base
end
