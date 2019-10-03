Multi Group/Channel Chat Application
Implemented with Angular, Socket.IO, MongoDB, Express and NodeJS
Scope
The purpose of the project is to build a multi group/ channel Chat application which has user controls over group and channel admin.
The App has a login/out function to allow multi user to utilize. 
Git
The Project uses standard git for version control.
Every iteration is backup onto github.
The repo can be accessed via the following link:
https://github.com/Leyuan-Yu/NewChat
The repository is organized into two folders.
AngularChat contains the frontend application:
Server folder hosts the backend Socket.IO and RESTful API.
 
Within the AngularChat folder, angular components are organized in a traditional manner. 
Most of the application is hosted with the AngularChat/src folder.
 
Within that folder:
AngularChat/src/Services contains helper services used for logging in and using the RESTful API.
The rest of the program is hosted within the AngularChat/src/app folder.
 
Components are hosted within their own name space.
AngularChat/src/app/shared contains data models used for querying the API.
On the server side:
 
The organization is more horizontal.
The main server is written onto the index.js file.
Routing used by the server side to run the api is contained within Server/routes folder.
The controllers used by the router are contained with the Server/ controllers folder.
Datamodels used by the controller to I/O MongoDB is hosted in the Server/dataModels folder.
Data Structure
Both MongoDB, server storage and localStorage are used by the application for the best performance.
---------------------------------------
Server Side storage is done by utilizing MongoDB.
The following is a rough schema of the data structure used by MongoDB:
MyChatDB -> users ->{id:number, name:String, password: String, group: String, email: String, imgpath : String}
Exported as userModel
MyChatDB -> groups ->{id:number, name:String, admin:String, channels:String[]}
Exported as groupModel
MyChatDB -> channels ->{id:number, name:String, admin:String, users:String[]}
Exported as channelModel
---------------------------------------
Users Avatar are stored on the angular  side with a folder.
user{imgpath:String} contains the path to the image.
---------------------------------------
localStorage within the browser is used for session verifications to avoid too much traffic to the server side. 
Localstorage{CurrentUser:String,Loggedin:Boolean,CurrentChannel:String,CurrentGroup:String}	
REST API
The server side is mainly set up to be a RESTful API, with a standardize output:
Output = (status:Boolean, data: [], info: String)
Which contains four main routes, controllers are listed as follow:
Login
Perform login check
POST ->{name,password}-> ‘’ -> handleLogin()  -> Output(status, user, info)
User
Returns a list of all users
GET -> {} -> ‘user’ -> handleGetUserList() -> output(status, users, info)
Returns a particular user
GET -> {name} -> ‘user/:name’ -> handleGetUser () -> output(status, user, info)

Add a new user
POST -> { id:number, name:String, password: String, group: String, email: String, imgpath : String } -> ‘user’ -> handleAddUserList() -> output(status, users, info)

Update a user
PUT-> { id:number, name:String, password: String, group: String, email: String, imgpath : String } -> ‘user’ -> handleUpdateUser() -> output(status, user, info)
Delete a user
DELETE-> { id:number } -> ‘user’ -> handleDeleteUser() -> output(status, users, info)
Group
Returns a list of all groups
GET -> {} -> ‘user’ -> handleGetGroupList() -> output(status, users, info)
Returns a particular group
GET -> {name} -> ‘user/:name’ -> handleGetGroup () -> output(status, user, info)

Add a new group
POST -> id:number, name:String, admin:String, channels:String[]} -> ‘user’ -> handleAddGroup() -> output(status, groups, info)

Update a group
PUT-> { id:number, name:String, admin:String, channels:String[]} -> ‘user’ -> handleUpdateGroup() -> output(status, group, info)
Delete a group
DELETE-> { id:number } -> ‘user’ -> handleDeletegroup() -> output(status, users, info)

Channel
Returns a list of all channels
GET -> {} -> ‘user’ -> handleGetChannelList() -> output(status, users, info)
Returns a particular channel
GET -> {name} -> ‘user/:name’ -> handleGetChannel () -> output(status, user, info)

Add a new channel
POST -> id:number, name:String, admin:String, users:String[]} -> ‘user’ -> handleAddChannel() -> output(status, users, info)

Update a channel
PUT-> { id:number, name:String, admin:String, users:String[]} -> ‘user’ -> handleUpdateChannel() -> output(status, user, info)
Delete a channel
DELETE-> { id:number } -> ‘user’ -> handleDeleteChannel() -> output(status, users, info)

Angular Architecture
AngularChat contains the frontend application:
Server folder hosts the backend Socket.IO and RESTful API.
 
Within the AngularChat folder, angular components are organized in a traditional manner. 
Most of the application is hosted with the AngularChat/src folder.
 
Within that folder:
AngularChat/src/Services contains helper services used for logging in and using the RESTful API.
The rest of the program is hosted within the AngularChat/src/app folder.
 
Components are hosted within their own name space.
AngularChat/src/app/shared contains data models used for querying the API.
