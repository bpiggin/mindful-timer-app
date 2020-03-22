import { StyleSheet } from "react-native";

export default styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000000",
    alignItems: "center",
    justifyContent: "center",
    padding: 0
  },
  horizontalContainer: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-around",
    paddingHorizontal: 100,
    padding: 0
  },
  titleText: {
    fontSize: 40,
    color: "white",
    fontFamily: "open-sans-regular",
    textAlign: "center",
    padding: 10
  },
  timerText: {
    fontSize: 60,
    color: "white",
    fontFamily: "open-sans-regular",
    textAlign: "center",
    padding: 10
  },
  inputText: {
    fontSize: 70,
    color: "white",
    fontFamily: "open-sans-regular", //this used to be 'light'
    textAlign: "center",
    textAlignVertical: "center",
    justifyContent: "center",
    padding: 10
  },
  bodyText: {
    fontSize: 20,
    color: "white",
    fontFamily: "open-sans-regular",
    textAlign: "center",
    padding: 5
  },
  button: {
    marginTop: 9,
    paddingTop: 2,
    paddingBottom: 6,
    paddingLeft: 32,
    paddingRight: 30,
    marginLeft: 30,
    marginRight: 30,
    backgroundColor: "#000000",
    borderRadius: 30,
    borderWidth: 0.7,
    borderColor: "white"
  },
  bottom: {
    flex: 1,
    justifyContent: "flex-end",
    marginBottom: 84
  },
  middle: {
    flex: 1,
    justifyContent: "flex-start",
    marginTop: 200
  }
});
