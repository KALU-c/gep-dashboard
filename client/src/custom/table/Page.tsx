import { User, columns } from "./columns"
import { DataTable } from "./data-table"
import apiClient from "@/services/api-client";
import { useEffect, useState } from "react";

export default function Page() {
  const [ data, setData ] = useState<User[]>([]);

  useEffect(() => {
    const controller = new AbortController();

    apiClient.get("/users", { signal: controller.signal })
      .then(res => setData(res.data.users))
      .catch(err => console.log(err))

    return () => controller.abort();
  }, []);


  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={data} />
    </div>
  )
}
