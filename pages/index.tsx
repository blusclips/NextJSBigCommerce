/** @format */
import React from "react";
import Header from "../components/Header";

interface Props {
  navigation?: boolean;
}

const Index: React.FC<Props> = () => {
  return (
    <>
      <Header text="Hello Maseruka Cephas" />
    </>
  );
};

export default Index;
