import React from 'react'
import {
    View,
    Text,
} from 'react-native'

export default List = (props) => {
    const { text } = props
    return(
        <View>
            <Text>
                { text }
            </Text>
        </View>
    )
}