import formData from "@/lib/data/formData.json";
import countryList from "react-select-country-list";
import { useMemo } from "react";
import FormFields from "@/components/FormFields";

export default function GetStartedOpsSharthi() {
  const countries = useMemo(
    () =>
      countryList()
        .getData()
        .map((c) => c.label),
    []
  );

  return (
    <section className="w-full px-6 lg:px-20 py-20 text-white">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
        {/* LEFT TITLE */}
        <h1 className="text-5xl md:text-8xl font-light leading-tight">
          {formData.title}
        </h1>

        {/* RIGHT FORM */}
        <form className="space-y-4 max-w-xl">
          {formData.fields.map((field, index) => (
            <FormFields
              key={index}
              labelName={field.labelName}
              type={field.type}
              placeholder={field.placeholder}
              theme="dark"
              options={
                field.optionsType === "countries" ? countries : field.options
              }
            />
          ))}

          {/* Checkboxes */}
          <div className="pt-4">
            {formData.checkboxes.map((label, i) => (
              <label key={i} className="flex items-center gap-2 text-sm text-gray-400 mb-2">
                <input type="checkbox" className="accent-jspark-primary" />
                {label}
              </label>
            ))}
          </div>

          <button className="border border-white/20 px-8 py-2 text-sm hover:bg-white hover:text-black rounded-md cursor-pointer transition-colors duration-200">
            {formData.submitText}
          </button>
        </form>
      </div>
    </section>
  );
}
