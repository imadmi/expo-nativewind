import { Text, View } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const index = () => {
  return (
    <View className='bg-red-100'>
      <Text className="text-blue-400 text-9xl">imad</Text>
      <Link href='/Profile'>Profile</Link>
    </View>
  )
}

export default index
