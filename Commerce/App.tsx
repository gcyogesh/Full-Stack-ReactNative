import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './screens/Home';
import About from './screens/About';
import ProductDetails from './screens/ProductDetails';
import Cart from './screens/Cart';
import CheckOut from './screens/CheckOut';
import Payment from './screens/Payment';
import Login from './screens/authentication/Login';
import Register from './screens/authentication/Register';
import Account from './screens/Account/Account';
import Notification from './screens/Account/Notification';
import Profile from './screens/Account/Profile';
import MyOrders from './screens/Account/MyOrders';
import Dashboard from './screens/adminpanel/Dashboard';


// for routes 
const stack = createNativeStackNavigator();



const App: React.FC = () => {

          

  return (
    <NavigationContainer>
   <stack.Navigator initialRouteName='login'>
    <stack.Screen name='home' component={Home} options={{headerShown:false,}}/>
    <stack.Screen name='about' component={About} options={{headerShown:false,}}/>
    <stack.Screen name='productDetails' component={ProductDetails} />
    <stack.Screen name='cart' component={Cart}  />
    <stack.Screen name='checkout' component={CheckOut}  />
    <stack.Screen name='payment' component={Payment}  />
    <stack.Screen name='login' component={Login}  options={{headerShown:false,}}/>
    <stack.Screen name='register' component={Register}  option  s={{headerShown:false,}}/>
    <stack.Screen name='account' component={Account}  />
    <stack.Screen name='notification' component={Notification}  />
    <stack.Screen name='profile' component={Profile}  />
    <stack.Screen name='orders' component={MyOrders }  />
    <stack.Screen name='adminpanel' component={Dashboard}  />
   

   </stack.Navigator>
   </NavigationContainer>
  );
}

export default App;

