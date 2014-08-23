# == Schema Information
#
# Table name: eventclicks
#
#  id         :integer          not null, primary key
#  session_id :integer
#  clicktime  :integer
#  domclicked :text
#  key        :string(255)
#  created_at :datetime
#  updated_at :datetime
#

class Eventclick < ActiveRecord::Base
end
