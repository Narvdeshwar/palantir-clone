import formData from "@/lib/data/formData.json";
import countryList from "react-select-country-list";
import { useMemo } from "react";
import FormFields from "@/components/FormFields";
import Button from "@/components/Button";

export default function ActivateAIEnterprise() {
  const countries = useMemo(
    () =>
      countryList()
        .getData()
        .map((c) => c.label),
    []
  );

  return (
    <section className="w-full px-6 lg:px-20 py-20 text-white">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 sticky top-0">
        {/* LEFT TITLE + ANIMATED LINE */}
        <div>
          <h1 className="text-5xl md:text-8xl font-light leading-tight mt-8 text-white">
            Activate AI
            <br />
            Across the Enterprise
          </h1>
        </div>

        {/* RIGHT FORM */}
        <form className="space-y-4 p-10 border border-white/10 rounded-2xl shadow-sm bg-white/5">
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
          <div className="pt-4 space-y-2">
            {formData.checkboxes.map((label, i) => (
              <label key={i} className="flex items-center gap-2 text-sm text-gray-400">
                <input type="checkbox" className="accent-jspark-primary" />
                {label}
              </label>
            ))}
          </div>

          {/* Submit button */}
          <div className="pt-6">
            <Button variant="white" size="lg" className="w-fit rounded-md">
              {formData.submitText}
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
}
