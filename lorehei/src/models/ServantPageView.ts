export interface SideCardData {
  title: string
  titlePt: string
  titleEn: string
  content: string
  contentPt: string
  contentEn: string
  image: string | null
  textAlign: string
}

export interface MainCardData {
    title: string
    subtitle: string
    subtitlePt: string
    subtitleEn: string
    image: string
    sigil: string
    background: string
}

export interface ServantItem extends SideCardData {
  id: number
}

export type ServantDataMap = Record<number, SideCardData>
