import { ReactNode } from "react";
import { IoIosCloseCircle } from "react-icons/io";

interface Props {
  isVisible: boolean;
  children: ReactNode;
  onClose: () => void;
}

const Popup = ({ isVisible, children, onClose }: Props) => {
  if (!isVisible) return null;

  const handleClose = (e: React.MouseEvent<HTMLElement>) => {
    if (e.target instanceof HTMLElement && e.target.id === "wrapper") onClose();
  };

  return (
    <div
      id="wrapper"
      className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm z-50 flex justify-center items-center"
      onClick={handleClose}
    >
      <div className="w-[600px] relative">
        <button
          className="text-3xl text-violet-400 bg-white rounded-full absolute right-0 translate-x-2/4 -translate-y-2/4"
          onClick={onClose}
        >
          <IoIosCloseCircle className="hover:opacity-75" />
        </button>
        <div className="min-h-40 bg-white p-2 rounded-lg text-xl flex justify-center items-center text-center">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Popup;
