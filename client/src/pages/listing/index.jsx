import {  LogOut, SearchSlash, User } from "lucide-react"
import GetListing from "../get-listings"
import AboutPage from "../about"
import { Button } from "@/components/ui/button"
import { AuthContext } from "@/context/auth-context"
import { useContext, useState } from "react"

const Listings = () => {

  const {resetCredentials} = useContext(AuthContext)

  const [activeTab, setActiveTab] = useState('about')

  const menuItems = [
    {
      icon:User,
      label:'Get List',
      value:'get-list',
      component: <GetListing />


    },
    {
      icon : SearchSlash,
      label :'About',
      value:'about',
      component:<AboutPage />
    },
    {
      icon:LogOut,
      label:'Logout',
      value:'logout',
      component:null
  }
    
  ]

  const handleLogout = () => {
    resetCredentials()
    sessionStorage.clear();

  }


  return (
    <div className='flex  h-full min-h-screen bg-gray-50'>
      <aside className="w-64 p-5  bg-white">
        <h2 className="font-extrabold text-3xl mb-5">Dash Board</h2>
        <nav>
          {
            menuItems.map(eachItem => (
              <Button
               key={eachItem.value}
               className='w-full mb-2 justify-start'  
               variant={activeTab === eachItem.value ? "secondary" : "ghost"}

               onClick = {
                eachItem.value === 'logout' ? handleLogout : () => setActiveTab(eachItem.value)
                }
              
              >
                <eachItem.icon />
                <span>{eachItem.label}</span>
              </Button>
            ))
          }

        </nav>

      </aside>

      
    </div>
  )
}

export default Listings