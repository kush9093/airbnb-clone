import { AppBar, Box, Tab, Tabs, Toolbar, Typography } from "@mui/material";
import Link from "next/link";
import { SyntheticEvent, useState } from "react";

type Section = { title: string; url: string };

const sections: Section[] = [
  { title: "한적한 시골", url: "#" },
  { title: "국립공원", url: "#" },
  { title: "해변 바로 앞", url: "#" },
  { title: "셰어하우스", url: "#" },
  { title: "B&B", url: "#" },
  { title: "최고의 전망", url: "#" },
  { title: "료칸", url: "#" },
  { title: "기상천외한 숙소", url: "#" },
  { title: "캠핑카", url: "#" },
  { title: "멋진 수영장", url: "#" },
];

export default function CloneNav() {
  const [value, setValue] = useState(0);
  const tabChangeHandle = (event: SyntheticEvent, value: number) => {
    setValue(value);
  };
  return (
    <Toolbar component="nav" variant="dense" sx={{ justifyContent: "center" }}>
      <Tabs value={value} onChange={tabChangeHandle}>
        {sections.map((section) => (
          <Tab label={section.title} key={section.title} />
        ))}
      </Tabs>
    </Toolbar>
  );
}
