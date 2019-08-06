import React, { Component } from "react"
import { Router, Scene, Stack, Drawer, Tabs, Actions } from "react-native-router-flux";
import RouteKey from "./routeKeys";
import Splash from "../screens/splashScreen";
import QuestionAnswer from "../screens/QAScreen";




const RouteFlux = (props) => {
    // const MenuIcon = () => <Icon name="ios-cog" />

    return (



        <Router >


            <Scene key="root" hideNavBar >

                <Scene key={RouteKey.SPLASH} type="reset" component={Splash} hideNavBar initial />
                <Scene key={RouteKey.QA} type="reset" component={QuestionAnswer} hideNavBar />

            </Scene>
        </Router >

    )
}
export default RouteFlux














// const AppNavigator = createStackNavigator({


//     SplashRoute: {
//         screen: Splash
//     },

//     LoginRoute: {
//         screen: Login
//     },
//     DrawerRoute: {
//         screen: Drawer,
//         navigationOptions: props => ({
//             header: false,
//         })
//     },

//     updateTaskRoute: {
//         screen: UpdateTask
//     },
//     editTaskRoute: {
//         screen: EditTask
//     },
//     SignupRoute: {
//         screen: Signup
//     },
// }, {
//         headerMode: 'none',
//         // initialRouteName: 'SplashRoute'
//         initialRouteName: 'DrawerRoute'
//     })
// const Stack = createAppContainer(AppNavigator);