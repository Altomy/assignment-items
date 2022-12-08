import { useState } from "react";

const TableBody = () => {
  // items list
  const [items] = useState([
    {
      ID: 1,
      title: "Oral-B Genius X Limited, Electric Toothbrush",
      description:
        "Oral-B Genius X Limited with artificial intelligence has learned from thousands of human brushing behaviors and instantly recognizes your brushing style",
      cost: 183,
    },
  ]);

  return (
    <tbody>
      {items.map((item) => (
        <tr>
          <td className="border border-gray-900">000{item.ID}</td>
          <td className="border border-gray-900">{item.title}</td>
          <td className="border border-gray-900 text-xs py-2">
            {item.description}
          </td>
          <td className="border border-gray-900">{item.cost}$</td>
          <td className="border border-gray-900">
            <div className="actions">
              <div className="btn font-bold cursor-pointer text-blue-500">
                Edit
              </div>
              <div className="btn font-bold cursor-pointer text-red-500">
                Delete
              </div>
            </div>
          </td>
        </tr>
      ))}
    </tbody>
  );
};

export default TableBody;
