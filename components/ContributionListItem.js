import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { Video } from 'expo';
import VideoContribution from './VideoContribution';
import styles from '../styles/main';

class ContributionListItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      playbackObject: null
    };
  }

  render() {
    const { text, type, media_url: uri, user: { first } } = this.props.contribution;
    const last = this.props.contribution.last || '';

    if (type === 'image') {
      return (
        <View style={styles.listItem}>
          <Image
            source={{ uri }}
            style={styles.contributionMedia}
          />
          <Text style={[styles.baseText, styles.listItemLabel]}>{text}</Text>
          <Text style={[styles.baseText, styles.itemAuthor]}>{`${first} ${last}`}</Text>
        </View>
      );
    }

    if (type === 'video') {
      return (
        <View style={styles.listItem}>
          <VideoContribution url={uri} />
          <Text style={[styles.baseText, styles.listItemLabel]}>{text}</Text>
          <Text style={[styles.baseText, styles.itemAuthor]}>{`${first} ${last}`}</Text>
        </View>
      );
    }

    return (
      <View style={styles.listItem}>
        <Text style={[styles.baseText, styles.listItemLabel]}>{text}</Text>
        <Text style={[styles.baseText, styles.itemAuthor]}>{`${first} ${last}`}</Text>
      </View>
    );
  }
}

export default ContributionListItem;
