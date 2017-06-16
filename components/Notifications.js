import React from 'react';
import { StyleSheet, FlatList, Text, View } from 'react-native';
import { Link } from 'react-router-native';
import axios from 'axios';
import styles from '../styles/main';

class Notifications extends React.Component {
  constructor (props) {
    super(props);

  }

  render () {
    return (
      <View>
        <Text style={styles.h2}>{this.props.header}</Text>
        <FlatList
          style={styles.eventList}
          data={this.props.invites}
          keyExtractor={item => item.inviteId}
          renderItem={({ item }) => {
            const inviteUrl = `events/${item.eventId}?${this.props.type}=${item.inviteId}`;
            return (
                <Link to={inviteUrl}>
                  <View style={styles.eventListItem}>
                  <Text style={[styles.baseText, styles.eventTitle]}>
                     <Text style={{ fontWeight: '600' }}>{item.title}</Text> &rarr; {item.recipientFirstName} {item.recipientLastName}
                  </Text>
                </View>
              </Link>
            );
          }}
        />
      </View>
    );
  }
}

export default Notifications;
