import React from "react";
import { EllipsisVertical, Plus, Pencil, Trash } from "lucide-react";
import Form from "./AccountGroupForm";
import api from "../../api";

interface accountList {
  id: number;
  accname: string;
  description: string;
}

function accGrp() {
  const [account, setAccount] = React.useState<accountList[]>([]);
  const [isOpen, setIsOpen] = React.useState(false);

  const [isActionOpen, setIsActionOpen] = React.useState<number | null>(null); //for tooltip
  const [selectedItem, setSelectedItem] = React.useState<accountList | null>(
    null,
  ); //check if files have id

  const refreshData = () => {
    api.getAccGroup().then((data) => setAccount(data));
  };

  React.useEffect(() => {
    api.getAccGroup().then((data) => {
      setAccount(data);
    });
  }, []);

  return (
    <div className="flex font-roboto text-wide w-full">
      <div className="main-content pt-16 px-12 w-full">
        <h1 className="text-4xl font-semibold text-[#1E293B]">
          Account Groups
        </h1>

        <div className="actions mt-12 mb-6 flex justify-end">
          <input
            className="border-2 rounded-lg p-2 mr-4 h-[41px] w-[150px]"
            type="text"
            onFocus={(e) => (e.target.type = "date")}
            onBlur={(e) => {
              if (!e.target.value) e.target.type = "text";
            }}
            placeholder="Start Date"
          />
          <input
            className="border-2 rounded-lg p-2 mr-4 h-[41px] w-[150px]"
            type="text"
            onFocus={(e) => (e.target.type = "date")}
            onBlur={(e) => {
              if (!e.target.value) e.target.type = "text";
            }}
            placeholder="End Date"
          />
          <button
            onClick={() => {
              setSelectedItem(null);
              setIsOpen(true);
            }}
            className="bg-[#3671D9] font-semibold text-white h-[41px] w-[150px] p-4 rounded-lg hover:bg-[#2a5cb0] flex flex-row items-center justify-center"
          >
            <Plus className="w-5 h-5 mr-1 relative top-[1px]" />
            <span>Account</span>
          </button>
        </div>

        <div>
          <Form
            isOpen={isOpen}
            onClose={() => setIsOpen(false)}
            onSave={refreshData}
            item={selectedItem}
          />
        </div>

        <div className="table-auto md:table-fixed mt-2 overflow-x-auto rounded-lg shadow-lg">
          <table className="w-full text-left rounded-lg text-[#1E293B] shadow-lg">
            <thead className="bg-[#3671D9] text-white h-12">
              <tr className="">
                <th className="py-2 pl-4">Account Name</th>
                <th className="py-2 pl-4">Description</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {account.length > 0 ? (
                account.map((item, index) => (
                  <tr key={index}>
                    <td className="py-4 pl-4">{item.accname}</td>
                    <td className="py-4 pl-4">{item.description}</td>
                    <td className="py-4 pl-4">
                      <div className="relative inline-block text-left">
                        <button
                          onClick={() =>
                            setIsActionOpen(
                              isActionOpen === index ? null : index,
                            )
                          }
                          className="flex items-center justify-center p-2 rounded-full hover:bg-gray-100 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                        >
                          <EllipsisVertical />
                        </button>

                        {isActionOpen === index && (
                          <>
                            <div
                              className="fixed inset-0 z-10"
                              onClick={() => setIsActionOpen(null)}
                            ></div>

                            <div className="absolute right-8 bottom-0 z-20 w-30 origin-top-right rounded-md bg-white shadow-lg focus:outline-none overflow-hidden">
                              <div className="py-1">
                                <button
                                  onClick={() => {
                                    console.log("Edit ", item.accname);
                                    setSelectedItem(item);
                                    setIsActionOpen(null);
                                    setIsOpen(true);

                                    <Form
                                      isOpen={isOpen}
                                      onClose={() => setIsOpen(false)}
                                      onSave={refreshData}
                                      item={selectedItem}
                                    />;
                                  }}
                                  className="flex w-full items-center px-4 py-2 text-sm text-[#1E293B] hover:bg-gray-200 transition-colors"
                                >
                                  <Pencil className="mr-3 h-4 w-4 text-[#1E293B]" />
                                  <span>Edit</span>
                                </button>
                                <button
                                  onClick={() => {
                                    console.log("Delete ", item.accname);
                                    setIsActionOpen(null);
                                  }}
                                  className="flex w-full items-center px-4 py-2 text-sm text-red-600 hover:bg-red-100 transition-colors"
                                >
                                  <Trash className="mr-3 h-4 w-4 text-red" />
                                  <span>Delete</span>
                                </button>
                              </div>
                            </div>
                          </>
                        )}
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={3} className="p-6 text-gray-500">
                    No data to show.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default accGrp;
