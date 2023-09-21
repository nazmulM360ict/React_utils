import { AiOutlineCheck } from "react-icons/ai";

type Props = {
  value: string;
  label: string;
  skills?: string[];
  setSkills?: React.Dispatch<React.SetStateAction<string[]>>;
};

export const CheckInput = ({ value, label, skills, setSkills }: Props) => {
  return (
    <div className="item">
      <input
        onChange={() => {
          if (skills && setSkills) {
            skills?.includes(value)
              ? setSkills(skills.filter((item) => item !== value))
              : setSkills([...skills, value]);
          }
        }}
        type="checkbox"
        name=""
        id={value}
      />
      <label
        className={skills?.includes(value) ? "selected" : ""}
        htmlFor={value}
      >
        <span style={{ marginRight: 5 }}>{label}</span>
        <AiOutlineCheck
          className={skills?.includes(value) ? "active-icon" : "icon"}
        />
      </label>
    </div>
  );
};
