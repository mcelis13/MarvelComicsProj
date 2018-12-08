class TrailersController < ApplicationController

  def index
    @trailers = Trailer.all

    render json: @trailers
  end

  # GET /trailers/1
  def show
    render json: @trailer
  end

  # POST /trailers
  def create
    @trailer = Trailers.find_or_create_by(params[:id])
    if @trailer.valid?
      render json: @trailer
    else
      render json: @trailer.errors
    end
  end

  # PATCH/PUT /trailers/1
  def update
    if @trailer.update(trailer_params)
      render json: @trailer
    else
      render json: @trailer.errors, status: :unprocessable_entity
    end
  end

  # DELETE /trailers/1
  def destroy
    @trailer.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_trailer
      @trailer = Trailer.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def trailer_params
      params.require(:trailer).permit(:name, :url, :character)
    end

end
