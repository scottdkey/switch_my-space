class Api::PostsController < ApplicationController
  def index
    user = User.find(params[:user_id])
    render json: user.posts
  end
  def create
    user = User.find(params[:user_id])
    render json: user.posts.create(post_params)
  end
  def destroy
    post.find(params[:id]).destroy
  end
  private
  def post_params
    params.require(:post).permit(:name)
  end
end