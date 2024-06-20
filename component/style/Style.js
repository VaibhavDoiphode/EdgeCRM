import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  accordion: {
    margin: 10,
    backgroundColor: 'white',
  },
  headerLine1: {
    height: 70,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'white',
    paddingHorizontal: 10,
    borderColor: '#ececec',
    borderWidth: 8,
  },
  headerLine2: {
    height: 70,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'white',
    paddingHorizontal: 10,
    borderColor: '#ececec',
    borderLeftWidth: 8,
    borderRightWidth: 8,
    borderTopWidth: 8,
  },
  expandedHeaderLine: {
    borderColor: '#ececec',
    borderLeftWidth: 8,
    borderRightWidth: 8,
    borderBottomWidth: 8,
  },
  headerText: {
    fontSize: 22,
    fontWeight: 'bold',
    color: 'black',
  },
  mcqText: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginBottom: -10,
    marginTop: -10,
  },
  radioButtonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  radioButtonContainerSection: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
    paddingBottom: 10,
  },
  saveButton: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginRight: 200,
  },
  hidden: {
    display: 'none',
  },
  questionText: {
    color: '#131212cf',
    fontWeight: '500',
  },
  questionContainer: {},
  save: {
    color: 'orange',
    fontSize: 18,
  },
  buttoncontainer: {
    padding: 10,
  },
  cancle: {
    color: 'black',
    fontSize: 18,
  },
});
