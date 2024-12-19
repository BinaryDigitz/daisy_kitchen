import {createContext} from 'react'

interface ContextProps{
  showSidebar: boolean;
  setShowSidebar: (showSidebar: boolean) => void;
  closeAllMenues: () => void;
  toggleSidebar: () => void;
}
export const AppContext = createContext({} as ContextProps)
