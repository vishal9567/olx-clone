import { createContext, useState } from 'react'

export const FirebaseContex = createContext(null)
export const AuthContext = createContext(null)

export default function Contex({ children }) {
    const [user, setUser] = useState(null)
    return (
        <AuthContext.Provider value={{ user,setUser }}>
            {children}
        </AuthContext.Provider>
    )
}