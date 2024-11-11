import React, { Children, createContext, useState } from 'react'

export const UserContext =createContext();
export const UserProvider =({Children}) =>{
const [users,setUsers] =useState([]);
const [isLoading ,setIsLoading]=useState(false);
const[error,setError] = useState(null);
const [pageNumber, setPageNumber] =useState(1);
const[pageSize ,setPageSize] = useState(3);
const[sortBy,setSortBy]= useState("name");

}
  return (
    <div>
      
    </div>
  )
}

export default UserContext
