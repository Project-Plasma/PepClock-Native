import React from 'react';
import { View, Text, Image, WebView } from 'react-native';
import { Video } from 'expo';

class ContributionListItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      playbackObject: null
    }

    this._handleVideoRef = this._handleVideoRef.bind(this);
  }

  _handleVideoRef (component) {
    const playbackObject = component;
    this.setState({playbackObject: playbackObject});
  }

  render() {
    let pic = this.props.contribution.media_url;
    if (this.props.contribution.type === 'image') {
      return (
        <View>
          <Image
            source={{uri: this.props.contribution.media_url}}
            style={{width: 300, height: 300}}
          />
          <Text>{this.props.contribution.text}</Text>
        </View>
      );
    }

    if (this.props.contribution.type === 'video') {
      return (
        <View>
          <Text>{this.props.contribution.text}</Text>
          <Video
              source={{uri: this.props.contribution.media_url}}
              ref={this._handleVideoRef}
              style={{width: 300, height: 300}}
              resizeMode={Video.RESIZE_MODE_CONTAIN}
              onLoadStart={() => {}}
              onLoad={(component) => {
                this.state.playbackObject.playAsync(component);
              }}
              isLooping={true}
            />
        </View>
      );
    }

    return (
      <View>
        <Text>{this.props.contribution.text}</Text>
      </View>
    );
  }
}

export default ContributionListItem;