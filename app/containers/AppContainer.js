import React, { Component } from "react";
import { StyleSheet, View, ActivityIndicator } from "react-native";
import PeopleList from "../components/PeopleList";
import {fetchpeople} from '../redux/actions/peopleActions'
import {connect} from 'react-redux'
import PropTypes from "prop-types"
class AppContainer extends Component {
  constructor(props) {
    super(props);
   
  }


  componentDidMount() {
      this.props.fetchpeople()
    
  }

  render() {
    let content = <PeopleList people={this.props.randomPeople.people} />;
    if (this.props.randomPeople.isFetching) {
      content = <ActivityIndicator size="large" />;
    }
    return <View style={styles.container}>{content}</View>;
  }
}


AppContainer.PropTypes ={
    fetchpeople:PropTypes.func.isRequired
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#093339"
  }
});

const mapStateToProps =state=>{
    return{
        randomPeople : state
    };
}

export default  connect(mapStateToProps ,{fetchpeople})(AppContainer)