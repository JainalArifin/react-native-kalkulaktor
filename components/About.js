import React, { Component } from 'react'
import {
    View,
    Text,
    Button,
} from 'react-native'

import List from './LIst'

export default class About extends Component{
    static navigationOptions = {
        title : 'About'
    }
    constructor(){
        super()
        this.state = {
            list: false
        }
    }
    render (){
        // props.navigation.getParam
        const getParam = this.props.navigation.getParam('text', ' ini kalo defAULTNY')
        const { text } = this.props
        const { list } = this.state
        return(
            <View>
                <Text>
                    { getParam }
                </Text>
                <Text>
                    { text }
                </Text>
                {list ?
                    <Button title="Hidden list" onPress={()=>this.setState({ list: false })} />
                    :
                    <Button title="show list" onPress={()=>this.setState({ list: true })} />
                }
                {list && (
                 <List text="ini list"/>
                )}
            </View>
        )
    }
}