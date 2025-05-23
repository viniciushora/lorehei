export interface SideCardData {
  title: string
  content: string
  image: string | null
  textAlign: string
}

export interface MainCardData {
    title: string
    subtitle: string
    image: string
    sigil: string
    background: string
}

export interface ServantItem extends SideCardData {
  id: number
}

export type ServantDataMap = Record<number, SideCardData>
