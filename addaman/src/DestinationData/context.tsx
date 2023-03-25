import { ReactElement, createContext, useState } from "react";
import { DataType, Context, ContextType } from "./data";

export const CrudContext = createContext<ContextType>(Context);

interface Props {
  children: ReactElement[] | ReactElement;
}

const CrudContextProvider: React.FC<Props> = ({ children }) => {
  const [data, setData] = useState(Context.data);
  console.log(data);
  const [oldData, setoldData] = useState({
    id: 0,
    image: "",
    title: "",
    desc: "",
    cost: "",
    duration: "",
  });

  const addData = (newData: any) => {
    console.log(newData);
    setData([...data, newData]);
  };

  const sendData = (d: any) => {
    setoldData(d);
  };

  const deleteData = (id: number) => {
    setData(
      data.filter((item: any) => {
        return item.id !== id;
      })
    );
  };

  const updateData = (updatedData: any) => {
    setData(
      data.map((item: any) => (item.id === updatedData.id ? updatedData : item))
    );
  };

  return (
    <CrudContext.Provider
      value={{
        data,
        addData,
        sendData,
        oldData,
        deleteData,
        updateData,
      }}
    >
      {children}
    </CrudContext.Provider>
  );
};

export default CrudContextProvider;
