import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  StatusBar,
} from "react-native";
import React from "react";
import { Agenda } from "react-native-calendars";
import { Card } from "react-native-paper";

const timeToString = (time: number) => {
  const date = new Date(time);
  return date.toISOString().split("T")[0];
};

const objDatesSchulders = [
  {
    name: "9:00am",
    free: false,
  },
  {
    name: "9:30am",
    free: true,
  },
  {
    name: "10:00am",
    free: false,
  },
  {
    name: "10:30am",
    free: true,
  },
  {
    name: "11:00am",
    free: false,
  },
  {
    name: "11:30am",
    free: true,
  },
];

const CalendarInterviewScreen = () => {
  const [items, setItems] = React.useState({});

  const loadItems = (day: { timestamp: number }) => {
    for (let i = -15; i < 25; i++) {
      const time = day.timestamp + i * 24 * 60 * 60 * 1000;
      const strTime = timeToString(time);
      if (!items[strTime]) {
        items[strTime] = [];
        objDatesSchulders.map((date) => {
          items[strTime].push({
            name: date.name,
            height: Math.max(10, Math.floor(Math.random() * 150)),
            day: strTime,
            free: date.free,
          });
        });
      }
    }

    const newItems = {};
    const objKeys = Object.keys(items);
    objKeys.forEach((key) => {
      newItems[key] = items[key];
    });
    setItems(newItems);
  };

  const renderItem = (item) => {
    return (
      <TouchableOpacity style={styles.item} disabled={item.free}>
        <Card style={item.free && { backgroundColor: "#B0B3CB" }}>
          <Card.Content>
            <View>
              <Text>{item.name} </Text>
            </View>
          </Card.Content>
        </Card>
      </TouchableOpacity>
    );
  };
  return (
    <View style={styles.container}>
      <Agenda
        items={items}
        futureScrollRange={1}
        loadItemsForMonth={loadItems}
        selected={new Date().toISOString().split("T")[0]}
        showClosingKnob={true}
        refreshing={false}
        renderItem={renderItem}
        minDate={new Date().toISOString().split("T")[0]}
      />

      <StatusBar />
    </View>
  );
};

export default CalendarInterviewScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  item: {
    flex: 1,

    borderRadius: 5,

    padding: 10,

    marginRight: 10,

    marginTop: 17,
  },
});
