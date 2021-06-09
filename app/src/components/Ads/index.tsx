import React, { Component } from "react";
import { View, ViewStyle } from "react-native";

interface AdsProps {
    style: ViewStyle
}

class Ads extends Component<AdsProps> {
    render() {
        return (
            <View style={this.props.style}>
                <View style={{flex: 1, backgroundColor: 'red'}} />
            </View>
        )
    }
}

export default Ads
