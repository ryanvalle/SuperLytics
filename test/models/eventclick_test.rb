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

require 'test_helper'

class EventclickTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
