'use client'
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
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-5xl font-bold">Home</h1>
      
    </div>
  )
}

export default Home
