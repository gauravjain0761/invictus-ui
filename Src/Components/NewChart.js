import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import PureChart from "react-native-pure-chart";

import moment from "moment";
import Colors from "../Themes/Colors";
export default class NewChart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }

  componentDidMount() {
    this.generateData();
  }

  generateData() {
    var data = [];
    var startDate = moment();
    for (var i = 0; i < 10; i++) {
      startDate.add(1, "days");
      data.push({
        x: startDate.format("YYYY-MM-DD"),
        y: Math.round(Math.random() * 500),
      });
    }
    this.setState({
      data: [
        {
          data: data,
          color: Colors.blue,
        },
      ],
    });
  }
  render() {
    return (
      <View style={styles.container}>
        {/* <PureChart
            type={"line"}
            data={this.state.data}
            width={"100%"}
            height={100}
            onPress={(a) => {
              console.log("onPress", a);
            }}
            xAxisColor={"black"}
            yAxisColor={"red"}
            xAxisGridLineColor={"red"}
            yAxisGridLineColor={"red"}
            minValue={10}
            labelColor={"red"}
            showEvenNumberXaxisLabel={false}
            customValueRenderer={(index, point) => {
              if (index < 3) return null;
              return <Text style={{ textAlign: "center" }}>{point.y}</Text>;
            }}
          /> */}
        <View style={{ height: 20 }} />
        <PureChart
          type={"bar"}
          data={this.state.data}
          height={200}
          //   xAxisColor={"red"}
          //   yAxisColor={"red"}
          //   xAxisGridLineColor={"red"}
          //   yAxisGridLineColor={"red"}
          //   labelColor={"red"}
          //   numberOfYAxisGuideLine={10}
        />
        {/* <PureChart type={"bar"} data={this.state.data} /> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
