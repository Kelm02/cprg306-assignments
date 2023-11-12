"use client";

import { useUserAuth } from "./_utils/auth-context";
 

 
await gitHubSignIn();
 
await firebaseSignOut();
 
<p>
  Welcome, {user.displayName} ({user.email})
</p>;

export default function Page() {
    
    const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

    async function handleSignIn() {
        try{
            await gitHubSignIn();
        } catch(error) {
            console.error(error);
        }
    }

    async function hadleSignOut() {
        try{
            await firebaseSignOut();
        } catch(error) {
            console.error(error);
        }
    }

    console.log(user);

    return(
        <main>
            <header>
                <h1>Login Page</h1>
            </header>
          
            <section>
                { user ? (
                    <div>
                        <p>
                            Welcome { user.displayName }
                        </p>
                        <img src = { user.photoURL } alt = { user.displayName } className = "w-8 h-8"/>
                        <button className = "text-lg m-2 hover:underline" onClick = {handleSignOut}>Sign Out</button>
                    </div>
                ) : (
                    <button className = "text-lg m-2 hover:underline" onClick = {handleSignIn}>Sign In</button>
                ) 
                }
            </section> 

        </main>
    )
}    