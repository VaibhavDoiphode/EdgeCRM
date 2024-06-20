
import React, {useState} from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native';
import {RadioButton} from 'react-native-paper';
import {styles} from '../style/Style';
const AccordionView4 = ({disabled3,setDisabled3}) => {
  const [expanded, setExpanded] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState({
    option1: 'No',
    option2: 'No',
    option3: 'No',
    option4: 'No',
    option5: 'No',
  });
  const checkFlag = Object.values(selectedOptions).every(
    option => option === 'No',
  );
  const result = Object.values(selectedOptions).some(option => option == 'No');
  const toggleSize = () => {
    setExpanded(!expanded);
  };

  const handleOptionChange = (optionName, value) => {
    setSelectedOptions(prevState => ({
      ...prevState,
      [optionName]: value,
    }));
  };

  const saveResponse = () => {
    if (!result) {
      setExpanded(!expanded);
      setDisabled3(true);
    } else {
      setExpanded(expanded);
      setDisabled3(false);
    }
  };
  const cancelResponse = () => {
    setSelectedOptions({
      option1: 'No',
      option2: 'No',
      option3: 'No',
      option4: 'No',
      option5: 'No',
    });
  };
  return (
    <View style={styles.accordion}>
      <TouchableOpacity onPress={toggleSize}>
      <View style={expanded ? styles.headerLine2 : styles.headerLine1}>
          <Text style={styles.headerText}>Accordian4</Text>
          {expanded ?  <Text style={styles.headerText}>&#x25BC;</Text>  : <Text style={styles.headerText}>&#x25B6;</Text>}
        </View>
        {expanded && (
          <TouchableWithoutFeedback>
            <View style={expanded ? styles.expandedHeaderLine : styles.hidden}>
              <View style={styles.mcqText}>
                <Text>
                  Customer approved order with approved blister drawing
                </Text>
                <RadioButton.Group
                  onValueChange={value => handleOptionChange('option1', value)}
                  value={selectedOptions.option1}>
                  <View style={styles.radioButtonContainerSection}>
                    <View style={styles.radioButtonContainer}>
                      <RadioButton value="Yes" disabled={disabled3} />
                      <Text>Yes</Text>
                    </View>
                    <View style={styles.radioButtonContainer}>
                      <RadioButton value="No" disabled={disabled3} />
                      <Text>No</Text>
                    </View>
                    <View style={styles.radioButtonContainer}>
                      <RadioButton value="NA" disabled={disabled3} />
                      <Text>NA</Text>
                    </View>
                  </View>
                </RadioButton.Group>
              </View>

              <View style={styles.mcqText}>
                <Text>Advice Given</Text>
                <RadioButton.Group
                  onValueChange={value => handleOptionChange('option2', value)}
                  value={selectedOptions.option2}>
                  <View style={styles.radioButtonContainerSection}>
                    <View style={styles.radioButtonContainer}>
                      <RadioButton value="Yes" disabled={disabled3} />
                      <Text>Yes</Text>
                    </View>
                    <View style={styles.radioButtonContainer}>
                      <RadioButton value="No" disabled={disabled3} />
                      <Text>No</Text>
                    </View>
                    <View style={styles.radioButtonContainer}>
                      <RadioButton value="NA" disabled={disabled3} />
                      <Text>NA</Text>
                    </View>
                  </View>
                </RadioButton.Group>
              </View>

              <View style={styles.mcqText}>
                <Text>
                  Final layout is ready as per drawing and is ready at customer
                  site
                </Text>
                <RadioButton.Group
                  onValueChange={value => handleOptionChange('option3', value)}
                  value={selectedOptions.option3}>
                  <View style={styles.radioButtonContainerSection}>
                    <View style={styles.radioButtonContainer}>
                      <RadioButton value="Yes" disabled={disabled3} />
                      <Text>Yes</Text>
                    </View>
                    <View style={styles.radioButtonContainer}>
                      <RadioButton value="No" disabled={disabled3} />
                      <Text>No</Text>
                    </View>
                    <View style={styles.radioButtonContainer}>
                      <RadioButton value="NA" disabled={disabled3} />
                      <Text>NA</Text>
                    </View>
                  </View>
                </RadioButton.Group>
              </View>

              <View style={styles.mcqText}>
                <Text>
                  Final layout is ready as per drawing and is ready at customer
                  site
                </Text>
                <RadioButton.Group
                  onValueChange={value => handleOptionChange('option4', value)}
                  value={selectedOptions.option4}>
                  <View style={styles.radioButtonContainerSection}>
                    <View style={styles.radioButtonContainer}>
                      <RadioButton value="Yes" disabled={disabled3} />
                      <Text>Yes</Text>
                    </View>
                    <View style={styles.radioButtonContainer}>
                      <RadioButton value="No" disabled={disabled3} />
                      <Text>No</Text>
                    </View>
                    <View style={styles.radioButtonContainer}>
                      <RadioButton value="NA" disabled={disabled3} />
                      <Text>NA</Text>
                    </View>
                  </View>
                </RadioButton.Group>
              </View>

              <View style={styles.mcqText}>
                <Text>Advice Given</Text>
                <RadioButton.Group
                  onValueChange={value => handleOptionChange('option5', value)}
                  value={selectedOptions.option5}>
                  <View style={styles.radioButtonContainerSection}>
                    <View style={styles.radioButtonContainer}>
                      <RadioButton value="Yes" disabled={disabled3} />
                      <Text>Yes</Text>
                    </View>
                    <View style={styles.radioButtonContainer}>
                      <RadioButton value="No" disabled={disabled3} />
                      <Text>No</Text>
                    </View>
                    <View style={styles.radioButtonContainer}>
                      <RadioButton value="NA" disabled={disabled3} />
                      <Text>NA</Text>
                    </View>
                  </View>
                </RadioButton.Group>
              </View>

              {!checkFlag && !disabled3 &&(
                <View style={styles.saveButton}>
                  <TouchableOpacity
                    style={styles.buttoncontainer}
                    onPress={() => saveResponse()}>
                    <Text style={styles.save}>Save</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={styles.buttoncontainer}
                    onPress={() => {
                      cancelResponse();
                      setExpanded(true);
                    }}
                    >
                    <Text style={styles.cancle}>Cancel</Text>
                  </TouchableOpacity>
                </View>
              )}
            </View>
          </TouchableWithoutFeedback>
        )}
      </TouchableOpacity>
    </View>
  );
};

export default AccordionView4;