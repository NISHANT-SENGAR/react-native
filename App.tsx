import React, { useEffect, useRef, useState } from 'react';
import {
  Text,
  View, Button, TextInput, StyleSheet, FlatList, TouchableHighlight, TouchableOpacity, ActivityIndicator, Modal, StatusBar, Platform, ScrollView
} from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';

// import ComponentData from './components/componentData';
// import Login from './components/Login';
// import Home from './components/Home';

// const App = () => {
//   const [name, setName] = useState('Paakhoo');

//   const userName = () => {
//     console.warn('Function Works');
//     setName('Chunni')
//   }
//   return (
//     <View>
//       <Text style={{ fontSize: 30 }}>Hello React-native ({name})</Text>
//       {/* // this is called with parameter */}
//       <Button title='Update Name' onPress={userName} color={'red'}></Button>
//       {/* // this is called without parameter */}
//       {/* <Button title='Press Here to access User' onPress={user} color={'red'}></Button>   */}

//     </View>
//   )
// }



// const App = () => {
// const [name , setName]=useState('Pakhi')
//   return (
//     <View>
//       <Text style={{ fontSize: 30 }}>Props in React Native</Text>
//       <Button title='update props' onPress={()=>setName('Nishant')}/>
//       <User name={name} age={29}/>
//     </View>
//   )
// }
// const User = (props:any) => {
//   return(
//     <View style={{backgroundColor:'green',padding:5}}>
//     <Text style={{ fontSize: 30 }}>Name:{props.name}</Text>
//     <Text style={{ fontSize: 30 }}>Age:{props.age}</Text>

//   </View>
//   )
// }

//PORPS DATA SHOW
// const App = () => {

//   const users = [
//     {
//       "name": "Molecule Man",
//       "age": 29,
//       "secretIdentity": "Dan Jukes",
//       "powers": ["Radiation resistance", "Turning tiny", "Radiation blast"]
//     },
//     {
//       "name": "Madame Uppercut",
//       "age": 39,
//       "secretIdentity": "Jane Wilson",

//     },
//     {
//       "name": "Eternal Flame",
//       "age": 1000000,
//       "secretIdentity": "Unknown",

//     }
//   ]

//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [display, setDisplay] = useState(false);

//   const resetFormData = () => {
//     setDisplay(false);
//     setName('');
//     setEmail('');
//     setPassword('')
//   }
//   return (
//     <View>
//       {/* <Text style={{ fontSize: 30 }}>Handle Text Input</Text> */}
//       {/* <Text style={{ fontSize: 30 }}>Your name is : {name}</Text> */}

//       <Text style={{ fontSize: 30 }}>Simple Form in React Native</Text>


//       <TextInput
//         style={styles.textInput}
//         placeholder='Enter User Name'
//         value={name}
//         onChangeText={(text) => setName(text)}
//       />
//       <TextInput
//         style={styles.textInput}
//         placeholder='Enter Your Email'
//         value={email}
//         onChangeText={(email) => setEmail(email)}
//       />
//       <TextInput
//         style={styles.textInput}
//         placeholder='Enter Your Password'
//         secureTextEntry={true}
//         value={password}
//         onChangeText={(password) => setPassword(password)}
//       />
//       <View style={{ marginBottom: 10 }}>
//         <Button color={'green'} title='Print Value' onPress={() => setDisplay(true)} />
//       </View>
//       <Button title='Clear Input Filed' onPress={resetFormData} />
//       <View>
//         {
//           display ?
//             <View>
//               {/* <FlatList data={users} 
//               renderItem={({item})=><Text style={{fontSize:20}}>{item.name}</Text>}
//               /> */}
//               <Text>User Name is :{name}</Text>
//               <Text>User Email is :{email}</Text>
//               <Text>User Password is :{password}</Text>

//             </View> : null
//         }
//       </View>
//     </View>
//   )
// }


// const App = () => {

//   const users = [
//     {
//       "name": "Molecule Man",
//       "age": 29,
//       "secretIdentity": "Dan Jukes",
//       "powers": ["Radiation resistance", "Turning tiny", "Radiation blast"]
//     },
//     {
//       "name": "Madame Uppercut",
//       "age": 39,
//       "secretIdentity": "Jane Wilson",

//     },
//     {
//       "name": "Eternal Flame",
//       "age": 101,
//       "secretIdentity": "Unknown",

//     }
//   ]

