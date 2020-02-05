import React, { Component } from 'react';
import { firestore, auth } from '../firebase';
import { collectIdsAndDocs } from './utilities';
import Authentication from './Authentication';

import Posts from './Posts';

class Application extends Component {
  state = {
    posts: [],
    user: null,
  };

  unsubscribeFromFireStore = null;
  unsubscribeFromAuth = null;

  componentDidMount = async () => {
    this.unsubscribeFromFireStore = firestore.collection('posts').onSnapshot(snapshot => {
      const posts = snapshot.docs.map(collectIdsAndDocs);
      this.setState({ posts })
    });

    // onAuthStateChanged will fire whenever a user goes from loggedin to logged out or logged out to logged in
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      console.log(user);
      this.setState({ user });
    });
  };

  componentWillUnmount = () => {
    this.unsubscribeFromFireStore();
  }    

  // NOTE: handleCreate and handleRemove were here because we had to pass down these functions
  // because Application.jsx handled the application state.  Now with firebase handling with 
  // subscription it handled by firebase instead.
  //handleCreate = async post => {
    // Commented out code is if you DO NOT have subscriptions enabled
    //const { posts } = this.state;

    // const docRef = await firestore.collection('posts').add(post);
    //const doc = await docRef.get();
    //const newPost = collectIdsAndDocs(doc);

    //this.setState({ posts: [newPost, ...posts] });
  //};

  //handleRemove = async id => {
    // Commented out code is if you DO NOT have subscriptions enabled
    //const allPosts = this.state.posts;
    // await firestore.doc(`posts/${id}`).delete();
    //const posts = allPosts.filter(post => post.id !== id);
    //this.setState({ posts });
  //}

  render() {
    const { posts, user } = this.state;

    return (
      <main className="Application">
        <h1>Think Piece</h1>
        <Authentication user={user}/>
        <Posts posts={posts} />
      </main>
    );
  }
}

export default Application;
