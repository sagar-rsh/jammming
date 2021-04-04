import React from 'react';
import './Track.css';

class Track extends React.Component {
  constructor(props) {
    super(props);
    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
    this.handlePlayTrack = this.handlePlayTrack.bind(this);
  }

  renderAction() {
    if (this.props.isRemoval) {
      return (
        <button className='Track-action' onClick={this.removeTrack}>
          -
        </button>
      );
    } else {
      return (
        <button className='Track-action' onClick={this.addTrack}>
          +
        </button>
      );
    }
  }

  handlePlayTrack() {
    this.props.onToggleTrackPlay(this.props.track.id);
  }

  addTrack() {
    this.props.onAdd(this.props.track);
  }

  removeTrack() {
    this.props.onRemove(this.props.track);
  }

  render() {
    const className = 'Track ' + ((this.props.playingNow === this.props.track.id) ? 'playing-now' : '');
    return (
        <div className={className}>
          <div className='Track-information'>
            <h3>{this.props.track.name}</h3>
            <p>
              {this.props.track.artist} | {this.props.track.album}
            </p>
          </div>
        {this.renderAction()}
        <a className="Track-play-button" onClick={this.handlePlayTrack}><i className="material-icons">play_circle_outline</i></a>
      </div>
    );
  }
}

export default Track;
