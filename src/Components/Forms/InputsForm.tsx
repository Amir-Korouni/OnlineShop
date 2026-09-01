type InputsType = {
  name: string;
  type: string;
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const InputsForm = ({
  name,
  type,
  value,
  placeholder,
  onChange,
}: InputsType) => {
  return (
    <input
      name={name}
      type={type}
      value={value}
      placeholder={placeholder}
      onChange={onChange}
      className="w-full h-[2rem] bg-[#0D0D12] text-[#F5F5F5] border border-[#27272A] rounded focus:border-[#8B5CF6] focus:ring-1 focus:ring-[#8B5CF6] p-[5px]"
    />
  );
};

export default InputsForm;
