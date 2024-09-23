import { Label } from "./ui/label";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";

const filterData = [
  {
    filterType: "Location",
    array: ["Delhi NCR", "Bangalore", "Hyderabad", "Pune", "Mumbai"]
  },
  {
    filterType: "Industry",
    array: ["Frontend Developer", "Backend Developer", "FullStack Developer"]
  },
  {
    filterType: "Salary",
    array: ["0-40k", "42-1lakh", "1lakh to 5lakh"]
  }
];

function FilterJobs({ selectedValue, changeHandler }) {
  return (
    <div className='w-full bg-white p-5 rounded-md shadow-md'>
      <h1 className='font-bold text-xl mb-3'>Filter Jobs</h1>
      <hr className='mb-5' />
      <RadioGroup value={selectedValue} onValueChange={changeHandler}>
        {filterData.map((filterCategory, index) => (
          <div key={index} className='mb-6'>
            <h1 className='font-bold text-lg mb-2'>{filterCategory.filterType}</h1>
            {filterCategory.array.map((item, idx) => {
              const itemId = `id${index}-${idx}`;
              return (
                <div key={itemId} className='flex items-center space-x-2 my-2'>
                  <RadioGroupItem value={item} id={itemId} />
                  <Label htmlFor={itemId}>{item}</Label>
                </div>
              );
            })}
          </div>
        ))}
      </RadioGroup>
    </div>
  );
}

export default FilterJobs;