//   return (
//     <View>
//       <Text style={{ fontSize: 30 }}>Component in Loop with Flatlist</Text>

//       <FlatList
//         data={users}
//         renderItem={({ item }) => <UserData item={item} />}
//       />
//     </View>
//   )
// }


// const UserData = (props:any) => {
//   const item = props.item
//   return (
//     <View style={styles.box}>
//       <Text>{item.name}</Text>
//       <Text>{item.age}</Text>

//     </View>
//   )
// }

// const styles = StyleSheet.create({
//   box: {
//     fontSize: 18,
//     color: 'blue',
//     borderWidth: 2,
//     borderColor: 'red',
//     margin: 10
//   }
// })


// USEEFFECT() USES:-->
// const App = () => {
//   const [count, setCount] = useState(0);
//   useEffect(()=>{
//     console.warn("Hello") 
//   },[]) // [] --> use for Mounting phase ,user doesnt want to excute useEffect everytime and also known as componentDidMount
//   return (
//     <View>
//       <Text>Life Cycle With Use effect {count}</Text>
//       <Button title='Update Count' onPress={() => setCount(count + 1)} />
//     </View>
//   )
// }

// useEffect as componentDisUpdate--->
// const App = () => {
//   const [count, setCounter] = useState(0);
//   const [data, setData] = useState(100);
//   const [show, setShow] = useState(false)
//   // useEffect(()=>{
//   //   console.warn(count)
//   // },[count])
//   return (
//     <View>
//       <Text style={{ fontSize: 30 }}>{data} useEffect as componentDisUpdate {count}</Text>
//       <Button title='Update Counter' onPress={() => setCounter(count + 1)} />
//       <Button title='Update Data' onPress={() => setData(data + 1)} />
//       <Button title='Hide Component' onPress={() => setShow(!show)} />
//       {
//         show ? <User info={{ data, count }} /> : null
//       }

//     </View>
//   )
// }
// const User = (props: any) => {
//   let timer = setInterval(() => {
//     console.warn("Timer called");
//   }, 2000)
//   useEffect(() => {
//     return () => clearInterval(timer) // this for unmounted beacuse this runs everytime
//   })
//   useEffect(() => {
//     console.warn("run this code when data prop is updated")
//   }, [props.info.data])


//   useEffect(() => {
//     console.warn("run this code when count prop is updated")
//   }, [props.info.count])
//   return (
//     <View>
//       <Text style={{ fontSize: 30, color: 'orange' }}>data:{props.info.data}</Text>
//       <Text style={{ fontSize: 30, color: 'orange' }}>count:{props.info.count}</Text>

//     </View>
//   )
// }

// Buttons //
// const App = () => {
//   return (
//     <View style={styles.main}>
//       <TouchableHighlight>
//         <Text style={styles.button}>Button</Text>
//       </TouchableHighlight>
//     </View>
//   )
// }

// const styles = StyleSheet.create({
//   main:{
//     flex:1
//   },
//   button:{
//     backgroundColor:'#bbb',
//     color:'#fff',
//     fontSize:24,
//     textAlign:'center',
//     padding:10,
//     margin:10,
//     borderRadius:10,
//     shadowColor:'black',
//     elevation:10,
//     shadowOpacity:1
//   }
// })

//Radio Button //
// const App = () => {
//   const [selectedRadio, setSelectedRadio] = useState(0)
//   return (
//     <View style={styles.main}>
//       <TouchableOpacity onPress={()=>setSelectedRadio(1)}>
//         <View style={styles.radioWrapper}>
//           <View style={styles.radio}>
//             {
//              selectedRadio===1? <View style={styles.radioBg}></View>:null
//             }
//           </View>
//           <Text style={styles.radioText}> Radio 1</Text>
//         </View>
//       </TouchableOpacity>
//       <TouchableOpacity onPress={()=>setSelectedRadio(2)}>
//         <View style={styles.radioWrapper}>
//           <View style={styles.radio}>
//           {
//              selectedRadio===2? <View style={styles.radioBg}></View>:null
//             }
//           </View>
//           <Text style={styles.radioText}> Radio 2</Text>
//         </View>
//       </TouchableOpacity>
//     </View>
//   )
// }

// const styles = StyleSheet.create({
//   main: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center'
//   },
//   radioText: {
//     fontSize: 20
//   },
//   radio: {
//     height: 40,
//     width: 40,
//     borderColor: 'black',
//     borderWidth: 2,
//     borderRadius: 20,
//     margin: 10

