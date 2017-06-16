import React from 'react';
import { StyleSheet } from 'react-native';
import { colors, spacing } from './variables';

const main = StyleSheet.create({
  inputField: {
    padding: 10,
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 15,
    width: '100%',
    borderRadius: 0
  },
  inputFieldTag: {
    paddingTop: 0,
    paddingRight: 0,
    paddingBottom: 0,
    paddingLeft: 10,
  },
  container: {
    paddingRight: 20,
    paddingBottom: 20,
    paddingLeft: 20,
    alignItems: 'center'
  },
  header: {
    fontSize: 20
  },
  content: {
    paddingTop: 20,
    width: '100%',
    height: '100%'
  },
  nav: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingTop: 25,
    backgroundColor: colors.brand,
    alignItems: 'center'
  },
  navItem: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: 44,
  },
  eventList: {
    marginBottom: 30,
  },
  eventListItem: {
    flex: 1,
    justifyContent: 'center'
  },
  eventTitle: {
    paddingTop: 8,
    paddingBottom: 8
  },
  topic: {
    textAlign: 'center',
    fontSize: 15
  },
  titleText: {
    fontSize: 28,
    fontWeight: 'bold',
    lineHeight: 34,
    marginBottom: 10
  },
  h2: {
    fontSize: 18,
    fontWeight: 'bold',
    lineHeight: 24,
    color: '#333'
  },
  baseText: {
    fontSize: 16,
    lineHeight: 26,
    color: '#333'
  },
  dateText: {
    fontSize: 17,
    lineHeight: 26,
    textAlign: 'left'
  },
  back: {
    width: 300,
    height: 200,
    zIndex: 0
  },
  front: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    width: 50,
    height: 50,
    marginLeft: -25,
    marginTop: -25,
    zIndex: 1
  },
  listItem: {
    marginBottom: 30,
    padding: 10,
    backgroundColor: '#f7f7f7',
    borderWidth: 1,
    borderRadius: 4,
    borderColor: '#ccc'
  },
  listItemLabel: {
    marginTop: 3,
    marginBottom: 5,
    fontWeight: '500',
    lineHeight: 22
  },
  itemAuthor: {
    fontStyle: 'italic'
  },
  contributionMedia: {
    width: '100%',
    height: 300,
    marginBottom: 10,
    borderRadius: 2
  },
  button: {
    borderRadius: 100,
    backgroundColor: colors.brand,
    borderWidth: 3,
    borderColor: colors.brandDark,
    marginTop: 20,
    marginBottom: 20
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold'
  },
  marginBottom: {
    marginBottom: 160
  }
});

export default main;
