import { createContext, useContext, useState } from 'react'

const BookNowContext = createContext(null)

export function BookNowProvider({ children }) {
  const [open, setOpen] = useState(false)

  return (
    <BookNowContext.Provider value={{ open, setOpen }}>
      {children}
    </BookNowContext.Provider>
  )
}

export function useBookNow() {
  return useContext(BookNowContext)
}
