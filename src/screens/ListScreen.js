import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const ListScreen = () => {
  const friends = [
    {
      id: 1,
      name:  'Anuj Sharma'
    },
    {
      id:2,
      name: 'Avani Jain'
    },
    {
      id:3,
      name: 'Vandna Patidar'
    }
  ];
  return (
    <FlatList data={friends} renderItem={({item})=>{
      return <Text>{item.name}</Text>
    }}/>
 
  )
  

    
  
}

export default ListScreen

const styles = StyleSheet.create({})