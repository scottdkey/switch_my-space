class CreatePosts < ActiveRecord::Migration[6.0]
  def change
    create_table :posts do |t|
      t.timestamp :date
      t.text :body
      t.belongs_to :user, null: false, foreign_key: true
      t.integer :likes

      t.timestamps
    end
  end
end
