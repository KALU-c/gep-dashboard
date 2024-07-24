import { User, columns } from "./columns"
import { DataTable } from "./data-table"
import users from "./users"

export default function Page() {
  const data: User[] = users;

  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={data} />
    </div>
  )
}
