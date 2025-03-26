import { createContext } from "react";

interface ContextTypes {
  name: string;
}
const AdminContext = createContext<ContextTypes | null>(null);

export default AdminContext;
