import React from "react";
import { Button, Space } from "antd";
const Ant = ({types,color,salam}) => {


  return (
    <>
      <Space wrap>
        {types.map((type,index) => (
          <Button key={index} type={type} danger>
            {type}
          </Button>
        ))}
      </Space>
    </>
  );
};

export default Ant;
