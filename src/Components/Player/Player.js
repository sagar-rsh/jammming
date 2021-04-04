import React from 'react';
import './Player.css';

class Player extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
      if (!this.props.currentTrackId) {
        return null;
      }
      const trackUrl = `https://open.spotify.com/embed/track/${this.props.currentTrackId}`;
      return (
      <div className='Player'>
          <iframe src= {trackUrl} width="417" height="80" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
      </div>
    )
  }
}

export default Player;