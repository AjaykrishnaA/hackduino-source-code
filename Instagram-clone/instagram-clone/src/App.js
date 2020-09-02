import React, { useState, useEffect } from 'react';
import Post from './Post';
import { auth, db } from './firebase';
import ImageUpload from './ImageUpload';
import './App.css';
import { Modal, makeStyles, Button, Input, Avatar, Tooltip } from '@material-ui/core';
import './Post.css';
 
function App() {
  
  function getModalStyle() {
    const top = 50
    const left = 50 
  
    return {
      top: `${top}%`,
      left: `${left}%`,
      transform: `translate(-${top}%, -${left}%)`,
    };
  }

  const useStyles = makeStyles((theme) => ({
    paper: {
      position: 'absolute',
      width: 400,
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
  }));

  const [posts, setPosts] = useState([]);
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [username, setUsername] = useState('');
  const [user, setUser] = useState(null);
  const [openSignIn, setOpenSignIn] = useState(false);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser)=>{
      if(authUser){
        //user logged in...
        setUser(authUser);
        setUsername(authUser.displayName);
        // console.log(authUser);
      }else{
        setUser(null);
        //user has logged out...
      }
    }) 
    return () => {
      unsubscribe();
    }
  }, [username, user]);



  const signUp = (event)=> {
    event.preventDefault();
    auth
    .createUserWithEmailAndPassword(email, password)
    .then((authUser) =>{
      return authUser.user.updateProfile({
        displayName: username,
      });
    })
    .catch((error)=> alert(error.message));
    setOpen(false);
    // setUsername(user.displayName);
  }

  const signIn = (event)=> {
    event.preventDefault();
    auth
    .signInWithEmailAndPassword(email, password)
    .catch((error)=> alert(error.message));
    setOpenSignIn(false);
    // setUsername(user.displayName);
  }
  const [modalStyle] = React.useState(getModalStyle);
  const classes = useStyles();

  useEffect(() => {
    db.collection('posts').orderBy('timestamp',"desc").onSnapshot(snapshot=>{
      setPosts(snapshot.docs.map(doc=>(
        {
          id: doc.id, 
          post: doc.data()
        }
        )));
    })
   
  }, []);


  return (
    <div className="app">
      <header className="app__header">
        <img alt="" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.3MOJ5UxDdPuMzy6Pwuzt-QHaCp%26pid%3DApi&f=1" height='40px'  ></img>
        {user? (
          <div className="app__loginContainer"> 
            <Button variant="contained" onClick={()=> auth.signOut()} >Log Out</Button>
            <Tooltip arrow className="" title={username} >
              <Avatar className="post__avatar" alt={username} src="/static/images/avatar/1.jpg" />
            </Tooltip>
          </div>

        ): (
          <div className="app__loginContainer" >
            <Button onClick={()=> setOpenSignIn(true)} >Sign In</Button>
            <Button onClick={()=> setOpen(true)} >Sign Up</Button>
          </div>
        )}
        
        
        <Modal
        open={open}
        onClose={()=> setOpen(false)}
        >
          <div style={modalStyle} className={classes.paper}>
            <form className='app_signup' >
              <center>
                <img alt="" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.3MOJ5UxDdPuMzy6Pwuzt-QHaCp%26pid%3DApi&f=1" height='40px'  ></img>
              </center>
              <Input 
                type='text' autoFocus
                placeholder='username'
                value={username} 
                onChange={(e)=> setUsername(e.target.value)} 
              />
              <Input 
                type='email' 
                placeholder='email'
                value={email} 
                onChange={(e)=> setEmail(e.target.value)} 
              />
              <Input 
                type='password' 
                placeholder='password'
                value={password} 
                onChange={(e)=> setPassword(e.target.value)} 
              />
              <center>
                <Button type='submit' onClick={signUp} >Sign Up</Button>
              </center>
            </form> 
          </div>
        </Modal>


        <Modal
        open={openSignIn}
        onClose={()=> setOpenSignIn(false)}
        >
          <div style={modalStyle} className={classes.paper}>
            <form className='app_signup' >
              <center>
                <img alt="" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.3MOJ5UxDdPuMzy6Pwuzt-QHaCp%26pid%3DApi&f=1" height='40px'  ></img>
              </center>
              <Input 
                type='email' autoFocus
                placeholder='email'
                value={email} 
                onChange={(e)=> setEmail(e.target.value)} 
              />
              <Input 
                type='password' 
                placeholder='password'
                value={password} 
                onChange={(e)=> setPassword(e.target.value)} 
              />
              <center>
                <Button type='submit' onClick={signIn} >Sign In</Button>
              </center>
            </form>
          </div>
        </Modal>
      </header>

      {/* {user.displayName? && 
        } */}

      {user?.displayName ? (
        <> 
          <h2 className="app__hiUser" >Hi {user.displayName}, <span className="br"><h5>Start snapshotting your life moments...</h5></span> </h2>
        </>
      ): (
        <center>
          <h3>Log in to upload</h3>
        </center>
      )}
      

    {
      posts.map(({id,post})=>
        <Post 
          key={id}
          id={id}
          postUsername={post.username}
          imageUrl={post.imageUrl}
          caption={post.caption}
            
          />
      )
    }
    {user?.displayName ? (
        <ImageUpload username={user.displayName} />
      ): (
        <center>
          <h3>Log in to upload</h3>
        </center>
      )}
      <center>
        <h4>OOOOOOOOOOOOOOOOOOO</h4>
      </center>

    </div>
  );
}

export default App ;
