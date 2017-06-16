import React, { Component } from 'react';
import { TouchableOpacity, Image, Text, StyleSheet } from 'react-native';
import { Video } from 'expo';
import styles from '../styles/main';

class VideoContribution extends Component {
  constructor(props) {
    super(props);

    this.state = {
      playbackObject: null,
      loadedVideo: null,
      isPlaying: false
    };

    this._handleVideoRef = this._handleVideoRef.bind(this);
    this.handleVideoTap = this.handleVideoTap.bind(this);
  }

  _handleVideoRef (playbackObject) {
    this.setState({ playbackObject });
  }

  handleVideoTap () {
    if (this.state.isPlaying) {
      this.state.playbackObject.pauseAsync(this.state.loadedVideo);
    } else {
      this.state.playbackObject.playAsync(this.state.loadedVideo);
    }
    this.setState({ isPlaying: !this.state.isPlaying });
  }

  render () {
    const playIcon = 'https://d2ppvlu71ri8gs.cloudfront.net/items/1Z0I3a1e0L373s0K3e1u/play_icon.png';
    const icon = this.state.isPlaying
      ? null
      : <Image source={{uri: playIcon}} style={styles.front} />;

    return (
      <TouchableOpacity
        onPress={this.handleVideoTap}
        style={{marginBottom: 10}}
      >
        {icon}
        <Video
          source={{uri: this.props.url}}
          ref={this._handleVideoRef}
          style={styles.back}
          onLoad={ loadedVideo => this.setState({ loadedVideo }) }
          isLooping={true}
        />
      </TouchableOpacity>
    );
  }
}

export default VideoContribution;
