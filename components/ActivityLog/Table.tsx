interface TableProps {
  columns: Array<string>;
  rows: Array<Array<any>>;
}

export default function Table({ columns, rows }: TableProps) {
  return (
    <div className="text-center overflow-y-scroll">
      <table className="text-xs sm:text-base border-collapse">
        <thead>
          <tr className="border-b border-neutral-300 text-text_yellow font-poppins text-sm md:text-[23px] font-bold">
            {columns.map((v, i) => (
              <th key={i} className="top-0 px-4 md:px-10 py-3 md:py-7 font-normal">
                {v}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="text-white">
          {rows.map((r, i) => (
            <tr
              key={i}
              className="border-b border-neutral-300"
            >
              {r.map((v, i) => (
                <td key={i} className="px-4 md:px-10 py-3 md:py-7">
                  {v}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
