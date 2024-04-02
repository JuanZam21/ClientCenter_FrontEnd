import * as React from "react";
import {experimentalStyled as styled} from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

const Item = styled(Paper)(({theme}) => ({
  backgroundColor:
    theme.palette.mode === "dark"
      ? "rgba(241, 13, 13, 0.42)"
      : "rgba(241, 13, 13, 0.42)",
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "center",
  color: theme.palette.text.secondary,
  height: "100%",
  cursor: "pointer",
}));

const titles = [
  {
    title: "Quejas y reclamaciones",
    href: "/quejas",
  },
  {
    title: "Solicitudes",
    href: "/solicitudes",
  },
  {
    title: "Consultas",
    href: "/consultas",
  },
  {
    title: "Sugerencias",
    href: "/sugerencias",
  },
  {
    title: "Reclamos",
    href: "/reclamos",
  },
];

export default function GridCards() {
  const hanfleNavigae = (href) => {
    window.open(href, "_self");
  };
  return (
    <Box sx={{flexGrow: 1}}>
      <Grid container spacing={{xs: 2, md: 3}} columns={{xs: 4, sm: 8, md: 12}}>
        {titles?.map((item, index) => (
          <Grid item xs={2} sm={4} md={4} key={index}>
            <article>
              <Item
                onClick={() => {
                  hanfleNavigae(item.href);
                }}
              >
                {item.title}
              </Item>
            </article>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
