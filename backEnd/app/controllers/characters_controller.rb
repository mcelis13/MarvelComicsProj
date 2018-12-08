class CharactersController < ApplicationController
  before_action :set_character, only: [:show, :update, :delete, :destroy]

  def index
    @characters = Character.all

    render json: @characters
  end

  # GET /characters/1
  def show
    render json: @character
  end

  # POST /characters
  def create
    @character = Character.find_or_create_by(params[:id])
    if @character.valid?
      render json: @character
    else
      render json: @character.errors
    end
  end

  # PATCH/PUT /characters/1
  def update
    if @character.update(character_params)
      render json: @character
    else
      render json: @character.errors, status: :unprocessable_entity
    end
  end

  # DELETE /characters/1
  def destroy
    @character = Character.find(params[:id])
    @character.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_character
      @character = Character.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def character_params
      params.require(:character).permit(:name, :description, :thumbnail)
    end

end
