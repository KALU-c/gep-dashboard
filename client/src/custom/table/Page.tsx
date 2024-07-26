import { useQuery } from "@tanstack/react-query";
import { Skeleton } from "@/components/ui/skeleton";
import { columns } from "./columns"
import { DataTable } from "./data-table"
import { fetchUsers } from "@/services/api-client";

export default function Page() {
  const { data, error, isLoading } = useQuery({
    queryKey: ["users"],
    queryFn: fetchUsers
  });

  if (isLoading) return <Skeleton className="container mx-auto py-10 h-screen" />;
  if (error) return <div className="container mx-auto py-10">Something went wrong...</div>;

  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={data} />
    </div>
  )
}
