import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import AccordionView1 from './screens/AccordionView1'
import AccordionView2 from './screens/AccordionView2'
import AccordionView3 from './screens/AccordionView3'
import AccordionView4 from './screens/AccordionView4'

const Form = () => {
  const [disabled, setDisabled] = useState(false);
  const [disabled1, setDisabled1] = useState(true);
  const [disabled2, setDisabled2] = useState(true);
  const [disabled3, setDisabled3] = useState(true);

  return (
    <ScrollView>
      <AccordionView1 disabled={disabled} setDisabled={setDisabled}  setDisabled1={setDisabled1}/>
      <AccordionView2  disabled1={disabled1} setDisabled1={setDisabled1} setDisabled2={setDisabled2}/>
      <AccordionView3   disabled2={disabled2} setDisabled2={setDisabled2} setDisabled3={setDisabled3}/> 
      <AccordionView4  disabled3={disabled3} setDisabled3={setDisabled3}/> 
    </ScrollView>
  )
}

export default Form

const styles = StyleSheet.create({})