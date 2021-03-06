import React, { Component } from 'react';
import {View, Text, TouchableHighlight} from 'react-native';

import GlobalStyles from "../Styles"

export default class SectionedOptionsTableCell extends Component {

  rules() {
    var rules = [GlobalStyles.styles().sectionedTableCell];
    if(this.props.first) { rules.push(GlobalStyles.styles().sectionedTableCellFirst); }
    if(this.props.height) {rules.push({height: this.props.height})};
    if(this.props.extraStyles) {
      rules = rules.concat(this.props.extraStyles);
    }
    rules.push({
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      padding: 0,
      paddingTop: 0,
      paddingBottom: 0,
      paddingRight: 5,
      maxHeight: GlobalStyles.constants().maxSettingsCellHeight
    })
    return rules;
  }

  constructor(props) {
    super(props);

    this.titleStyles = {
      width: "42%",
      minWidth: 0
    }

    this.optionsContainerStyle = {
      width: "58%",
      flex: 1,
      flexDirection: 'row',
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: GlobalStyles.constants().mainBackgroundColor
    }

    this.buttonContainerStyles = {
      borderLeftColor: GlobalStyles.constants().plainCellBorderColor,
      borderLeftWidth: 1,
      height: "100%",
      flexGrow: 1,
      padding: 10,
      paddingTop: 12
    };

    this.buttonStyles = {
      color: GlobalStyles.constants().mainDimColor,
      fontSize: GlobalStyles.constants().mainTextFontSize,
      textAlign: "center",
      width: "100%",
    }

    this.selectedButtonStyles = {
      color: GlobalStyles.constants().mainTintColor,
    }
  }

  render() {
    return (
      <View style={this.rules()}>
        <Text style={[GlobalStyles.styles().sectionedAccessoryTableCellLabel, this.titleStyles]}>{this.props.title}</Text>
        <View style={this.optionsContainerStyle}>
          {this.props.options.map((option) => {
            var buttonStyles = [this.buttonStyles];
            if(option.selected) {
              buttonStyles.push(this.selectedButtonStyles);
            }
            return (
              <TouchableHighlight underlayColor={GlobalStyles.constants().plainCellBorderColor} key={option.title} style={[GlobalStyles.styles().view, this.buttonContainerStyles]} onPress={() => {this.props.onPress(option)}}>
                <Text style={buttonStyles}>{option.title}</Text>
              </TouchableHighlight>
            )
          })}
        </View>
      </View>
    )
  }
}
