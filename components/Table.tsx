interface TableProps {
  label: string;
  columns: Array<string>;
  rows: Array<Array<any>>;
}

export default function Table({ label, columns, rows }: TableProps) {
  return (
    <div className="overflow-scroll shadow-md rounded-lg px-2">

      <div className="overflow-scroll w-full rounded-b-lg">
        <table className="border-collapse border-spacing-0 bg-pure-white shadow-lg text-xs sm:text-base">
          <thead>
            <tr className="border-b border-neutral-300 text-text_yellow font-poppins text-sm md:text-[23px] font-bold">
              {columns.map((v, i) => (
                <th key={i} className="px-4 md:px-8 py-3 md:py-7 font-normal text-left">
                  {v}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className=" text-white">
            {rows.map((r, i) => (
              <tr
                key={i}
                className="border-b border-neutral-300 "
              >
                {r.map((v, i) => (
                  <td key={i} className="px-4 md:px-8 py-3 md:py-7 align-text-top">
                    {v}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