//   },
//   radioWrapper: {
//     flexDirection: "row",
//     alignItems: 'center'
//   },
//   radioBg: {
//     backgroundColor: 'black',
//     height: 28,
//     width: 28,
//     borderRadius: 20,
//     margin: 4,
//   }
// })


// Dynamic Radio Button //
// const App = () => {
//   const skills = [
//     {
//       id: 1,
//       name: "Node"
//     },
//     {
//       id: 2,
//       name: "Angular"
//     },
//     {
//       id: 3,
//       name: "React"
//     },
//     {
//       id: 4,
//       name: "React Native"
//     },
//     {
//       id: 5,
//       name: "Flutter"
//     }
//   ]
//   const [selectedRadio, setSelectedRadio] = useState(1)
//   return (
//     <View style={styles.main}>
//       {
//         skills.map((data,index) => <TouchableOpacity
//         key={index}
//         onPress={() => setSelectedRadio(data.id)}>
//           <View style={styles.radioWrapper}>
//             <View style={styles.radio}>
//               {
//                 selectedRadio === data.id ? <View style={styles.radioBg}></View> : null
//               }
//             </View>
//             <Text style={styles.radioText}> {data.name}</Text>
//           </View>
//         </TouchableOpacity>)
//       }
//     </View>
//   )
// }

// const styles = StyleSheet.create({
//   main: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center'
//   },
//   radioText: {
//     fontSize: 20
//   },
//   radio: {
//     height: 40,
//     width: 40,
//     borderColor: 'black',
//     borderWidth: 2,
//     borderRadius: 20,
//     margin: 10

//   },
//   radioWrapper: {
//     flexDirection: "row",
//     alignItems: 'center'
//   },
//   radioBg: {
//     backgroundColor: 'black',
//     height: 28,
//     width: 28,
//     borderRadius: 20,
//     margin: 4,
//   }
// })

// Loader //
// const App = () => {
//   const [ show,setShow]=useState(false)
//   const displayLoader=()=>{
//     setShow(true);

//     setTimeout(()=>{
//       setShow(false)
//     },5000)
//   }
//   return(
//     <View style={styles.main}>
//       <ActivityIndicator size={70} color='colorfull' animating={show}/>
//       <Button title='show loader' onPress={displayLoader}/>
//     </View>
//   )
// }

// const styles = StyleSheet.create({
//   main: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center'
//   }
// })



// Modal //
// const App = () => {
//   const [showModal, setShowModal] = useState(false)
//   return (
//     <View style={styles.main}>
//       <Modal transparent={true} visible={showModal}>
//         <View style={styles.centeredView}>
//           <View style={styles.modalView}>
//             <Text style={styles.modalText}>Hello modal Part</Text>
//             <Button title='close modal' onPress={()=>setShowModal(false)}/>
//           </View>
//         </View>
//       </Modal>
//       <View style={styles.buttonView}>
//         <Button title='open modal' onPress={()=>setShowModal(true)}/>
//       </View>
//     </View>
//   )
// }

// const styles = StyleSheet.create({
//   main: {
//     flex: 1
//   },
//   buttonView: {
//     flex: 1,
//     justifyContent: 'flex-end'
//   },
//   centeredView: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   modalView: {
//     backgroundColor: '#fff',
//     padding: 30,
//     borderRadius: 20,
//     shadowColor: 'black',
//     elevation: 5
//   },
//   modalText: {
//     fontSize: 30,
//     marginBottom: 20
//   }
// })

// StatusBar //
// const App= ()=>{
//   return(
//     <View>
//       <StatusBar backgroundColor='orange'
//       barStyle='light-content'
//       hidden={false }
//       />
//     </View>
//   )
// }


// Platform cheeck //
// const App = () => {
//   return (
//     <View>
//       <Text style={{ fontSize: 30 }}>Platform:{Platform.OS}</Text>
//       {
//         Platform.OS == "android" ?
//           <View style={{ backgroundColor: 'green', height: 100, width: 100 }}></View>
//           :
//           <View style={{ backgroundColor: 'green', height: 100, width: 100 }}></View>
//       }
//     </View>
//   )
// }



