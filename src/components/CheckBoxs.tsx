import { useState } from "react";
import { CheckInput } from "../utils/Utils";
type Props = {};

const CheckBoxs = (props: Props) => {
  const [skills, setSkills] = useState<string[]>([]);

  console.log({ skills });

  return (
    <div>
      <h4>Select Your Skills</h4>

      <div className="items">
        <CheckInput
          label="Javascript"
          value="js"
          skills={skills}
          setSkills={setSkills}
        />
        <CheckInput
          label="React Js"
          value="react"
          skills={skills}
          setSkills={setSkills}
        />
        <CheckInput
          label="Node Js"
          value="node"
          skills={skills}
          setSkills={setSkills}
        />
        <CheckInput
          label="Database"
          value="db"
          skills={skills}
          setSkills={setSkills}
        />
      </div>
    </div>
  );
};

export default CheckBoxs;
