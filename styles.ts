import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    alignItems: "center",
    justifyContent: "center",
    padding: 0,
  },
  horizontalContainer: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 10,
  },
  titleText: {
    fontSize: 40,
    color: "white",
    fontFamily: "open-sans-regular",
    textAlign: "center",
    padding: 10,
  },
  timerText: {
    fontSize: 60,
    color: "white",
    fontFamily: "open-sans-regular",
    textAlign: "center",
    padding: 10,
    paddingTop: 60
  },
  inputText: {
    fontSize: 70,
    color: "white",
    fontFamily: "open-sans-regular", //this used to be 'light'
    textAlign: "center",
    textAlignVertical: "center",
    justifyContent: "center",
    padding: 10,
  },
  bodyText: {
    fontSize: 20,
    color: "white",
    fontFamily: "open-sans-regular",
    textAlign: "center",
    padding: 5,
  },
  button: {
    marginTop: 9,
    paddingTop: 2,
    paddingBottom: 6,
    paddingLeft: 32,
    paddingRight: 30,
    marginLeft: 30,
    marginRight: 30,
    backgroundColor: "black",
    borderRadius: 30,
    borderWidth: 0.7,
    borderColor: "white",
  },
  bottom: {
    flex: 1,
    justifyContent: "flex-end",
    marginBottom: 84,
  },
  middle: {
    flex: 1,
    justifyContent: "flex-start",
    marginTop: 200,
  },
  timerButton: {
    paddingLeft:26,
    paddingRight:26,
    paddingTop:20
  },
  logo: {
    width: 80,
    height: 80
  }
});
export default styles;
