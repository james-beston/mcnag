import { groq } from "next-sanity"

export const homeQuery = groq`
  *[_type == 'home'] {
    _id,
    title,
    mainImage,
    mainImageCredit,
    content
  }
`

export const aboutQuery = groq`
  *[_type == 'about']{
    title,
    "slug": slug.current,
    introduction,
    members
  }
`