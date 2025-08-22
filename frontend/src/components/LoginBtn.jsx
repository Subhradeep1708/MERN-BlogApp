import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/clerk-react';
import { Link } from 'react-router-dom'

const LoginBtn = () => {
    return (
        <div>
            
            <SignedOut>
                <Link to="/login">
                    <button className='py-2 px-4 rounded-3xl bg-blue-800 text-white hover:bg-blue-600'>Login 👋</button>
                </Link>
            </SignedOut>
            <SignedIn>
                <UserButton />
            </SignedIn>
        </div>
    )
}

export default LoginBtn
