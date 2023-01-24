// importing a module called Frame from the library
import {Frame} from "@nativescript/core"

// define and export the function so that it can be used in other files
export function onTap()
{
  /* Page transition: an animation that occurs when you navigate from one page to another*/
  //defining an object named navigationEntry

  var naviationEntry = {
    
  }



  Frame.topmost().navigate("./info/info-page");
  // topmost() returns the last navigated Frame instance
  // navigate() allows moving between different pages

}