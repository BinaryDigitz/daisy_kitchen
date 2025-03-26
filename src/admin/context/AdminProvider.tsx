import AdminContext from "./AdminContext";

function AdminProvider({ children }) {


  const name = "";
  const values = {
    name,
  };

  
  return (
    <AdminContext.Provider value={values}>{children}</AdminContext.Provider>
  );
}

export default AdminProvider;
