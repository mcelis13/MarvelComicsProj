class ComicsController < ApplicationController
  before_action :set_comic, only: [:show, :update, :delete, :destroy]

  # GET /comics
  def index
    @comics = Comic.all

    render json: @comics
  end

  # GET /comics/1
  def show
    render json: @comic
  end

  # POST /comics
  def create

    @character = Character.find_or_create_by(params[:id])
    if @character.valid?
      render json: @character
    else
      render json: @character.errors
    end

  end

  # PATCH/PUT /comics/1
  def update
    if @comic.update(comic_params)
      render json: @comic
    else
      render json: @comic.errors, status: :unprocessable_entity
    end
  end

  # DELETE /comics/1
  def destroy
    @comic = Comic.find(params[:id])
    @comic.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_comic
      @comic = Comic.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def comic_params
      params.require(:comic).permit(:title, :description, :page_count, :price, :img)
    end
end