// Navigation //
// const Stack = createNativeStackNavigator();
// const App = () => {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator
//       screenOptions={{
//         headerStyle:{
//           backgroundColor:'blue'
//         },
//         headerTintColor:'orange',
//         headerTitleStyle:{
//             fontSize:25
//         }
//       }}
//       >
//         <Stack.Screen name='Login' component={Login}
//          options={{
//           headerLeft:()=><Button title='Left'/>,
//           headerRight:()=><TextInput placeholder='Enter data'/>,
//           title:'User Login',
//           headerStyle:{
//             backgroundColor:'skyblue'
//           },
//           headerTintColor:'white',
//           headerTitleStyle:{
//               fontSize:25
//           }
//         }} />
//         <Stack.Screen name='Home' component={Home} 
//           />
//       </Stack.Navigator>
//     </NavigationContainer>
//   )
// };


// const Tab = createBottomTabNavigator();
// const App = () => {
//   return (
//     // <NavigationContainer>
//     //   <Tab.Navigator>
//     //   <Tab.Screen name='Login' component={Login}/>
//     //   <Tab.Screen name='Signup' component={Signup}/>

//     //   </Tab.Navigator>
//     // </NavigationContainer> 
//     <Text style={{fontSize:20,color:'black'}}>  login</Text>

//   )
// };
// const Login = () => {
//   return (
//     <View>
//       <Text style={{fontSize:20,color:'black'}}>  login</Text>
//     </View>
//   )
// }
// const Signup = () => {
//   return (
//     <View>
//       <Text> Signup</Text>
//     </View>
//   )
// }



// Api Call With get method //
// const App = () => {
//   const [data, setData] = useState<any>(undefined); // Most Important //
//   const [showLoader, setShowLoader] = useState(false)
//   const getAPIData = async () => {
//     //api Call
//     const url = 'http://10.0.2.2:3000/products/getProducts';
//     let result = await fetch(url, {
//       method: 'GET',
//       headers: {
//         'Accept': 'application/json',
//         "content-type": "application/json"
//       }
//     });
//     // let result = await fetch(url);
//     result = await result.json();
//     // const result = await (await fetch(url)).json();
//     console.warn(result)
//     setData(result);
//     setShowLoader(false)

//   }
//   useEffect(() => {
//     setShowLoader(true)
//     getAPIData();

//   }, [])

//   return (
//     <ScrollView>
//       <Text style={{ fontSize: 30 }}>Api Call</Text>
//       <ActivityIndicator size={70} color='blue' animating={showLoader} />
//       {data? data.message.map((item:any)=> <View key={item.id}>
//           <Text>{item.Id}</Text>
//           <Text>{item.title}</Text>
//           <Text>{item.description}</Text>
//           <Text>{item.price}</Text>
//         </View>)
//         :
//         null

//       }
//     </ScrollView>
//   )
// }


//  ApiCall with nodejs // 
// const App = () => {
//   const [showLoader, setShowLoader] = useState(false)
//   const setAPIData = async () => {
//     console.warn('Test');
//     const data = {
//       name :"Nishant Sengar__ReactNative",
//       phone: 7054631772,
//       email: "nishantsengar16011@gmail.com",
//       password: "Nishant@123"
//     }



//     //api Call
//     const url = 'http://10.0.2.2:3000/user/signup';
//     let result = await fetch(url, {
//       method: 'POST',
//       headers: {'Accept': 'application/json',"content-type": "application/json"},
//       body:JSON.stringify(data)
//     });
//     // let result = await fetch(url);
//     result = await result.json();
//     // const result = await (await fetch(url)).json();
//     console.warn(result)
//     setShowLoader(false)

//   }
//   return (
//     <ScrollView>
//       <Text style={{ fontSize: 30 }}>Api Call</Text>
//       <ActivityIndicator size={70} color='blue' animating={showLoader} />
//     <Button title="SetData" onPress={setAPIData} />
//     </ScrollView>
//   )
// }


// APi Call 
// const App = () => {
//   const [name, setName] = useState('')
//   const [phone, setPhone] = useState('')
//   const [email, setEmail] = useState('')
//   const [password, setPassword] = useState('')

//   const [nameError, setNameError] = useState(false)
//   const [phoneError, setPhoneError] = useState(false)
//   const [emailError, setEmailError] = useState(false)
//   const [passwordError, setPasswordError] = useState(false)


//   const [showLoader, setShowLoader] = useState(false)
//   const saveData = async () => {

