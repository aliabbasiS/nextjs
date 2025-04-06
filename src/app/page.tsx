"use client";

import Link from "next/link";
import Create from "./Crud/Create";

// import { createTask, GetTask } from "@/server/GetTask"
// import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query"

// interface Task {
//   id: number
//   title: string
//   completed: boolean
// }

const Home = () => {
  // const queryClient = useQueryClient()

  // const mutation = useMutation({
  //   mutationFn: createTask,
  //   onSuccess: () => {
  //     queryClient.invalidateQueries({ queryKey: ["task"] })
  //   }
  // })

  // const query = useQuery({
  //   queryKey: ["task"],
  //   queryFn: GetTask
  // })

  return (
    <div className="flex flex-col  h-screen  justify-evenly ">
      <h1 style={{ color: "#b3cde4" }} className="text-5xl font-bold  ">
        Wellcome to Home
      </h1>
      <div
        style={{ backgroundColor: "#537692" }}
        className="rounded-lg px-6 py-5 flex order-2 w-full h-3/4 "
      >
      <Create />
        <div className="ToDo order-1 w-full h-full  ">s</div>
        <div className="inProgress order-1 w-full h-full">s</div>
        <div className="Done order-1 w-full h-full">s</div>
      </div>
    </div>
  );
};

export default Home;
