import { View, Text } from 'react-native'
import React from 'react'

const Timer = () => {

  const supabaseKey = process.env.SUPABASE_URL ?? "Key not found";

  console.log(supabaseKey);

  return (
    <View>
      <Text>Supabase Key: {supabaseKey}</Text>
    </View>
  )
}

export default Timer