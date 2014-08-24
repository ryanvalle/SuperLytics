# == Schema Information
#
# Table name: eventclicks
#
#  id         :integer          not null, primary key
#  session_id :integer
#  clicktime  :integer
#  domclicked :text
#  created_at :datetime
#  updated_at :datetime
#

class Eventclick < ActiveRecord::Base
end
