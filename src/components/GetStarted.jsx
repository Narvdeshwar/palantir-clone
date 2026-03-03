import { ArrowRight, X } from "lucide-react";
import FormFields from "./FormFields";
import { formFields } from "../lib/data/form-fields";
import Button from "./Button";

export default function GetStarted({ onClose }) {
  return (
    <>
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[9998]"
        onClick={onClose}
      />
      <div
        className="fixed top-0 right-0 h-screen w-full md:w-1/2 bg-structure text-white shadow-2xl z-[9999] overflow-y-auto border-l border-white/5"
        role="dialog"
      >
        <div className="p-8">
          <div className="flex justify-end mb-4">
            <button
              className="cursor-pointer p-2 rounded-full hover:bg-white/10 text-white/50 hover:text-white transition-all duration-200"
              onClick={onClose}
              aria-label="Close drawer"
            >
              <X size={24} strokeWidth={1.5} />
            </button>
          </div>
          {/* content section */}
          <div className="">
            <div className="flex justify-between px-3 text-gray-400">
              <p className="text-sm mt-2">
                CONTACT / DEMO REQUEST + PARTNERSHIP INQUIRY
              </p>

              <div className="group border-t-2 hover:text-gray-600 cursor-pointer transition-all duration-300 flex items-center">
                <span>Investor Relations</span>
                <ArrowRight
                  className="transition-transform duration-300 ease-in-out group-hover:-rotate-45"
                  size={18}
                />
              </div>
            </div>
            <p className="w-[60%] text-4xl mt-10 px-3 font-600 font-sans">
              Interested in solving your problems with Jspark software?
            </p>
            <div className="p-3">
              <form action="">
                {formFields.map((item) => (
                  <FormFields labelName={item.labelName} type={item.type} theme="dark" />
                ))}
                <div className="w-1/2">
                  <Button variant="primary" size="md" className="m-3 w-full">
                    Submit
                  </Button>
                </div>
              </form>
              <p>
                Please see our <span className="underline">Privacy Policy</span> regarding how we will handle this
                information.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
