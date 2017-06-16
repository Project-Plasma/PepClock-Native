import React from 'react';
import { StyleSheet, FlatList, Text, View, Button, ScrollView } from 'react-native';
import { Link, Redirect } from 'react-router-native';
import axios from 'axios';
import Notifications from './Notifications';
import styles from '../styles/main';

class Events extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      events: [],
      isAuthed: true,
      invites: [],
      deliveries: []
    };
    this.logout = this.logout.bind(this);
  }

  componentDidMount () {
    axios.get('http://127.0.0.1:3000/api/events/users')
      .then(({ data }) => {
        let events = data.map((event) => {
          return {
            id: event.event_id,
            title: event.title,
            firstName: event.first_name,
            lastName: event.last_name
          };
        });
        this.setState({events: events});

        axios.get('http://127.0.0.1:3000/api/invitations')
          .then(({ data }) => {
            let invitations = data.map(invite => {
              return {
                eventId: invite.event_id,
                title: invite.title,
                inviteId: invite.id,
                recipientFirstName: invite.first_name,
                recipientLastName: invite.last_name
              };
            });
            this.setState({invites: invitations});
          })
          .catch((err) => console.log(err));

        axios.get('http://127.0.0.1:3000/api/events/recipient')
          .then(({ data }) => {
            let deliveries = data.map(delivery => {
              return {
                eventId: delivery.event_id,
                title: delivery.title,
                inviteId: delivery.id,
                recipientFirstName: 'YOU!',
                recipientLastName: ''
              }
            })

            this.setState({deliveries: deliveries});
          })
          .catch((err) => console.log(err));

      })
      .catch(err => {
        if (err.response.status === 400) {
          this.setState({isAuthed: false});
        }
        console.log(err.response);
      });
  }

  logout () {
    axios.get('http://127.0.0.1:3000/logout')
      .then(response => {
        this.setState({isAuthed: false});
      });
  }

  maybeRenderNotifications () {
    if (this.state.invites.length) {
      return (
        <Notifications
          header='Contribute To:'
          type='invite'
          invites={this.state.invites}
        />
      );
    }
  }

  maybeRenderDeliveries () {
    if (this.state.deliveries.length) {
      return (
        <Notifications
          header='YOU HAVE PEP!!'
          type='recipient'
          invites={this.state.deliveries}
        />
      )
    }
  }

  render () {
    if (this.state.isAuthed) {
      return (
        <ScrollView style={styles.content}>
          <Text style={styles.titleText}>Event List</Text>
          {this.maybeRenderDeliveries()}
          {this.maybeRenderNotifications()}
          <Text style={styles.h2}>Events you contribute to</Text>
          <FlatList
            data={this.state.events}
            keyExtractor={item => item.id}
            renderItem={({item}) => (
              <Link to={`events/${item.id}`}>
                <View style={{height: 44}}>
                  <Text style={styles.baseText}>
                    {item.title} for {item.firstName} {item.lastName}
                  </Text>
                </View>
              </Link>
            )}
          />
          <Button
            onPress={this.logout}
            title='Log out'
          />
        </ScrollView>
      );
    } else {
      return (
        <Redirect to="/login" />
      );
    }
  }
}

export default Events;
