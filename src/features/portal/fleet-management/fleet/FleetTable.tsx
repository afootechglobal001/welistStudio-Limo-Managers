import { SortDirection, Table, TableColumn } from "@/components/table";
import Paginations from "@/components/table/Paginations";
import { statusColour } from "@/constants/statusColor";
import { fleetFilterType, FleetItems } from "@/types/portal/fleet";
import { capitalizeWords, removeUnderscore } from "@/utils/helpers";
import { useMemo, useState } from "react";
import Image from "next/image";
import { PencilLine } from "lucide-react";
import { EmptyState } from "@/components/general-components/emptyState";
const DEFAULT_FILTERS: fleetFilterType = {
  page: 1,
  keyword: "",
  sort: "date",
  order: "desc",
};

type FleetTableProps = {
  data: FleetItems[];
};

type FleetFilterType = {
  page: number;
  sort: keyof FleetItems | "";
};

export function FleetTable({ data }: FleetTableProps) {
  const [filter, setFilter] = useState(DEFAULT_FILTERS);

  const columns: TableColumn<FleetItems>[] = useMemo(
    () => [
      {
        accessorKey: "fleetId",
        header: "Fleet ID",
        sortable: true,
        cell: ({ row }) => (
          <p className="text-(--title-color) text-sm font-medium-custom">
            {row.original.fleetId}
          </p>
        ),
      },
      {
        id: "vehicle",
        header: "Vehicle",
        sortable: true,
        cell: ({ row }) => (
          <div className="flex items-center gap-3">
            <Image
              src={row.original.carImage}
              alt={row.original.carMake}
              width={50}
              height={50}
              className="rounded-lg object-cover"
            />
            <div className="flex flex-col">
              <p className="text-(--title-color) text-sm font-medium-custom">
                {row.original.carMake}
              </p>
              <p className="text-sm text-white/50">
                {row.original.categoryName} ({row.original.categoryCode})
              </p>
            </div>
          </div>
        ),
      },
      {
        accessorKey: "numOfPassenger",
        header: "Passengers",
        sortable: true,
        cell: ({ row }) => (
          <p className="text-sm text-white/70">{row.original.numOfPassenger}</p>
        ),
      },
      {
        accessorKey: "numOfLuggage",
        header: "Luggage",
        sortable: true,
        cell: ({ row }) => (
          <p className="text-sm text-white/70">{row.original.numOfLuggage}</p>
        ),
      },
      {
        id: "status",
        header: "Status",
        sortable: true,
        cell: ({ row }) => {
          const statusName = row.original.statusName ?? "";
          const key = statusName.toLowerCase() as keyof typeof statusColour;

          const statusColor = statusColour[key] || {
            text: "text-gray-400",
            bg: "bg-gray-500/10",
          };

          return (
            <div className="flex items-center">
              <span
                className={`px-3 py-1 text-xs rounded-full ${statusColor.text} ${statusColor.bg}`}
              >
                {removeUnderscore(capitalizeWords(statusName))}
              </span>
            </div>
          );
        },
      },
      {
        id: "action",
        header: "Action",
        cell: () => (
          <button className="cursor-pointer gap-2 border-none bg-linear-to-br from-(--primary-color) to-(--secondary-color) bg-size-[200%_100%] hover:bg-size-[150%_100%] bg-right text-white rounded-full text-[13px] h-8 px-4 flex items-center justify-center duration-200">
            <PencilLine size={14} />
            Edit
          </button>
        ),
      },
    ],
    [],
  );

  const handleSorting = (key: keyof FleetItems, direction: SortDirection) => {
    setFilter((prev) => ({
      ...prev,
      sort: key,
      order: direction,
    }));
  };

  return (
    <div className="w-full min-h-75 bg-white/3 rounded-lg text-gray-500">
      <Table
        columns={columns}
        data={data}
        noDataMessage={
          <EmptyState
            title="No Records Found"
            message="No records match your current filters. Try adjusting your search criteria"
          />
        }
        // onRowClick={handleRowClick}
        onSort={handleSorting}
        stickyColumns={{ last: true }}
        initialSortState={{
          sortKey: filter?.sort ?? null,
          sortDirection: filter?.order ?? null,
        }}
      />{" "}
      {data.length > 0 && (
        <div className="px-2 py-2 border-t border-white/10">
          <Paginations
            currentPage={1}
            totalPages={10}
            onPageChange={() => null}
          />
        </div>
      )}
    </div>
  );
}
