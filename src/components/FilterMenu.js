import { IoFilterOutline } from "react-icons/io5";

const FilterMenu = ({ toggle, handleToggle, handleFilterChange }) => {
    const renderMenu = () => {
        if (toggle) {
            return (
                <div onClick={handleToggle} className="flex-col justify-end">
                    <div onClick={handleToggle} className="flex text-xl font-mono font-bold border-2 bg-[#1b1f25] border-[#c6c6c6] text-[#c6c6c6] rounded-lg px-3 py-1 hover:bg-[#c6c6c6] hover:text-[#2a313c]">
                        <IoFilterOutline size={30} className="transition transform rotate-180 duration-1000" />
                        <h2 className="ml-4">Filter</h2>
                    </div>
                    <div className="absolute bg-[#1b1f25] border-[#c6c6c6] border-2 px-4 mt-2 rounded-lg font-mono">
                        <ul className="[&>*]:mb-2 [&>*]:border-b-2 [&>*]:text-center [&>*]:border-b-[#c6c6c6] [&>*]:hover:text-opacity-80">
                            <li onClick={() => handleFilterChange("dateOldToNew")}>
                                <div>Date</div>
                                (Old to New)
                            </li>
                            <li onClick={() => handleFilterChange("dateNewToOld")}>
                                <div>Date</div>
                                (New to Old)
                            </li>
                            <li onClick={() => handleFilterChange("bestClimb")}>
                                Best Climb
                            </li>
                        </ul>
                    </div>
                </div>
            );
        }

        return (
            <div onClick={handleToggle} className="flex text-xl font-mono font-bold border-2 bg-[#2a313c] border-[#c6c6c6] text-[#c6c6c6] rounded-lg px-3 py-1 hover:bg-[#c6c6c6] hover:text-[#2a313c]">
                <IoFilterOutline size={30} />
                <h2 className="ml-4">Filter</h2>
            </div>
        );
    };

    return renderMenu();
};

export default FilterMenu;
