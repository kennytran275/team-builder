import React from "react";

export default function Member(props) {
  const { member } = props;

  return (
    <div>
      Name: {`${member.name} `}
      Email: {`${member.email} `}
      Role: {`${member.role} `}
    </div>
  );
}
