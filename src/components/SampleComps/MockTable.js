/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useMemo, useState } from "react";
import Table from "./Table";
import { Container } from "../styled/Container.styled";

import makeData from "./MakeData";
import { MOCK_DATA } from "./MOCK_DATA";

export default function MockTable() {
  // console.log("mock data", MOCK_DATA)
  
  const columns = useMemo(
    () => [
      {
        Header: "Name",
        columns: [
          {
            Header: "First Name",
            accessor: "first_name",
          },
          {
            Header: "Last Name",
            accessor: "last_name",
          },
        ],
      },
    ],
    []
  );
  let tempData1 = [
    {
      first_name: "john",
      last_name: "smith",
    },
    {
      first_name: "martin",
      last_name: "dawson",
    },
  ];
  let tempData2 = [
    {
      first_name: "john1",
      last_name: "smith",
    },
    {
      first_name: "martin1",
      last_name: "dawson",
    },
  ];

  let tempData3 = [
    {
      first_name: "john2",
      last_name: "smith",
    },
    {
      first_name: "martin2",
      last_name: "dawson",
    },
  ];

  const [tData,setTData] = useState([]); 

  useEffect(() => {
    setTData(tempData1);
    console.log("calling before cleanup");
    const timer1 = setInterval(() => {
      console.log("will run in a second");
      setTData(prevState => ([...prevState, ...tempData2]));
    }, 1000)
    return(() => {
      console.log('called once');
      clearInterval(timer1);
    }
    );
  }, []);
  
 const dataFromClass = (res,requestId) => {
   resTable = {correct:5, incorrect: 6}
   setTData(prevState => ([...prevState, resTable]))
 }
  const updateData = (newData) => {
    setTData(prevState => ([...prevState,...newData]));
  }

  // const data = useMemo(() => MOCK_DATA,[MOCK_DATA])
  let data1 = useMemo(() => tData, [tData]);
  return (
    <div>
      <Container>
        <Table columns={columns} data={data1}></Table>
      </Container>
      <button onClick={()=> updateData(tempData2)} type='button'>
        Update Data 1
      </button>
      <button onClick={()=> updateData(tempData3)} type='button'>
        Update Data 2
      </button>
    </div>
  );
}
