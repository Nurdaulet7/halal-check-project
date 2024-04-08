import React, { createContext, useContext, useState } from "react";

const FilterContext = createContext();

export const useFilterContext = () => useContext(FilterContext);

export const FilterProvider = ({ children, value }) => {
  return (
    <FilterContext.Provider value={value}>{children}</FilterContext.Provider>
  );
};
