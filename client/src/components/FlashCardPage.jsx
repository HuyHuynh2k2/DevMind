import flashcardbg from "../utils/flashcardbg2.jpg";
import data from "../Data/flashcardData.js";

export default function FlashCardPage() {
  return (
    <div
      style={{ backgroundImage: `url(${flashcardbg})` }}
      className="bg-cover bg-center h-screen"
    >
      <div className="flex justify-center items-center h-screen">
        <div className="w-[50rem] h-[30rem] bg-amber-50 flex justify-center items-center"></div>
      </div>
    </div>
  );
}