//     if (!name) { setNameError(true); }
//     else { setNameError(false) }
//     if (!phone) { setPhoneError(true); }
//     else { setPhoneError(false) }
//     if (!email) { setEmailError(true); }
//     else { setEmailError(false) }
//     if (!password) { setPasswordError(true); }
//     else { setPasswordError(false) }

//     if (!name || !email || !phone || !password) { return false }


//     console.warn(name, phone, email, password);
//     //api Call
//     const url = 'http://10.0.2.2:3000/user/signup';
//     let result = await fetch(url, {
//       method: 'POST',
//       headers: { 'Accept': 'application/json', "content-type": "application/json" },
//       // body:JSON.stringify({name,phone,email,password})
//     });
//     // let result = await fetch(url);
//     result = await result.json();
//     // const result = await (await fetch(url)).json();
//     console.warn(result)
//     setShowLoader(false)

//   }
//   return (
//     <ScrollView>
//       <Text style={{ fontSize: 30 }}>Post Api Call with Input Filed</Text>
//       <ActivityIndicator size={70} color='blue' animating={showLoader} />
//       <TextInput style={styles.input} placeholder='Enter Name' value={name} onChangeText={(text) => setName(text)} />
//       {nameError ? <Text style={styles.errorText}>Please enter name</Text> : null}
//       <TextInput style={styles.input} placeholder='Enter phoneno' value={phone} onChangeText={(text) => setPhone(text)} />
//       {phoneError ? <Text style={styles.errorText}>Please enter phoneno</Text> : null}
//       <TextInput style={styles.input} placeholder='Enter email' value={email} onChangeText={(text) => setEmail(text)} />
//       {emailError ? <Text style={styles.errorText}>Please enter email</Text> : null}
//       <TextInput style={styles.input} placeholder='Enter password' value={password} onChangeText={(text) => setPassword(text)} />
//       {passwordError ? <Text style={styles.errorText}>Please enter password</Text> : null}

//       <Button title="Save Data" onPress={saveData} />
//     </ScrollView>
//   )
// };

// const styles = StyleSheet.create({
//   input: {
//     borderColor: 'skyblue',
//     borderWidth: 1,
//     margin: 20,
//     fontSize: 20,
//     marginBottom: 5
//   }, errorText: {
//     color: 'red',
//     marginLeft: 20
//   }
// })


// Api Wih Update And Delete Method//
// const App = () => {
//   const [data, setData] = useState<any>([]); // Most Important //
//   const [showLoader, setShowLoader] = useState(false)
//   const [ShowModal, setShowModal] = useState(false)
//   const [selectedUser, setSelectedUser] = useState(undefined)


//   const getAPIData = async () => {
//     //api Call
//     const url = 'http://10.0.2.2:3000/products/getProducts';
//     let result = await fetch(url, {
//       method: 'GET',
//       headers: {
//         'Accept': 'application/json',
//         "content-type": "application/json"
//       }
//     });
//     result = await result.json();
//     console.warn(result)
//     setData(result);
//     setShowLoader(false)

//   }
//   const DeleteData = async (id: number) => {
//     //api Call
//     const url = 'http://10.0.2.2:3000/delete';
//     let result = await fetch(`${url}/${id}`, {
//       method: 'Delete',
//       headers: {
//         'Accept': 'application/json',
//         "content-type": "application/json"
//       }
//     });
//     result = await result.json();
//     console.warn(result)
//     await getAPIData();
//   }

//   useEffect(() => {
//     setShowLoader(true)
//     getAPIData();

//   }, [])

//   const updateUser = (data: any) => {
//     setShowModal(true);
//     setSelectedUser(data);
//   }

//   return (
//     <ScrollView style={styles.container}>
//       <ActivityIndicator size={70} color='blue' animating={showLoader} />
//       <View style={styles.dataWrapper}>
//         <View style={{ flex: 1 }}><Text>Id</Text></View>
//         <View style={{ flex: 1 }}><Text>Title</Text></View>
//         <View style={{ flex: 2 }}><Text>Description</Text></View>
//         <View style={{ flex: 2 }}><Text>Price</Text></View>
//         <View style={{ flex: 2 }}><Text>Operation</Text></View>

//       </View>

