class AddLikedProfilesToUser < ActiveRecord::Migration[6.0]
  def change
    add_column :users, :liked_profiles, :text
  end
end
