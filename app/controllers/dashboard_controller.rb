class DashboardController < ApplicationController
  def index
    render locals: {
      facade: SongFacade.new(current_user)
    }
    @users = current_party.users  if current_party

    if current_party
      current_song = SongFacade.new(current_party.admin).current_song
      if current_song
        TrackBroadcastJob.perform_later(current_song.serialize_data)
      end
    end

      # ActionCable.server.broadcast "current_song", serialized_data


    # service = CurrentService.new(current_party)
    # service.check_for_track_change
    #
    # TrackBroadcastJob.perform_later(current_party.current_song.serialize_data)
  end


  private

  # def every( time )
  #   Thread.new {
  #       loop do
  #           sleep(time)
  #           yield
  #       end
  #   }
  #
  #
  # end


end