//       {data.length != 0 ? data.message.map((item: any) => <View key={item.id} style={styles.dataWrapper}>
//         <View style={{ flex: 1 }}><Text>{item.id}</Text></View>
//         <View style={{ flex: 1 }}><Text>{item.title}</Text></View>
//         <View style={{ flex: 1 }}><Text>{item.description}</Text></View>
//         <View style={{ flex: 1 }}><Text>{item.price}</Text></View>
//         <View style={{ flex: 2 }}><Button title='Delete' onPress={() => DeleteData(item.id)}></Button></View>
//         <View style={{ flex: 2 }}><Button title='Update' onPress={() => updateUser(item)}></Button></View>

//       </View>)
//         :
//         null
//       }
//       <Modal visible={ShowModal} transparent={true}>
//         <UpdateModal setShowModal={setShowModal} selectedUser={selectedUser} getAPIData={getAPIData}/>
//       </Modal>
//     </ScrollView>
//   )
// };

// const UpdateModal = (props: any) => {
//   console.warn(props.selectedUser)
//   const [title, setTitle] = useState('');
//   const [description, setDescription] = useState('');
//   const [price, setPrice] = useState('');

//   useEffect(() => {
//     if (props.selectedUser) {
//       setTitle(props.selectedUser.title)
//       setDescription(props.selectedUser.description)
//       setPrice(props.selectedUser.price)

//     }

//   }, [props.selectedUser])

//   const updateUser = async () => {
//     console.warn(title, description, price, props.selectedUser.id);
//     const url = "http://10.0.2.2:3000/products"
//     let result = await fetch(`${url}/${props.selectedUser.id}`, {
//       method: 'POST',
//       headers: {
//         'Accept': 'application/json',
//         "content-type": "application/json"
//       },
//     body:JSON.stringify({title,description,price})


//     })
//     result = await result.json();
//     console.warn(result)
//     props.getAPIData();
//     props.setShowModal(false);
//   }
//   return (
//     <View style={styles.centeredView}>
//       <View style={styles.modalView}>
//         <TextInput style={styles.input} value={title} onChangeText={(text) => setTitle(text)} />
//         <TextInput style={styles.input} value={description} onChangeText={(text) => setDescription(text)} />
//         <TextInput style={styles.input} value={price} onChangeText={(text) => setPrice(text)} />
//         <View style={{ marginBottom: 15 }}><Button title='update' onPress={updateUser} /></View>
//         <Button title='close' onPress={() => props.setShowModal(false)} />
//       </View>
//     </View>
//   )
// }
// const styles = StyleSheet.create({
//   container: {
//     flex: 1
//   },
//   dataWrapper: {
//     backgroundColor: 'orange',
//     margin: 5,
//     flexDirection: 'row',
//     justifyContent: 'space-around',
//     padding: 7
//   },
//   centeredView: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   modalView: {
//     backgroundColor: '#fff',
//     padding: 60,
//     borderRadius: 10,
//     shadowColor: '#000',
//     shadowOpacity: 0.70,
//     elevation: 5

//   }, input: {
//     borderColor: 'skyblue',
//     borderWidth: 1,
//     width: 300,
//     // margin: 20,
//     fontSize: 20,
//     marginBottom: 15
//   }, errorText: {
//     color: 'red',
//     marginLeft: 20
//   }
// })


// Async Stroage //
// const App = () => {
//   const inputFocus = useRef<any>();

//   const updateInput = () => {
//     inputFocus.current.focus();
//     inputFocus.current.setNativeProps({
//       fontSize:24,
//     })
//   }

//   return (
//     <View style={styles.container}>
//       <TextInput ref={inputFocus} style={styles.input} placeholder='Enter Name' />
//       <TextInput style={styles.input} placeholder='Enter Password' />
//       <Button title='Update Input' onPress={updateInput} />
//     </View>
//   )
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding:16
//   },
//   input: {
//     borderColor: 'skyblue',
//     borderWidth: 2,
//     width: 300,
//     margin: 10,
//     fontSize: 20,
//     marginBottom: 15
//   }

// })

const App = () =>{

  const setData =async ()=>{
   await AsyncStorage.setItem("name","Nishant Parkhi Sengar")
  }
  const getData =async ()=>{
   const name  =await AsyncStorage.getItem("name");
   console.warn(name);
   
  }
  return (
    <View style={{marginTop:100,marginLeft:30}}>
      <Text style={{fontSize:40}}>AsyncStorage with React Native</Text>
      <Button title='Set Data' onPress={setData}/>
      <Button title='Get Data' onPress={getData}/>

    </View>
  );
};


export default App;
