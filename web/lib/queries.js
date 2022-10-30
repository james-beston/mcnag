import { groq } from "next-sanity"

export const navQuery = groq`
*[_type == "siteSettings"]{
  nav[]{
    _type,
    pages[]->{
      title,
      "slug": slug.current
    }
  }
}
`

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
  mainImage,
  mainImageCredit,
  introduction,
  members[]->{
    bio,
    image,
    name,
    "slug":slug.current
  }
}
`

export const contactQuery = groq`
*[_type == 'contact']{
  title,
  "slug": slug.current,
  mainImage,
  mainImageCredit,
  introduction,
  facebook,
  instagram,
  twitter,
  email
}
`

export const pageQuery = groq`
*[_type == "page" && slug.current == $slug] {
  title,
  intro,
  mainImage,
  mainImageCredit,
  "slug": slug.current,
  hasSections,
  sections
}
`

export const pageSlugsQuery = groq`
*[_type == "page" && defined(slug.current)][].slug.current
`