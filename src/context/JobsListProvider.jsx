import { createContext, useState } from "react";

export const Context = createContext()

function JobsListProvider({ children }) {
  const [jobList, setJobList] = useState([]);
  return (
    <Context.Provider value={{jobList, setJobList}}>
      {children}
    </Context.Provider>
  )
}


export default JobsListProvider
