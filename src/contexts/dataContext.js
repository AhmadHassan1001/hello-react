import React from "react";

export const DataContext=React.createContext();

const DataProvider=DataContext.Provider;
const DataConsumer=DataContext.Consumer;


export {DataConsumer,DataProvider};


