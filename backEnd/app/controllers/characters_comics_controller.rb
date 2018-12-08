class CharactersComicsController < ApplicationController

  def index
      @character_comics = CharactersComics.all
      render json: @character_comics
    end

    # GET /create_character_comics/1
    def show
      render json: @character_comics
    end

    # POST /create_character_comics
    def create

      @character_comic = CharactersComics.find_or_create_by(params[:id])
      if @character_comic.valid?
        render json: @character_comic
      else
        render json: @character_comic.errors
      end

    end

    # PATCH/PUT /create_character_comics/1
    def update
      if @character_comic.update(character_comics_params)
        render json: @character_comic
      else
        render json: @character_comic.errors, status: :unprocessable_entity
      end
    end

    # DELETE /create_character_comics/1
    def destroy
      @character_comic.destroy
    end

    private
      # Use callbacks to share common setup or constraints between actions.
      def set_character_comic
        @character_comic = CharactersComics.find(params[:id])
      end

      # Only allow a trusted parameter "white list" through.
      def character_comic_params
        params.require(:character_comic).permit(:comic_id, :character_id)
      end

end
