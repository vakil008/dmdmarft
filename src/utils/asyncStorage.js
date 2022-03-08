import Events from "../utils/event";
import AsyncStorage from '@react-native-community/async-storage';

const setUserDataInAsyncStorage = async (key, value) => {
  try {
   // console.log("called");
   const sKey=key.toString();
   const sValue= value.toString();
   await AsyncStorage.setItem(sKey, sValue);
   // console.log("saved");
    Events.trigger("GetUserDetail");
    AsyncStorage.getItem(key)
      .then((userString) => {
        const user = userString;
        console.log("data is ",key, user)
      })
  } catch (e) {
    // saving error
    console.log("error");
  }
}

export default setUserDataInAsyncStorage;